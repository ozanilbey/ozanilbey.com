// Modules
import { use } from 'react'
import PropTypes from 'prop-types'

// Components
import Markdown from './components/markdown/Markdown'
import Page from '@source/components/layout/page/Page'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Data (Local)
const fileCache = {}

// Constants (Local)
const FILES = import.meta.glob('@source/documents/works/*.md', { import: 'default', query: '?raw' })

// Functions (Local)
function loadDocument (slug) {
  if (slug in fileCache) return fileCache[slug]
  let importMarkdown = null
  for (const path in FILES) {
    if (path.endsWith(`/${slug}.md`)) {
      importMarkdown = FILES[path]
      break
    }
  }
  fileCache[slug] = importMarkdown ? importMarkdown() : Promise.resolve(null)
  return fileCache[slug]
}

// Styles
import './Body.scss'

// Section: Works > Work > Body
function Body ({ className, identifier, style, ...rest }) {
  // Data
  const content = use(loadDocument(identifier))
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  if (!content) return null
  return (
    <Page.Section
      name="body"
      {...attributes}
      className={className}
      style={style}>
      <Markdown content={content} />
    </Page.Section>
  )
}

// Properties
Body.propTypes = {
  className: PropTypes.string,
  identifier: PropTypes.string,
  style: PropTypes.object
}

// Export
export default Body
