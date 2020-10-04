// Modules
import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

// Components
import Container from '~/components/layout/container/Container'
import Page from '~/components/layout/page/Page'
import Link from '~/components/interface/link/Link'
import WorkBrand from '~/components/content/work-brand/WorkBrand'
import WorkCover from '~/components/content/work-cover/WorkCover'

// Content
import WorkSummary from '~/content/work-summary/WorkSummary'

// Subcontent
import Preview from './content/preview/Preview'
import Options from './content/options/Options'

// Hooks
import useWork from '~/hooks/useWork'

// Helpers
import { getWorkTitle } from '~/helpers/content'

// Utilities
import { slug } from '~/utilities/format'

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
      <Preview data={work}>
        <WorkBrand data={work} />
        <WorkCover
          data={work}
          types={work.preview.map(item => slug(item))} />
      </Preview>
      <Page.Section name="excerpt">
        <Container isBlockLayout>
          {getExcerpt()}
        </Container>
      </Page.Section>
      <WorkSummary identifier={work.slug} />
      <Promotion />
      <Options
        label={`${getWorkTitle(work)} by ozanilbey`}
        recommendation={props.next} />
    </Page>
  )
}

Work.propTypes = {
  next: PropTypes.object,
  slug: PropTypes.string
}

// Export
export default Work
