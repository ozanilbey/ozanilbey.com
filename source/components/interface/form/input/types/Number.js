// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Component: Interface > Form > Input > Number (Type)
const Number = props => (
  <input
    {...props}
    type="number" />
)

// Properties
Number.propTypes = {
  name: PropTypes.string.isRequired
}

// Export
export default Number
