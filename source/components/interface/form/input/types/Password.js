// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Component: Interface > Form > Input > Password (Type)
const Password = props => (
  <input
    {...props}
    type="email" />
)

// Properties
Password.propTypes = {
  name: PropTypes.string.isRequired
}

// Export
export default Password
