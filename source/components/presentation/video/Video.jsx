// Modules
import { useMemo } from 'react'
import PropTypes from 'prop-types'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './Video.scss'

// Component: Presentation > Video
function Video ({ className, height, source, style, width, willAutoplay, willHideControls, willLoop, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data', 'title'])

  // Data (Memoized)
  const properties = useMemo(() => ({
    ...(willAutoplay && { autoPlay: true, muted: true, playsInline: true }),
    ...(!willHideControls && { controls: true }),
    ...(willLoop && { loop: true }),
  }), [willLoop, willAutoplay, willHideControls])

  // Render
  if (!source) return null
  return (
    <video
      width={width}
      height={height}
      {...attributes}
      {...properties}
      className={className}
      data-presentation="video"
      style={style}>
      <source
        src={source}
        type="video/mp4" />
    </video>
  )
}

// Properties
Video.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  source: PropTypes.string.isRequired,
  style: PropTypes.object,
  width: PropTypes.number,
  willAutoplay: PropTypes.bool,
  willHideControls: PropTypes.bool,
  willLoop: PropTypes.bool
}

// Export
export default Video
