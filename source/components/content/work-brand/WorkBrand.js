// Modules
import React, { useRef } from 'react'
import PropTypes from 'prop-types'

// Components
import ColorFill from '~/components/model/color-fill/ColorFill'
import Media from '~/components/content/media/Media'

// Hooks
import useUnitSize from '~/hooks/useUnitSize'

// Utilities
import { rgbColor } from '~/utilities/format'

// Style
import './WorkBrand.less'

// Component: Content > Work Brand
function WorkBrand (props) {
  // References
  const container = useRef()

  // Data
  const unitSize = useUnitSize(container, width => width / 5)

  // Render
  return (
    <div
      ref={container}
      data-content="work-brand"
      style={{ fontSize: `${unitSize / 85}em` }}>
      {unitSize > 0 && props.data.type !== 'collection' &&
        <ColorFill
          width={Math.floor(2.25 * unitSize)}
          color={props.data.colors?.secondary ? rgbColor(props.data.colors.secondary) : null}>
          <Media
            type="image"
            width={Math.floor(2.25 * unitSize)}
            height={Math.floor(unitSize)}
            source={`/${props.data.slug}/logo.png`} />
        </ColorFill>
      }
      <strong
        className="label"
        style={{ color: props.data.colors?.secondary && rgbColor(props.data.colors.secondary) }}>
        {props.data.label || (props.data.output + (props.data.attribute ? `: ${props.data.attribute}` : ''))}
      </strong>
    </div>
  )
}

// Properties
WorkBrand.propTypes = {
  data: PropTypes.object.isRequired,
  size: PropTypes.number
}

// Export
export default WorkBrand
