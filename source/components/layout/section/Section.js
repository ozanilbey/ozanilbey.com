// Modules
import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

// Utilities
import { getClassName, getAttributes } from '~/utilities/component'

// Constants
import {
  BOX_ALIGNMENT_VERTICAL_OPTIONS,
  SPACING_OPTIONS
} from '~/constants/layout'

// Style
import './Section.less'

// Component: Layout > Section
const Section = forwardRef((props, ref) => {
  // Data
  const TagName = props.semanticTag
  const className = getClassName(props.className, {
    screen: props.isFullScreen ? 'full' : null,
    spacing: props.spacing,
    align: props.align
  })
  const semanticTagProperty = { [`data-${props.semanticTag}`]: props.name || '' }
  const attributes = getAttributes(props, ['style', 'data', 'aria'])

  // Render
  return (
    <TagName
      ref={ref}
      data-layout="section"
      {...semanticTagProperty}
      {...attributes}
      className={className}>
      {props.children}
    </TagName>
  )
})

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
Section.displayName = 'Section'
Section.defaultProps = {
  semanticTag: 'section'
}

// Export
export default Section
