// Modules
import PropTypes from 'prop-types'

// Components
import Media from '@source/components/interface/media/Media'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './GraphicDesign.scss'

// Component: Content > Work Cover > Graphic Design
function GraphicDesign ({ className, data, style, unitSize, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <div
      {...attributes}
      className={className}
      data-component="graphic-design"
      style={style}>
      <div className="design">
        <Media
          willCrop
          type="image"
          className="media"
          width={Math.ceil(42 * unitSize)}
          height={Math.ceil(28.75 * unitSize)}
          source={`/${data.slug}/cover/graphic-design.png`} />
      </div>
    </div>
  )
}

// Properties
GraphicDesign.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  style: PropTypes.object,
  unitSize: PropTypes.number.isRequired
}

// Export
export default GraphicDesign
