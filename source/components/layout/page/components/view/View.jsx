// Modules
import PropTypes from 'prop-types'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Styles
import './View.scss'

// Component: Layout > Page > View
function View ({ children, className, isCentered = false, name, reference, style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <div
      {...attributes}
      ref={reference}
      data-view={name}
      data-component="view"
      className={getClassName(className, { centered: isCentered, view: true })}
      style={style}>
      {children}
    </div>
  )
}

// Properties
View.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  reference: PropTypes.object,
  style: PropTypes.object
}

// Export
export default View
