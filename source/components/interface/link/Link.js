// Modules
import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

// Helpers
import { getClassName, getAttributes } from '~/helpers/component'

// Style
import './Link.less'

// Subcomponent: PseudoLink
const PseudoLink = props => props.to
  ? <RouterLink {...props}>{props.children}</RouterLink>
  : <a {...props}>{props.children}</a>

// Component: Interface > Link
function Link (props) {
  const className = getClassName(props.className, {
    type: props.type,
    arrow: props.isArrowHidden ? 'hidden' : null,
    'text-line': props.isSingleLine ? 'single' : 'auto'
  })
  const attributes = getAttributes(props, ['style', 'href', 'to', 'target', 'rel', 'download', 'onClick', 'data', 'aria'])
  const additionalAttributes = props.type === 'external'
    ? {
      target: '_blank',
      rel: 'noreferrer'
    }
    : {}
  return (
    <PseudoLink
      {...attributes}
      {...additionalAttributes}
      data-interface="link"
      className={className}>
      {props.children}
    </PseudoLink>
  )
}

// Properties
Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isArrowHidden: PropTypes.bool,
  isSingleLine: PropTypes.bool,
  type: PropTypes.oneOf(['regular', 'cta', 'back', 'external', 'download'])
}
PseudoLink.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node
}

// Export
export default Link
