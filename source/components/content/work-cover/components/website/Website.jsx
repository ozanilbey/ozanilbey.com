// Modules
import PropTypes from 'prop-types'

// Components
import Media from '@source/components/interface/media/Media'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './Website.scss'

// Component: Content > Work cover > Website
function Website ({ className, data, style, unitSize, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  return (
    <div
      {...attributes}
      className={className}
      data-component="website"
      style={style}>
      <div className="browser">
        <div className="bar">
          {['pink', 'yellow', 'green'].map(color =>
            <div
              key={color}
              className="button"
              style={{ backgroundColor: `var(--brand-${color}-color)` }}>
            </div>
          )}
        </div>
        <div className="site">
          <Media
            willCrop
            type="image"
            className="media"
            width={Math.ceil(47.75 * unitSize)}
            height={Math.ceil(28 * unitSize)}
            source={`/${data.slug}/cover/website.png`} />
        </div>
      </div>
    </div>
  )
}

// Properties
Website.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  style: PropTypes.object,
  unitSize: PropTypes.number.isRequired
}

// Export
export default Website
