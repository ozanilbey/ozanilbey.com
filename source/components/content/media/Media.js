// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Helpers
import { getAttributes } from '~/helpers/component'

// Constants
import { MEDIA_URL } from '~/constants/settings'
import { MEDIA_TYPE_OPTIONS } from '~/constants/options'

// Style
import './Media.less'

// Component: Content > Media
function Media (props) {
  // Data
  const attributes = {
    'data-content': 'media',
    'data-media': props.type,
    ...getAttributes(props, ['className', 'style', 'alt', 'title', 'data', 'aria'])
  }

  // Methods
  function getFilters () {
    const filters = []
    if (props.width || props.height) filters.push(props.willCrop ? 'c_lfill,g_north' : 'c_limit')
    if (props.width) filters.push(`w_${props.width}`)
    if (props.height) filters.push(`h_${props.height}`)
    return filters.length > 0 ? `/${filters.join(',')}` : ''
  }
  function getURL (type) {
    const filters = getFilters()
    return MEDIA_URL + (type === 'video' ? '/video/upload' : '') + filters + props.source
  }

  // Render
  if (!props.source) return null
  switch (props.type) {
    case 'image':
      return (
        <img
          {...attributes}
          src={getURL()} />
      )
    case 'video':
      return (
        <video
          {...attributes}
          autoPlay={props.willAutoplay}
          controls={!props.willHideControls}
          loop={props.willLoop}>
          <source
            src={getURL('video')}
            type="video/mp4" />
        </video>
      )
    case 'document':
      return (
        <span
          {...attributes}
          style={{
            ...props.style,
            ...(props.documentAspectRatio ? { paddingBottom: `${props.documentAspectRatio * 100}%` } : {})
          }}>
          <object
            type="application/pdf"
            data={`${getURL()}?#pagemode=none&scrollbar=0&toolbar=0&statusbar=0&navpanes=0&view=FitB`}>
            <embed src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${getURL()}`} />
          </object>
        </span>
      )
  }
}

// Properties
Media.propTypes = {
  className: PropTypes.string,
  documentAspectRatio: PropTypes.number,
  filters: PropTypes.object,
  height: PropTypes.number,
  source: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(MEDIA_TYPE_OPTIONS),
  width: PropTypes.number,
  willAutoplay: PropTypes.bool,
  willCrop: PropTypes.bool,
  willHideControls: PropTypes.bool,
  willLoop: PropTypes.bool
}
Media.defaultProps = {
  style: {}
}

// Export
export default Media
