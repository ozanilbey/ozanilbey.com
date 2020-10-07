// Modules
import React from 'react'

// Components
import Page from '~/components/layout/page/Page'
import Container from '~/components/layout/container/Container'
import Headline from '~/components/model/headline/Headline'
import ConnectButtons from '~/components/content/connect-buttons/ConnectButtons'

// Data
import contactOptions from '~/data/contactOptions'

// Style
import './QuickOptions.less'

// Subcontent: Contact > QuickOptions
function QuickOptions () {
  // Render
  return (
    <Page.Header
      name="quick-options"
      data-content="quick-options">
      <Container>
        <Headline displaySize="bigger">Let’s talk.</Headline>
        <p className="lead">Here you can find every possible way to communicate with me. If you want to <strong>pitch your project</strong> or <strong>offer me a job</strong>, I’d like to hear from you.</p>
      </Container>
      <Container>
        <ConnectButtons
          isIconColored
          data={contactOptions} />
      </Container>
    </Page.Header>
  )
}

// Export
export default QuickOptions
