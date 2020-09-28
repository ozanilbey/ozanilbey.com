// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import ColorFill from '~/components/model/color-fill/ColorFill'
import Media from '~/components/content/media/Media'

// Utilities
import { rgbColor } from '~/utilities/format'

// Style
import './WorkBrand.less'

// Component: Content > Work Brand
const WorkBrand = props => (
  <div data-content="work-brand">
    {props.data.type !== 'collection' &&
      <ColorFill
        width={Math.floor(2.25 * props.size)}
        color={props.data.colors?.secondary ? rgbColor(props.data.colors.secondary) : null}>
        <Media
          type="image"
          width={Math.floor(2.25 * props.size)}
          height={Math.floor(props.size)}
          source={`/${props.data.slug}/logo.png`} />
      </ColorFill>
    }
    <strong
      className="label"
      style={{
        color: props.data.colors?.secondary && rgbColor(props.data.colors.secondary),
        fontSize: `${props.size / 80}em`
      }}>
      {props.data.label || (props.data.output + (props.data.type !== 'collection' && props.data.attribute ? `: ${props.data.attribute}` : ''))}
    </strong>
  </div>
)

// Properties
WorkBrand.propTypes = {
  data: PropTypes.object.isRequired,
  size: PropTypes.number
}
WorkBrand.defaultProps = {
  size: 100
}

// Export
export default WorkBrand
