// Modules
import PropTypes from 'prop-types'

// Components
import Media from '@source/components/interface/media/Media'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Images
import gridUnit from '@source/images/grid-unit.svg'

// Styles
import './Branding.scss'

// Component: Content > Work cover > Branding
function Branding ({ className, data, style, unitSize, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <div
      {...attributes}
      className={className}
      data-component="branding"
      style={style}>
      <div className="paper">
        <div
          className="grid"
          style={{ backgroundImage: `url("${gridUnit}")` }}>
          <div className="logo">
            <Media
              type="image"
              width={Math.ceil(32 * unitSize - 2)}
              height={Math.ceil(8 * unitSize - 2)}
              source={`/${data.slug}/cover/branding-logo.png`} />
          </div>
          <div className="typography">
            <Media
              type="image"
              width={Math.ceil(32 * unitSize - 2)}
              height={Math.ceil(8 * unitSize - 2)}
              source={`/${data.slug}/cover/branding-typography.png`} />
          </div>
          <div className="colors">
            <Media
              willCrop
              type="image"
              width={Math.ceil(2 * unitSize)}
              source={`/${data.slug}/cover/branding-colors.png`} />
          </div>
        </div>
      </div>
    </div>
  )
}

// Properties
Branding.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  style: PropTypes.object,
  unitSize: PropTypes.number.isRequired
}

// Export
export default Branding
