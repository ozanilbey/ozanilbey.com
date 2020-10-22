// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Helpers
import { getAttributes } from '~/helpers/component'

// Constants
import { MEDIA_ENDPOINT } from '~/constants/settings'
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
    return filters.length > 0 ? `${filters.join(',')}` : ''
  }
  function getURL () {
    const filters = getFilters()
    return `${MEDIA_ENDPOINT}/${filters}/v1${props.source}`
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
      return null
    case 'document':
      return null
  }
}

// Properties
Media.propTypes = {
  className: PropTypes.string,
  filters: PropTypes.object,
  height: PropTypes.number,
  source: PropTypes.string,
  type: PropTypes.oneOf(MEDIA_TYPE_OPTIONS),
  width: PropTypes.number,
  willCrop: PropTypes.bool
}

// Export
export default Media
