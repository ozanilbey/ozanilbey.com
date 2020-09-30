// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Subcomponents
import AngelList from './shapes/AngelList'
import Audio from './shapes/Audio'
import Behance from './shapes/Behance'
import Color from './shapes/Color'
import Contrast from './shapes/Contrast'
import Dribbble from './shapes/Dribbble'
import Email from './shapes/Email'
import Exit from './shapes/Exit'
import Facebook from './shapes/Facebook'
import FaceTime from './shapes/FaceTime'
import GitHub from './shapes/GitHub'
import HamburgerMenu from './shapes/HamburgerMenu'
import Information from './shapes/Information'
import Instagram from './shapes/Instagram'
import LinkedIn from './shapes/LinkedIn'
import Messenger from './shapes/Messenger'
import Phone from './shapes/Phone'
import Snapchat from './shapes/Snapchat'
import Star from './shapes/Star'
import Twitter from './shapes/Twitter'
import WhatsApp from './shapes/WhatsApp'

// Helpers
import { getAttributes } from '~/helpers/component'

// Style
import './Icon.less'

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
    case 'angellist':
      return <AngelList {...attributes} />
    case 'audio':
      return <Audio {...attributes} />
    case 'behance':
      return <Behance {...attributes} />
    case 'color':
      return <Color {...attributes} />
    case 'contrast':
      return <Contrast {...attributes} />
    case 'dribbble':
      return <Dribbble {...attributes} />
    case 'email':
      return <Email {...attributes} />
    case 'exit':
      return <Exit {...attributes} />
    case 'facebook':
      return <Facebook {...attributes} />
    case 'facetime':
      return <FaceTime {...attributes} />
    case 'github':
      return <GitHub {...attributes} />
    case 'hamburger-menu':
      return <HamburgerMenu {...attributes} />
    case 'information':
      return <Information {...attributes} />
    case 'instagram':
      return <Instagram {...attributes} />
    case 'linkedin':
      return <LinkedIn {...attributes} />
    case 'messenger':
      return <Messenger {...attributes} />
    case 'phone':
      return <Phone {...attributes} />
    case 'snapchat':
      return <Snapchat {...attributes} />
    case 'star':
      return <Star {...attributes} />
    case 'twitter':
      return <Twitter {...attributes} />
    case 'whatsapp':
      return <WhatsApp {...attributes} />
  }
}

// Properties
Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired
}

// Export
export default Icon
