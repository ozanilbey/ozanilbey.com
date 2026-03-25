// Modules
import { Route, Routes } from 'react-router-dom'

// Pages
import Contact from '@source/pages/contact/Contact'
import Error from '@source/pages/error/Error'
import Home from '@source/pages/home/Home'
import Profile from '@source/pages/profile/Profile'
import Works from '@source/pages/works/Works'

// Route: Main
function Main () {
  // Render
  return (
    <Routes>
      {/* Home */}
      <Route
        exact
        path="/"
        element={<Home />} />
      {/* Profile */}
      <Route
        path="profile"
        element={<Profile />} />
      {/* Works */}
      <Route
        path="works"
        element={<Works />} />
      <Route
        path="works/:workOrCategory"
        element={<Works />} />
      {/* Contact */}
      <Route
        path="contact"
        element={<Contact />} />
      {/* Error */}
      <Route
        path="*"
        element={<Error />} />
    </Routes>
  )
}

// Export
export default Main
