// Modules
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

// Components
import Content from '@source/components/layout/content/Content'
import Headline from '@source/components/model/headline/Headline'
import Page from '@source/components/layout/page/Page'
import Showcase from '@source/components/content/showcase/Showcase'
import Tabbing from '@source/components/interface/tabbing/Tabbing'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './Portfolio.scss'

// Section: Works > Landing > Portfolio
function Portfolio ({ categories, category, className, style, works, ...rest }) {
  // Data
  const navigate = useNavigate()
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Functions
  function updateCategory (category) {
    let target = '/works'
    target += `/${category.id}`
    navigate(target)
  }

  // Render
  return (
    <Page.Section
      {...attributes}
      name="portfolio"
      className={className}
      style={style}>
      <Content>
        <Headline
          isSingleLine
          displaySize="big"
          contentBefore="Take a look at my">
          design portfolio
        </Headline>
        <p className="lead">Here are some of my projects expressing my design approach. Browse by category.</p>
      </Content>
      <Content>
        <Tabbing
          value={category}
          options={categories}
          onChange={updateCategory} />
        <Showcase
          data={works}
          className="showcase" />
      </Content>
    </Page.Section>
  )
}

// Properties
Portfolio.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isDefault: PropTypes.bool,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isDefault: PropTypes.bool,
    label: PropTypes.string.isRequired
  }),
  className: PropTypes.string,
  style: PropTypes.object,
  works: PropTypes.array
}

// Export
export default Portfolio
