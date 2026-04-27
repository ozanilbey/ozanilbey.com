// Routes
import Routes from './routes/Main'

// Components
import Page from '@source/components/layout/page/Page'

// Styles
import './Contact.scss'

// Page: Contact
function Contact () {
  // Render
  return (
    <Page name="contact">
      <Routes />
    </Page>
  )
}

// Export
export default Contact
