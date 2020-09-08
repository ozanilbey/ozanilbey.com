// Modules
import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

// Utilities
import { getClassName, getAttributes } from '~/utilities/component'

// Style
import './Heading.less'

// Component: Typography > Heading
const Heading = forwardRef((props, ref) => {
  // Data
  const TagName = `h${props.rank}`
  const className = getClassName(props.className, {
    'heading-size': props.rank === 1 ? props.displaySize : 'normal',
    'text-line': props.isSingleLine ? 'single' : 'auto'
  })
  const attributes = getAttributes(props, ['style', 'data', 'aria'])

  // Render
  return (
    <TagName
      {...attributes}
      ref={ref}
      data-type="heading"
      className={className}>
      {props.children}
    </TagName>
  )
})

// Properties
Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  displaySize: PropTypes.oneOf(['normal', 'big', 'bigger', 'biggest']),
  isSingleLine: PropTypes.bool,
  rank: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
}
Heading.displayName = 'Heading'
Heading.defaultProps = {
  displaySize: 'normal',
  isSingleLine: false,
  rank: 1
}

// Export
export default Heading
