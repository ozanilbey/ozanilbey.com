// Modules
import React from 'react'

// Components
import Page from '~/components/layout/page/Page'

// Content
import Meta from '~/content/meta/Meta'

// Subcontent
import QuickOptions from './content/quick-options/QuickOptions'
import ContactForm from './content/contact-form/ContactForm'
import SocialAccounts from './content/social-accounts/SocialAccounts'

// Style
import './Contact.less'

// Page: Contact
function Contact () {
  // Render
  return (
    <Page name="contact">
      <Meta page="contact" />
      <QuickOptions />
      <ContactForm />
      <SocialAccounts />
    </Page>
  )
}

// Export
export default Contact
