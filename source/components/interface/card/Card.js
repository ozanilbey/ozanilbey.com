// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Icon from '~/components/interface/icon/Icon'

// Utilities
import { getClassName } from '~/utilities/component'

// Style
import './Card.less'

// Component: Interface > Card
function Card (props) {
  const className = getClassName(props.className, {
    layout: props.isCarousel ? 'vertical' : props.layout
  })
  return (
    <div
      data-interface="card"
      className={className}
      style={{
        ...(props.style || {}),
        ...props.color ? { backgroundColor: props.color } : {}
      }}>
      {
        props.isCustom
          ? props.children
          : <>
            {props.visual &&
              <div className="visual">
                {typeof props.visual === 'string' &&
                  <img
                    src={props.visual}
                    className="image" />
                }
                {props.isCarousel && typeof props.visual === 'object' &&
                  <ul className="carousel">
                    {props.visual.map((item, index) =>
                      <li key={index}>
                        <img src={item} />
                      </li>
                    )}
                  </ul>
                }
              </div>
            }
            <div className="content">
              {props.icon &&
                <div
                  className="icon"
                  style={
                    props.iconBackgroundColor
                      ? { backgroundColor: props.iconBackgroundColor }
                      : {}
                  }>
                  {
                    props.isIconCustomized
                      ? props.icon
                      : <Icon
                        name={props.icon}
                        color={props.iconColor}
                        className="icon" />
                  }
                </div>
              }
              {(props.title || props.description) &&
                <div className="text">
                  {props.title && <strong className="title">{props.title}</strong>}
                  {props.description && <p className="description">{props.description}</p>}
                </div>
              }
            </div>
          </>
      }
    </div>
  )
}

// Properties
Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  iconBackgroundColor: PropTypes.string,
  iconColor: PropTypes.string,
  iconURL: PropTypes.string,
  isCarousel: PropTypes.bool,
  isCustom: PropTypes.bool,
  isIconCustomized: PropTypes.bool,
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  style: PropTypes.object,
  title: PropTypes.string,
  visual: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
}

// Export
export default Card
