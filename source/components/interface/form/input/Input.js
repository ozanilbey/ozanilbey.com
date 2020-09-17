// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Utilities
import { getAttributes } from '~/utilities/component'

// Constants
import { INPUT_TYPE_OPTIONS } from '~/constants/options'

// Style
import './Input.less'

// Sub-components
import Text from './types/Text'
import Number from './types/Number'
import Email from './types/Email'
import Password from './types/Password'
import Checkbox from './types/Checkbox'
import Submit from './types/Submit'

// Component: Interface > Form > Input
function Input (props) {
  // Data
  const attributes = {
    'data-interface': 'form-input',
    'data-form-input': props.type,
    ...getAttributes(props, ['name', 'value', 'placeholder', 'onChange', 'className', 'style', 'data', 'aria'])
  }

  // Render
  switch (props.type) {
    case 'text':
      attributes['data-multiline'] = !!props.isMultiLine
      attributes['data-line-count'] = props.lineCount
      return <Text {...attributes} />
    case 'number':
      return <Number {...attributes} />
    case 'email':
      return <Email {...attributes} />
    case 'password':
      return <Password {...attributes} />
    case 'checkbox':
      return <Checkbox {...attributes} />
    case 'submit':
      return <Submit {...attributes} />
  }
}

// Properties
Input.propTypes = {
  type: PropTypes.oneOf(INPUT_TYPE_OPTIONS)
}

// Export
export default Input
