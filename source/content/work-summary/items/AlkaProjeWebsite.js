// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Alka Proje Website (Item)
const AlkaProjeWebsite = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/alka-proje-website/teaser.png" />
      <p className="lead">Alka Proje is an <strong>architecture company</strong> located in Ankara, Turkey.</p>
      <p className="lead">I had designed a sleek and responsive user interface for Alka Proje <strong>in 2016</strong>. I crafted the website with HTML, CSS, jQuery and a file-based JSON database. I had also provided a solution to filter and sort the projects displayed; without messing the responsive design.</p>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Desktop Screens</Heading>
      <Media type="image" width={1152} source="/alka-proje-website/01.png" />
      <Media type="image" width={1152} source="/alka-proje-website/02.png" />
      <Media type="image" width={1152} source="/alka-proje-website/03.png" />
      <Media type="image" width={1152} source="/alka-proje-website/04.png" />
      <Media type="image" width={1152} source="/alka-proje-website/05.png" />
      <Media type="image" width={1152} source="/alka-proje-website/06.png" />
      <Media type="image" width={1152} source="/alka-proje-website/07.png" />
      <Media type="image" width={1152} source="/alka-proje-website/08.png" />
      <Media type="image" width={1152} source="/alka-proje-website/09.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Mobile Screens</Heading>
      <Media type="image" width={1152} source="/alka-proje-website/10.png" />
      <Media type="image" width={1152} source="/alka-proje-website/11.png" />
      <Media type="image" width={1152} source="/alka-proje-website/12.png" />
      <Media type="image" width={1152} source="/alka-proje-website/13.png" />
      <Media type="image" width={1152} source="/alka-proje-website/14.png" />
      <Media type="image" width={1152} source="/alka-proje-website/15.png" />
    </Container>
  </>
)

// Export
export default AlkaProjeWebsite
