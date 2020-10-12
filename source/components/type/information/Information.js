// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Icon from '~/components/interface/icon/Icon'

// Style
import './Information.less'

// Component: Typography > Information
function Information (props) {
  // Render
  return (
    <p data-type="information">
      <Icon name="information" />
      <span className="text">{props.children}</span>
    </p>
  )
}

// Properties
Information.propTypes = {
  children: PropTypes.node
}

// Export
export default Information
