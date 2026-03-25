// Modules
import PropTypes from 'prop-types'

// Sections
import Introduction from './sections/introduction/Introduction'
import Meta from '@source/components/utility/meta/Meta'
import Page from '@source/components/layout/page/Page'
import Portfolio from './sections/portfolio/Portfolio'
import Promotion from '@source/sections/promotion/Promotion'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './Landing.scss'

// View: Works > Landing
function Landing ({ categories, category, className, style, works, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <Page.View
      name="landing"
      {...attributes}
      className={className}
      style={style}>
      <Meta
        page="works"
        category={category?.isDefault ? null : category?.label} />
      <Introduction />
      <Portfolio
        works={works}
        category={category}
        categories={categories} />
      <Promotion />
    </Page.View>
  )
}

// Properties
Landing.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isDefault: PropTypes.bool,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  works: PropTypes.array.isRequired
}

// Export
export default Landing
