// Modules
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Page from '~/components/layout/page/Page'

// Style
import './Error.less'

// Page: Error
function Error () {
  // Data
  const { pathname } = useLocation()

  // Render
  return (
    <Page name="error">
      <Helmet>
        <title>Isomorphic | Error</title>
      </Helmet>
      <Page.Header
        isFullScreen
        name="introduction">
        <Container>
          <Heading displaySize="big">Error</Heading>
          <p><mark>{pathname}</mark> cannot be found!</p>
          <p>This is <b>Error</b> page. Let‘s go to <Link to="/">Home</Link> page.</p>
        </Container>
      </Page.Header>
    </Page>
  )
}

// Export
export default Error
