// Modules
import { useMemo } from 'react'
import PropTypes from 'prop-types'

// Components
import Content from '@source/components/layout/content/Content'
import Link from '@source/components/interface/link/Link'
import Page from '@source/components/layout/page/Page'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Styles
import './Excerpt.scss'

// Data (Local)
const EXCERPT_COLUMNS_IN_ORDER = ['year', 'role', 'tags', 'client', 'demo']

// Functions (Local)
function getExcerpt (data) {
  let { client, isLive, link, repository, role, tags, year } = data
  const excerpt = { role, tags }
  if (year) excerpt.year = typeof year === 'number' ? year.toString() : year.join('–')
  if (client) excerpt.client = { link: client.link, name: client.fullName || client.name }
  if (isLive && (link || repository)) excerpt.demo = { link, repository }
  return excerpt
}

// Section: Works > Work > Excerpt
function Excerpt ({ className, data, style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Data (Memoized)
  const excerpt = useMemo(() => getExcerpt(data), [data])

  // Functions
  function renderBlock (id, value) {
    if (!id || !value) return null
    if (Array.isArray(value)) {
      return value.map((item, index) =>
        <dd
          key={index}
          className="item">
          {renderValue(id, item)}
        </dd>
      )
    }
    return <dd className="item">{renderValue(id, value)}</dd>
  }
  function renderValue (id, value) {
    switch (id) {
      case 'client':
        if (typeof value === 'string') return value
        else if (value.link) return renderLink(value.link, value.name)
        return null
      case 'demo':
        return (
          <>
            {value.link && renderLink(value.link, 'See it live')}
            {value.repository && renderLink(value.repository, 'View repository')}
          </>
        )
      default:
        return value
    }
  }
  function renderLink (url, text) {
    return (
      <Link
        isExternal
        arrow="upright"
        className="link"
        href={`//${url}`}>
        {text}
      </Link>
    )
  }

  // Render
  return (
    <Page.Section
      name="excerpt"
      spacing="none"
      {...attributes}
      className={className}
      style={style}>
      <Content>
        {Object
          .keys(excerpt)
          .sort((x, y) => EXCERPT_COLUMNS_IN_ORDER.indexOf(x) - EXCERPT_COLUMNS_IN_ORDER.indexOf(y))
          .map(key =>
            <dl
              key={key}
              className={getClassName('block', { [key]: true })}>
              <dt className="label">{key}</dt>
              {renderBlock(key, excerpt[key])}
            </dl>
          )
        }
      </Content>
    </Page.Section>
  )
}

// Properties
Excerpt.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  style: PropTypes.object
}

// Export
export default Excerpt
