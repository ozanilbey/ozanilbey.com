// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Maruf Corporate Identity (Item)
const MarufCorporateIdentity = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/maruf-corporate-identity/teaser.png" />
      <p className="lead">Maruf is an <strong>accounting firm</strong> located in Ankara, Turkey.</p>
      <p className="lead">I had designed <strong>a corporate identity</strong> for Maruf YMM <strong>in 2011</strong>, providing essential pieces of a corporate identity such as logo, business cards, letterhead, folder, and envelope. I had also designed and developed the website.</p>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Logo</Heading>
      <Media type="image" width={1152} source="/maruf-corporate-identity/01.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Letterhead</Heading>
      <Media type="image" width={1152} source="/maruf-corporate-identity/02.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Folder</Heading>
      <Media type="image" width={1152} source="/maruf-corporate-identity/03.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Envelope</Heading>
      <Media type="image" width={1152} source="/maruf-corporate-identity/04.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Business Cards</Heading>
      <Media type="image" width={1152} source="/maruf-corporate-identity/05.png" />
      <Media type="image" width={1152} source="/maruf-corporate-identity/06.png" />
      <Media type="image" width={1152} source="/maruf-corporate-identity/07.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Website</Heading>
      <Media type="image" width={1152} source="/maruf-corporate-identity/08.png" />
    </Container>
  </>
)

// Export
export default MarufCorporateIdentity
