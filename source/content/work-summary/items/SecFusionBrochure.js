// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import Information from '~/components/type/information/Information'
import Media from '~/components/content/media/Media'

// Content: Work Summary > SecFusion Brochure (Item)
const SecFusionBrochure = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/secfusion-brochure/teaser.png" />
      <p className="lead">SecFusion is a <strong>unified vunerability management platform</strong> providing vulnerability management automation solutions.</p>
      <p className="lead">I had designed a promotional product brochure for SecFusion in <strong>2020</strong>.</p>
      <Information>I had also worked on <Link type="regular" to="/works/secfusion-branding">SecFusion Branding</Link> and <Link type="regular" to="/works/secfusion-website">SecFusion Website</Link>.</Information>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Pages</Heading>
      <Media type="image" width={1152} source="/secfusion-brochure/01.png" />
      <small>Front</small>
      <Media type="image" width={1152} source="/secfusion-brochure/02.png" />
      <small>Left</small>
      <Media type="image" width={1152} source="/secfusion-brochure/03.png" />
      <small>Right</small>
      <Media type="image" width={1152} source="/secfusion-brochure/04.png" />
      <small>Back</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>All-in-one</Heading>
      <Media type="document" source="/secfusion-brochure/05.pdf" />
    </Container>
  </>
)

// Export
export default SecFusionBrochure
