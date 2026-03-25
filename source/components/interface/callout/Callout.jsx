// Modules
import PropTypes from 'prop-types'

// Components
import Icon from '@source/components/interface/icon/Icon'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Constants
import { LIMITED_SIZE_OPTIONS } from '@source/constants/layout'
import { INTENTS } from '@source/constants/options'
import { DEFAULT_INTENT } from '@source/constants/settings'

// Styles
import './Callout.scss'

// Helpers
import { getClassName } from '@source/helpers/component'

// Component: Interface > Callout
function Callout ({ children, className, description, hasBackground = true, icon, intent = DEFAULT_INTENT, isWide = false, size = 'medium', style, title, ...rest }) {
  // Data
  const body = description || children
  const attributes = getAttributes(rest, ['aria', 'data'])
  const iconName = icon || (INTENTS.includes(intent) ? intent : null)

  // Render
  if (!title && !body) return null
  return (
    <div
      {...attributes}
      data-interface="callout"
      className={getClassName(className, { ghost: !hasBackground, intent, size, wide: isWide })}
      style={style}>
      {iconName &&
        <Icon
          name={iconName}
          className="icon" />
      }
      <div className="content">
        {title && <strong className="title">{title}</strong>}
        {body && <p className="body">{body}</p>}
      </div>
    </div>
  )
}

// Properties
Callout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  description: PropTypes.string,
  hasBackground: PropTypes.bool,
  icon: PropTypes.string,
  intent: PropTypes.oneOf(
    INTENTS
  ),
  isWide: PropTypes.bool,
  size: PropTypes.oneOf(
    LIMITED_SIZE_OPTIONS
  ),
  style: PropTypes.object,
  title: PropTypes.string
}

// Export
export default Callout
