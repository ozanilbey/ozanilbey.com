// Modules
import PropTypes from 'prop-types'

// Components
import Media from '@source/components/interface/media/Media'
import Icon from '@source/components/interface/icon/Icon'

// Utilities
import { getAttributes } from '@source/helpers/component'
import { rgbColor } from '@source/utilities/format'

// Styles
import './SocialMedia.scss'

// Component: Content > Work cover > Social media
function SocialMedia ({ className, data, style, unitSize, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <div
      {...attributes}
      className={className}
      data-component="social-media"
      style={style}>
      <div className="post">
        <div className="information">
          {data.platform &&
            <Icon
              className="icon"
              name={data.platform.toLowerCase()}
              color={rgbColor(data.colors.primary)} />
          }
          <div className="text">
            <div className="publisher">{data.brand}</div>
            <div className="time">2 hours ago</div>
          </div>
        </div>
        <div className="content">
          <Media
            willCrop
            type="image"
            className="media"
            width={Math.ceil(45.5 * unitSize)}
            height={Math.ceil(25 * unitSize)}
            source={`/${data.slug}/cover/social-media.png`} />
        </div>
      </div>
    </div>
  )
}

// Properties
SocialMedia.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  style: PropTypes.object,
  unitSize: PropTypes.number.isRequired
}

// Export
export default SocialMedia
