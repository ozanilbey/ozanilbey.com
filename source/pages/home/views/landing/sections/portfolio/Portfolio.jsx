// Components
import Content from '@source/components/layout/content/Content'
import Headline from '@source/components/model/headline/Headline'
import Link from '@source/components/interface/link/Link'
import Page from '@source/components/layout/page/Page'
import Showcase from '@source/components/content/showcase/Showcase'

// Data
import works from '@source/data/works'

// Constants
import { FEATURED_WORKS } from '@source/constants/content'

// Styles
import './Portfolio.scss'

// Section: Home > Landing > Portfolio
function Portfolio () {
  // Functions
  function renderSkillsLink () {
    return (
      <Link
        className="link"
        variant="classic"
        to="/profile#professional-skills">
        valuable skills
      </Link>
    )
  }
  function renderExperienceLink () {
    return (
      <Link
        className="link"
        variant="classic"
        to="/profile#experience">
        work experience
      </Link>
    )
  }
  function renderPortfolioLink () {
    return (
      <Link
        to="/works"
        arrow="right"
        className="link">
        visit my portfolio
      </Link>
    )
  }

  // Render
  return (
    <Page.Section name="portfolio">
      <Content>
        <Headline
          isSingleLine
          displaySize="big"
          contentBefore="I have an extensive">
          product portfolio
        </Headline>
        <p className="lead">Having worked on <strong>a wide variety of projects</strong>, I gained {renderSkillsLink()}, decades of {renderExperienceLink()}, and an <strong>extensive design portfolio</strong>. Below are some of my finest work. If you’d like to see all, {renderPortfolioLink()}.</p>
      </Content>
      <Content>
        <Showcase
          className="showcase"
          data={
            works
              .filter(work => FEATURED_WORKS.indexOf(work.slug) >= 0)
              .sort((x, y) => FEATURED_WORKS.indexOf(x.slug) - FEATURED_WORKS.indexOf(y.slug))
          } />
        <p className="note">To see more, {renderPortfolioLink()}.</p>
      </Content>
    </Page.Section>
  )
}

// Export
export default Portfolio
