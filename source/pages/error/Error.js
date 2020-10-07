// Modules
import React from 'react'
import { useLocation } from 'react-router-dom'

// Components
import Container from '~/components/layout/container/Container'
import Page from '~/components/layout/page/Page'
import Link from '~/components/interface/link/Link'

// Content
import Meta from '~/content/meta/Meta'

// Style
import './Error.less'

// Page: Error
function Error () {
  // Data
  const { pathname } = useLocation()

  // Render
  return (
    <Page name="error">
      <Meta page="error" />
      <Page.Header
        isCentered
        name="introduction"
        data-content="introduction">
        <Container isBlockLayout>
          <img src="/images/illustrations/error.png" />
        </Container>
        <Container isBlockLayout>
          <mark>{pathname}</mark>
          <p className="lead"><strong>Page cannot be found!</strong></p>
          <Link type="cta" to="/">Let‘s go home</Link>
        </Container>
      </Page.Header>
    </Page>
  )
}

// Export
export default Error
