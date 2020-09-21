// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Component: Interface > Icon > Contrast (Shape)
const Contrast = props => (
  <svg
    {...props}
    viewBox="0 0 20 20">
    <path
      fill={props['data-color']}
      d="M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.4351833 15.6638513,19.8576047 10.2621886,19.9966296 L10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.56481675 4.33614871,0.142395291 9.73781136,0.00337036784 L10,0 Z M10,2.5 L9.80335852,2.50252778 C5.75211153,2.60679647 2.5,5.92361256 2.5,10 C2.5,14.0609172 5.72747441,17.3680175 9.75726894,17.4961464 L10,17.5 L10,2.5 Z" />
  </svg>
)

// Properties
Contrast.propTypes = {
  'data-color': PropTypes.string
}

// Export
export default Contrast
