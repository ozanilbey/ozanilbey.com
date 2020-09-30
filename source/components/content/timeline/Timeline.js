// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Helpers
import { getClassName } from '~/helpers/component'

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
    <div
      data-content="timeline"
      className={props.data.filter(item => item.isSeparate).length > 0 ? 'with-separate-item' : ''}>
      <ul className="labels">
        {
          props.data.map((item, index) =>
            <li
              key={index}
              className={getClassName(index % 2 === 0 ? 'bottom' : 'top', {
                'open-start': item.start.isOpen,
                'open-end': !item.end || item.end.isOpen,
                separate: item.isSeparate
              })}
              style={{
                left: `${calculateLength(minimumYear, 1, item.start.year, item.start.month)}rem`,
                width: `calc(${calculateLength(item.start.year, item.start.month, item.end?.year, item.end?.month)}rem + 2px)`
              }}>
              <span className="name">{item.label}</span>
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
