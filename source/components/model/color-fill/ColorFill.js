// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Style
import './ColorFill.less'

// Component: Model > ColorFill
function ColorFill (props) {
  // Data
  const shift = {
    x: props.width ? props.width + 1 : 0,
    y: props.height ? props.height + 1 : 0
  }

  // Render
  return props.color
    ? <span data-model="color-fill">
      <span style={{
        top: -1 * shift.y,
        left: -1 * shift.x,
        filter: `drop-shadow(${shift.x}px ${shift.y}px ${props.color})`
      }}>
        {props.children}
      </span>
    </span>
    : props.children
}

// Properties
ColorFill.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number
}

// Export
export default ColorFill
