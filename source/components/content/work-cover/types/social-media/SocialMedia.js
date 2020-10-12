// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Media from '~/components/content/media/Media'
import Icon from '~/components/interface/icon/Icon'

// Utilities
import { rgbColor } from '~/utilities/format'

// Style
import './SocialMedia.less'

// Component: Content > Work Cover > Social Media (Type)
const SocialMedia = props => (
  <>
    <div className="post">
      <div className="information">
        {props.data.platform &&
          <Icon
            name={props.data.platform.toLowerCase()}
            color={rgbColor(props.data.colors.primary)} />
        }
        <div className="text">
          <div className="publisher">{props.data.brand}</div>
          <div className="time">2 hours ago</div>
        </div>
      </div>
      <div className="content">
        <Media
          willCrop
          type="image"
          width={Math.ceil(45.5 * props.unitSize)}
          height={Math.ceil(25 * props.unitSize)}
          source={`/${props.data.slug}/cover/social-media.png`} />
      </div>
    </div>
  </>
)

// Properties
SocialMedia.propTypes = {
  data: PropTypes.object.isRequired,
  unitSize: PropTypes.number.isRequired
}

// Export
export default SocialMedia
