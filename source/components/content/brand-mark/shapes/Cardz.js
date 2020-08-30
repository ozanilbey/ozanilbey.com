// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Component: Content > BrandMark > Cardz (Shape)
const Cardz = props => (
  <svg
    {...props}
    viewBox="0 0 28 28">
    <path
      fill={props['data-color']}
      d="M20.9496403,0 C24.8434464,0 28,3.13400675 28,7 L28,21 C28,24.8659932 24.8434464,28 20.9496403,28 L7.05035971,28 C3.15655356,28 0,24.8659932 0,21 L0,7 C0,3.13400675 3.15655356,0 7.05035971,0 L20.9496403,0 Z M21,7 L7,7 L7,21 L21,21 L21,7 Z M19,15 L19,19 L15,19 L15,17 L17,17 L17,15 L19,15 Z M11,15 L11,17 L13,17 L13,19 L9,19 L9,15 L11,15 Z M19,9 L19,13 L17,13 L17,11 L15,11 L15,9 L19,9 Z M13,9 L13,11 L11,11 L11,13 L9,13 L9,9 L13,9 Z" />
  </svg>
)

// Properties
Cardz.propTypes = {
  'data-color': PropTypes.string
}

Cardz.defaultProps = {
  'data-color': 'rgb(239, 63, 35)'
}

// Export
export default Cardz
