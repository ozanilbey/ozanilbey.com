// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Media from '~/components/content/media/Media'

// Style
import './Document.less'

// Component: Content > Work Cover > Document (Type)
const Document = props => (
  <div className="editor">
    {['left', 'top', 'right'].map(side =>
      ['guideline', 'ruler'].map(element =>
        <div
          key={`${side} ${element}`}
          className={`${side} ${element}`}
          style={{ [side]: 0 }}>
        </div>
      )
    )}
    <div className="document">
      <Media
        willCrop
        type="image"
        width={Math.ceil(44 * props.unitSize)}
        height={Math.ceil(28 * props.unitSize)}
        source={`/${props.data.slug}/cover/document.png`} />
    </div>
  </div>
)

// Properties
Document.propTypes = {
  data: PropTypes.object.isRequired,
  unitSize: PropTypes.number.isRequired
}

// Export
export default Document
