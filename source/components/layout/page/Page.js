// Modules
import React, { cloneElement, forwardRef } from 'react'
import PropTypes from 'prop-types'

// Components
import Section from '~/components/layout/section/Section'

// Utilities
import { getClassName } from '~/utilities/component'

// Style
import './Page.less'

// Component: Layout > Page
function Page (props) {
  // Data
  const className = getClassName(props.className, {
    decoration: props.isZebraStriped ? 'zebra-stripes' : null,
    screen: 'full'
  })

  // Methods
  const renderChildren = children => {
    return React.Children.map(children, child => {
      if (!child.props) return child
      if (child.props.isHidden) return null
      return cloneElement(child, child.props)
    })
  }

  // Render
  return (
    <main
      data-layout="page"
      data-page={props.name}
      data-parent={props.parentName}
      className={className}>
      {renderChildren(props.children)}
    </main>
  )
}

// Properties
Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isZebraStriped: PropTypes.bool,
  name: PropTypes.string,
  parentName: PropTypes.string
}
Page.Header = forwardRef((props, ref) => <Section ref={ref} semanticTag="header" {...props} />)
Page.Header.displayName = 'Page.Header'
Page.Section = forwardRef((props, ref) => <Section ref={ref} semanticTag="section" {...props} />)
Page.Section.displayName = 'Page.Section'
Page.Footer = forwardRef((props, ref) => <Section ref={ref} semanticTag="footer" {...props} />)
Page.Footer.displayName = 'Page.Footer'

// Export
export default Page
