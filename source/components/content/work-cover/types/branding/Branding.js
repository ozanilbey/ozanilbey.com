// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Media from '~/components/content/media/Media'

// Images
import gridUnit from '~/images/grid-unit.svg'

// Style
import './Branding.less'

// Component: Content > Work Cover > Branding (Type)
const Branding = props => (
  <div className="paper">
    <div
      className="grid"
      style={{ backgroundImage: `url(${gridUnit})` }}>
      <div className="logo">
        <Media
          type="image"
          width={Math.ceil(24 * props.unitSize)}
          height={Math.ceil(10 * props.unitSize)}
          source={`/${props.data.slug}/cover/branding-logo.png`} />
      </div>
      <div className="typography">
        <Media
          type="image"
          width={Math.ceil(32 * props.unitSize)}
          height={Math.ceil(8 * props.unitSize)}
          source={`/${props.data.slug}/cover/branding-typography.png`} />
      </div>
      <div className="colors">
        <Media
          willCrop
          type="image"
          width={Math.ceil(2 * props.unitSize)}
          source={`/${props.data.slug}/cover/branding-colors.png`} />
      </div>
    </div>
  </div>
)

// Properties
Branding.propTypes = {
  data: PropTypes.object.isRequired,
  unitSize: PropTypes.number.isRequired
}

// Export
export default Branding
