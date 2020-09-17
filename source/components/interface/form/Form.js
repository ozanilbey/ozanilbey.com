// Modules
import React, { useState, useEffect, cloneElement } from 'react'
import PropTypes from 'prop-types'

// Sub-components
import Field from './field/Field'
import Input from './input/Input'

// Utilities
import { getClassName, getAttributes } from '~/utilities/component'

// Constants
import { INPUT_TYPE_OPTIONS } from '~/constants/options'

// Styles
import './Form.less'

// Component: Form
const Form = props => {
  // Data
  const attributes = getAttributes(props, ['style', 'data', 'aria'])

  // State
  const [identifier, setIdentifier] = useState(Math.random())
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Methods
  function setValue (name, value, callback) {
    setValues(values => ({
      ...values,
      [name]: value
    }))
    callback && callback(values)
  }
  function handleValueChange ({ target }) {
    const name = target.name
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value
    setValue(name, value, props.onUpdate)
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
      if (props.onSubmit) {
        props.onSubmit(values, (error, response) => {
          setIsLoading(false)
          error && setErrors([response])
          if (error) {
            if (props.onError) props.onError(response)
            if (props.onSubmitError) props.onSubmitError(response)
          } else {
            if (props.onSubmitSuccess) props.onSubmitSuccess(response)
            props.willResetAfter && setTimeout(
              () => setIdentifier(Math.random()),
              props.timeoutBeforeReset
            )
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
        const { name, reference, validator } = child.props
        const [isInputValidated, inputValidationErrors] = evaluateInput(reference, values[name], validator)
        if (!isInputValidated) {
          isFormValidated = false
          inputValidationErrors.forEach(error => {
            if (!formValidationErrors.includes(error)) formValidationErrors.push(error)
          })
        }
      } else if (child.props.children) iterateValidator(child.props.children)
    }
    React.Children.map(props.children, iterateValidator)
    setErrors(formValidationErrors)
    props.onError && props.onError(formValidationErrors)
    return isFormValidated
  }
  function evaluateInput (reference, value, validator) {
    let isInputValidated = true
    const inputValidationErrors = []
    if (validator) {
      Object.keys(validator).forEach(item => {
        const [isValidated, error] = check[item](reference, value, validator[item])
        if (!isValidated) {
          isInputValidated = false
          if (!inputValidationErrors.includes(error)) inputValidationErrors.push(error)
        }
      })
    }
    return [isInputValidated, inputValidationErrors]
  }
  const check = {
    minimumLength: (reference, value = '', minimumLength) => {
      const condition = value.length >= minimumLength
      const error = `${reference} is too short.`
      return [condition, error]
    },
    maximumLength: (reference, value = '', maximumLength) => {
      const condition = value.length <= maximumLength
      const error = `${reference} is too long.`
      return [condition, error]
    },
    pattern: (reference, value, pattern) => {
      const condition = pattern.test(value)
      const error = `${reference} is not valid.`
      return [condition, error]
    },
    tick: (reference, value, expected) => {
      const condition = !!value === expected
      const error = `${reference} is not approved.`
      return [condition, error]
    },
    fieldMatch: (reference, value, field) => {
      field = values[field]
      const condition = field && value === field
      const error = `${reference} fields don't match.`
      return [condition, error]
    }
  }
  function renderChildren (children) {
    return React.Children.map(children, child => {
      let properties = {}
      if (!child.props) return child
      else if (child.props.isHidden) return null
      else if (child.type?.displayName === 'Form.Input' && INPUT_TYPE_OPTIONS.includes(child.props.type)) {
        if (child.props.type !== 'submit') {
          properties = {
            value: values[child.props.name] || child.props.initialValue || '',
            onChange: handleValueChange
          }
        }
      } else if (child.props.children) {
        properties.children = renderChildren(child.props.children)
      }
      return cloneElement(child, properties)
    })
  }

  // Effects
  useEffect(() => {
    if (props.identifier !== identifier) {
      setValues({})
      setErrors([])
      setIsLoading(false)
      React.Children.map(
        props.children,
        child => {
          if (INPUT_TYPE_OPTIONS.includes(child.props.type)) {
            setValues(values => ({
              ...values,
              [child.props.name]: child.props.initialValue || ''
            }))
          }
        }
      )
      setIdentifier(props.identifier)
    }
  }, [props.identifier, identifier, props.children])

  // Render
  return (
    <form
      {...attributes}
      noValidate
      data-interface="form"
      disabled={props.isDisabled}
      onSubmit={handleSubmit}
      className={getClassName(props.className, {
        inline: props.isInline,
        loading: isLoading
      })}>
      {props.title && <strong className="title">{props.title}</strong>}
      {errors.length > 0 &&
        <ul className="notice">
          {errors.map((error, key) =>
            <li
              key={key}
              className="risk">
              {error}
            </li>
          )}
        </ul>
      }
      <div className="content">{renderChildren(props.children)}</div>
    </form>
  )
}

// Properties
Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  identifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  isDisabled: PropTypes.bool,
  isInline: PropTypes.bool,
  isLabelAllowed: PropTypes.bool,
  onError: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  onSubmitError: PropTypes.func,
  onSubmitSuccess: PropTypes.func,
  onUpdate: PropTypes.func,
  timeoutBeforeReset: PropTypes.number,
  title: PropTypes.node,
  willResetAfter: PropTypes.bool
}
Form.defaultProps = {
  isLabelAllowed: true,
  timeoutBeforeReset: 0
}
Form.Field = Field
Form.Field.displayName = 'Form.Field'
Form.Input = Input
Form.Input.displayName = 'Form.Input'

// Export
export default Form
