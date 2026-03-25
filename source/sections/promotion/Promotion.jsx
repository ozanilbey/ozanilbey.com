// Components
import Content from '@source/components/layout/content/Content'
import Headline from '@source/components/model/headline/Headline'
import Link from '@source/components/interface/link/Link'
import Page from '@source/components/layout/page/Page'

// Styles
import './Promotion.scss'

// Section: Promotion (Footer)
function Promotion () {
  // Render
  return (
    <Page.Footer
      hasBackground
      name="promotion">
      <Content>
        <Headline
          isSingleLine
          displaySize="big"
          contentBefore="If you are impressed,">
          let’s work together
        </Headline>
        <p className="lead">I can help you build <strong>a great digital product</strong> delivering <strong>substantial results</strong> on time and budget. Your product will have a <strong>user-friendly interface</strong> on top of a <strong>solid infrastructure</strong> accompanied by a <strong>branded look</strong>.</p>
        <ul className="actions">
          <li className="action primary">
            <Link
              arrow="right"
              to="/contact"
              variant="button"
              className="link">
              Get in touch
            </Link>
          </li>
        </ul>
      </Content>
    </Page.Footer>
  )
}

// Export
export default Promotion
