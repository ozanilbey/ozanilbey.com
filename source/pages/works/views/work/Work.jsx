// Modules
import { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

// Sections
import Actions from './sections/actions/Actions'
import Body from './sections/body/Body'
import Excerpt from './sections/excerpt/Excerpt'
import Preview from './sections/preview/Preview'
import Promotion from '@source/sections/promotion/Promotion'

// Components
import Meta from '@source/components/utility/meta/Meta'
import Page from '@source/components/layout/page/Page'
import Separator from '@source/components/layout/separator/Separator'

// Helpers
import { getAttributes } from '@source/helpers/component'
import { getWorkPreviewImageURL, getWorkTitle } from '@source/helpers/content'

// Styles
import './Work.scss'

// View: Works > Work
function Work ({ category, className, data, next, style, ...rest }) {
  // Data
  const navigate = useNavigate()
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Data (Memoized)
  const title = useMemo(() => getWorkTitle(data), [data])
  const previewImageURL = useMemo(() => getWorkPreviewImageURL(data.slug), [data])

  // Effects
  useEffect(() => {
    if (!data) navigate('/works', { replace: true })
  }, [data, navigate])
  // Render
  if (!data) return null
  return (
    <Page.View
      name="work"
      {...attributes}
      data-work={data.slug}
      className={className}
      style={style}>
      <Meta
        page="works"
        article={title}
        view={data.slug}
        keywords={data.tags || []}
        description={data.description}
        previewImageURL={previewImageURL}
        recommendation={next?.slug ? `/works/${next.slug}` : null} />
      <Preview data={data} />
      <Excerpt data={data} />
      <Body identifier={data.slug} />
      <Separator />
      <Actions
        category={category}
        recommendation={next}
        label={`${title} by Ozan Yilmaz`} />
      <Promotion className="promotion" />
    </Page.View>
  )
}

// Properties
Work.propTypes = {
  category: PropTypes.object,
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  next: PropTypes.object,
  style: PropTypes.object
}

// Export
export default Work
