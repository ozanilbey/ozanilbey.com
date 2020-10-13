// Modules
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'

// Style
import './ColorFill.less'

// Component: Model > ColorFill
function ColorFill (props) {
  // References
  const identifier = useRef(nanoid()).current

  // Data
  const colorFactors = checkIfRGB(props.color) ? props.color.map(value => value / 255) : null

  // Methods
  function checkIfRGB (array) {
    return array && array.length === 3 && Math.min(...array) >= 0 && Math.max(...array) <= 255
  }

  // Render
  return colorFactors
    ? <span data-model="color-fill">
      <svg colorInterpolationFilters="sRGB">
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
        {props.children}
      </span>
    </span>
    : props.children
}

// Properties
ColorFill.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.arrayOf(
    PropTypes.number
  ).isRequired,
  height: PropTypes.number,
  width: PropTypes.number
}

// Export
export default ColorFill
