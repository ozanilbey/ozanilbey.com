// Modules
import PropTypes from 'prop-types'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Constants
import { BOX_ALIGNMENT_VERTICAL_OPTIONS } from '@source/constants/layout'

// Styles
import './Content.scss'

// Component: Layout > Content
function Content ({ alignment = 'stretch', children, className, isWide = false, name, style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <div
      {...attributes}
      data-layout="content"
      data-container={name}
      className={getClassName(className, { alignment, wide: isWide })}
      style={style}>
      {children}
    </div>
  )
}

// Properties
Content.propTypes = {
  alignment: PropTypes.oneOf(
    BOX_ALIGNMENT_VERTICAL_OPTIONS
  ),
  children: PropTypes.node,
  className: PropTypes.string,
  isWide: PropTypes.bool,
  name: PropTypes.string,
  style: PropTypes.object
}

// Export
export default Content
