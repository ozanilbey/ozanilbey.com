// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Content: Work Summary > invport Web Application (Item)
const InvportWebApplication = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/invport-web-application/teaser.png" />
      <p className="lead">invport is an <strong>idea crowdsourcing platform</strong> aiming to start and develop innovative industrial projects. It is built with the purpose of unveiling the advantages of university-industry collaboration.</p>
      <p className="lead">I had designed <strong>a clean and responsive user interface</strong> and build an HTML, CSS, and jQuery front end for invport <strong>in 2017</strong>. I had also provided icon sets representing each industry.</p>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Desktop Screens</Heading>
      <Media type="image" width={1152} source="/invport-web-application/01.png" />
      <Media type="image" width={1152} source="/invport-web-application/02.png" />
      <Media type="image" width={1152} source="/invport-web-application/03.png" />
      <Media type="image" width={1152} source="/invport-web-application/04.png" />
      <Media type="image" width={1152} source="/invport-web-application/05.png" />
      <Media type="image" width={1152} source="/invport-web-application/06.png" />
      <Media type="image" width={1152} source="/invport-web-application/07.png" />
      <Media type="image" width={1152} source="/invport-web-application/08.png" />
      <Media type="image" width={1152} source="/invport-web-application/09.png" />
      <Media type="image" width={1152} source="/invport-web-application/10.png" />
      <Media type="image" width={1152} source="/invport-web-application/11.png" />
      <Media type="image" width={1152} source="/invport-web-application/12.png" />
      <Media type="image" width={1152} source="/invport-web-application/13.png" />
      <Media type="image" width={1152} source="/invport-web-application/14.png" />
    </Container>
  </>
)

// Export
export default InvportWebApplication
