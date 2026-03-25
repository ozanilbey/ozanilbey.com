// Modules
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// Components
import Content from '@source/components/layout/content/Content'
import Page from '@source/components/layout/page/Page'
import WorkBrand from '@source/components/content/work-brand/WorkBrand'
import WorkCover from '@source/components/content/work-cover/WorkCover'

// Hooks
import useDimensions from '@source/hooks/useDimensions'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Utilities
import { slug } from '@source/utilities/format'

// Styles
import './Preview.scss'

// Section: Works > Work > Preview (Header)
function Preview ({ className, data, style, ...rest }) {
  // State
  const [factor, setFactor] = useState(0)

  // Data
  const { isMobile } = useDimensions()
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Effects
  useEffect(() => {
    function handleScroll () {
      if (window.scrollY <= 0) setFactor(0)
      else if (window.scrollY > 0 && window.scrollY <= 100) setFactor(window.scrollY)
      else setFactor(100)
    }
    if (!isMobile) window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  // Render
  if (!data) return null
  return (
    <Page.Header
      name="preview"
      {...attributes}
      spacing="xsmall"
      className={className}
      style={style}>
      <Content
        className="blurred colored"
        style={{ transform: `scale(${1 - (factor / 500)})` }}>
        <WorkBrand
          isCentered
          data={data}
          className="brand" />
        <WorkCover
          data={data}
          className="cover"
          types={data.preview.map(item => slug(item))} />
      </Content>
    </Page.Header>
  )
}

// Properties
Preview.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  style: PropTypes.object
}

// Export
export default Preview
