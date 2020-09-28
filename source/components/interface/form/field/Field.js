// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Style
import './Field.less'

// Component: Interface > Form > Field
const Field = props => (
  <fieldset data-interface="form-field">
    {props.label && <span className="label">{props.label}</span>}
    {props.children}
  </fieldset>
)

// Properties
Field.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string
}

// Export
export default Field
