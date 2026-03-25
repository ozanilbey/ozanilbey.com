// Modules
import { useEffect, useRef, useState } from 'react'

// Components
import Content from '@source/components/layout/content/Content'
import FormUI from '@source/components/interface/form/Form'
import Headline from '@source/components/model/headline/Headline'
import Page from '@source/components/layout/page/Page'

// Helpers
import { getBaseFontSize } from '@source/helpers/document'

// Constants
import { EMAIL_PATTERN } from '@source/constants/patterns'

// Styles
import './Form.scss'

// Section: Contact > Landing > Form
function Form () {
  // References
  const form = useRef()

  // State
  const [response, setResponse] = useState(null)

  // Functions
  async function submitEmail (values, callback) {
    const { name, address, message } = values
    const response = await fetch('/email', {
      body: JSON.stringify({ address, message, name }),
      headers: new Headers({ 'Content-Type': 'application/json; charset=utf-8' }),
      method: 'POST'
    })
    const error = response.status !== 200
    const data = await response.text()
    callback(error, data)
  }

  // Effects
  useEffect(() => {
    let timer
    function handleResponse (responseType) {
      timer = setTimeout(() => setResponse(null), responseType === 'error' ? 50 : 2500)
      const upperLimit = (window.innerWidth > 1440 ? 5 : 3.5) * getBaseFontSize()
      const topPosition = form.current.getBoundingClientRect().top
      if (topPosition < upperLimit) {
        window.scrollTo({
          behavior: 'smooth',
          top: Math.ceil(document.documentElement.scrollTop + topPosition - 1.5 * upperLimit)
        })
      }
    }
    if (response && form.current) handleResponse(response)
    return () => clearTimeout(timer)
  }, [response])

  // Render
  return (
    <Page.Section name="form">
      <Content>
        <Headline
          isSingleLine
          displaySize="big"
          contentBefore="If you prefer text,">
          send me a message
        </Headline>
        <p className="lead">I will get back to you as soon as possible.</p>
      </Content>
      <Content>
        <div
          ref={form}
          className="container">
          {response === 'success' && <p className="success">Your message has been sent.</p>}
          <FormUI
            className="form"
            willDisplayErrorsIndividually
            isDisabled={response === 'success'}
            onSubmitSuccess={() => setResponse('success')}
            onError={() => setResponse('error')}
            onSubmit={submitEmail}>
            <FormUI.Field label="Your name">
              <FormUI.Input
                name="name"
                type="text"
                label="Name"
                className="name input"
                placeholder="John Doe"
                validator={{ minimumLength: 1 }} />
            </FormUI.Field>
            <FormUI.Field label="Your email">
              <FormUI.Input
                type="email"
                name="address"
                label="Email address"
                className="email input"
                placeholder="john@doe.com"
                validator={{ minimumLength: 1, pattern: EMAIL_PATTERN }} />
            </FormUI.Field>
            <FormUI.Field label="Your message">
              <FormUI.Input
                type="text"
                isMultiLine
                lineCount={4}
                name="message"
                label="Message"
                className="message input"
                validator={{ minimumLength: 10 }}
                placeholder="We need you on this project." />
            </FormUI.Field>
            <FormUI.Field>
              <FormUI.Input
                type="submit"
                value="Send message"
                className="submit input" />
            </FormUI.Field>
          </FormUI>
        </div>
      </Content>
    </Page.Section>
  )
}

// Export
export default Form
