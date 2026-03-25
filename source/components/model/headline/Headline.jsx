// Modules
import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

// Components
import Heading from '@source/components/interface/heading/Heading'

// Hooks
import useDimensions from '@source/hooks/useDimensions'
import useScroll from '@source/hooks/useScroll'
import useTheme from '@source/hooks/useTheme'

// Helpers
import { getAttributes } from '@source/helpers/component'
import { getBaseFontSize } from '@source/helpers/document'

// Utilities
import { getTwoPointFormEquivalent } from '@source/utilities/math'

// Styles
import './Headline.scss'

// Constants (Local)
const THEME_LIGHTNESS_MAPPING = {
  dark: { maximum: 25, minimum: 100 },
  light: { maximum: 80, minimum: 20 }
}

// Functions (Local)
function calculateOpacity (element, options = {}) {
  if (!element) return 0
  const defaultOptions = { bottom: 0, maximum: 1, minimum: 0, range: 50, top: 0 }
  const { top, bottom, range, minimum, maximum } = { ...defaultOptions, ...options }
  const { y, height } = element.getBoundingClientRect()
  const total = window.innerHeight
  const position = { bottom: total - (y + height), top: y }
  if ((position.top <= top) || (position.bottom <= bottom)) return maximum
  else if ((position.top > top) && (position.top < (top + range))) {
    return getTwoPointFormEquivalent(position.top, top, top + range, maximum, minimum)
  } else if ((position.bottom > bottom) && (position.bottom < (bottom + range))) {
    return getTwoPointFormEquivalent(position.bottom, bottom, bottom + range, maximum, minimum)
  } else return minimum
}
function calculateLightness (factor, { maximum = 100, minimum = 0 } = {}) {
  return getTwoPointFormEquivalent(factor, 0, 1, minimum, maximum)
}

// Component: Model > Headline
function Headline ({ children, className, contentAfter, contentBefore, displaySize, isSingleLine, style, ...rest }) {
  // References
  const headline = useRef()

  // State
  const [visibilityFactor, setVisibilityFactor] = useState(1)

  // Data
  const scroll = useScroll()
  const dimensions = useDimensions()
  const { current: theme } = useTheme()
  const attributes = getAttributes(rest, ['aria', 'data'])
  const lightness = calculateLightness(visibilityFactor, THEME_LIGHTNESS_MAPPING[theme])

  // Effects
  useEffect(() => {
    function handleVisibility () {
      let rangeFactor = .5
      if (dimensions.width >= 1440) rangeFactor *= 2.5
      else if (dimensions.width >= 1280) rangeFactor *= 2
      const visibilityFactor = calculateOpacity(
        headline.current,
        {
          bottom: rangeFactor * getBaseFontSize(),
          maximum: 1,
          minimum: 0,
          range: 2 * rangeFactor * getBaseFontSize(),
          top: 3.5 * getBaseFontSize() + rangeFactor * getBaseFontSize()
        }
      )
      setVisibilityFactor(visibilityFactor)
    }
    handleVisibility()
  }, [scroll.vertical, dimensions.height, dimensions.width])

  // Render
  return (
    <div
      ref={headline}
      {...attributes}
      className={className}
      data-model="headline"
      style={style}>
      <Heading
        rank={1}
        className="main"
        displaySize={displaySize}
        isSingleLine={isSingleLine}
        style={{ color: `hsla(var(--base-hue), var(--base-saturation), ${lightness}%)` }}>
        {contentBefore && <strong className="before dim">{contentBefore}</strong>}
        {children}
        {contentAfter && <strong className="after dim">{contentAfter}</strong>}
      </Heading>
    </div>
  )
}

// Properties
Headline.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  contentAfter: PropTypes.string,
  contentBefore: PropTypes.string,
  displaySize: PropTypes.oneOf(
    ['normal', 'big', 'bigger', 'biggest']
  ),
  isSingleLine: PropTypes.bool,
  style: PropTypes.object
}

// Export
export default Headline
