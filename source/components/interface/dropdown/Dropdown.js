// Modules
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

// Components
import Button from '~/components/interface/button/Button'

// Utilities
import { getClassName } from '~/utilities/component'

// Style
import './Dropdown.less'

// Component: Interface > Dropdown
function Dropdown (props) {
  // References
  const content = useRef()
  const button = useRef()

  // State
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState()

  // Methods
  function toggle (newValue) {
    setIsOpen(current => !current)
    if (newValue) {
      props.onSelect && props.onSelect(newValue)
      if (newValue !== value) {
        setValue(newValue)
        props.onChange && props.onChange(newValue)
      }
    }
  }

  // Effects
  useEffect(() => {
    if (value === undefined) {
      if (props.defaultValue) setValue(props.defaultValue)
      else if (props.options && props.options.length > 0) setValue(props.options[0])
    }
  }, [props.options, props.defaultValue, value])

  // Effects
  useEffect(() => {
    function handleClick ({ target }) {
      if (button.current && content.current) {
        if (!button.current.contains(target) && !content.current.contains(target)) setIsOpen(false)
      }
    }
    if (typeof window !== 'undefined') {
      document.body.addEventListener('click', handleClick)
    }
    return () => {
      if (typeof window !== 'undefined') document.body.removeEventListener('click', handleClick)
    }
  }, [])

  // Render
  return (
    <div
      data-interface="dropdown"
      className={getClassName(props.className, { open: isOpen })}>
      <Button
        ref={button}
        onClick={() => toggle()}>
        {props.displayLabel(props.label || (value ? props.displayName(value) : 'Select...'))}
      </Button>
      <div
        ref={content}
        className="content"
        style={{ [props.side]: 0 }}>
        {
          props.options
            ? <ul>
              {props.options.map((option, index) =>
                <li
                  key={index}
                  onClick={() => toggle(option)}>
                  {props.displayName(option)}
                </li>
              )}
            </ul>
            : 'Nothing to show'
        }
      </div>
    </div>
  )
}

// Properties
Dropdown.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  displayLabel: PropTypes.func,
  displayName: PropTypes.func,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  options: PropTypes.array,
  side: PropTypes.oneOf(['left', 'right'])
}
Dropdown.defaultProps = {
  displayLabel: label => label,
  displayName: option => option,
  side: 'left'
}

// Export
export default Dropdown
