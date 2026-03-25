// Modules
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Applications
import Application from '@source/Application'

// Constants
import { ENVIRONMENT } from '@source/constants/environment'

// Data (Local)
const root = document.getElementById('application')
const tree = (
  <BrowserRouter>
    <Application />
  </BrowserRouter>
)

// Operations
if (ENVIRONMENT === 'development') createRoot(root).render(tree)
else hydrateRoot(root, tree)
