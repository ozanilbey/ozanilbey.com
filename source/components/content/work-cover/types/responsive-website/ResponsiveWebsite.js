// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Media from '~/components/content/media/Media'

// Style
import './ResponsiveWebsite.less'

// Component: Content > Work Cover > Responsive Website (Type)
const ResponsiveWebsite = props => (
  <>
    <div className="desktop">
      <div className="bar">
        <div className="camera item"></div>
      </div>
      <div className="screen">
        <Media
          type="image"
          width={Math.ceil(35 * props.unitSize)}
          source={`/${props.data.slug}/cover/01.png`} />
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
          type="image"
          width={Math.ceil(23 * props.unitSize)}
          source={`/${props.data.slug}/cover/02.png`} />
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
          type="image"
          width={Math.ceil(12.5 * props.unitSize)}
          source={`/${props.data.slug}/cover/03.png`} />
      </div>
    </div>
  </>
)

// Properties
ResponsiveWebsite.propTypes = {
  data: PropTypes.object.isRequired,
  unitSize: PropTypes.number.isRequired
}

// Export
export default ResponsiveWebsite
