// Modules
import PropTypes from 'prop-types'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Data
import shapes from './data/shapes'

// Styles
import './Icon.scss'

// Component: Interface > Icon
function Icon ({ className, color, name, style, ...rest }) {
  // Data
  const shape = shapes[name]
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  if (!shape) return null
  return (
    <svg
      {...attributes}
      data-icon={name}
      className={className}
      data-interface="icon"
      viewBox={`0 0 ${shape.dimensions.join(' ')}`}
      style={style}>
      <path
        fill={color}
        d={shape.path} />
    </svg>
  )
}

// Properties
Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired
}

// Export
export default Icon
