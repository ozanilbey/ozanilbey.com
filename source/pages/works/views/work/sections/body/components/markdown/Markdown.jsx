// Modules
import { Children, Fragment } from 'react'
import MarkdownToJSX from 'markdown-to-jsx'
import PropTypes from 'prop-types'

// Components
import Callout from '@source/components/interface/callout/Callout'
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Link from '@source/components/interface/link/Link'
import Media from '@source/components/model/media/Media'
import Separator from '@source/components/layout/separator/Separator'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Constants
import { SPACING_OPTIONS } from '@source/constants/layout'

// Styles
import './Markdown.scss'

// Component: Works > Work > Body > Markdown
function Markdown ({ className, content, style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])
  const segments = content
    ?.trim()
    ?.split(/\n[ \t]*\n[ \t]*\n+/) // Splits segments by double blank line
    ?.map(chunk => {
      const text = chunk.trim()
      const isSeparator = /^-{3,}$/.test(text)
      if (isSeparator) {
        // Maps dash count to spacing value based on index within available options: 3 → medium, 4 → large, 5 → xlarge
        const spacing = SPACING_OPTIONS[Math.min(text.length, SPACING_OPTIONS.length - 1)]
        return { spacing, type: 'separator' }
      }
      return { markdown: chunk, type: 'content' }
    })
  const configuration = {
    overrides: {
      a: { component: renderLink },
      blockquote: { component: renderCallout },
      del: { component: renderNote },
      em: { component: renderDetail },
      img: { component: renderMedia },
      p: { component: renderNode },
      ...Object.fromEntries(
        [1, 2, 3, 4, 5, 6].map(rank => [
          `h${rank}`,
          { component: ({ children }) => renderHeading(rank, children) }
        ])
      )
    },
    wrapper: Fragment
  }

  // Functions
  function checkIfWhitespace (node) {
    return node?.type === 'br' || (typeof node === 'string' && !node.trim())
  }
  function unwrapParagraph (children) {
    const items = Children.toArray(children)
    return items.length === 1 && items[0]?.type === renderNode ? items[0].props.children : children
  }
  function renderHeading (rank, content) {
    return (
      <Heading
        rank={rank}
        className="title">
        {content}
      </Heading>
    )
  }
  function renderNode ({ children }) {
    // Renders wrapped items in their expected specific format (media, notes, details, paragraphs)
    const nodes = Children
      .toArray(children)
      .filter(child => !checkIfWhitespace(child))
    if (nodes.length === 1 && (nodes[0]?.type === renderMedia || nodes[0]?.type === renderNote || nodes[0]?.type === renderDetail)) return nodes[0]
    return renderParagraph(children)
  }
  function renderParagraph (content) {
    return <p className="paragraph">{content}</p>
  }
  function renderNote ({ children }) {
    return <small className="note">{children}</small>
  }
  function renderDetail ({ children }) {
    return <i className="detail">{children}</i>
  }
  function renderLink ({ children, href: target }) {
    const isExternal = /^(https?:)?\/\//.test(target)
    return (
      <Link
        to={target}
        isExternal={isExternal}
        {...(isExternal && { arrow: 'upright' })}>
        {children}
      </Link>
    )
  }
  function renderCallout ({ children }) {
    return (
      <Callout
        size="large"
        intent="information"
        hasBackground={false}
        className="information">
        {unwrapParagraph(children)}
      </Callout>
    )
  }
  function renderMedia ({ alt: type = 'image', src: source }) {
    const [path, query = ''] = source.split('?')
    const parameters = new URLSearchParams(query)
    const properties = {}
    const classNames = ['media']
    if (parameters.has('adaptive')) properties.isAdaptive = true
    if (parameters.has('autoplay')) properties.willAutoplay = true
    if (parameters.has('height')) properties.height = Number(parameters.get('height'))
    if (parameters.has('hideControls')) properties.willHideControls = true
    if (parameters.has('loop')) properties.willLoop = true
    if (parameters.has('spaced')) classNames.push('spaced')
    if (parameters.has('weak')) classNames.push('weak')
    if (parameters.has('width')) properties.width = Number(parameters.get('width'))
    return (
      <Media
        {...properties}
        type={type}
        path={path}
        className={classNames.join(' ')} />
    )
  }

  // Render
  if (!(segments?.length > 0)) return null
  return (
    <div
      {...attributes}
      data-component="markdown"
      className={getClassName(className)}
      style={style}>
      {segments.map((segment, index) =>
        segment.type === 'separator'
          ? <Separator
            key={index}
            spacing={segment.spacing} />
          : <Content key={index}>
            <MarkdownToJSX options={configuration}>{segment.markdown}</MarkdownToJSX>
          </Content>
      )}
    </div>
  )
}

// Properties
Markdown.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  style: PropTypes.object
}

// Export
export default Markdown
