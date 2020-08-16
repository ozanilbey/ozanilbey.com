// Modules
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Page from '~/components/layout/page/Page'

// Style
import './Typography.less'

// Page: Features > Typography
function Typography () {
  // Render
  return (
    <Page
      name="typography"
      parentName="features">
      <Helmet>
        <title>Isomorphic | Typography</title>
      </Helmet>
      <Page.Header name="introduction">
        <Container>
          <Heading displaySize="big">Typography</Heading>
          <p>This is <b>Typography</b> page, a subpage of <Link to="/features">Features</Link> page.</p>
        </Container>
      </Page.Header>
      <Page.Section name="basic-headings">
        <Container>
          <Heading rank={6}>H6: Heading 6</Heading>
          <code className="text-line-single">{'<Heading rank={6} />'}</code>
          <Heading rank={5}>H5: Heading 5</Heading>
          <code className="text-line-single">{'<Heading rank={5} />'}</code>
          <Heading rank={4}>H4: Heading 4</Heading>
          <code className="text-line-single">{'<Heading rank={4} />'}</code>
          <Heading rank={3}>H3: Heading 3</Heading>
          <code className="text-line-single">{'<Heading rank={3} />'}</code>
          <Heading rank={2}>H2: Heading 2</Heading>
          <code className="text-line-single">{'<Heading rank={2} />'}</code>
          <Heading rank={1}>H1: Heading 1</Heading>
          <code className="text-line-single">{'<Heading rank={1} />'}</code>
        </Container>
        <Container name="special-headings">
          <Heading rank={1} displaySize="big">H1: Heading 1 (Big)</Heading>
          <code className="text-line-single">{'<Heading rank={1} displaySize="big" />'}</code>
          <Heading rank={1} displaySize="bigger">H1: Heading 1 (Bigger)</Heading>
          <code className="text-line-single">{'<Heading rank={1} displaySize="bigger" />'}</code>
          <Heading rank={1} displaySize="biggest">H1: Heading 1 (Biggest)</Heading>
          <code className="text-line-single">{'<Heading rank={1} displaySize="biggest" />'}</code>
        </Container>
      </Page.Section>
    </Page>
  )
}

// Export
export default Typography
