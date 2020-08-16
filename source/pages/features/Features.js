// Modules
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Page from '~/components/layout/page/Page'

// Subpages
import Layout from './layout/Layout'
import Typography from './typography/Typography'

// Style
import './Features.less'

// Page: Features
function Features () {
  // Data
  const { feature } = useParams()

  // Render
  switch (feature) {
    case 'layout':
      return <Layout />
    case 'typography':
      return <Typography />
    default:
      return (
        <Page name="features">
          <Helmet>
            <title>Isomorphic | Features</title>
          </Helmet>
          <Page.Header name="introduction">
            <Container>
              <Heading displaySize="big">Features</Heading>
              <p>This is <b>Features</b> page. There is also <Link to="/">Home</Link> page.</p>
            </Container>
          </Page.Header>
          <Page.Section>
            <Container>
              <b>List of features</b>
              <ul>
                <li><Link to="/features/layout">Layout</Link></li>
                <li><Link to="/features/typography">Typography</Link></li>
              </ul>
            </Container>
          </Page.Section>
        </Page>
      )
  }
}

// Export
export default Features
