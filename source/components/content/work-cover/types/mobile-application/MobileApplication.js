// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Media from '~/components/content/media/Media'

// Style
import './MobileApplication.less'

// Component: Content > Work Cover > Mobile Application (Type)
const MobileApplication = props => (
  <>
    {['center', 'left', 'right'].map((position, index) =>
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
            type="image"
            width={Math.ceil(19 * props.unitSize)}
            source={`/${props.data.slug}/cover/0${index + 1}.png`} />
        </div>
      </div>
    )}
  </>
)

// Properties
MobileApplication.propTypes = {
  data: PropTypes.object.isRequired,
  unitSize: PropTypes.number.isRequired
}

// Export
export default MobileApplication
