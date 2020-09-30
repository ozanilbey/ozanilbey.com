// Modules
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Helpers
import { getClassName } from '~/helpers/component'

// Style
import './List.less'

// Component: Content > List
function List (props) {
  // Render
  return (
    <ul
      data-content="list"
      className={getClassName(props.className, { lead: true })}>
      {props.data.map((item, index) =>
        <li key={index}>{item}</li>
      )}
    </ul>
  )
}

// Properties
List.propTypes = {
  className: PropTypes.object,
  data: PropTypes.array
}

// Export
export default List
