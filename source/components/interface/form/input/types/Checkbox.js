// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Component: Interface > Form > Input > Checkbox (Type)
const Checkbox = props => (
  <div data-input="checkbox">
    <input
      type="checkbox"
      defaultChecked={props.isCheckedByDefault} />
    {props.label && <label htmlFor={props.name}>{props.label}</label>}
  </div>
)

// Properties
Checkbox.propTypes = {
  isCheckedByDefault: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired
}

Checkbox.defaultProps = {
  isCheckedByDefault: false
}

// Export
export default Checkbox
