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
      d="M5,0 C7.76142375,0 10,2.23857625 10,5 C10,7.76142375 7.76142375,10 5,10 C2.23857625,10 0,7.76142375 0,5 C0,2.23857625 2.23857625,0 5,0 Z M5,1 C2.790861,1 1,2.790861 1,5 C1,7.209139 2.790861,9 5,9 C7.209139,9 9,7.209139 9,5 C9,2.790861 7.209139,1 5,1 Z M5,2 L5.888,3.776 L7.85316955,4.07294902 L6.437,5.468 L6.76335576,7.42705098 L5,6.511 L3.23664424,7.42705098 L3.562,5.468 L2.14683045,4.07294902 L4.112,3.776 L5,2 Z" />
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
