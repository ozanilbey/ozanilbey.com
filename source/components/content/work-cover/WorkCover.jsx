// Modules
import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

// Components
import Branding from './components/branding/Branding'
import Collection from './components/collection/Collection'
import CorporateIdentity from './components/corporate-identity/CorporateIdentity'
import Document from './components/document/Document'
import GraphicDesign from './components/graphic-design/GraphicDesign'
import MobileApplication from './components/mobile-application/MobileApplication'
import ResponsiveWebsite from './components/responsive-website/ResponsiveWebsite'
import SocialMedia from './components/social-media/SocialMedia'
import Website from './components/website/Website'

// Hooks
import useUnitSize from '@source/hooks/useUnitSize'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Utilities
import { slug } from '@source/utilities/format'

// Constants
import { WORK_COVER_TYPES } from '@source/constants/content'

// Styles
import './WorkCover.scss'

// Constants (Local)
const WORK_COVER_TYPE_ELEMENT_MAPPING = {
  branding: Branding,
  collection: Collection,
  'corporate-identity': CorporateIdentity,
  document: Document,
  'graphic-design': GraphicDesign,
  'mobile-application': MobileApplication,
  'responsive-website': ResponsiveWebsite,
  'social-media': SocialMedia,
  website: Website
}

// Component: Content > Work cover
function WorkCover ({ className, data, style, types, ...rest }) {
  // References
  const container = useRef()

  // State
  const [activeTypeIndex, setActiveTypeIndex] = useState(0)
  const [activatedTypeIndexes, setActivatedTypeIndexes] = useState([0])

  // Data
  const type = types[activeTypeIndex]
  const attributes = getAttributes(rest, ['aria', 'data'])
  const unitSize = useUnitSize(container, width => (width / 48) || 10)

  // Functions
  function renderType (type, typeIndex) {
    if (!activatedTypeIndexes.includes(typeIndex)) return null
    const Element = WORK_COVER_TYPE_ELEMENT_MAPPING[type]
    if (!Element) return null
    return (
      <Element
        data={data}
        key={typeIndex}
        unitSize={unitSize}
        className={getClassName('type', { [type]: true, active: typeIndex === activeTypeIndex })} />
    )
  }

  // Effects
  useEffect(() => {
    setActiveTypeIndex(0)
    setActivatedTypeIndexes([0])
    let timer = setInterval(() => setActiveTypeIndex(activeTypeIndex => (activeTypeIndex + 1) % types.length), 2500)
    return () => clearInterval(timer)
  }, [data.slug, types.length]) // Restarts when data.slug changes
  useEffect(() => {
    setActivatedTypeIndexes(activatedTypeIndexes => {
      if (activatedTypeIndexes.includes(activeTypeIndex)) return activatedTypeIndexes
      return [...activatedTypeIndexes, activeTypeIndex]
    })
  }, [activeTypeIndex, types.length])

  // Render
  if (!type) return null
  return (
    <div
      {...attributes}
      ref={container}
      data-cover={type}
      className={className}
      data-content="work-cover"
      style={{
        ...style,
        fontSize: `${unitSize}px`
      }}>
      {types.length > 1 &&
        <ul className="indicators">
          {types.map((type, typeIndex) =>
            <li
              key={typeIndex}
              className={getClassName('indicator', { active: typeIndex === activeTypeIndex })}>
            </li>
          )}
        </ul>
      }
      <div className="content">
        {types.map((type, typeIndex) => renderType(type, typeIndex))}
      </div>
    </div>
  )
}

// Properties
WorkCover.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  types: PropTypes.arrayOf(
    PropTypes.oneOf(
      WORK_COVER_TYPES.map(type => slug(type))
    )
  ).isRequired,
  style: PropTypes.object
}

// Export
export default WorkCover
