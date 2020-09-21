// Modules
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

// Components
import Icon from '~/components/interface/icon/Icon'

// Utilities
import { getClassName, getAttributes } from '~/utilities/component'

// Style
import './Hint.less'

// Component: Typography > Hint
function Hint (props) {
  // State
  const [isActive, setIsActive] = useState(false)

  // References
  const container = useRef()

  // Data
  const className = getClassName(props.className, {
    active: isActive
  })
  const attributes = getAttributes(props, ['style', 'data', 'aria'])

  // Effects
  useEffect(() => {
    function handleClick ({ target }) {
      if (container.current && !container.current.contains(target)) setIsActive(false)
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
    <em
      {...attributes}
      ref={container}
      data-type="hint"
      className={className}
      onClick={
        props.isBodyClickable
          ? () => setIsActive(condition => !condition)
          : null
      }>
      {props.children}
      <div className="wrapper">
        <div className="text">{props.text}</div>
        <div
          className="switch"
          onClick={
            props.isBodyClickable
              ? null
              : () => {
                console.log(JSON.stringify(isActive))
                setIsActive(condition => !condition)
              }
          }>
          <Icon name="information" />
        </div>
      </div>
    </em>
  )
}

// Properties
Hint.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isBodyClickable: PropTypes.bool,
  text: PropTypes.string
}

// Export
export default Hint