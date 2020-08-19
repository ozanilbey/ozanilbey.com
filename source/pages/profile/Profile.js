// Modules
import React from 'react'
import { Helmet } from 'react-helmet'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
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
          <Heading displaySize="big">Profile</Heading>
          <p>This is <b>Profile</b> page.</p>
        </Container>
      </Page.Header>
    </Page>
  )
}

// Export
export default Profile
