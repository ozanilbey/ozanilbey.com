// Components
import Content from '@source/components/layout/content/Content'
import Headline from '@source/components/model/headline/Headline'
import Link from '@source/components/interface/link/Link'
import Page from '@source/components/layout/page/Page'

// Styles
import './Introduction.scss'

// Section: Works > Landing > Introduction (Header)
function Introduction () {
  // Functions
  function renderSkillsLink () {
    return (
      <Link
        className="link"
        variant="classic"
        to="/profile#skills">
        my skills
      </Link>
    )
  }
  // Render
  return (
    <Page.Header name="introduction">
      <Content>
        <Headline displaySize="biggest">
          Digital products,
          <br />
          tastefully branded.
        </Headline>
        <p className="lead">My portfolio showcases  <strong>digital products with unique visual identities</strong>, featuring <strong>mobile and web applications</strong> that I designed and developed independently or with teams I have led, alongside some additional featured work in <strong>branding</strong>, <strong>typography</strong>, <strong>graphic design</strong>, <strong>print design</strong>, and <strong>animation</strong>, and <strong>creative editing</strong>.</p>
        <p className="lead">Don’t forget to check out {renderSkillsLink()} for more information.</p>
      </Content>
    </Page.Header>
  )
}

// Export
export default Introduction
