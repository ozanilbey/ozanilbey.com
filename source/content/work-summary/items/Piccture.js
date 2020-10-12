// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Piccture (Item)
const Piccture = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/piccture/teaser.png" />
      <p className="lead">Piccture is <strong>a social platform for designers</strong> and everyone else. It provides a <i>tool</i> for giving <strong>visual feedback</strong> on images. No more text comments!</p>
      <p className="lead">Any feedback on Piccture is <i>point-specific</i> and <i>visually-informant</i>. Piccture connects everyone with designers all over the world. Piccture connects everyone with designers all over the world. Users follow each other, and they also have the chance to follow other artists, stylists, painters, photographers, illustrators, architects, designers, and even companies.</p>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Visual feedback!</Heading>
      <i>It’s a thing now.</i>
      <Media type="image" width={1152} source="/piccture/01.png" full={true} />
      <Media type="image" width={1152} source="/piccture/02.png" full={true} />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Screens</Heading>
      <Media type="image" width={1152} source="/piccture/03.png" />
      <Media type="image" width={1152} source="/piccture/04.png" />
      <Media type="image" width={1152} source="/piccture/05.png" />
      <Media type="image" width={1152} source="/piccture/06.png" />
      <Media type="image" width={1152} source="/piccture/07.png" />
      <Media type="image" width={1152} source="/piccture/08.png" />
      <Media type="image" width={1152} source="/piccture/09.png" />
      <Media type="image" width={1152} source="/piccture/10.png" />
    </Container>
  </>
)

// Export
export default Piccture
