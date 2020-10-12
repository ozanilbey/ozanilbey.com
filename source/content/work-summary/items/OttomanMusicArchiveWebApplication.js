// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Ottoman Music Archive Web Application (Item)
const OttomanMusicArchiveWebApplication = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/ottoman-music-archive-web-application/teaser.png" />
      <p className="lead">TRT Külliyat is an <strong>online note archive</strong> of Ottoman music, owned and operated by TRT (Turkish National Television).</p>
      <p className="lead">I had designed a user interface for the project <strong>in 2012</strong>. The interface includes many oriental design details to reflect the Ottoman Culture properly. I had also developed the frontend of the web application.</p>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Screens</Heading>
      <Media type="image" width={1152} source="/ottoman-music-archive-web-application/01.png" />
      <Media type="image" width={1152} source="/ottoman-music-archive-web-application/02.png" />
      <Media type="image" width={1152} source="/ottoman-music-archive-web-application/03.png" />
      <Media type="image" width={1152} source="/ottoman-music-archive-web-application/04.png" />
      <Media type="image" width={1152} source="/ottoman-music-archive-web-application/05.png" />
      <Media type="image" width={1152} source="/ottoman-music-archive-web-application/06.png" />
      <Media type="image" width={1152} source="/ottoman-music-archive-web-application/07.png" />
      <Media type="image" width={1152} source="/ottoman-music-archive-web-application/08.png" />
      <Media type="image" width={1152} source="/ottoman-music-archive-web-application/09.png" />
    </Container>
  </>
)

// Export
export default OttomanMusicArchiveWebApplication
