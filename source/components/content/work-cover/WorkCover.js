// Modules
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'

// Subcomponents
import Collection from './types/collection/Collection'
import CorporateIdentity from './types/corporate-identity/CorporateIdentity'
import Website from './types/website/Website'
import GraphicDesign from './types/graphic-design/GraphicDesign'
import MobileApplication from './types/mobile-application/MobileApplication'
import ResponsiveWebsite from './types/responsive-website/ResponsiveWebsite'
import SocialMedia from './types/social-media/SocialMedia'

// Helpers
import { checkIfClient } from '~/helpers/document'

// Utilities
import { slug } from '~/utilities/format'

// Constants
import { WORK_COVER_TYPES } from '~/constants/content'

// Style
import './WorkCover.less'

// Component: Content > Work Cover
function WorkCover (props) {
  // References
  const container = useRef()

  // State
  const [index, setIndex] = useState(0)
  const [unitSize, setUnitSize] = useState(0)

  // Data
  const type = props.types[index]
  const elementProps = {
    unitSize,
    data: props.data
  }

  // Effects
  useEffect(() => {
    setIndex(0)
    let timer
    if (checkIfClient()) {
      timer = setInterval(
        () => setIndex(index => (index + 1) % props.types.length),
        5000
      )
    }
    return () => {
      if (checkIfClient()) clearInterval(timer)
    }
  }, [props.types, props.data])
  useLayoutEffect(() => {
    function handleResize () {
      setUnitSize(container.current.clientWidth / 48)
    }
    if (checkIfClient()) {
      handleResize()
      window.addEventListener('resize', handleResize)
    }
    return () => {
      if (checkIfClient()) window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Methods
  function renderElements (type) {
    switch (type) {
      case 'collection':
        return <Collection {...elementProps} />
      case 'corporate-identity':
        return <CorporateIdentity {...elementProps} />
      case 'graphic-design':
        return <GraphicDesign {...elementProps} />
      case 'mobile-application':
        return <MobileApplication {...elementProps} />
      case 'responsive-website':
        return <ResponsiveWebsite {...elementProps} />
      case 'social-media':
        return <SocialMedia {...elementProps} />
      case 'website':
        return <Website {...elementProps} />
    }
  }

  // Render
  return (
    <div
      ref={container}
      data-content="work-cover"
      data-work-cover={type}
      style={{ fontSize: `${unitSize}px` }}>
      {props.types.length > 1 &&
        <ul className="indicator">
          {props.types.map((type, optionIndex) =>
            <li
              key={optionIndex}
              className={optionIndex === index ? 'active' : null}>
            </li>
          )}
        </ul>
      }
      {container.current &&
      <div className="content">
        {renderElements(type)}
      </div>
      }
    </div>
  )
}

// Properties
WorkCover.propTypes = {
  width: PropTypes.number,
  types: PropTypes.arrayOf(
    PropTypes.oneOf(WORK_COVER_TYPES.map(type => slug(type)))
  ).isRequired,
  data: PropTypes.object.isRequired
}

// Export
export default WorkCover
