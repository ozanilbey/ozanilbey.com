// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Shapes
import Contrast from './shapes/Contrast'
import Exit from './shapes/Exit'
import HamburgerMenu from './shapes/HamburgerMenu'

// Interface: Icon
const Icon = props => {
  switch (props.name) {
    case 'contrast':
      return <Contrast {...props} />
    case 'exit':
      return <Exit {...props} />
    case 'hamburger-menu':
      return <HamburgerMenu {...props} />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
}

// Export
export default Icon
