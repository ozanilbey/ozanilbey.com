// Routes
import Routes from './routes/Main'

// Components
import Meta from '@source/components/utility/meta/Meta'
import Page from '@source/components/layout/page/Page'

// Styles
import './Profile.scss'

// Page: Profile
function Profile () {
  // Render
  return (
    <Page name="profile">
      <Meta page="profile" />
      <Routes />
    </Page>
  )
}

// Export
export default Profile
