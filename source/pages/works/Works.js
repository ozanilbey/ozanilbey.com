// Modules
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Page from '~/components/layout/page/Page'

// Subpages
import Work from './work/Work'

// Style
import './Works.less'

// Page: Works
function Works () {
  // Data
  const { workOrFilter } = useParams()

  // Render
  return workOrFilter && isDisplayingWork
    ? <Work slug={workOrFilter} />
    : <Page name="works">
      <Helmet>
        <title>ozanilbey:works</title>
      </Helmet>
      <Page.Header name="introduction">
        <Container>
          <Heading displaySize="big">Works</Heading>
          <p>This is <b>Works</b> page.</p>
        </Container>
      </Page.Header>
      <Page.Section>
        <Container>
          <b>All works</b>
          <ul>
            <li><Link to="/works/sample">Sample Work</Link></li>
          </ul>
        </Container>
      </Page.Section>
    </Page>
}

// Export
export default Works
