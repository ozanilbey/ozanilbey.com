// Modules
import { useRef } from 'react'
import PropTypes from 'prop-types'

// Components
import Icon from '@source/components/interface/icon/Icon'

// Hooks
import useFade from '@source/hooks/useFade'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Styles
import './Card.scss'

// Component: Interface > Card
function Card ({ className, description, icon, layout = 'horizontal', style, title, willFade, ...rest }) {
  // References
  const card = useRef()

  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])
  const { styles: fadingStyles = {} } = useFade(card.current)

  // Render
  return (
    <div
      ref={card}
      {...attributes}
      data-interface="card"
      className={getClassName(className, { blurred: true, colored: true, layout })}
      style={{
        ...style,
        ...(willFade ? fadingStyles : {})
      }}>
      {icon &&
        <Icon
          name={icon}
          className="icon" />
      }
      {(title || description) &&
        <div className="text">
          {title && <strong className="title">{title}</strong>}
          {description && <p className="description">{description}</p>}
        </div>
      }
    </div>
  )
}

// Properties
Card.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  layout: PropTypes.oneOf(
    ['horizontal', 'vertical']
  ),
  style: PropTypes.object,
  title: PropTypes.string,
  willFade: PropTypes.bool
}

// Export
export default Card
