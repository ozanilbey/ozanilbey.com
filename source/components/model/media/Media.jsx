// Modules
import PropTypes from 'prop-types'

// Components
import Document from '@source/components/presentation/document/Document'
import Image from '@source/components/presentation/image/Image'
import Video from '@source/components/presentation/video/Video'

// Hooks
import useSource from './hooks/useSource'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Constants
import { MEDIA_TYPES } from '@source/constants/options'

// Styles
import './Media.scss'

// Component: Model > Media
function Media ({ className, height, path, style, type, width, willCrop, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data', 'title'])
  const { source, sourceSet } = useSource({ height, path, type, width, willCrop })

  // Functions
  function renderContent () {
    switch (type) {
      case 'image':
        const { description, isAdaptive = false } = rest
        const screenReaderText = description || (
          path
            .replace(/\..+$/, '') // Removes extension
            .replace(/[\-\/]/g, ' ')
            .trim()
        )
        return (
          <Image
            width={width}
            height={height}
            source={source}
            sourceSet={sourceSet}
            description={screenReaderText}
            className={getClassName('image', { monocolor: isAdaptive })} />
        )
      case 'video':
        const { willAutoplay = false, willHideControls = false, willLoop = false } = rest
        return (
          <Video
            width={width}
            height={height}
            source={source}
            className="video"
            willLoop={willLoop}
            willAutoplay={willAutoplay}
            willHideControls={willHideControls} />
        )
      case 'document':
        const { aspectRatio } = rest
        return (
          <Document
            width={width}
            source={source}
            className="document"
            aspectRatio={aspectRatio} />
        )
      default:
        return null
    }
  }

  // Render
  if (!source) return null
  return (
    <div
      {...attributes}
      data-model="media"
      className={getClassName(className, { type })}
      style={style}>
      {renderContent()}
    </div>
  )
}

// Properties
Media.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  path: PropTypes.string.isRequired,
  style: PropTypes.object,
  type: PropTypes.oneOf(
    MEDIA_TYPES
  ),
  width: PropTypes.number,
  willCrop: PropTypes.bool
}

// Export
export default Media
