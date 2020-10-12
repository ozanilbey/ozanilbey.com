// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Mega Posters (Item)
const MegaPosters = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/mega-posters/teaser.png" />
      <p className="lead">MEGA Industries is a <strong>petroleum solutions company</strong> located in Ankara, Turkey. Its mission is to design, develop and implement end-to-end monitoring and control systems.</p>
      <p className="lead">I had designed 12 posters (one per each month of 2017) for MEGA Industries <strong>in 2016</strong> utilising famous quotations about corporate image, success, engineering, design, and business in poster designs for inspirational and motivational purposes.</p>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Posters</Heading>
      <small>Ordered by Month</small>
      <Media type="image" width={1152} source="/mega-posters/01.png" />
      <Media type="image" width={1152} source="/mega-posters/02.png" />
      <Media type="image" width={1152} source="/mega-posters/03.png" />
      <Media type="image" width={1152} source="/mega-posters/04.png" />
      <Media type="image" width={1152} source="/mega-posters/05.png" />
      <Media type="image" width={1152} source="/mega-posters/06.png" />
      <Media type="image" width={1152} source="/mega-posters/07.png" />
      <Media type="image" width={1152} source="/mega-posters/08.png" />
      <Media type="image" width={1152} source="/mega-posters/09.png" />
      <Media type="image" width={1152} source="/mega-posters/10.png" />
      <Media type="image" width={1152} source="/mega-posters/11.png" />
      <Media type="image" width={1152} source="/mega-posters/12.png" />
    </Container>
  </>
)

// Export
export default MegaPosters
