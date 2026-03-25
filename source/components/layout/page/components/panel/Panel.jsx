// Modules
import { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Styles
import './Panel.scss'

// Component: Layout > Page > Panel
function Panel ({ children, className, hasSpacing = true, isOpen = false, name, onClose, reference, style, willCloseOnOutsideClick = true, ...rest }) {
  // References
  const localReference = useRef()
  const root = reference || localReference

  // State
  const [isActive, setIsActive] = useState(isOpen)

  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Functions (Memoized)
  const close = useCallback(() => {
    setIsActive(false)
    onClose?.()
  }, [onClose])

  // Effects
  useEffect(() => {
    setIsActive(isOpen)
  }, [isOpen])
  useEffect(() => {
    function handleOutsideClick (event) {
      if (!root.current?.contains(event.target)) close()
    }
    if (isActive && willCloseOnOutsideClick) document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [close, isActive, willCloseOnOutsideClick])

  // Render
  return (
    <aside
      ref={root}
      {...attributes}
      data-panel={name}
      data-component="panel"
      className={getClassName(className, { active: isActive, panel: true, spacing: hasSpacing })}
      style={style}>
      {children}
    </aside>
  )
}

// Properties
Panel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  name: PropTypes.string,
  onClose: PropTypes.func,
  reference: PropTypes.object,
  style: PropTypes.object,
  willCloseOnOutsideClick: PropTypes.bool
}

// Export
export default Panel
