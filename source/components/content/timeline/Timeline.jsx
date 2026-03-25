// Modules
import { useMemo } from 'react'
import PropTypes from 'prop-types'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Styles
import './Timeline.scss'

// Functions (Local)
function calculateMergedList (list) {
  if (!Array.isArray(list) || list.length === 0) return list
  return list.reduce((accumulator, current) => {
    const previous = accumulator[accumulator.length - 1]
    if (
      previous?.for === current.for &&
      previous?.end?.year === current?.start?.year &&
      previous?.end?.month === current?.start?.month
    ) accumulator[accumulator.length - 1] = { ...previous, ...current, end: current.end, start: previous.start }
    else accumulator.push({ ...current })
    return accumulator
  }, [])
}

// Component: Content > Timeline
function Timeline ({ className, data, style, unitSize, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])
  const isEndless = data.filter(item => !item.end).length > 0
  const minimumYear = Math.min(...data.map(item => item.start.year))
  const maximumYear = isEndless
    ? new Date().getFullYear()
    : Math.max(...data.map(item => item.end.year))

  // Functions
  function calculateLength (startYear, startMonth, endYear = maximumYear, endMonth = new Date().getMonth() + 1) {
    return (12 * (endYear - startYear) + endMonth - startMonth) * unitSize
  }

  // Functions (Memoized)
  const list = useMemo(() => {
    if (!Array.isArray(data) || data.length === 0) return data
    return calculateMergedList(data).map(item => ({
      badge: item.contract === 'consultancy' ? 'Consultancy' : null,
      end: item.end,
      isSeparate: item.isSeparate,
      label: item.for,
      start: item.start
    }))
  }, [data])

  // Render
  return (
    <div
      {...attributes}
      data-content="timeline"
      className={getClassName(className, { 'with-separate-item': data.filter(item => item.isSeparate).length > 0 })}
      style={style}>
      <ul className="items">
        {list.map((item, index) =>
          <li
            key={index}
            className={getClassName('item', {
              'open-end': !item.end || item.end.isOpen,
              'open-start': item.start.isOpen,
              position: (item.isSeparate || index % 2 === 0) ? 'bottom' : 'top',
              separate: item.isSeparate
            })}
            style={{
              left: `${calculateLength(minimumYear, 1, item.start.year, item.start.month)}rem`,
              width: `calc(${calculateLength(item.start.year, item.start.month, item.end?.year, item.end?.month)}rem + 2px)`
            }}>
            <span className="label">
              {item.label}
              {item.badge && <span className="badge">{item.badge}</span>}
            </span>
          </li>
        )}
      </ul>
      <ul className="years">
        {Array(maximumYear - minimumYear + 1)
          .fill()
          .map((year, index) =>
            <li
              key={index}
              style={{ width: `${12 * unitSize}rem` }}>
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
  data: PropTypes.array,
  style: PropTypes.object,
  unitSize: PropTypes.number
}

// Export
export default Timeline
