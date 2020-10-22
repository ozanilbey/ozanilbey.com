// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Page from '~/components/layout/page/Page'
import Headline from '~/components/model/headline/Headline'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import Showcase from '~/components/content/showcase/Showcase'

// Data
import works from '~/data/works'

// Constants
import { FEATURED_WORKS } from '~/constants/content'

// Style
import './Portfolio.less'

// Subcontent: Home > Portfolio
function Portfolio () {
  // Render
  return (
    <Page.Section
      name="portfolio"
      data-content="portfolio">
      <Container>
        <Heading
          isSingleLine
          className="dim"
          rank={4}>
          I have an extensive
        </Heading>
        <Headline
          isSingleLine
          displaySize="big">
          design portfolio
        </Headline>
        <p className="lead">Having worked on <strong>a wide variety of projects</strong>, I gained valuable <Link type="regular" to="/profile#professional-skills">skills</Link> and <Link type="regular" to="/profile#experience">experience</Link>. Consequently, as a <strong>senior multidisciplinary designer</strong>, I have an extensive design portfolio. Below are some of my finest works. If you’d like to see all, <Link type="cta" to="/works">browse my portfolio</Link>.</p>
      </Container>
      <Container>
        <Showcase data={
          works
            .filter(work => FEATURED_WORKS.indexOf(work.slug) >= 0)
            .sort((x, y) => FEATURED_WORKS.indexOf(x.slug) - FEATURED_WORKS.indexOf(y.slug))
        } />
        <p className="link lead">To see more, <Link type="cta" to="/works">visit my portfolio</Link>.</p>
      </Container>
    </Page.Section>
  )
}

// Export
export default Portfolio
