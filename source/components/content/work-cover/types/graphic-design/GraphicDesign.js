// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Media from '~/components/content/media/Media'

// Style
import './GraphicDesign.less'

// Component: Content > Work Cover > Graphic Design (Type)
const GraphicDesign = props => (
  <div className="frame">
    <div className="design">
      <Media
        willCrop
        type="image"
        width={Math.ceil(42 * props.unitSize)}
        height={Math.ceil(28.75 * props.unitSize)}
        source={`/${props.data.slug}/cover/graphic-design.png`} />
    </div>
  </div>
)

// Properties
GraphicDesign.propTypes = {
  data: PropTypes.object.isRequired,
  unitSize: PropTypes.number.isRequired
}

// Export
export default GraphicDesign
