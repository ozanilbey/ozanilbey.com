// Modules
import PropTypes from 'prop-types'

// Components
import Media from '@source/components/interface/media/Media'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './ResponsiveWebsite.scss'

// Component: Content > Work cover > Responsive website
function ResponsiveWebsite ({ className, data, style, unitSize, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <div
      {...attributes}
      className={className}
      data-component="responsive-website"
      style={style}>
      <div className="desktop">
        <div className="bar">
          <div className="camera item"></div>
        </div>
        <div className="screen">
          <Media
            willCrop
            type="image"
            className="media"
            width={Math.ceil(35 * unitSize)}
            height={Math.ceil(23 * unitSize)}
            source={`/${data.slug}/cover/responsive-website-desktop.png`} />
        </div>
      </div>
      <div className="tablet">
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
            width={Math.ceil(23 * unitSize)}
            height={Math.ceil(27.5 * unitSize)}
            source={`/${data.slug}/cover/responsive-website-tablet.png`} />
        </div>
      </div>
      <div className="phone">
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
            width={Math.ceil(12.5 * unitSize)}
            height={Math.ceil(18.5 * unitSize)}
            source={`/${data.slug}/cover/responsive-website-phone.png`} />
        </div>
      </div>
    </div>
  )
}

// Properties
ResponsiveWebsite.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  style: PropTypes.object,
  unitSize: PropTypes.number.isRequired
}

// Export
export default ResponsiveWebsite
