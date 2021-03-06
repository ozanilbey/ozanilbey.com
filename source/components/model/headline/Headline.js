// Modules
import React, { useContext, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

// Context
import ControllerContext from '~/context/Controller'

// Components
import Heading from '~/components/type/heading/Heading'

// Helpers
import { checkIfClient, getBaseFontSize } from '~/helpers/document'

// Utilities
import { getTwoPointFormEquivalent } from '~/utilities/math'

// Style
import './Headline.less'

// Helpers
function calculateOpacity (element, options = {}) {
  if (!checkIfClient() || !element) return 0
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
  const { scroll, dimensions } = useContext(ControllerContext)

  // References
  const headline = useRef()

  // State
  const [opacity, setOpacity] = useState(0)

  // Effects
  useEffect(() => {
    function handleOpacity () {
      let factor = 1
      if (dimensions.width > 1024) factor = 2
      else if (dimensions.width > 768) factor = 1.5
      setOpacity(
        calculateOpacity(
          headline.current, // element
          { top: 3.5 * getBaseFontSize() + factor * getBaseFontSize(), bottom: factor * getBaseFontSize(), range: 2 * factor * getBaseFontSize(), maximum: 1, minimum: 0.5 } // options
        )
      )
    }
    handleOpacity()
  }, [scroll.vertical, dimensions.width])

  // Render
  return (
    <Heading
      ref={headline}
      data-model="headline"
      rank={1}
      isSingleLine={props.isSingleLine}
      displaySize={props.displaySize}
      style={{ color: `hsla(var(--figure-color-hsl), ${opacity})` }}>
      {props.children}
    </Heading>
  )
}

// Properties
Headline.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  displaySize: PropTypes.oneOf(['normal', 'big', 'bigger', 'biggest']),
  isSingleLine: PropTypes.bool
}

// Export
export default Headline
