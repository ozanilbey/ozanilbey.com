// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Subcomponents
import Audio from './shapes/Audio'
import Contrast from './shapes/Contrast'
import Exit from './shapes/Exit'
import GitHub from './shapes/GitHub'
import HamburgerMenu from './shapes/HamburgerMenu'
import Star from './shapes/Star'

// Utilities
import { getAttributes } from '~/utilities/component'

// Component: Interface > Icon
const Icon = props => {
  // Data
  const attributes = {
    'data-interface': 'icon',
    'data-icon': props.name,
    'data-color': props.color,
    ...getAttributes(props, ['className', 'style', 'data', 'aria'])
  }

  // Render
  switch (props.name) {
    case 'audio':
      return <Audio {...attributes} />
    case 'contrast':
      return <Contrast {...attributes} />
    case 'exit':
      return <Exit {...attributes} />
    case 'github':
      return <GitHub {...attributes} />
    case 'hamburger-menu':
      return <HamburgerMenu {...attributes} />
    case 'star':
      return <Star {...attributes} />
  }
}

// Properties
Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired
}

// Export
export default Icon
