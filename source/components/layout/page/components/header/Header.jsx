// Modules
import PropTypes from 'prop-types'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Constants
import { BOX_ALIGNMENT_VERTICAL_OPTIONS, SPACING_OPTIONS } from '@source/constants/layout'

// Styles
import './Header.scss'

// Component: Layout > Page > Header
function Header ({ alignment = 'stretch', children, className, name, reference, spacing = 'large', style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <header
      {...attributes}
      ref={reference}
      data-header={name}
      data-component="header"
      className={getClassName(className, { alignment, header: true, spacing })}
      style={style}>
      {children}
    </header>
  )
}

// Properties
Header.propTypes = {
  alignment: PropTypes.oneOf(
    BOX_ALIGNMENT_VERTICAL_OPTIONS
  ),
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  reference: PropTypes.object,
  spacing: PropTypes.oneOf(
    SPACING_OPTIONS
  ),
  style: PropTypes.object
}

// Export
export default Header
