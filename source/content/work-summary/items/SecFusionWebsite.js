// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import Information from '~/components/type/information/Information'
import Media from '~/components/content/media/Media'

// Content: Work Summary > SecFusion Website (Item)
const SecFusionWebsite = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/secfusion-website/teaser.png" />
      <p className="lead">SecFusion is a <strong>unified vunerability management platform</strong> providing vulnerability management automation solutions.</p>
      <p className="lead">I had designed and developed a clean, multilingual, and responsive website for SecFusion in <strong>2020</strong>.</p>
      <Information>I had also worked on <Link type="regular" to="/works/secfusion-branding">SecFusion Branding</Link> and <Link type="regular" to="/works/secfusion-brochure">SecFusion Brochure</Link>.</Information>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Desktop Screens</Heading>
      <Media type="image" width={1152} source="/secfusion-website/01.png" />
      <small>Home</small>
      <Media type="image" width={1152} source="/secfusion-website/02.png" />
      <small>Platform</small>
      <Media type="image" width={1152} source="/secfusion-website/03.png" />
      <small>Feature</small>
      <Media type="image" width={1152} source="/secfusion-website/04.png" />
      <small>Contact</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Mobile Screens</Heading>
      <Media type="image" width={360} source="/secfusion-website/05.png" />
      <small>Home</small>
      <Media type="image" width={360} source="/secfusion-website/06.png" />
      <small>Mobile Menu</small>
      <Media type="image" width={360} source="/secfusion-website/07.png" />
      <small>Platform</small>
      <Media type="image" width={360} source="/secfusion-website/08.png" />
      <small>Feature</small>
      <Media type="image" width={360} source="/secfusion-website/09.png" />
      <small>Contact</small>
    </Container>
  </>
)

// Export
export default SecFusionWebsite
