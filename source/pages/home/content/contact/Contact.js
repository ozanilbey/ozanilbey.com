// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Page from '~/components/layout/page/Page'
import Headline from '~/components/model/headline/Headline'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'

// Style
import './Contact.less'

// Subcontent: Home > Contact
function Contact () {
  // Render
  return (
    <Page.Section
      name="contact"
      data-content="Contact">
      <Container>
        <Heading
          isSingleLine
          className="dim"
          rank={4}>
          Well,
        </Heading>
        <Headline
          isSingleLine
          displaySize="big">
          let’s talk
        </Headline>
        <p className="lead">If you have something to say or a job to offer, I’d like to hear from you. <Link type="cta" to="/contact">Contact me</Link></p>
      </Container>
    </Page.Section>
  )
}

// Export
export default Contact
