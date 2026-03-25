// Modules
import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

// Components
import Icon from '@source/components/interface/icon/Icon'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Styles
import './Hint.scss'

// Component: Model > Hint
function Hint ({ children, className, isBodyClickable, style, text, ...rest }) {
  // State
  const [isActive, setIsActive] = useState(false)

  // References
  const container = useRef()

  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Effects
  useEffect(() => {
    function handleClick ({ target }) {
      if (container.current && !container.current.contains(target)) setIsActive(false)
    }
    document.body.addEventListener('click', handleClick)
    return () => document.body.removeEventListener('click', handleClick)
  }, [])

  // Render
  return (
    <em
      {...attributes}
      ref={container}
      data-model="hint"
      className={getClassName(className, { active: isActive })}
      onClick={isBodyClickable ? () => setIsActive(condition => !condition) : null}
      style={style}>
      {children}
      <div className="wrapper">
        <div className="text">{text}</div>
        <div
          className="switch"
          onClick={isBodyClickable ? null : () => setIsActive(condition => !condition)}>
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
  style: PropTypes.object,
  text: PropTypes.string
}

// Export
export default Hint
