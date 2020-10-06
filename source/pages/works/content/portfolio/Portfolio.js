// Modules
import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

// Components
import Headline from '~/components/model/headline/Headline'
import Page from '~/components/layout/page/Page'
import Container from '~/components/layout/container/Container'
import Dropdown from '~/components/interface/dropdown/Dropdown'
import Heading from '~/components/type/heading/Heading'
import Showcase from '~/components/content/showcase/Showcase'

// Utilities
import { slug } from '~/utilities/format'

// Constants
import { WORK_FILTERS } from '~/constants/content'

// Style
import './Portfolio.less'

// Subcontent: Works > Portfolio
function Portfolio (props) {
  // Data
  const { push } = useHistory()

  // Methods
  function filterWorks (option) {
    let target = '/works'
    target += `/${slug(option)}`
    push(target)
  }

  // Render
  return (
    <Page.Section
      name="portfolio"
      data-content="portfolio">
      <Container isBlockLayout>
        <Heading
          isSingleLine
          className="dim"
          rank={4}>
          Take a look at my
        </Heading>
        <Headline
          isSingleLine
          displaySize="big">
          design portfolio
        </Headline>
        <p className="lead">Here are some of my projects expressing my design approach. To see more, filter with another category.</p>
        <div className="lead">
          Currently displaying:
          <Dropdown
            side="right"
            options={WORK_FILTERS}
            defaultValue={props.filter}
            onChange={filterWorks} />
        </div>
      </Container>
      <Container>
        {
          props.works
            ? <Showcase data={props.works} />
            : <p>There is no work matching your criteria.</p>
        }
      </Container>
    </Page.Section>
  )
}

Portfolio.propTypes = {
  filter: PropTypes.string,
  works: PropTypes.array
}

// Export
export default Portfolio
