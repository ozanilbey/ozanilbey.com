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
const COLUMNS_IN_ORDER = ['year', 'role', 'tags', 'client', 'demo']
const MAXIMUM_COLUMN_COUNT_PER_ROW = 3

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
  const columns = useMemo(() => {
    const extractedColumns = Object.keys(excerpt)
    return COLUMNS_IN_ORDER.filter(item => extractedColumns.includes(item) && excerpt[item])
  }, [excerpt])
  const rows = useMemo(() => {
    const count = MAXIMUM_COLUMN_COUNT_PER_ROW
    return Array.from(
      { length: Math.ceil(columns.length / count) },
      (item, index) => columns.slice(index * count, index * count + count)
    )
  }, [columns])

  // Functions
  function renderDataList (id, value) {
    if (!id || !value) return null
    return (
      <dl
        key={id}
        className="list">
        <dt className="term">{id}</dt>
        {renderDataDefinition(id, value)}
      </dl>
    )
  }
  function renderDataDefinition (id, value) {
    if (!id || !value) return null
    if (Array.isArray(value)) {
      return value.map((item, index) =>
        <dd
          key={index}
          className="definition">
          {renderValue(id, item)}
        </dd>
      )
    }
    return <dd className="definition">{renderValue(id, value)}</dd>
  }
  function renderValue (id, value) {
    switch (id) {
      case 'client':
        const name = value.fullName || value.name
        if (value.link) return renderLink(value.link, name)
        return name
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
        to={`//${url}`}
        arrow="upright"
        className="link">
        {text}
      </Link>
    )
  }

  // Render
  return (
    <Page.Section
      name="excerpt"
      spacing="xsmall"
      {...attributes}
      className={className}
      style={style}>
      <Content>
        <ul className="rows">
          {rows.map((row, rowIndex) =>
            <li
              key={rowIndex}
              className="row">
              {row.map(column => renderDataList(column, excerpt[column]))}
            </li>
          )}
        </ul>
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
