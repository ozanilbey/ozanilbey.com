// Modules
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Components
import Container from '~/components/layout/container/Container'
import Page from '~/components/layout/page/Page'
import Link from '~/components/interface/link/Link'
import WorkBrand from '~/components/content/work-brand/WorkBrand'
import WorkCover from '~/components/content/work-cover/WorkCover'

// Content
import Meta from '~/content/meta/Meta'
import WorkSummary from '~/content/work-summary/WorkSummary'

// Subcontent
import Preview from './content/preview/Preview'
import Options from './content/options/Options'

// Helpers
import { getWorkTitle } from '~/helpers/content'

// Utilities
import { slug } from '~/utilities/format'

// Constants
import { MEDIA_ENDPOINT } from '~/constants/settings'

// Style
import './Work.less'

// Page: Works > Work
function Work (props) {
  // State
  const [isDisplayingHeader, setIsDisplayingHeader] = useState(false)

  // Methods
  function getExcerpt () {
    const excerpt = {
      year: typeof props.data.year === 'number' ? props.data.year : props.data.year.join('–'),
      tags: props.data.tags.join(', ')
    }
    if (props.data.client) {
      excerpt.client = props.data.client.fullName || props.data.client.name
      if (props.data.client.link) excerpt.client = <Link type="external" href={`//${props.data.client.link}`}>{excerpt.client}</Link>
    }
    return (
      <ul>
        {Object.keys(excerpt).map(key =>
          <li key={key}>
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
    )
  }

  useEffect(() => {
    setIsDisplayingHeader(true)
  }, [])

  // Render
  if (!props.data) return null
  return (
    <Page
      name={props.slug}
      parentName="works">
      <Meta
        page="works"
        subpage={props.slug}
        article={getWorkTitle(props.data)}
        description={props.data.description || null}
        keywords={props.data.keywords}
        preview={`${MEDIA_ENDPOINT}/${props.data.slug}/cover.png`} />
      {isDisplayingHeader
        ? <Preview data={props.data}>
          <WorkBrand data={props.data} />
          <WorkCover
            data={props.data}
            types={props.data.preview.map(item => slug(item))} />
        </Preview>
        : <p>Loading</p>
      }
      <Page.Section name="excerpt">
        <Container isBlockLayout>
          {getExcerpt()}
        </Container>
      </Page.Section>
      <WorkSummary identifier={props.data.slug} />
      <Options
        label={`${getWorkTitle(props.data)} by ozanilbey`}
        recommendation={props.next} />
    </Page>
  )
}

Work.propTypes = {
  data: PropTypes.object,
  next: PropTypes.object,
  slug: PropTypes.string
}

// Export
export default Work
