// Modules
import {
  Link as RouterLink,
  NavLink as NavigationLink
} from 'react-router-dom'
import PropTypes from 'prop-types'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Styles
import './Link.scss'

// Constants (Local)
const LINK_TYPE_ELEMENT_MAPPING = Object.freeze({
  anchor: 'a',
  navigation: NavigationLink,
  router: RouterLink
})

// Functions (Local)
function getDescription (pathOrURL) {
  const description = (
    pathOrURL
      ?.replace(/^(https?:)?\/\//, '') // Removes protocol
      ?.replace(/^www\./, '') // Removes www
      ?.replace(/\.[a-z0-9]+/gi, '') // Removes TLD
      ?.replace(/[\-\/\?\#\=]/g, ' ') // Replaces special URL characters with space
      ?.toLowerCase()
      ?.trim()
  )
  return description || 'link'
}

// Component: Interface > Link
function Link ({ arrow, children, className, href, isDisabled = false, isExact = false, isExternal = false, isReverse = false, onClick, style, to, variant = 'default', ...rest }) {
  // Data
  const type = isExternal
    ? 'anchor'
    : typeof isExact === 'boolean' ? 'navigation' : 'router'
  const Element = LINK_TYPE_ELEMENT_MAPPING[type]
  const description = getDescription(href || to)
  const attributes = getAttributes(rest, ['aria', 'data', 'download', 'title'])
  const properties = {
    ...(variant === 'button' && { role: 'button' }),
    ...(type === 'navigation' && { end: isExact }),
    ...(!isDisabled && (type === 'anchor' ? { href: to } : { to })),
    ...(isExternal && { rel: 'noopener noreferrer', target: '_blank' })
  }

  // Render
  return (
    <Element
      {...attributes}
      {...properties}
      disabled={isDisabled}
      data-interface="link"
      aria-label={attributes['aria-label'] || description}
      className={getClassName(className, { arrow, reversed: isReverse, type, variant })}
      onClick={onClick}
      style={style}>
      {children}
    </Element>
  )
}

// Properties
Link.propTypes = {
  arrow: PropTypes.oneOf(
    ['down', 'left', 'right', 'upright']
  ),
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  isDisabled: PropTypes.bool,
  isExact: PropTypes.bool,
  isExternal: PropTypes.bool,
  isReverse: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
  to: PropTypes.string,
  variant: PropTypes.oneOf(
    ['classic', 'button', 'default']
  )
}

// Export
export default Link
