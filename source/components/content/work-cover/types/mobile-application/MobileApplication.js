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
    {['left', 'center', 'right'].map(position =>
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
            willCrop
            type="image"
            width={Math.ceil(19 * props.unitSize)}
            height={Math.ceil(28 * props.unitSize)}
            source={`/${props.data.slug}/cover/mobile-application-${position}.png`} />
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
