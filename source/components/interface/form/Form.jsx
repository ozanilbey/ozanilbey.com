// Modules
import { Children, cloneElement, useState } from 'react'
import PropTypes from 'prop-types'

// Components
import Field from './field/Field'
import Input from './input/Input'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Constants
import { INPUT_TYPES } from '@source/constants/options'

// Styles
import './Form.scss'

// Component: Interface > Form
function Form ({ children, className, isDisabled, isInline, onError, onSubmit, onSubmitError, onSubmitSuccess, onUpdate, reference, style, title, willDisplayErrorsIndividually = false, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // State
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Functions
  function setValue (name, value, callback) {
    setValues(values => ({
      ...values,
      [name]: value
    }))
    callback?.(values)
  }
  function handleValueChange ({ target }) {
    const { name, value}  = target
    setValue(name, value, onUpdate)
  }
  function handleSubmit (event) {
    event.preventDefault()
    setErrors([])
    const trimmedValues = {}
    Object.keys(values).forEach(item => {
      trimmedValues[item] = typeof values[item] === 'string'
        ? values[item].trim()
        : values[item]
    })
    setValues(trimmedValues)
    setIsLoading(true)
    if (evaluateForm()) {
      if (onSubmit) {
        onSubmit(values, (error, response) => {
          setIsLoading(false)
          if (error) {
            const message = response || 'Something went wrong.'
            setErrors([message])
            onError?.([message])
            onSubmitError?.(message)
          } else {
            const message = response || 'Your message has been sent.'
            onSubmitSuccess?.(message)
          }
        })
      } else setIsLoading(false)
    } else setIsLoading(false)
  }
  function evaluateForm () {
    let isFormValidated = true
    const formValidationErrors = []
    function iterateValidator (child) {
      if (child.type && child.type.displayName === 'Form.Input' && child.props?.type && child.props.type !== 'submit') {
        const { label, name, validator } = child.props
        const [isInputValidated, inputValidationErrors] = evaluateInput(label, values[name], validator)
        if (!isInputValidated) {
          isFormValidated = false
          inputValidationErrors.forEach(error => {
            if (!formValidationErrors.includes(error)) formValidationErrors.push(error)
          })
        }
      } else if (child.props.children) iterateValidator(child.props.children)
    }
    Children.map(children, iterateValidator)
    setErrors(formValidationErrors)
    if (formValidationErrors.length > 0) onError?.(formValidationErrors)
    return isFormValidated
  }
  function evaluateInput (label, value, validator) {
    let isInputValidated = true
    const inputValidationErrors = []
    if (validator) {
      Object
        .keys(validator)
        .forEach(item => {
          const [isValidated, error] = check[item](label, value, validator[item])
          if (!isValidated) {
            isInputValidated = false
            if (!inputValidationErrors.includes(error)) inputValidationErrors.push(error)
          }
        })
    }
    return [isInputValidated, inputValidationErrors]
  }
  const check = {
    fieldMatch: (label, value, field) => {
      field = values[field]
      const condition = field && value === field
      const error = `${label} fields don’t match.`
      return [condition, error]
    },
    maximumLength: (label, value = '', maximumLength) => {
      const condition = value.length <= maximumLength
      const error = `${label} is too long.`
      return [condition, error]
    },
    minimumLength: (label, value = '', minimumLength) => {
      const condition = value.length >= minimumLength
      const error = value.length === 0 ? `${label} is required.` : `${label} is too short.`
      return [condition, error]
    },
    pattern: (label, value, pattern) => {
      const condition = pattern.test(value)
      const error = `${label} is not valid.`
      return [condition, error]
    },
    tick: (label, value, expected) => {
      const condition = !!value === expected
      const error = `${label} is not approved.`
      return [condition, error]
    }
  }
  function renderChildren (children) {
    return Children.map(children, child => {
      let properties = {}
      if (!child || !child.props) return child
      else if (child.props.isHidden) return null
      else if (child.type?.displayName === 'Form.Input' && INPUT_TYPES.includes(child.props.type)) {
        if (child.props.type !== 'submit') {
          properties = {
            onChange: handleValueChange,
            value: values[child.props.name] || child.props.initialValue || ''
          }
        }
      } else if (child.props.children) {
        properties.children = renderChildren(child.props.children)
      }
      return cloneElement(child, properties)
    })
  }

  // Render
  return (
    <form
      noValidate
      {...attributes}
      ref={reference}
      disabled={isDisabled}
      data-interface="form"
      onSubmit={handleSubmit}
      className={getClassName(className, { inline: isInline, loading: isLoading })}
      style={style}>
      {title && <strong className="title">{title}</strong>}
      {errors.length > 0 &&
        <ul className="notice">
          {willDisplayErrorsIndividually
            ? <li className="risk">{errors[0]}</li>
            : errors.map((error, key) =>
              <li
                key={key}
                className="risk">
                {error}
              </li>
            )
          }
        </ul>
      }
      <div className="content">{renderChildren(children)}</div>
    </form>
  )
}

// Properties
Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isInline: PropTypes.bool,
  onError: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  onSubmitError: PropTypes.func,
  onSubmitSuccess: PropTypes.func,
  onUpdate: PropTypes.func,
  reference: PropTypes.object,
  style: PropTypes.object,
  title: PropTypes.node,
  willDisplayErrorsIndividually: PropTypes.bool
}
Form.Field = Field
Form.Field.displayName = 'Form.Field'
Form.Input = Input
Form.Input.displayName = 'Form.Input'

// Export
export default Form
