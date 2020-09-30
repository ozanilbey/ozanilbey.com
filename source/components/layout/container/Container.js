// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Helpers
import { getClassName } from '~/helpers/component'

// Style
import './Container.less'

// Component: Layout > Container
function Container (props) {
  // Data
  const className = getClassName(props.className, {
    width: props.isMaximumWidth ? 'maximum' : null,
    block: props.isBlockLayout
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
  isBlockLayout: PropTypes.bool,
  isMaximumWidth: PropTypes.bool,
  name: PropTypes.string
}
Container.defaultProps = {
  isBlockLayout: false,
  isMaximumWidth: false
}

// Export
export default Container
