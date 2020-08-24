// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Utilities
import { getClassName } from '~/utilities/component'

// Style
import './Card.less'

// Component: Card
function Card (props) {
  const className = getClassName(props.className)
  return (
    <div
      data-interface="card"
      className={className}>
      {props.children}
    </div>
  )
}

// Properties
Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string
}

// Export
export default Card
