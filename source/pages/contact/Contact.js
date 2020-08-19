// Modules
import React from 'react'
import { Helmet } from 'react-helmet'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Page from '~/components/layout/page/Page'

// Style
import './Contact.less'

// Page: Contact
function Contact () {
  // Render
  return (
    <Page name="contact">
      <Helmet>
        <title>ozanilbey:contact</title>
      </Helmet>
      <Page.Header name="introduction">
        <Container>
          <Heading displaySize="big">Contact</Heading>
          <p>This is <b>Contact</b> page.</p>
        </Container>
      </Page.Header>
    </Page>
  )
}

// Export
export default Contact
