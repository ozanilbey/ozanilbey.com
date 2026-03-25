// Modules
import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

// Helpers
import { getBaseFontSize } from '@source/helpers/document'

// Hooks
import useDimensions from '@source/hooks/useDimensions'
import useScroll from '@source/hooks/useScroll'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Utilities
import { getTwoPointFormEquivalent } from '@source/utilities/math'

// Styles
import './SlidingBox.scss'

// Helpers
function calculateSlideAmount (element, options = {}) {
  if (!element) return 0
  const defaultOptions = { bottom: 0, maximum: 1000, minimum: 0, top: 0 }
  const { top, bottom, minimum, maximum } = { ...defaultOptions, ...options }
  const { y, height } = element.getBoundingClientRect()
  const total = window.innerHeight
  const position = { bottom: total - (y + height), top: y }
  if (position.top <= top) return maximum
  else if (position.bottom <= bottom) return minimum
  else return getTwoPointFormEquivalent(position.top, total - bottom - height, top, minimum, maximum)
}

// Component: Model > Sliding box
function SlidingBox ({ children, className, style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Data
  const scroll = useScroll()
  const dimensions = useDimensions()
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
          slider.current,
          {
            bottom: bufferZoneHeight,
            maximum: Math.abs(slider.current.parentElement.clientWidth - slider.current.clientWidth),
            minimum: 0,
            top: 2 * bufferZoneHeight
          }
        )
      )
    }
    handleSlide()
  }, [scroll, dimensions, bufferZoneHeight])

  // Render
  return (
    <div
      {...attributes}
      className={className}
      data-model="sliding-box"
      style={style}>
      <div
        ref={slider}
        className="slider"
        style={{ left: `${-1 * slideAmount}px` }}>
        {children}
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
