// Modules
import PropTypes from 'prop-types'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Constants
import { BOX_ALIGNMENT_VERTICAL_OPTIONS, SPACING_OPTIONS } from '@source/constants/layout'

// Styles
import './Footer.scss'

// Component: Layout > Page > Footer
function Footer ({ alignment = 'stretch', children, className, name, reference, spacing = 'small', style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <footer
      {...attributes}
      ref={reference}
      data-footer={name}
      data-component="footer"
      className={getClassName(className, { alignment, footer: true, spacing })}
      style={style}>
      {children}
    </footer>
  )
}

// Properties
Footer.propTypes = {
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
export default Footer
