// Modules
import PropTypes from 'prop-types'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Styles
import './Heading.scss'

// Component: Interface > Heading
function Heading ({ children, className, displaySize = 'normal', isSingleLine = false, rank = 1, reference, style, ...rest }) {
  // Data
  const Element = `h${rank}`
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  if (!Element) return null
  return (
    <Element
      {...attributes}
      ref={reference}
      data-interface="heading"
      className={getClassName(className, {
        'heading-size': rank === 1 ? displaySize : 'normal',
        'text-line': isSingleLine ? 'single' : 'auto'
      })}
      style={style}>
      {children}
    </Element>
  )
}

// Properties
Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  displaySize: PropTypes.oneOf(
    ['normal', 'big', 'bigger', 'biggest']
  ),
  isSingleLine: PropTypes.bool,
  rank: PropTypes.oneOf(
    [1, 2, 3, 4, 5, 6]
  ),
  reference: PropTypes.object,
  style: PropTypes.object
}

// Export
export default Heading
