// Modules
import { Route, Routes } from 'react-router-dom'
import PropTypes from 'prop-types'

// Views
import Landing from '../views/landing/Landing'
import Work from '../views/work/Work'

// Route: Works > Main
function Main ({ category, categories, current, items, next }) {
  // Render
  return (
    <Routes>
      <Route
        path="*"
        element={
          current
            ? <Work
              next={next}
              data={current}
              category={category} />
            : <Landing
              works={items}
              category={category}
              categories={categories} />
        } />
    </Routes>
  )
}

// Properties
Main.propTypes = {
  category: PropTypes.object,
  categories: PropTypes.array.isRequired,
  current: PropTypes.object,
  items: PropTypes.array.isRequired,
  next: PropTypes.object
}

// Export
export default Main
