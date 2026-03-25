// Components
import Content from '@source/components/layout/content/Content'
import Headline from '@source/components/model/headline/Headline'
import Link from '@source/components/interface/link/Link'
import Page from '@source/components/layout/page/Page'

// Styles
import './Introduction.scss'

// Section: Profile > Landing > Introduction (Header)
function Introduction () {
  // Render
  return (
    <Page.Header name="introduction">
      <Content>
        <Headline displaySize="biggest">
          Just another
          <br />
          Renaissance man.
        </Headline>
        <p className="lead">I am an <strong>engineering leader</strong> with <strong>multidisciplinary design background</strong> and <strong>strong product know-how</strong>. In recent years, I have focused on engineering management, driving technical strategy and execution.</p>
        <p className="lead">Here you can find detailed information about my work.</p>
        <ul className="actions">
          <li className="action primary">
            <Link
              isExternal
              arrow="down"
              variant="button"
              href="/documents/resume.pdf">
              Download resume
            </Link>
          </li>
          <li className="action secondary">
            <Link
              arrow="right"
              to="/contact">
              Book a meeting
            </Link>
          </li>
        </ul>
      </Content>
    </Page.Header>
  )
}

// Export
export default Introduction
