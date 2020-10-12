// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Bora Corporate Identity (Item)
const BoraCorporateIdentity = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/bora-corporate-identity/teaser.png" />
      <p className="lead">Bora is an <strong>architecture and planning company</strong> located in Ankara, Turkey. The company is mainly operating in 4 fields: city planning, architecture, construction, and cartography.</p>
      <p className="lead">I had designed <strong>a clean corporate identity</strong> for Bora <strong>in 2012</strong>, providing essential pieces of a corporate identity such as logo, business cards, letterhead, folder, and envelope.</p>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Logo</Heading>
      <Media type="image" width={1152} source="/bora-corporate-identity/01.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>The Strip</Heading>
      <Media type="image" width={1152} source="/bora-corporate-identity/02.png" />
      <small>City Planning / Cartography / Architecture / Construction</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Logo with Label</Heading>
      <Media type="image" width={1152} source="/bora-corporate-identity/03.png" />
      <small>Bora City Planning</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Letterhead</Heading>
      <Media type="image" width={1152} source="/bora-corporate-identity/04.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Folder</Heading>
      <Media type="image" width={1152} source="/bora-corporate-identity/05.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Envelope</Heading>
      <Media type="image" width={1152} source="/bora-corporate-identity/06.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Business Cards</Heading>
      <Media type="image" width={1152} source="/bora-corporate-identity/07.png" />
      <Media type="image" width={1152} source="/bora-corporate-identity/08.png" />
      <Media type="image" width={1152} source="/bora-corporate-identity/09.png" />
    </Container>
  </>
)

// Export
export default BoraCorporateIdentity
