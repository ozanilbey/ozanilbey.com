// Modules
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

// Components
import Icon from '~/components/interface/icon/Icon'

// Helpers
import { checkIfClient } from '~/helpers/document'
import { getClassName, getAttributes } from '~/helpers/component'

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
    if (checkIfClient()) {
      document.body.addEventListener('click', handleClick)
    }
    return () => {
      if (checkIfClient()) document.body.removeEventListener('click', handleClick)
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
              : () => setIsActive(condition => !condition)
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
