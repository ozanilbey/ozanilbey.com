// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Component: Interface > Form > Input > Text (Type)
function Text (props) {
  // Render
  return props['data-multiline']
    ? <textarea
      {...props}
      type="text"
      rows={props['data-line-count']} />
    : <input
      {...props}
      type="text" />
}

// Properties
Text.propTypes = {
  'data-line-count': PropTypes.number,
  'data-multiline': PropTypes.bool,
  name: PropTypes.string.isRequired
}

// Export
export default Text
