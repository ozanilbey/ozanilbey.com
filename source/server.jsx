// Modules
import fs from 'fs'
import path from 'path'
import http from 'http'
import https from 'https'
import express from 'express'
import { renderToPipeableStream, renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import compression from 'compression'
import nodemailer from 'nodemailer'

// Sitemap
import Sitemap from './components/utility/sitemap/Sitemap'

// Document
import Document from './Document'

// Application
import Application from './Application'

// Constants (Local)
const DEFAULT_PORT = 3000
const PORT = process.env.PORT || DEFAULT_PORT
const REQUIRED_EMAIL_ENVIRONMENT_VARIABLES = ['EMAIL_ADDRESS', 'EMAIL_PASSWORD', 'EMAIL_SENDER', 'EMAIL_RECEIVER']
const DEFAULT_CLIENT_ENTRY_PATH = 'source/client.jsx'
const CLIENT_BUILD_DIRECTORY = 'build/client'
const CLIENT_MANIFEST_PATH = path.resolve(CLIENT_BUILD_DIRECTORY, '.vite/manifest.json')
const CLIENT_RESOURCES = getClientResources()

// Functions (Local)
function getClientResources () {
  let scripts = []
  let stylesheets = []
  try {
    const manifest = JSON.parse(fs.readFileSync(CLIENT_MANIFEST_PATH, 'utf-8'))
    const scriptFile = manifest?.[DEFAULT_CLIENT_ENTRY_PATH]?.file
    const stylesheetFiles = manifest?.[DEFAULT_CLIENT_ENTRY_PATH]?.css
    scripts = scriptFile ? [`/${scriptFile}`] : []
    stylesheets = stylesheetFiles?.map(item => `/${item}`) ?? []
  } catch (error) {
    console.error('Failed to read client manifest:', error)
  }
  return { scripts, stylesheets }
}

// Application: Express
const application = express()

// Server
const server = new http.Server(application)

// Configuration: Email
const mailer = nodemailer.createTransport({
  auth: {
    pass: process.env.EMAIL_PASSWORD,
    user: process.env.EMAIL_ADDRESS
  },
  service: 'gmail'
})

// Request: Sitemap (GET)
application.get('/sitemap.xml', (request, response) => {
  const declaration = '<?xml version="1.0" encoding="UTF-8"?>'
  response.write(declaration + '\n' + renderToString(<Sitemap />))
  response.end()
})

// Request: Health (GET)
application.get('/health', (request, response) => {
  response.status(200).json({ status: 'ok' })
})

// Middleware: Compression
application.use(compression())

// Middleware: Static files
application.use(express.static(CLIENT_BUILD_DIRECTORY, { index: false }))

// Middleware: Email
application.use('/email', (request, response, next) => {
  const origin = request.headers.origin
  if (origin) response.setHeader('Access-Control-Allow-Origin', origin)
  response.setHeader('Access-Control-Allow-Functions', 'POST, OPTIONS')
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  response.setHeader('Vary', 'Origin')
  if (request.method === 'OPTIONS') return response.status(204).end()
  next()
})
application.use('/email', express.json())

// Request: Email (POST)
application.post('/email', (request, response) => {
  const missingEmailEnvironmentVariables = REQUIRED_EMAIL_ENVIRONMENT_VARIABLES.filter(variable => !process.env[variable])
  // Get necessary data
  const { name, address, message } = request.body
  // Set a generic response function
  function respond (message, isError, statusCode) {
    response
      .status(statusCode || (isError ? 500 : 200))
      .send(message)
  }
  // Check if email server fully configured
  if (missingEmailEnvironmentVariables.length > 0) {
    console.error('Email service is not configured. Missing environment variables:', missingEmailEnvironmentVariables)
    respond('Something went wrong.', true)
    return
  }
  // Check if the necessary information is valid
  if ([name, address, message].every(field => field && typeof field === 'string')) {
    // Try sending the email
    try {
      // Set options
      const options = {
        from: process.env.EMAIL_SENDER,
        priority: 'high',
        replyTo: request.body.address,
        subject: `Email from ${request.body.name}`,
        text: request.body.message,
        to: process.env.EMAIL_RECEIVER
      }
      // Send the email
      mailer.sendMail(options, error => {
        // Respond with related error
        if (error) {
          console.error('Failed to send email:', error)
          respond('Something went wrong.', true)
        }
        // Respond with a message
        else respond('Email has been sent.')
      })
    } catch (error) {
      // Respond with a generic error
      console.error('Unexpected email handler error:', error)
      respond('Something went wrong.', true)
    }
  } else {
    // Respond with missing information error
    respond('Name, email address, or message is missing.', true, 400)
    return false
  }
})

// Middleware: Other requests
application.use(async (request, response) => {
  try {
    // Get requested URL
    const url = request.originalUrl || '/'
    // Get client resources
    const { scripts, stylesheets } = CLIENT_RESOURCES
    // Render the application to a pipeable stream
    const { pipe } = renderToPipeableStream(
      <Document stylesheets={stylesheets}>
        <StaticRouter location={url}>
          <Application />
        </StaticRouter>
      </Document>,
      {
        bootstrapModules: scripts,
        onShellError: () => {
          // Set the server error status code
          response.statusCode = 500
          // Respond with error
          response.send('Internal server error:')
        },
        onShellReady: () => {
          // Set the content type header
          response.setHeader('content-type', 'text/html')
          // Write the declaration
          response.write('<!DOCTYPE html>')
          // Pipe the response
          pipe(response)
        }
      }
    )
  } catch (error) {
    // Respond with error
    response
      .status(500)
      .end(error.stack)
  }
})

// Start listening to the port
server.listen(PORT, '0.0.0.0', () => {
  // Log that the application is up and running
  console.info(`\nAvailable at :${PORT}\n`)
  // Self-ping health endpoint every 10 minutes
  setInterval(() => {
    https.get(
      `${process.env.RENDER_EXTERNAL_URL}/health`,
      response => response.resume()
    ).on('error', error => console.error('Failed to ping health endpoint:', error))
  }, 10 * 60 * 1000)
})
