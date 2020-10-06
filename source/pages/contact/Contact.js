// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Page from '~/components/layout/page/Page'
// Content
import Meta from '~/content/meta/Meta'

// Subcontent
import Social from './content/social/Social'


// Style
import './Contact.less'

// Page: Contact
function Contact () {
  // Render
  return (
    <Page name="contact">
      <Page.Header name="introduction">
      <Meta page="contact" />
        <Container>
          <Heading displaySize="big">Contact</Heading>
          <p>This is <b>Contact</b> page.</p>
        </Container>
      </Page.Header>
      <Social />
    </Page>
  )
}

// Export
export default Contact
