// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Information from '~/components/type/information/Information'
import Media from '~/components/content/media/Media'

// Content: Work Summary > ODTÜ GGT Corporate Identity (Item)
const ODTUGGTCorporateIdentity = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/odtu-ggt-corporate-identity/teaser.png" />
      <p className="lead">ODTÜ GGT (Young Entrepreneurs Society) is a <strong>student club</strong> operating at <strong>Middle East Technical University</strong>.</p>
      <p className="lead">I had designed <strong>a simple corporate identity with a bright look</strong> for ODTÜ GGT <strong>in 2011</strong>, providing essential pieces of a corporate identity such as logo, business cards, letterhead, folder, and email signatures. I had also designed and developed the website.</p>
      <Information>The logo design work is mainly a revision.</Information>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Logo</Heading>
      <Media type="image" width={1152} source="/odtu-ggt-corporate-identity/01.png" />
      <small>Young Entrepreneurs Society</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Letterhead</Heading>
      <Media type="image" width={1152} source="/odtu-ggt-corporate-identity/02.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Folder</Heading>
      <Media type="image" width={1152} source="/odtu-ggt-corporate-identity/03.png" />
      <small>“Empowering Your Ideas“</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Business Cards</Heading>
      <Media type="image" width={1152} source="/odtu-ggt-corporate-identity/04.png" />
      <Media type="image" width={1152} source="/odtu-ggt-corporate-identity/05.png" />
      <Media type="image" width={1152} source="/odtu-ggt-corporate-identity/06.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Website</Heading>
      <Media type="image" width={1152} source="/odtu-ggt-corporate-identity/07.png" />
      <small>odtuggt.org</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Slides</Heading>
      <Media type="image" width={1152} source="/odtu-ggt-corporate-identity/08.png" />
      <small>Meeting</small>
      <Media type="image" width={1152} source="/odtu-ggt-corporate-identity/09.png" />
      <small>Teaching</small>
      <Media type="image" width={1152} source="/odtu-ggt-corporate-identity/10.png" />
      <small>Developing</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Email Signatures</Heading>
      <Media type="image" width={1152} source="/odtu-ggt-corporate-identity/11.png" />
      <Media type="image" width={1152} source="/odtu-ggt-corporate-identity/12.png" />
      <Media type="image" width={1152} source="/odtu-ggt-corporate-identity/13.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Academy-G Logo</Heading>
      <Media type="image" width={1152} source="/odtu-ggt-corporate-identity/14.png" />
    </Container>
  </>
)

// Export
export default ODTUGGTCorporateIdentity
