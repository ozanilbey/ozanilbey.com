// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Component: Interface > Form > Input > Email (Type)
const Email = props => (
  <input
    {...props}
    type="email" />
)

// Properties
Email.propTypes = {
  name: PropTypes.string.isRequired
}

// Export
export default Email
