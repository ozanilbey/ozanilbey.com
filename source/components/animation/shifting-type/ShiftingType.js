// Modules
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Utilities
import { getClassName, getAttributes } from '~/utilities/component'

// Style
import './ShiftingType.less'

// Component: Animation > Shifting Type
function ShiftingType (props) {
  // Data
  const attributes = getAttributes(props, 'style', 'data', 'aria')

  // State
  const [index, setIndex] = useState(props.startIndex)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Effects
  useEffect(() => {
    const offTimer = setTimeout(
      () => {
        setIndex((index + 1) % props.words.length)
        setIsTransitioning(false)
      },
      props.interval
    )
    return () => clearTimeout(offTimer)
  }, [index, props.words, props.interval])
  useEffect(() => {
    const onTimer = setTimeout(
      () => setIsTransitioning(true),
      Math.max(props.interval - 500, 0)
    )
    return () => clearTimeout(onTimer)
  }, [index, props.interval])

  // Render
  return (
    <mark
      {...attributes}
      data-animation="shifting-type"
      className={getClassName(props.className, { transitioning: isTransitioning })}>
      <span style={{ color: props.colors[index] }}>
        {props.words[index]}
      </span>
      <span style={{ color: props.colors[(index + 1) % props.colors.length] }}>
        {props.words[(index + 1) % props.words.length]}
      </span>
    </mark>
  )
}

ShiftingType.propTypes = {
  className: PropTypes.string,
  colors: PropTypes.array,
  interval: PropTypes.number,
  startIndex: PropTypes.number,
  words: PropTypes.array
}

ShiftingType.defaultProps = {
  startIndex: 0
}

// Export
export default ShiftingType
