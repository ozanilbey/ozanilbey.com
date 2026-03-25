// Modules
import PropTypes from 'prop-types'

// Components
import Media from '@source/components/interface/media/Media'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './Document.scss'

// Component: Content > Work Cover > Document
function Document ({ className, data, style, unitSize, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <div
      {...attributes}
      className={className}
      data-component="document"
      style={style}>
      <div className="canvas">
        {['left', 'top', 'right'].map(side =>
          ['guideline', 'ruler'].map(element =>
            <div
              key={`${side} ${element}`}
              className={`${side} ${element}`}
              style={{ [side]: 0 }}>
            </div>
          )
        )}
        <div className="frame">
          <Media
            willCrop
            type="image"
            className="media"
            width={Math.ceil(44 * unitSize)}
            height={Math.ceil(28 * unitSize)}
            source={`/${data.slug}/cover/document.png`} />
        </div>
      </div>
    </div>
  )
}

// Properties
Document.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  style: PropTypes.object,
  unitSize: PropTypes.number.isRequired
}

// Export
export default Document
