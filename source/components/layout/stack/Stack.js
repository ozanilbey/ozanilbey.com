// Modules
import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'

// Components
import Item from './item/Item'

// Utilities
import { getClassName, getResponsiveData } from '~/utilities/component'

// Constants
import {
  ALIGNMENT_HORIZONTAL_OPTIONS,
  ALIGNMENT_VERTICAL_OPTIONS,
  SPACING_OPTIONS
} from '~/constants/layout'

// Style
import './Stack.less'

// Component: Layout > Stack
function Stack (props) {
  // Data
  const className = getClassName(props, {
    wrap: props.willWrap
      ? props.willWrapReverse ? 'reverse' : null
      : 'disabled',
    spacing: props.spacing,
    ...getResponsiveData(props, 'horizontal', label => `align-${label}`),
    ...getResponsiveData(props, 'vertical', label => `align-${label}`),
    ...getResponsiveData(props, 'text', label => `${label}-align`)
  })

  // Methods
  const renderChildren = children => {
    return React.Children.map(children, child => {
      if (!child.props || child.type.displayName !== 'Stack.Item') return child
      if (child.props.isHidden) return null
      return cloneElement(child, {})
    })
  }

  // Render
  return (
    <div
      data-layout="stack"
      className={className}>
      {renderChildren(props.children)}
    </div>
  )
}

// Properties
Stack.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  horizontal: PropTypes.oneOf(ALIGNMENT_HORIZONTAL_OPTIONS),
  horizontalL: PropTypes.oneOf(ALIGNMENT_HORIZONTAL_OPTIONS),
  horizontalM: PropTypes.oneOf(ALIGNMENT_HORIZONTAL_OPTIONS),
  horizontalS: PropTypes.oneOf(ALIGNMENT_HORIZONTAL_OPTIONS),
  horizontalXL: PropTypes.oneOf(ALIGNMENT_HORIZONTAL_OPTIONS),
  horizontalXS: PropTypes.oneOf(ALIGNMENT_HORIZONTAL_OPTIONS),
  isHidden: PropTypes.bool,
  name: PropTypes.string,
  spacing: PropTypes.oneOf(SPACING_OPTIONS),
  text: PropTypes.oneOf(ALIGNMENT_HORIZONTAL_OPTIONS),
  textL: PropTypes.oneOf(ALIGNMENT_HORIZONTAL_OPTIONS),
  textM: PropTypes.oneOf(ALIGNMENT_HORIZONTAL_OPTIONS),
  textS: PropTypes.oneOf(ALIGNMENT_HORIZONTAL_OPTIONS),
  textXL: PropTypes.oneOf(ALIGNMENT_HORIZONTAL_OPTIONS),
  textXS: PropTypes.oneOf(ALIGNMENT_HORIZONTAL_OPTIONS),
  vertical: PropTypes.oneOf(ALIGNMENT_VERTICAL_OPTIONS),
  verticalL: PropTypes.oneOf(ALIGNMENT_VERTICAL_OPTIONS),
  verticalM: PropTypes.oneOf(ALIGNMENT_VERTICAL_OPTIONS),
  verticalS: PropTypes.oneOf(ALIGNMENT_VERTICAL_OPTIONS),
  verticalXL: PropTypes.oneOf(ALIGNMENT_VERTICAL_OPTIONS),
  verticalXS: PropTypes.oneOf(ALIGNMENT_VERTICAL_OPTIONS),
  willWrap: PropTypes.bool,
  willWrapReverse: PropTypes.bool
}
Stack.Item = Item
Stack.Item.displayName = 'Stack.Item'

// Export
export default Stack
