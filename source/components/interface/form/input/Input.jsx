// Modules
import PropTypes from 'prop-types'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Constants
import { INPUT_TYPES } from '@source/constants/options'

// Styles
import './Input.scss'

// Constants (Local)
const DEFAULT_TEXTAREA_LINE_COUNT = 4

// Functions (Local)
function getElement ({ isMultiLine } = {}) {
  if (isMultiLine) return 'textarea'
  return 'input'
}
function getProperties (type, data = {}) {
  if (type === 'submit') return { role: 'button', value: data.value }
  const { isDisabled, isMultiLine, lineCount, name, onChange, placeholder, value } = data
  const properties = { name, onChange, placeholder, value }
  if (isDisabled) return properties.disabled = true
  if (type === 'text' && isMultiLine) properties.rows = lineCount || DEFAULT_TEXTAREA_LINE_COUNT
  return properties
}

// Component: Interface > Form > Input
function Input ({ className, style, type, ...rest }) {
  // Data
  const Element = getElement(rest)
  const attributes = getAttributes(rest, ['aria', 'data'])
  const properties = getProperties(type, rest)

  // Render
  if (!Element) return null
  return (
    <Element
      {...attributes}
      {...properties}
      type={type}
      data-input={type}
      data-component="input"
      className={getClassName(className, { type })}
      style={style} />
  )
}

// Properties
Input.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(
    INPUT_TYPES
  ).isRequired
}

// Export
export default Input
