// Modules
import React, { useContext, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

// Context
import ControllerContext from '~/context/Controller'

// Utilities
import { getClassName } from '~/utilities/component'
import { getBaseFontSize } from '~/utilities/document'
import { getTwoPointFormEquivalent } from '~/utilities/math'

// Style
import './SlidingBox.less'

// Helpers
function calculateSlideAmount (element, options = {}) {
  if (typeof window === 'undefined' || !element) return 0
  const defaultOptions = { top: 0, bottom: 0, minimum: 0, maximum: 1000 }
  const { top, bottom, minimum, maximum } = { ...defaultOptions, ...options }
  const { y, height } = element.getBoundingClientRect()
  const total = window.innerHeight
  const position = { top: y, bottom: total - (y + height) }
  if (position.top <= top) return maximum
  else if (position.bottom <= bottom) return minimum
  else return getTwoPointFormEquivalent(position.top, total - bottom - height, top, minimum, maximum)
}

// Component: Model > SlidingBox
function SlidingBox (props) {
  // Data
  const { scroll, dimensions } = useContext(ControllerContext)
  const bufferZoneHeight = 3.5 * getBaseFontSize() // Equals to navigation height

  // References
  const slider = useRef()

  // State
  const [slideAmount, setSlideAmount] = useState(0)

  // Effects
  useEffect(() => {
    function handleSlide () {
      setSlideAmount(
        calculateSlideAmount(
          slider.current, // element
          { // options
            top: 2 * bufferZoneHeight,
            bottom: bufferZoneHeight,
            maximum: Math.abs(slider.current.parentElement.clientWidth - slider.current.clientWidth),
            minimum: 0
          }
        )
      )
    }
    handleSlide()
  }, [scroll, dimensions, bufferZoneHeight])

  // Render
  return (
    <div
      data-model="sliding-box"
      className={getClassName(props.className)}>
      <div
        ref={slider}
        className="slider"
        style={{ left: `${-1 * slideAmount}px` }}>
        {props.children}
      </div>
    </div>
  )
}

// Properties
SlidingBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

// Export
export default SlidingBox
