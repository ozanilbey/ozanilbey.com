// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Content: Work Summary > METU Rock Festival (Item)
const METURockFestival = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/rock-senligi-visuals/teaser.png" />
      <p className="lead">Rock Şenliği is a <strong>Rock Festival</strong> organized by ODTÜ MT (Music Society).</p>
      <p className="lead">I had designed a set of promotional visuals for ODTÜ MT <strong>in 2011</strong>: A poster, a handout, and a set of 5 tickets (one per each day).</p>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Poster</Heading>
      <Media type="image" width={1152} source="/rock-senligi-visuals/01.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Handout</Heading>
      <Media type="image" width={1152} source="/rock-senligi-visuals/02.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Tickets</Heading>
      <Media type="image" width={1152} source="/rock-senligi-visuals/03.png" />
      <Media type="image" width={1152} source="/rock-senligi-visuals/04.png" />
      <Media type="image" width={1152} source="/rock-senligi-visuals/05.png" />
      <Media type="image" width={1152} source="/rock-senligi-visuals/06.png" />
      <Media type="image" width={1152} source="/rock-senligi-visuals/07.png" />
    </Container>
  </>
)

// Export
export default METURockFestival
