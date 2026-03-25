// Modules
import { useEffect } from 'react'
import PropTypes from 'prop-types'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Styles
import './Tabbing.scss'

// Functions (Local)
function scrollToTab (tab) {
  const scroller = tab?.parentElement
  if (!scroller) return
  const spacing = scroller.computedStyleMap().get('padding-left').value
  scroller.scrollTo({ behavior: 'smooth', left: tab.offsetLeft - spacing })
}

// Component: Interface > Tabbing
function Tabbing ({ className, onChange, options, reference, renderer, style, value, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Effects
  useEffect(() => {
    const tab = document.querySelector(`[data-tab="${value?.id}"]`)
    if (tab) scrollToTab(tab)
  }, [value?.id])

  // Render
  if (!(options?.length > 0) || !value?.id) return null
  return (
    <div
      {...attributes}
      ref={reference}
      data-interface="tabbing"
      className={className}
      style={style}>
      <ul className="tabs">
        {options.map(option =>
          <li
            key={option.id}
            data-tab={option.id}
            className={getClassName('tab', { active: option.id === value.id })}
            onClick={() => option.id === value.id ? null : onChange(option)}>
            {renderer ? renderer(option) : option.label}
          </li>
        )}
      </ul>
    </div>
  )
}

// Properties
Tabbing.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  reference: PropTypes.object,
  renderer: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired
}

// Export
export default Tabbing
