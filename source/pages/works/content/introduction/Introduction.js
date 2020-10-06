// Modules
import React from 'react'

// Components
import Headline from '~/components/model/headline/Headline'
import Page from '~/components/layout/page/Page'
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'

// Style
import './Introduction.less'

// Subcontent: Works > Introduction
function Introduction (props) {
  // Render
  return (
    <Page.Header name="introduction">
      <Container>
        <Headline displaySize="bigger">
          Digital products,
          <br />
          tastefully branded.
        </Headline>
        <p className="lead">My design work is mostly focused on <strong>UX</strong>/<strong>UI</strong>/<strong>IxD</strong>. There is also <strong>branding</strong>, <strong>typography</strong>, <strong>graphic design</strong>, <strong>print design</strong>, <strong>animation</strong>, and <strong>creative editing</strong> in my pocket. I mostly work on creating digital products with unique identities. Don’t forget to check out <Link type="regular" to="/profile#professional-skills">my skills</Link> for more information.</p>
      </Container>
    </Page.Header>
  )
}

// Export
export default Introduction
