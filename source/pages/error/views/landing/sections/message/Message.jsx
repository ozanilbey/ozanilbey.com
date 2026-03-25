// Modules
import { useLocation } from 'react-router-dom'

// Components
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Link from '@source/components/interface/link/Link'
import Page from '@source/components/layout/page/Page'

// Styles
import './Message.scss'

// Section: Error > Landing > Message (Header)
function Message () {
  // Data
  const { pathname } = useLocation()

  // Render
  return (
    <Page.Header
      name="message"
      spacing="xsmall">
      <Content alignment="center">
        <img
          className="visual"
          src="/images/illustrations/error.png" />
      </Content>
      <Content alignment="center">
        <Heading
          rank={1}
          isSingleLine
          className="title">
          Oh no, it's a 404!
        </Heading>
        <mark className="path">{pathname}</mark>
      </Content>
      <Content alignment="center">
        <p className="detail">Don't worry, I got you covered.</p>
        <ul className="actions">
          <li className="action primary">
            <Link
              to="/"
              isReverse
              arrow="left"
              variant="button">
              Let‘s go home
            </Link>
          </li>
        </ul>
      </Content>
    </Page.Header>
  )
}

// Export
export default Message
