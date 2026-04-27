// Sections
import Message from './sections/message/Message'

// Components
import Meta from '@source/components/utility/meta/Meta'
import Page from '@source/components/layout/page/Page'

// Styles
import './Landing.scss'

// Page: Home > Landing
function Landing () {
  // Render
  return (
    <Page.View
      isCentered
      name="landing">
      <Meta
        page="error"
        willIndex={false} />
      <Message />
    </Page.View>
  )
}

// Export
export default Landing
