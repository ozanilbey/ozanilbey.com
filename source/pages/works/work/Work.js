// Modules
import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

// Components
import Container from '~/components/layout/container/Container'
import Page from '~/components/layout/page/Page'
import Link from '~/components/interface/link/Link'

// Content
import WorkSummary from '~/content/work-summary/WorkSummary'

// Hooks
import useWork from '~/hooks/useWork'

// Helpers
import { getWorkTitle } from '~/helpers/content'

// Style
import './Work.less'

// Page: Works > Work
function Work (props) {
  // Data
  const work = useWork(props.slug)

  // Methods
  function getExcerpt () {
    const excerpt = {
      year: typeof work.year === 'number' ? work.year : work.year.join('–'),
      tags: work.tags.join(', ')
    }
    if (work.client) {
      excerpt.client = work.client.fullName || work.client.name
      if (work.client.link) excerpt.client = <Link type="external" href={`//${work.client.link}`}>{excerpt.client}</Link>
    }
    return (
      <ul>
        {Object.keys(excerpt).map(key =>
          <li key={key}>
            <strong>{key}</strong>
            {excerpt[key]}
          </li>
        )}
        {work.isLive &&
          <li>
            <strong>demo</strong>
            <Link
              type="external"
              className="live"
              href={`//${work.link}`}>
              See it live
            </Link>
          </li>
        }
      </ul>
    )
  }

  // Render
  if (!work) return null
  return (
    <Page
      name={props.slug}
      parentName="works">
      <Helmet>
        <title>{getWorkTitle(work)} | ozanilbey:works</title>
      </Helmet>
      <Page.Section name="excerpt">
        <Container isBlockLayout>
          {getExcerpt()}
        </Container>
      </Page.Section>
      <WorkSummary identifier={work.slug} />
    </Page>
  )
}

Work.propTypes = {
  slug: PropTypes.string
}

// Export
export default Work
