// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Component: Interface > Icon > Contrast (Shape)
const Contrast = props => (
  <svg
    {...props}
    viewBox="0 0 22 22">
    <path
      fill={props['data-color']}
      d="M11,0 C17.0751322,0 22,4.92486775 22,11 C22,16.9787016 17.2302364,21.8433652 11.2884075,21.9962926 L11,22 C4.92486775,22 0,17.0751322 0,11 C0,5.02129842 4.76976358,0.15663482 10.7115925,0.00370740462 L11,0 Z M10.999,3 C6.581722,3 3,6.581722 3,11 C3,15.4179445 6.58118138,18.9994594 10.999,19 L10.999,3 Z" />
  </svg>
)

// Properties
Contrast.propTypes = {
  'data-color': PropTypes.string
}

// Export
export default Contrast
