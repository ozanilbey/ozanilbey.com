// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Subcomponents
import Base64 from './shapes/Base64'
import Cardz from './shapes/Cardz'
import Docu from './shapes/Docu'
import Favogue from './shapes/Favogue'
import GraphJS from './shapes/GraphJS'
import Piccture from './shapes/Piccture'

// Utilities
import { getAttributes } from '~/utilities/component'

// Component: Content > Brand Mark
const BrandMark = props => {
  // Data
  const attributes = {
    'data-content': 'brand-mark',
    'data-brand-mark': props.name,
    'data-color': props.color,
    ...getAttributes(props, ['className', 'style', 'data', 'aria'])
  }

  // Render
  switch (props.name) {
    case 'base64':
      return <Base64 {...attributes} />
    case 'cardz':
      return <Cardz {...attributes} />
    case 'docu':
      return <Docu {...attributes} />
    case 'favogue':
      return <Favogue {...attributes} />
    case 'graphjs':
      return <GraphJS {...attributes} />
    case 'piccture':
      return <Piccture {...attributes} />
  }
}

// Properties
BrandMark.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired
}

// Export
export default BrandMark
