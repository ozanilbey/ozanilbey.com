// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Component: Content > BrandMark > Favogue (Shape)
const Favogue = props => (
  <svg
    {...props}
    viewBox="0 0 10 10">
    <path
      fill={props['data-color']}
      d="M5,0 C2.23857625,0 0,2.23857625 0,5 C0,7.76142375 2.23857625,10 5,10 C7.76142375,10 10,7.76142375 10,5 C10,2.23857625 7.76142375,0 5,0 Z M5,2 L5.888,3.776 L7.85316955,4.07294902 L6.437,5.468 L6.76335576,7.42705098 L5,6.511 L3.23664424,7.42705098 L3.562,5.468 L2.14683045,4.07294902 L4.112,3.776 L5,2 Z" />
  </svg>
)

// Properties
Favogue.propTypes = {
  'data-color': PropTypes.string
}

Favogue.defaultProps = {
  'data-color': 'rgb(229, 188, 63)'
}

// Export
export default Favogue
