// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Media from '~/components/content/media/Media'

// Style
import './CorporateIdentity.less'

// Component: Content > Work Cover > Corporate Identity (Type)
const CorporateIdentity = props => (
  <>
    <div className="letterhead">
      <Media
        willCrop
        type="image"
        width={Math.ceil(24 * props.unitSize)}
        height={Math.ceil(30 * props.unitSize)}
        source={`/${props.data.slug}/cover/corporate-identity-letterhead.png`} />
    </div>
    <div className="folder">
      <Media
        willCrop
        type="image"
        width={Math.ceil(24 * props.unitSize)}
        height={Math.ceil(27 * props.unitSize)}
        source={`/${props.data.slug}/cover/corporate-identity-folder.png`} />
    </div>
    <div className="others">
      <Media
        type="image"
        width={Math.ceil(24 * props.unitSize)}
        source={`/${props.data.slug}/cover/corporate-identity-card.png`} />
      <Media
        type="image"
        width={Math.ceil(24 * props.unitSize)}
        source={`/${props.data.slug}/cover/corporate-identity-envelope.png`} />
      <Media
        type="image"
        width={Math.ceil(24 * props.unitSize)}
        source={`/${props.data.slug}/cover/corporate-identity-other.png`} />
    </div>
  </>
)

// Properties
CorporateIdentity.propTypes = {
  data: PropTypes.object.isRequired,
  unitSize: PropTypes.number.isRequired
}

// Export
export default CorporateIdentity
