// Modules
import PropTypes from 'prop-types'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './Document.scss'

// Constants
const DEFAULT_ASPECT_RATIO = 7 / 10 // Approximate size of a paper

// Component: Presentation > Document
function Document ({ aspectRatio = DEFAULT_ASPECT_RATIO, className, source, style, width, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data', 'title'])

  // Render
  if (!source) return null
  return (
    <div
      {...attributes}
      className={className}
      data-presentation="document"
      style={{
        ...(aspectRatio && { paddingBottom: `${1 / aspectRatio * 100}%` }),
        ...(width && { width: `${width}px` }),
        ...style
      }}>
      <object
        type="application/pdf"
        data={`${source}?#pagemode=none&scrollbar=0&toolbar=0&statusbar=0&navpanes=0&view=FitB`}>
        <embed src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${source}`} />
      </object>
    </div>
  )
}

// Properties
Document.propTypes = {
  aspectRatio: PropTypes.number,
  className: PropTypes.string,
  source: PropTypes.string.isRequired,
  style: PropTypes.object,
  width: PropTypes.number
}

// Export
export default Document
