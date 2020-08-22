// Modules
import React from 'react'
import { Helmet } from 'react-helmet'

// Components
import Container from '~/components/layout/container/Container'
import Headline from '~/components/model/headline/Headline'
import Page from '~/components/layout/page/Page'

// Style
import './Profile.less'

// Page: Profile
function Profile () {
  // Render
  return (
    <Page name="profile">
      <Helmet>
        <title>ozanilbey:profile</title>
      </Helmet>
      <Page.Header name="introduction">
        <Container>
          <Headline displaySize="big">Profile</Headline>
          <p>This is <b>Profile</b> page.</p>
        </Container>
      </Page.Header>
    </Page>
  )
}

// Export
export default Profile
