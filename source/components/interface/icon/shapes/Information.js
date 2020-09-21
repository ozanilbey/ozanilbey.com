// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Component: Interface > Icon > Information (Shape)
const Information = props => (
  <svg
    {...props}
    viewBox="0 0 20 20">
    <path
      fill={props['data-color']}
      d="M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M12,8 L7,8.5 L7,9.5 C8,9.5 8.5,9.83333333 8.5,10.5 L8.5,14.5 C8.5,15.1666667 8,15.5 7,15.5 L7,16.5 L13.5,16.5 L13.5,15.5 C12.5,15.5 12,15.1666667 12,14.5 L12,8 Z M10,2.5 C8.8954305,2.5 8,3.3954305 8,4.5 C8,5.6045695 8.8954305,6.5 10,6.5 C11.1045695,6.5 12,5.6045695 12,4.5 C12,3.3954305 11.1045695,2.5 10,2.5 Z" />
  </svg>
)

// Properties
Information.propTypes = {
  'data-color': PropTypes.string
}

// Export
export default Information
