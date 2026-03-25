// Modules
import PropTypes from 'prop-types'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Constants
import { SPACING_OPTIONS } from '@source/constants/layout'

// Styles
import './Separator.scss'

// Component: Layout > Separator
function Separator ({ className, hasLine = true, spacing = 'none', style, reference, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <hr
      {...attributes}
      ref={reference}
      data-layout="separator"
      className={getClassName(className, { lined: hasLine, spacing })}
      style={style} />
  )
}

// Properties
Separator.propTypes = {
  className: PropTypes.string,
  hasLine: PropTypes.bool,
  spacing: PropTypes.oneOf(
    SPACING_OPTIONS
  ),
  style: PropTypes.object
}

// Export
export default Separator
