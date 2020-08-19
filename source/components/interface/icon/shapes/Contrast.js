// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Shape: Contrast
const Contrast = props => (
  <svg
    viewBox="0 0 20 20"
    className={`${props.name} icon`}>
    <path
      fill={props.color || ''}
      d="M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,3 C6.13400675,3 3,6.13400675 3,10 C3,13.8659932 6.13400675,17 10,17 L10,3 Z" />
  </svg>
)

Contrast.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string
}

// Export
export default Contrast
