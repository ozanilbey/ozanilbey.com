// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Atom Website (Item)
const AtomWebsite = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/atom-website/teaser.png" />
      <p className="lead">ATOM is an <strong>early-stage incubator for game development startups</strong>. It is a part of ODTÜ TEKNOKENT and located in Ankara, Turkey.</p>
      <p className="lead">I had designed and developed the website of ATOM <strong>in 2011</strong>.</p>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Screens</Heading>
      <Media type="image" width={1152} source="/atom-website/01.png" />
      <Media type="image" width={1152} source="/atom-website/02.png" />
      <Media type="image" width={1152} source="/atom-website/03.png" />
      <Media type="image" width={1152} source="/atom-website/04.png" />
      <Media type="image" width={1152} source="/atom-website/05.png" />
    </Container>
  </>
)

// Export
export default AtomWebsite
