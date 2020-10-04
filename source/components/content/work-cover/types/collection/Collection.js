// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Style
import './Collection.less'

// Component: Content > Work Cover > Collection (Type)
const Collection = props => (
  <>
    <div className="binder">
      <div className="label">
        {props.data.attribute}
      </div>
    </div>
  </>
)

// Properties
Collection.propTypes = {
  data: PropTypes.object.isRequired
}

// Export
export default Collection
