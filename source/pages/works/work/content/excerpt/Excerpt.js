// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Page from '~/components/layout/page/Page'
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'

// Style
import './Excerpt.less'

// Subcontent: Work > Excerpt
function Excerpt (props) {
  // Data
  const excerpt = {
    year: typeof props.data.year === 'number' ? props.data.year : props.data.year.join('–'),
    tags: props.data.tags.join(', ')
  }
  if (props.data.client) {
    excerpt.client = props.data.client.fullName || props.data.client.name
    if (props.data.client.link) excerpt.client = <Link type="external" href={`//${props.data.client.link}`}>{excerpt.client}</Link>
  }

  // Render
  return (
    <Page.Section
      name="excerpt"
      data-content="excerpt">
      <Container isBlockLayout>
        <ul>
          {Object.keys(excerpt).map(key =>
            <li
              key={key}
              className={key}>
              <strong>{key}</strong>
              {excerpt[key]}
            </li>
          )}
          {props.data.isLive &&
            <li>
              <strong>demo</strong>
              <Link
                type="external"
                className="live"
                href={`//${props.data.link}`}>
                See it live
              </Link>
            </li>
          }
        </ul>
      </Container>
    </Page.Section>
  )
}

Excerpt.propTypes = {
  data: PropTypes.object
}

// Export
export default Excerpt
