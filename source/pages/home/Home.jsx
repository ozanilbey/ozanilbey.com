// Routes
import Routes from './routes/Main'

// Components
import Page from '@source/components/layout/page/Page'

// Styles
import './Home.scss'

// Page: Home
function Home () {
  // Render
  return (
    <Page name="home">
      <Routes />
    </Page>
  )
}

// Export
export default Home
