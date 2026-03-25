// Modules
import { Fragment, useCallback, useMemo } from 'react'
import MarkdownToJSX from 'markdown-to-jsx'
import PropTypes from 'prop-types'

// Components
import Code from '@source/components/presentation/code/Code'
import Link from '@source/components/interface/link/Link'

// Helpers
import { getAttributes } from '@source/helpers/component'
import { checkIfURL } from '@source/helpers/format'

// Styles
import './Markdown.scss'

// Component: Presentation > Markdown
function Markdown ({ children, className, style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Functions (Memoized)
  const renderPreservedBlock = useCallback(({ children, ...rest }) => {
    if ('type' in children && children['type'] === 'code') {
      let language = 'text' // Default monospaced text
      if (children.props.className?.startsWith?.('lang-')) {
        language = children.props.className.replace('lang-', '')
      }
      return <Code language={language}>{children.props.children}</Code>
    }
    return <pre {...rest}>{children}</pre>
  }, [])
  const renderLink = useCallback(({ children, href, ...properties }) => {
    const isInternal = !checkIfURL(href)
    return (
      <Link
        {...properties}
        to={href}
        isExternal={!isInternal}>
        {children}
      </Link>
    )
  }, [])

  // Data (Memoized)
  const configuration = useMemo(() => ({
    overrides: {
      a: { component: renderLink },
      pre: { component: renderPreservedBlock }
    },
    wrapper: Fragment
  }), [renderPreservedBlock])

  // Render
  if (!children) return null
  return (
    <span
      {...attributes}
      className={className}
      data-presentation="markdown"
      style={style}>
      <MarkdownToJSX options={configuration}>{children}</MarkdownToJSX>
    </span>
  )
}

// Properties
Markdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
}

// Export
export default Markdown
