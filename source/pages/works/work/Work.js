// Modules
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Components
import Page from '~/components/layout/page/Page'
import WorkBrand from '~/components/content/work-brand/WorkBrand'
import WorkCover from '~/components/content/work-cover/WorkCover'

// Content
import Meta from '~/content/meta/Meta'
import WorkSummary from '~/content/work-summary/WorkSummary'
import Promotion from '~/content/promotion/Promotion'

// Subcontent
import Excerpt from './content/excerpt/Excerpt'
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

  useEffect(() => {
    setIsDisplayingHeader(true)
  }, [])

  // Render
  if (!props.data) return null
  return (
    <Page
      name={props.data.slug}
      parentName="works">
      <Meta
        page="works"
        subpage={props.data.slug}
        article={getWorkTitle(props.data)}
        description={props.data.description}
        keywords={props.data.keywords}
        preview={`${MEDIA_ENDPOINT}/v1/${props.data.slug}/thumbnail.png`} />
      {isDisplayingHeader
        ? <Preview data={props.data}>
          <WorkBrand data={props.data} />
          <WorkCover
            data={props.data}
            types={props.data.preview.map(item => slug(item))} />
        </Preview>
        : <p>Loading</p>
      }
      <Excerpt data={props.data} />
      <WorkSummary identifier={props.data.slug} />
      <Promotion />
      <Options
        label={`${getWorkTitle(props.data)} by ozanilbey`}
        recommendation={props.next} />
    </Page>
  )
}

Work.propTypes = {
  data: PropTypes.object,
  next: PropTypes.object
}

// Export
export default Work
