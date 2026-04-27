// Routes
import Routes from './routes/Main'

// Components
import Page from '@source/components/layout/page/Page'

// Styles
import './Error.scss'

// Page: Error
function Error () {
  // Render
  return (
    <Page name="error">
      <Routes />
    </Page>
  )
}

// Export
export default Error
