// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Utilities
import { getClassName } from '~/utilities/component'

// Style
import './Heading.less'

// Component: Typography > Heading
function Heading (props) {
  // Data
  const TagName = `h${props.rank}`
  const className = getClassName(props.className, {
    'heading-size': props.rank === 1 ? props.displaySize : 'normal',
    'text-line': props.isSingleLine ? 'single' : 'auto'
  })

  // Render
  return (
    <TagName
      data-type="heading"
      className={className}>
      {props.children}
    </TagName>
  )
}

// Properties
Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  displaySize: PropTypes.oneOf(['normal', 'big', 'bigger', 'biggest']),
  isSingleLine: PropTypes.bool,
  rank: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
}
Heading.defaultProps = {
  displaySize: 'normal',
  isSingleLine: false,
  rank: 1
}

// Export
export default Heading
