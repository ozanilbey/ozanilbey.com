// Modules
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Page from '~/components/layout/page/Page'

// Style
import './Home.less'

// Page: Home
function Home () {
  // Render
  return (
    <Page name="home">
      <Helmet>
        <title>Isomorphic | Home</title>
      </Helmet>
      <Page.Header name="introduction">
        <Container>
          <Heading displaySize="big">Home</Heading>
          <p>This is <b>Home</b> page. There is also <Link to="/features">Features</Link> page.</p>
        </Container>
      </Page.Header>
    </Page>
  )
}

// Export
export default Home
