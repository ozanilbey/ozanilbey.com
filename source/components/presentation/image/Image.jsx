// Modules
import PropTypes from 'prop-types'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './Image.scss'

// Component: Presentation > Image
function Image ({ className, description, height, source, sourceSet, style, width, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data', 'title'])

  // Render
  if (!source) return null
  return (
    <img
      src={source}
      width={width}
      height={height}
      {...attributes}
      alt={description}
      srcSet={sourceSet}
      className={className}
      data-presentation="image"
      sizes={width ? `(max-width: ${width}px) 100vw, ${width}px` : null}
      style={style} />
  )
}

// Properties
Image.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  height: PropTypes.number,
  source: PropTypes.string.isRequired,
  sourceSet: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.number
}

// Export
export default Image