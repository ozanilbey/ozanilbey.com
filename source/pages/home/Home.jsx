// Routes
import Routes from './routes/Main'

// Components
import Page from '@source/components/layout/page/Page'

// Components
import Meta from '@source/components/utility/meta/Meta'

// Styles
import './Home.scss'

// Page: Home
function Home () {
  // Render
  return (
    <Page name="home">
      <Meta page="home" />
      <Routes />
    </Page>
  )
}

// Export
export default Home
