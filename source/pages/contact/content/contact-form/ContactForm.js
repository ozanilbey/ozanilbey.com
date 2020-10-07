// Modules
import React, { useState, useEffect } from 'react'

// Components
import Page from '~/components/layout/page/Page'
import Container from '~/components/layout/container/Container'
import Headline from '~/components/model/headline/Headline'
import Form from '~/components/interface/form/Form'
import Heading from '~/components/type/heading/Heading'

// Helpers
import { checkIfClient } from '~/helpers/document'

// Constants
import { EMAIL_PATTERN } from '~/constants/patterns'

// Style
import './ContactForm.less'

// Subcontent: Contact > ContactForm
function ContactForm () {
  // State
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  // Methods
  function submitEmail (values, callback) {
    const { name, address, message } = values
    let error
    if (checkIfClient()) {
      fetch('/email', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json; charset=utf-8' }),
        body: JSON.stringify({ name, address, message })
      })
        .then(response => {
          error = response.status !== 200
          return response.text()
        })
        .then(response => callback(error, response))
    }
  }
  function scrollToErrors () {
    // Scroll to error
  }

  // Effects
  useEffect(() => {
    const duration = 250
    const timer = setTimeout(
      () => isFormSubmitted && setIsFormSubmitted(false),
      duration
    )
    return () => clearTimeout(timer)
  }, [isFormSubmitted])

  // Render
  return (
    <Page.Section
      name="contact-form"
      data-content="contact-form">
      <Container>
        <Heading
          isSingleLine
          className="dim"
          rank={4}>
          If you prefer forms,
        </Heading>
        <Headline
          isSingleLine
          displaySize="big">
          send me a message
        </Headline>
        <p className="lead">I will get back to you as soon as possible.</p>
      </Container>
      <Container>
        <Form
          willResetAfter
          isDisabled={isFormSubmitted}
          timeoutBeforeReset={250}
          onSubmit={submitEmail}
          onSubmitSuccess={() => {
            setIsFormSubmitted(true)
          }}
          onError={scrollToErrors}>
          <Form.Field label="Your name">
            <Form.Input
              name="name"
              type="text"
              reference="Name"
              validator={{ minimumLength: 1 }}
              placeholder="John Doe" />
          </Form.Field>
          <Form.Field label="Your email">
            <Form.Input
              name="address"
              type="email"
              reference="Email address"
              validator={{ pattern: EMAIL_PATTERN }}
              placeholder="john@doe.com" />
          </Form.Field>
          <Form.Field label="Your message">
            <Form.Input
              isMultiLine
              name="message"
              type="text"
              reference="Message"
              validator={{ minimumLength: 10 }}
              placeholder="We need you on this project."
              lineCount={4} />
          </Form.Field>
          <Form.Field>
            <Form.Input
              type="submit"
              value="Send Message" />
          </Form.Field>
        </Form>
      </Container>
    </Page.Section>
  )
}

// Export
export default ContactForm
