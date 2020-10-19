// Modules
import { readFileSync } from 'fs'
import http from 'http'
import express from 'express'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Helmet from 'react-helmet'

// React application
import App from '~/App.js'

// Express application
const app = express()

// Server
const server = new http.Server(app)

// HTML template
const template = readFileSync('public/index.html', 'utf8')

// Add environment variables
dotenv.config()

// Configure email system
const mailer = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD
  }
})

// Serve JavaScript files
app.get('*.js', (request, response, next) => {
  // Serve gzipped file instead of the original file
  request.url = request.url + '.gz'
  response.set('Content-Type', 'text/javascript')
  response.set('Content-Encoding', 'gzip')
  next()
})

// Serve CSS files
app.get('*.css', (request, response, next) => {
  // Serve gzipped file instead of the original file
  request.url = request.url + '.gz'
  response.set('Content-Type', 'text/css')
  response.set('Content-Encoding', 'gzip')
  next()
})

// Serve static files
app.get('*.*', express.static('public'))

// Handle emails
app.use('/email', express.json())
app.post('/email', (request, response) => {
  // Get necessary data
  const { name, address, message } = request.body
  // Set a generic response function
  const respond = (message, isError) => {
    response
      .status(isError ? 500 : 200)
      .send(message)
  }
  // Check if the necessary information is valid
  if (
    name &&
    address &&
    message &&
    [name, address, message].filter(item => typeof item !== 'string').length === 0
  ) {
    // Try sending email
    try {
      // Set options
      const options = {
        from: process.env.EMAIL_SENDER,
        to: process.env.EMAIL_RECEIVER,
        replyTo: request.body.address,
        subject: `Email from ${request.body.name}`,
        text: request.body.message,
        priority: 'high'
      }
      // Send email
      mailer.sendMail(options, (error, info) => {
        // Respond with related error
        if (error) respond('Something went wrong.', true)
        // Respond with a message
        else respond('Email has been sent.')
      })
    } catch (error) {
      // Respond with a generic error
      respond('Something went wrong.', true)
    }
  } else {
    // Respond with missing information error
    respond('Name, email address or message is missing.', true)
    return false
  }
})

// Handle all other requests
app.use((request, response) => {
  // Create empty context
  const context = {}
  // Get the React application as HTML string
  const html = renderToString(
    // Use the app within Static Router
    <StaticRouter location={request.url} context={context}>
      <App/>
    </StaticRouter>
  )
  // Check if context.url exists
  if (context.url) {
    // Respond with HTTP 301
    response.writeHead(301, { Location: context.url })
    response.end()
  } else {
    const helmet = Helmet.renderStatic()
    // Serve generated HTML within the template
    response.write(
      // Replace template HTML with generated data
      template
        .replace(/<title>.*<\/title>/, helmet.title.toString())
        .replace('</head>', helmet.link.toString() + helmet.meta.toString() + '</head>')
        .replace(/ANALYTICS_ID/g, process.env.ANALYTICS_ID)
        .replace(/<div id="root"><\/div>/, `<div id="root">${html}</div>`)
    )
    response.end()
  }
})

// Designate a port (8000 if not assigned)
const port = process.env.PORT || 8000

// Start listening to the port
server.listen(port, '0.0.0.0', () => {
  // Log that the application is up and running
  console.log(`\nAvailable at :${port}\n`)
})
