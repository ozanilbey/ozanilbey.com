// Modules
import PropTypes from 'prop-types'

// Components
import Media from '@source/components/interface/media/Media'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './CorporateIdentity.scss'

// Component: Content > Work cover > Corporate identity
function CorporateIdentity ({ className, data, style, unitSize, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <div
      {...attributes}
      className={className}
      data-component="corporate-identity"
      style={style}>
      <div className="letterhead">
        <Media
          willCrop
          type="image"
          className="media"
          width={Math.ceil(24 * unitSize)}
          height={Math.ceil(30 * unitSize)}
          source={`/${data.slug}/cover/corporate-identity-letterhead.png`} />
      </div>
      <div className="folder">
        <Media
          willCrop
          type="image"
          className="media"
          width={Math.ceil(24 * unitSize)}
          height={Math.ceil(27 * unitSize)}
          source={`/${data.slug}/cover/corporate-identity-folder.png`} />
      </div>
      <div className="others">
        <Media
          type="image"
          className="media"
          width={Math.ceil(24 * unitSize)}
          source={`/${data.slug}/cover/corporate-identity-card.png`} />
        <Media
          type="image"
          className="media"
          width={Math.ceil(24 * unitSize)}
          source={`/${data.slug}/cover/corporate-identity-envelope.png`} />
        <Media
          type="image"
          className="media"
          width={Math.ceil(24 * unitSize)}
          source={`/${data.slug}/cover/corporate-identity-other.png`} />
      </div>
    </div>
  )
}

// Properties
CorporateIdentity.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  style: PropTypes.object,
  unitSize: PropTypes.number.isRequired
}

// Export
export default CorporateIdentity
