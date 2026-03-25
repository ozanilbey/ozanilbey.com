// Modules
import { Route, Routes } from 'react-router-dom'

// Views
import Landing from '../views/landing/Landing'

// Route: Error > Main
function Main () {
  // Render
  return (
    <Routes>
      <Route
        path="*"
        element={<Landing />} />
    </Routes>
  )
}

// Export
export default Main
