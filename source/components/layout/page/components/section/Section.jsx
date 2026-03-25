// Modules
import PropTypes from 'prop-types'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Constants
import { BOX_ALIGNMENT_VERTICAL_OPTIONS, SPACING_OPTIONS } from '@source/constants/layout'

// Styles
import './Section.scss'

// Component: Layout > Page > Section
function Section ({ alignment = 'stretch', children, className, name, reference, spacing = 'medium', style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <section
      {...attributes}
      ref={reference}
      data-section={name}
      data-component="section"
      className={getClassName(className, { alignment, section: true, spacing })}
      style={style}>
      {children}
    </section>
  )
}

// Properties
Section.propTypes = {
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
export default Section
