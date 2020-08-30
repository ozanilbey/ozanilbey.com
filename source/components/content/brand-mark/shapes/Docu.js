// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Component: Content > BrandMark > Docu (Shape)
const Docu = props => (
  <svg
    {...props}
    viewBox="0 0 26 25"
    data-orientation="landscape">
    <path
      fill={props['data-color']}
      d="M4.70944634,8 L17.4641968,8 L16.8755161,11 L4.12076555,11 L4.70944634,8 Z M0.588680792,14 L16.2868353,14 L15.6981545,17 L0,17 L0.588680792,14 Z M5.29812713,20 L18.0528776,20 L20.9962816,5 L8.24153109,5 L9.22266575,0 L21.9774163,0 C24.6867448,0 26.4435689,2.238 25.9019549,5 L22.9585509,20 C22.416394,22.762 19.7810715,25 17.071743,25 L4.31699248,25 L5.29812713,20 Z" />
  </svg>
)

// Properties
Docu.propTypes = {
  'data-color': PropTypes.string
}

Docu.defaultProps = {
  'data-color': 'rgb(78, 212, 134)'
}

// Export
export default Docu
