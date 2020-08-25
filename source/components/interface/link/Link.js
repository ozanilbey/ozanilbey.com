// Modules
import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

// Utilities
import { getClassName } from '~/utilities/component'

// Style
import './Link.less'

// Subcomponent: PseudoLink
const PseudoLink = props => props.to
  ? <RouterLink {...props}>{props.children}</RouterLink>
  : <a {...props}>{props.children}</a>

// Component: Link
function Link (props) {
  const className = getClassName(props.className, {
    type: props.type
  })
  return (
    <PseudoLink
      {...props}
      data-interface="link"
      className={className} />
  )
}

// Properties
Link.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['regular', 'cta', 'external', 'download'])
}
PseudoLink.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node
}

// Export
export default Link
