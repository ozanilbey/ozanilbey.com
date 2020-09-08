// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Utilities
import { getClassName, getResponsiveData } from '~/utilities/component'

// Constants
import {
  ALIGNMENT_HORIZONTAL_OPTIONS,
  BLOCK_OFFSET_OPTIONS,
  BLOCK_SIZE_OPTIONS
} from '~/constants/layout'

// Style
import './Item.less'

// Component: Layout > Flex > Item
function Item (props) {
  // Data
  const className = getClassName(props.className, {
    ...getResponsiveData(props, 'offset'),
    ...getResponsiveData(props, 'size'),
    ...getResponsiveData(props, 'text', label => `${label}-align`)
  })

  // Render
  return (
    <div
      data-layout="stack-item"
      data-stack-item={props.name}
      className={className}>
      {props.children}
    </div>
  )
}

// Properties
Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  offset: PropTypes.oneOf(BLOCK_OFFSET_OPTIONS),
  offsetL: PropTypes.oneOf(BLOCK_OFFSET_OPTIONS),
  offsetM: PropTypes.oneOf(BLOCK_OFFSET_OPTIONS),
  offsetS: PropTypes.oneOf(BLOCK_OFFSET_OPTIONS),
  offsetXL: PropTypes.oneOf(BLOCK_OFFSET_OPTIONS),
  offsetXS: PropTypes.oneOf(BLOCK_OFFSET_OPTIONS),
  size: PropTypes.oneOf(BLOCK_SIZE_OPTIONS),
  sizeL: PropTypes.oneOf(BLOCK_SIZE_OPTIONS),
  sizeM: PropTypes.oneOf(BLOCK_SIZE_OPTIONS),
  sizeS: PropTypes.oneOf(BLOCK_SIZE_OPTIONS),
  sizeXL: PropTypes.oneOf(BLOCK_SIZE_OPTIONS),
  sizeXS: PropTypes.oneOf(BLOCK_SIZE_OPTIONS),
  text: PropTypes.oneOf(ALIGNMENT_HORIZONTAL_OPTIONS),
  textL: PropTypes.oneOf(ALIGNMENT_HORIZONTAL_OPTIONS),
  textM: PropTypes.oneOf(ALIGNMENT_HORIZONTAL_OPTIONS),
  textS: PropTypes.oneOf(ALIGNMENT_HORIZONTAL_OPTIONS),
  textXL: PropTypes.oneOf(ALIGNMENT_HORIZONTAL_OPTIONS),
  textXS: PropTypes.oneOf(ALIGNMENT_HORIZONTAL_OPTIONS)
}

// Export
export default Item
