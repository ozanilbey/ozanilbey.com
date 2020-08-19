// Modules
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Page from '~/components/layout/page/Page'

// Hooks
import useWorkSummary from '~/hooks/useWorkSummary'

// Style
import './Work.less'

// Page: Works > Work
function Work (props) {
  // Data
  const summary = useWorkSummary(props.slug)

  // Render
  return (
    <Page
      name={props.slug}
      parentName="works">
      <Helmet>
        <title>ozanilbey:works</title>
      </Helmet>
      <Page.Header name="excerpt">
        <Container>
          <Heading displaySize="big">Work</Heading>
          <p>This is a work page.</p>
        </Container>
      </Page.Header>
      <Page.Section name="summary">
        <Container>
          {summary}
        </Container>
      </Page.Section>
    </Page>
  )
}

// Export
export default Work
