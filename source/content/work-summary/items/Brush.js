// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Brush (Item)
const Brush = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/brush/teaser.png" />
      <p className="lead">Brush is an e-commerce project where creative people run their campaigns by offering limited number of <strong>canvas and t-shirt prints</strong> to <strong>early backers</strong>. Thanks to Brush, it becomes easy to acquire unique artwork products while supporting artists, graphic designers, illustrators. You only need to back your favorite artist’s <strong>limited-edition artwork prints</strong> campaign.</p>
      <p className="lead">Support art, be unique, pay less.</p>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Desktop Screens</Heading>
      <Media type="image" width={1152} source="/brush/01.png" />
      <Media type="image" width={1152} source="/brush/02.png" />
      <Media type="image" width={1152} source="/brush/03.png" />
      <Media type="image" width={1152} source="/brush/04.png" />
      <Media type="image" width={1152} source="/brush/05.png" />
      <Media type="image" width={1152} source="/brush/06.png" />
      <Media type="image" width={1152} source="/brush/07.png" />
      <Media type="image" width={1152} source="/brush/08.png" />
      <Media type="image" width={1152} source="/brush/09.png" />
      <Media type="image" width={1152} source="/brush/10.png" />
      <Media type="image" width={1152} source="/brush/11.png" />
      <Media type="image" width={1152} source="/brush/12.png" />
      <Media type="image" width={1152} source="/brush/13.png" />
      <Media type="image" width={1152} source="/brush/14.png" />
      <Media type="image" width={1152} source="/brush/15.png" />
      <Media type="image" width={1152} source="/brush/16.png" />
      <Media type="image" width={1152} source="/brush/17.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Mobile Screens</Heading>
      <Media type="image" width={1152} source="/brush/18.png" />
      <Media type="image" width={1152} source="/brush/19.png" />
      <Media type="image" width={1152} source="/brush/20.png" />
      <Media type="image" width={1152} source="/brush/21.png" />
      <Media type="image" width={1152} source="/brush/22.png" />
      <Media type="image" width={1152} source="/brush/23.png" />
      <Media type="image" width={1152} source="/brush/24.png" />
      <Media type="image" width={1152} source="/brush/25.png" />
      <Media type="image" width={1152} source="/brush/26.png" />
    </Container>
  </>
)

// Export
export default Brush
