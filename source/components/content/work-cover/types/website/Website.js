// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Media from '~/components/content/media/Media'

// Style
import './Website.less'

// Component: Content > Work Cover > Website (Type)
const Website = props => (
  <div className="browser">
    <div className="bar">
      {['pink', 'yellow', 'green'].map(color =>
        <div
          key={color}
          className="button"
          style={{ backgroundColor: `var(--${color})` }}>
        </div>
      )}
    </div>
    <div className="site">
      <Media
        willCrop
        type="image"
        width={Math.ceil(47.75 * props.unitSize)}
        height={Math.ceil(28 * props.unitSize)}
        source={`/${props.data.slug}/cover/website.png`} />
    </div>
  </div>
)

// Properties
Website.propTypes = {
  data: PropTypes.object.isRequired,
  unitSize: PropTypes.number.isRequired
}

// Export
export default Website
