// Modules
import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Constants
import { MEDIA_URL } from '@source/constants/environment'
import { MEDIA_TYPES } from '@source/constants/options'

// Styles
import './Media.scss'

// Functions (Local)
function getDescription (path) {
  return path
    .replace(/^\//, '')
    .replace(/\..+$/, '')
    .replace(/[-/]/g, ' ')
    .trim()
}

// Component: Content > Media
function Media ({ className, description, documentAspectRatio, height, isAdaptive, source, style, type, width, willAutoplay, willCrop, willHideControls, willLoop, ...rest }) {
  // State
  const [imageSourceSet, setImageSourceSet] = useState(null)

  // Data
  const attributes = getAttributes(rest, ['aria', 'data', 'title'])

  // Functions
  function getDocumentStyle () {
    if (!documentAspectRatio) return {}
    return { paddingBottom: `${documentAspectRatio * 100}%` }
  }
  function renderMedia () {
    switch (type) {
      case 'image':
        return (
          <img
            src={getURL('image')}
            srcSet={imageSourceSet}
            className={isAdaptive ? 'monocolor' : ''}
            alt={description || getDescription(source)} />
        )
      case 'video':
        return (
          <video
            loop={willLoop}
            autoPlay={willAutoplay}
            controls={!willHideControls}>
            <source
              src={getURL('video')}
              type="video/mp4" />
          </video>
        )
      case 'document':
        return (
          <object
            type="application/pdf"
            data={`${getURL('image')}?#pagemode=none&scrollbar=0&toolbar=0&statusbar=0&navpanes=0&view=FitB`}>
            <embed src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${getURL()}`} />
          </object>
        )
    }
  }

  // Functions (Memoized)
  const getFilters = useCallback(({ renderFactor = 1 } = {}) => {
    const filters = []
    if (width || height) filters.push(willCrop ? 'c_lfill,g_north' : 'c_limit')
    if (renderFactor > 1) filters.push(`dpr_${renderFactor}`)
    if (width) filters.push(`w_${width}`)
    if (height) filters.push(`h_${height}`)
    return filters.length > 0 ? `/${filters.join(',')}` : ''
  }, [width, height, willCrop])
  const getURL = useCallback((type, options) => {
    const filters = getFilters(options)
    return `${MEDIA_URL}${type === 'video' ? '/video/upload' : ''}${filters}${source}`
  }, [getFilters, source])

  // Effects
  useEffect(() => {
    async function updateImageSourceSet () {
      const response = await fetch(`${MEDIA_URL}/image/upload/fl_getinfo/${source}`)
      const data = await response.json()
      const { width: originalWidth, height: originalHeight } = data.input
      let devicePixelRatio = 1
      if (width && originalWidth > width) devicePixelRatio = originalWidth / width
      else if (height && originalHeight > height) devicePixelRatio = originalHeight / height
      devicePixelRatio = Math.min(2, devicePixelRatio)
      if (devicePixelRatio > 1) {
        const img = new Image()
        const imageSourceSet = `${getURL('image', { renderFactor: devicePixelRatio })} ${devicePixelRatio}x`
        img.srcset = imageSourceSet
        img.onload = () => setImageSourceSet(imageSourceSet)
      }
    }
    if (type === 'image' && window.devicePixelRatio > 1) updateImageSourceSet()
  }, [getURL, height, source, type, width])

  // Render
  if (!source) return null
  return (
    <div
      {...attributes}
      data-media={type}
      data-interface="media"
      className={getClassName(className, { type })}
      style={{
        ...style,
        ...(type === 'document' && getDocumentStyle())
      }}>
      {renderMedia()}
    </div>
  )
}

// Properties
Media.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  documentAspectRatio: PropTypes.number,
  height: PropTypes.number,
  isAdaptive: PropTypes.bool,
  source: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(
    MEDIA_TYPES
  ),
  width: PropTypes.number,
  willAutoplay: PropTypes.bool,
  willCrop: PropTypes.bool,
  willHideControls: PropTypes.bool,
  willLoop: PropTypes.bool
}

// Export
export default Media
