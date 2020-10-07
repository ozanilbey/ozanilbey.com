// Modules
import React from 'react'

// Components
import Page from '~/components/layout/page/Page'
import Container from '~/components/layout/container/Container'
import Headline from '~/components/model/headline/Headline'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'

// Style
import './Promotion.less'

// Content: Promotion
function Promotion () {
  // Render
  return (
    <Page.Footer
      name="promotion"
      data-content="promotion">
      <Container>
        <Heading
          isSingleLine
          className="dim"
          rank={4}>
          If you are impressed,
        </Heading>
        <Headline
          isSingleLine
          displaySize="big">
          let’s work together
        </Headline>
        <p className="lead">I can help you build <strong>a great digital product</strong> delivering <strong>substantial results</strong> on time and budget. Your product will have a <strong>user-friendly interface</strong> on top of a <strong>solid infrastructure</strong> accompanied by a <strong>branded look</strong>. <Link type="cta" to="/contact">Let’s talk</Link></p>
      </Container>
    </Page.Footer>
  )
}

// Export
export default Promotion
