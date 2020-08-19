// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Shape: Hamburger Menu
const HamburgerMenu = props => (
  <svg
    viewBox="0 0 24 18"
    className={`${props.name} icon`}>
    <path
      fill={props.color || ''}
      d="M1.63636364,0 L22.3636364,0 C23.267375,0 24,0.671572875 24,1.5 C24,2.32842713 23.267375,3 22.3636364,3 L1.63636364,3 C0.732624955,3 0,2.32842713 0,1.5 C0,0.671572875 0.732624955,0 1.63636364,0 Z M1.63636364,7.5 L22.3636364,7.5 C23.267375,7.5 24,8.17157288 24,9 C24,9.82842713 23.267375,10.5 22.3636364,10.5 L1.63636364,10.5 C0.732624955,10.5 0,9.82842713 0,9 C0,8.17157288 0.732624955,7.5 1.63636364,7.5 Z M1.63636364,15 L22.3636364,15 C23.267375,15 24,15.6715729 24,16.5 C24,17.3284271 23.267375,18 22.3636364,18 L1.63636364,18 C0.732624955,18 0,17.3284271 0,16.5 C0,15.6715729 0.732624955,15 1.63636364,15 Z" />
  </svg>
)

HamburgerMenu.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string
}

// Export
export default HamburgerMenu
