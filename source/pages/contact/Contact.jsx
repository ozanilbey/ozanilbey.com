// Routes
import Routes from './routes/Main'

// Components
import Meta from '@source/components/utility/meta/Meta'
import Page from '@source/components/layout/page/Page'

// Styles
import './Contact.scss'

// Page: Contact
function Contact () {
  // Render
  return (
    <Page name="contact">
      <Meta page="contact" />
      <Routes />
    </Page>
  )
}

// Export
export default Contact
