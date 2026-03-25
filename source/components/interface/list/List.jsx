// Modules
import PropTypes from 'prop-types'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './List.scss'

// Component: Interface > List
function List ({ className, data, style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <ul
      {...attributes}
      data-interface="list"
      className={className}
      style={style}>
      {data.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  )
}

// Properties
List.propTypes = {
  className: PropTypes.object,
  data: PropTypes.array,
  style: PropTypes.object
}

// Export
export default List
