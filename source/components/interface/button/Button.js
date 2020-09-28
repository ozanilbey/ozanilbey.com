// Modules
import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

// Components
import Link from '~/components/interface/link/Link'

// Style
import './Button.less'

// Utilities
import { getClassName } from '~/utilities/component'

// Subcomponent: PseudoButton
const PseudoButton = forwardRef((props, ref) => (props.href || props.to)
  ? <Link {...props} ref={ref}>{props.children}</Link>
  : <button {...props} ref={ref}>{props.children}</button>
)

// Component: Interface > Button
const Button = forwardRef((props, ref) => {
  const className = getClassName(props.className, { size: props.size })
  return (
    <PseudoButton
      {...props}
      ref={ref}
      role="button"
      data-interface="button"
      className={className} />
  )
})

// Properties
Button.propTypes = {
  size: PropTypes.string,
  isLoading: PropTypes.bool,
  className: PropTypes.string
}
Button.defaultProps = {
  size: 'medium'
}
Button.displayName = 'Button'
PseudoButton.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node
}
PseudoButton.displayName = 'PseudoButton'

// Export
export default Button
