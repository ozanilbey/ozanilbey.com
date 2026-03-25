// Modules
import PropTypes from 'prop-types'

// Components
import Media from '@source/components/interface/media/Media'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './MobileApplication.scss'

// Component: Content > Work Cover > Mobile application
function MobileApplication ({ className, data, style, unitSize, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <div
      {...attributes}
      className={className}
      data-component="mobile-application"
      style={style}>
      {['left', 'center', 'right'].map(position =>
        <div
          key={position}
          className={`${position} phone`}>
          <div className="bar">
            {['camera', 'speaker'].map(item =>
              <div
                key={item}
                className={`${item} item`}>
              </div>
            )}
          </div>
          <div className="screen">
            <Media
              willCrop
              type="image"
              className="media"
              width={Math.ceil(19 * unitSize)}
              height={Math.ceil(28 * unitSize)}
              source={`/${data.slug}/cover/mobile-application-${position}.png`} />
          </div>
        </div>
      )}
    </div>
  )
}

// Properties
MobileApplication.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  style: PropTypes.object,
  unitSize: PropTypes.number.isRequired
}

// Export
export default MobileApplication
