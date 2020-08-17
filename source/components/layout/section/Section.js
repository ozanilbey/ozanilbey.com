// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Utilities
import { getClassName } from '~/utilities/component'

// Constants
import {
  BOX_ALIGNMENT_VERTICAL_OPTIONS,
  SPACING_OPTIONS
} from '~/constants/layout'

// Style
import './Section.less'

// Component: Layout > Section
function Section (props) {
  // Data
  const TagName = props.semanticTag
  const className = getClassName(props, {
    screen: props.isFullScreen ? 'full' : null,
    spacing: props.spacing,
    align: props.align
  })
  const semanticTagProperty = { [`data-${props.semanticTag}`]: props.name }

  // Render
  return (
    <TagName
      data-layout="section"
      {...semanticTagProperty}
      className={className}>
      {props.children}
    </TagName>
  )
}

// Properties
Section.propTypes = {
  align: PropTypes.oneOf(BOX_ALIGNMENT_VERTICAL_OPTIONS),
  children: PropTypes.node,
  className: PropTypes.string,
  isFullScreen: PropTypes.bool,
  name: PropTypes.string,
  semanticTag: PropTypes.oneOf(['header', 'section', 'footer']),
  spacing: PropTypes.oneOf(SPACING_OPTIONS)
}
Section.defaultProps = {
  semanticTag: 'section'
}

// Export
export default Section
