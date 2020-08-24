// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Utilities
import { getClassName } from '~/utilities/component'

// Style
import './Container.less'

// Component: Layout > Container
function Container (props) {
  // Data
  const className = getClassName(props.className, {
    width: props.isMaximumWidth ? 'maximum' : null
  })

  // Render
  return (
    <div
      data-layout="container"
      data-container={props.name}
      className={className}>
      {props.children}
    </div>
  )
}

// Properties
Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isMaximumWidth: PropTypes.bool,
  name: PropTypes.string
}
Container.defaultProps = {
  isMaximumWidth: false
}

// Export
export default Container
