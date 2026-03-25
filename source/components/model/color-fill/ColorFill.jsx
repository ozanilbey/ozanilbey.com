// Modules
import { useRef } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './ColorFill.scss'

// Component: Model > Color fill
function ColorFill ({ children, className, color, style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // References
  const identifier = useRef(nanoid()).current

  // Data
  const colorFactors = checkIfRGB(color) ? color.map(value => value / 255) : null

  // Functions
  function checkIfRGB (array) {
    return array && array.length === 3 && Math.min(...array) >= 0 && Math.max(...array) <= 255
  }

  // Render
  if (!Array.isArray(colorFactors)) return children
  return (
    <span
      {...attributes}
      className={className}
      data-model="color-fill"
      style={style}>
      <svg
        className="filter"
        colorInterpolationFilters="sRGB">
        <defs>
          <filter
            x="0"
            y="0"
            id={`filter-${identifier}`}>
            <feColorMatrix
              type="matrix"
              values={`0 0 0 0 ${colorFactors[0]} 0 0 0 0 ${colorFactors[1]} 0 0 0 0 ${colorFactors[2]} 0 0 0 1 0`} />
          </filter>
        </defs>
      </svg>
      <span style={{ filter: `url(#filter-${identifier})` }}>
        {children}
      </span>
    </span>
  )
}

// Properties
ColorFill.propTypes = {
  children: PropTypes.node,
  color: PropTypes.arrayOf(
    PropTypes.number
  ).isRequired
}

// Export
export default ColorFill
