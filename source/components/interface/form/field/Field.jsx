// Modules
import PropTypes from 'prop-types'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './Field.scss'

// Component: Interface > Form > Field
function Field ({ children, className, label, style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <fieldset
      {...attributes}
      className={className}
      data-component="field"
      style={style}>
      {label && <span className="label">{label}</span>}
      {children}
    </fieldset>
  )
}

// Properties
Field.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object
}

// Export
export default Field
