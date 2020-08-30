// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Link from '~/components/interface/link/Link'

// Style
import './Button.less'

// Utilities
import { getClassName } from '~/utilities/component'

// Subcomponent: PseudoButton
const PseudoButton = props => (props.href || props.to)
  ? <Link {...props}>{props.children}</Link>
  : <button {...props}>{props.children}</button>

// Component: Button
function Button (props) {
  const className = getClassName(props.className, { size: props.size })
  return (
    <PseudoButton
      {...props}
      role="button"
      data-interface="button"
      className={className} />
  )
}

// Properties
Button.propTypes = {
  size: PropTypes.string,
  isLoading: PropTypes.bool,
  className: PropTypes.string
}
PseudoButton.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node
}

// Export
export default Button
