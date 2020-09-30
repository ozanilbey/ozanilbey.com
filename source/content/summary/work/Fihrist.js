// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Content: Summary > Fihrist (Work)
const Fihrist = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/fihrist/teaser.png" />
      <p className="lead">Fihrist is a platform for reading curated articles. There is no imagery, no ads, no moving items on the article pages to prevent an uncomfortable experience.</p>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Desktop Screens</Heading>
      <Media type="image" width={1152} source="/fihrist/01.png" />
      <Media type="image" width={1152} source="/fihrist/02.png" />
      <Media type="image" width={1152} source="/fihrist/03.png" />
      <Media type="image" width={1152} source="/fihrist/04.png" />
      <Media type="image" width={1152} source="/fihrist/05.png" />
      <Media type="image" width={1152} source="/fihrist/06.png" />
      <Media type="image" width={1152} source="/fihrist/07.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Mobile Screens</Heading>
      <Media type="image" width={1152} source="/fihrist/08.png" />
      <Media type="image" width={1152} source="/fihrist/09.png" />
      <Media type="image" width={1152} source="/fihrist/10.png" />
      <Media type="image" width={1152} source="/fihrist/11.png" />
      <Media type="image" width={1152} source="/fihrist/12.png" />
      <Media type="image" width={1152} source="/fihrist/13.png" />
      <Media type="image" width={1152} source="/fihrist/14.png" />
      <Media type="image" width={1152} source="/fihrist/15.png" />
    </Container>
  </>
)

// Export
export default Fihrist
