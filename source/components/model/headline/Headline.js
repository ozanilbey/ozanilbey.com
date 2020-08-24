// Modules
import React, { useContext, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

// Components
import Heading from '~/components/type/heading/Heading'

// Context
import ControllerContext from '~/context/Controller'

// Style
import './Headline.less'

// Utilities
import { getBaseFontSize } from '~/utilities/document'
import { getTwoPointFormEquivalent } from '~/utilities/math'

// Helpers
function calculateOpacity (element, options = {}) {
  if (typeof window === 'undefined' || !element) return 0
  const defaultOptions = { top: 0, bottom: 0, range: 50, minimum: 0, maximum: 1 }
  const { top, bottom, range, minimum, maximum } = { ...defaultOptions, ...options }
  const { y, height } = element.getBoundingClientRect()
  const total = window.innerHeight
  const position = { top: y, bottom: total - (y + height) }
  if ((position.top <= top) || (position.bottom <= bottom)) {
    return minimum
  } else if ((position.top > top) && (position.top < (top + range))) {
    return getTwoPointFormEquivalent(position.top, top, top + range, minimum, maximum)
  } else if ((position.bottom > bottom) && (position.bottom < (bottom + range))) {
    return getTwoPointFormEquivalent(position.bottom, bottom, bottom + range, minimum, maximum)
  } else return maximum
}

// Component: Model > Headline
function Headline (props) {
  // Data
  const { vertical } = useContext(ControllerContext).scroll

  // References
  const headline = useRef()

  // State
  const [opacity, setOpacity] = useState(0)

  // Effects
  useEffect(() => {
    function handleOpacity () {
      setOpacity(
        calculateOpacity(
          headline.current, // element
          { top: 4 * getBaseFontSize(), bottom: 40, range: 80, maximum: 1, minimum: 0.5 } // options
        )
      )
    }
    handleOpacity()
  }, [vertical])

  // Render
  return (
    <Heading
      ref={headline}
      data-model="headline"
      rank={1}
      isSingleLine
      displaySize={props.displaySize}
      style={{ color: `rgba(var(--figure-color-rgb), ${opacity})` }}>
      {props.children}
    </Heading>
  )
}

// Properties
Headline.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  displaySize: PropTypes.oneOf(['normal', 'big', 'bigger', 'biggest'])
}

// Export
export default Headline