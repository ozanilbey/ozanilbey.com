// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Component: Content > BrandMark > Base64 (Shape)
const Base64 = props => (
  <svg
    {...props}
    viewBox="0 0 15 15">
    <path
      fill={props['data-color']}
      d="M7.5,15 C3.35786438,15 0,11.6421356 0,7.5 C0,3.35786438 3.35786438,0 7.5,0 C11.6421356,0 15,3.35786438 15,7.5 C15,11.6421356 11.6421356,15 7.5,15 Z M7.5,12 C9.98528137,12 12,9.98528137 12,7.5 C12,5.01471863 9.98528137,3 7.5,3 C5.01471863,3 3,5.01471863 3,7.5 C3,9.98528137 5.01471863,12 7.5,12 Z M7.5,10 C6.11928813,10 5,8.88071187 5,7.5 C5,6.11928813 6.11928813,5 7.5,5 C8.88071187,5 10,6.11928813 10,7.5 C10,8.88071187 8.88071187,10 7.5,10 Z" />
  </svg>
)

// Properties
Base64.propTypes = {
  'data-color': PropTypes.string
}

Base64.defaultProps = {
  'data-color': 'rgb(15, 151, 255)'
}

// Export
export default Base64
