// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Icon from '~/components/interface/icon/Icon'

// Utilities
import { getClassName } from '~/utilities/component'

// Style
import './Card.less'

// Component: Card
function Card (props) {
  const className = getClassName(props.className, { layout: props.layout })
  return (
    <div
      data-interface="card"
      className={className}
      style={props.style}>
      {props.icon &&
        <Icon
          name={props.icon}
          className="visual" />
      }
      {props.image &&
        <img
          src={props.image}
          className="visual" />
      }
      {(props.title || props.description) &&
        <div className="text">
          {props.title && <strong className="title">{props.title}</strong>}
          {props.description && <p className="description">{props.description}</p>}
        </div>
      }
      {props.children}
    </div>
  )
}

// Properties
Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  image: PropTypes.string,
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  style: PropTypes.object,
  title: PropTypes.string
}

// Export
export default Card
