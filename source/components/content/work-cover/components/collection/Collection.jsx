// Modules
import PropTypes from 'prop-types'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './Collection.scss'

// Component: Content > Work cover > Collection
function Collection ({ className, data, style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <div
      {...attributes}
      className={className}
      data-component="collection"
      style={style}>
      <div className="binder">
        <div className="label">
          {data.attribute}
        </div>
      </div>
    </div>
  )
}

// Properties
Collection.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  style: PropTypes.object
}

// Export
export default Collection
