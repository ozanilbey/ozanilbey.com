// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Information from '~/components/type/information/Information'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Fraktal Proje Corporate Identity (Item)
const FraktalProjeCorporateIdentity = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/fraktal-proje-corporate-identity/teaser.png" />
      <p className="lead">Fraktal Proje is a <strong>multidisciplinary design company</strong> located in <strong>Ankara</strong>.</p>
      <p className="lead">I had designed <strong>a corporate identity</strong> for Fraktal Proje <strong>in 2013</strong>, providing essential pieces of a corporate identity such as logo, business cards, letterhead, folder, envelope and invoice.</p>
      <Information>I am one of the co-founders of the company.</Information>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Icon</Heading>
      <Media type="image" width={1152} source="/fraktal-proje-corporate-identity/01.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Logo</Heading>
      <Media type="image" width={1152} source="/fraktal-proje-corporate-identity/02.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Letterhead</Heading>
      <Media type="image" width={1152} source="/fraktal-proje-corporate-identity/03.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Folder</Heading>
      <Media type="image" width={1152} source="/fraktal-proje-corporate-identity/04.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Envelope</Heading>
      <Media type="image" width={1152} source="/fraktal-proje-corporate-identity/05.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Business Cards</Heading>
      <Media type="image" width={1152} source="/fraktal-proje-corporate-identity/06.png" />
      <Media type="image" width={1152} source="/fraktal-proje-corporate-identity/07.png" />
      <Media type="image" width={1152} source="/fraktal-proje-corporate-identity/08.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Invoice</Heading>
      <Media type="image" width={1152} source="/fraktal-proje-corporate-identity/09.png" />
    </Container>
  </>
)

// Export
export default FraktalProjeCorporateIdentity
