// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Subcomponents
import Contrast from './shapes/Contrast'
import Exit from './shapes/Exit'
import GitHub from './shapes/GitHub'
import HamburgerMenu from './shapes/HamburgerMenu'
import Star from './shapes/Star'

// Component: Interface > Icon
const Icon = props => {
  switch (props.name) {
    case 'contrast':
      return <Contrast {...props} />
    case 'exit':
      return <Exit {...props} />
    case 'github':
      return <GitHub {...props} />
    case 'hamburger-menu':
      return <HamburgerMenu {...props} />
    case 'star':
      return <Star {...props} />
  }
}

// Properties
Icon.propTypes = {
  name: PropTypes.string.isRequired
}

// Export
export default Icon
