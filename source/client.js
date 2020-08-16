// Modules
import React from 'react'
import { render, hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// Application
import App from '~/App.js'

// Methods
const renderApplication = module.hot ? render : hydrate

// Render
renderApplication(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
)
