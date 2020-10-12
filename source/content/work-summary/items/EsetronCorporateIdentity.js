// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Esetron Corporate Identity (Item)
const EsetronCorporateIdentity = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/esetron-corporate-identity/teaser.png" />
      <p className="lead">Esetron is a <strong>robotics company</strong> located in Ankara, Turkey.</p>
      <p className="lead">I had designed <strong>a simple corporate identity</strong> for Esetron <strong>in 2012</strong>, providing essential pieces of a corporate identity such as logo, business cards, letterhead, folder, envelope, and invoice.</p>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Logo</Heading>
      <Media type="image" width={1152} source="/esetron-corporate-identity/01.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Letterhead</Heading>
      <Media type="image" width={1152} source="/esetron-corporate-identity/02.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Folder</Heading>
      <Media type="image" width={1152} source="/esetron-corporate-identity/03.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Envelope</Heading>
      <Media type="image" width={1152} source="/esetron-corporate-identity/04.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Business Cards</Heading>
      <Media type="image" width={1152} source="/esetron-corporate-identity/05.png" />
      <Media type="image" width={1152} source="/esetron-corporate-identity/06.png" />
      <Media type="image" width={1152} source="/esetron-corporate-identity/07.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Invoice</Heading>
      <Media type="image" width={1152} source="/esetron-corporate-identity/08.png" />
    </Container>
  </>
)

// Export
export default EsetronCorporateIdentity
