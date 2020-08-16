// Modules
import { readFileSync } from 'fs'
import http from 'http'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

// React application
import App from '~/App.js'

// Express application
const app = express()

// Server
const server = new http.Server(app)

// Designated port (8000 if not assigned)
const port = process.env.PORT || 8000

// HTML template
const template = readFileSync('public/index.html', 'utf8')

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
app.use('/public', express.static('public'))

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
    // Serve generated HTML within the template
    response.write(
      // Replace root element with the generated HTML string
      template.replace(
        /<div id="root"><\/div>/,
        `<div id="root">${html}</div>`
      )
    )
    response.end()
  }
})

// Start listening to the port
server.listen(port, '0.0.0.0', () => {
  // Log that the application is up and running
  console.log(`\nAvailable at :${port}\n`)
})
