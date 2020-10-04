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
        type="image"
        width={Math.ceil(24 * props.unitSize)}
        source={`/${props.data.slug}/cover/01.png`} />
    </div>
    <div className="folder">
      <Media
        type="image"
        width={Math.ceil(24 * props.unitSize)}
        source={`/${props.data.slug}/cover/02.png`} />
    </div>
    <div className="others">
      <Media
        type="image"
        width={Math.ceil(24 * props.unitSize)}
        source={`/${props.data.slug}/cover/03.png`} />
      <Media
        type="image"
        width={Math.ceil(24 * props.unitSize)}
        source={`/${props.data.slug}/cover/04.png`} />
      <Media
        type="image"
        width={Math.ceil(24 * props.unitSize)}
        source={`/${props.data.slug}/cover/05.png`} />
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
