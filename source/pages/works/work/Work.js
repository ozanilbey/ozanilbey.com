// Modules
import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

// Components
import Container from '~/components/layout/container/Container'
import Page from '~/components/layout/page/Page'
import Link from '~/components/interface/link/Link'

// Hooks
import useWork from '~/hooks/useWork'

// Style
import './Work.less'

// Page: Works > Work
function Work (props) {
  // Data
  const { meta, summary } = useWork(props.slug)

  // Methods
  function getTitle ({ brand, label, output }) {
    let title = brand || 'Collection:'
    if (label) title = `${title} ${label}`
    if (output) title = `${title} ${output}`
    return title
  }
  function getExcerpt () {
    const excerpt = {
      year: typeof meta.year === 'number' ? meta.year : meta.year.join('–'),
      tags: meta.tags.join(', ')
    }
    if (meta.client) {
      excerpt.client = meta.client.fullName || meta.client.name
      if (meta.client.link) excerpt.client = <Link type="external" href={`//${meta.client.link}`}>{excerpt.client}</Link>
    }
    return (
      <ul>
        {Object.keys(excerpt).map(key =>
          <li key={key}>
            <strong>{key}</strong>
            {excerpt[key]}
          </li>
        )}
        {meta.isLive &&
          <li>
            <strong>demo</strong>
            <Link
              type="external"
              className="live"
              href={`//${meta.link}`}>
              See it live
            </Link>
          </li>
        }
      </ul>
    )
  }

  // Render
  if (!meta || !summary) return null
  return (
    <Page
      name={props.slug}
      parentName="works">
      <Helmet>
        <title>{getTitle(meta)} | ozanilbey:works</title>
      </Helmet>
      <Page.Section name="excerpt">
        <Container isBlockLayout>
          {getExcerpt()}
        </Container>
      </Page.Section>
      <Page.Section name="summary">
        {summary}
      </Page.Section>
    </Page>
  )
}

Work.propTypes = {
  slug: PropTypes.string
}

// Export
export default Work
