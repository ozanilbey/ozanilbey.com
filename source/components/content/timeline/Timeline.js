// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Utilities
import { getClassName } from '~/utilities/component'

// Style
import './Timeline.less'

// Component: Content > Timeline
function Timeline (props) {
  // Data
  const isEndless = props.data.filter(item => !item.end).length > 0
  const minimumYear = Math.min(...props.data.map(item => item.start.year))
  const maximumYear = isEndless
    ? new Date().getFullYear()
    : Math.max(...props.data.map(item => item.end.year))

  // Methods
  function calculateLength (startYear, startMonth, endYear = maximumYear, endMonth = new Date().getMonth() + 1) {
    return (12 * (endYear - startYear) + endMonth - startMonth) * props.unitSize
  }

  // Render
  return (
    <div data-content="timeline">
      <ul className="labels">
        {
          props.data.map((item, index) =>
            <li
              key={index}
              className={getClassName(index % 2 === 0 ? 'top' : 'bottom', {
                endless: !item.end
              })}
              style={{
                left: `${calculateLength(minimumYear, 1, item.start.year, item.start.month)}rem`,
                width: `calc(${calculateLength(item.start.year, item.start.month, item.end?.year, item.end?.month)}rem + 2px)`
              }}>
              {item.label}
            </li>
          )
        }
      </ul>
      <ul className="years">
        {
          Array(maximumYear - minimumYear + 1)
            .fill()
            .map((year, index) =>
              <li
                key={index}
                style={{ width: `${12 * props.unitSize}rem` }}>
                {minimumYear + index}
              </li>
            )
        }
      </ul>
    </div>
  )
}

// Properties
Timeline.propTypes = {
  className: PropTypes.string,
  isContinuous: PropTypes.bool,
  sections: PropTypes.array,
  data: PropTypes.array,
  unitSize: PropTypes.number
}

// Export
export default Timeline
