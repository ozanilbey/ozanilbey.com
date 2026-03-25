// Routes
import Routes from './routes/Main'

// Components
import Meta from '@source/components/utility/meta/Meta'
import Page from '@source/components/layout/page/Page'

// Styles
import './Error.scss'

// Page: Error
function Error () {
  // Render
  return (
    <Page name="error">
      <Meta page="error" />
      <Routes />
    </Page>
  )
}

// Export
export default Error
