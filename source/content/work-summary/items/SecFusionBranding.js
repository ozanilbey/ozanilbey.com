// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import Information from '~/components/type/information/Information'
import Media from '~/components/content/media/Media'

// Content: Work Summary > SecFusion Branding (Item)
const SecFusionBranding = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/secfusion-branding/teaser.png" />
      <p className="lead">SecFusion is a <strong>unified vunerability management platform</strong> providing vulnerability management automation solutions.</p>
      <p className="lead">I had designed <strong>a fresh brand image</strong> for SecFusion in <strong>2020</strong> to express the main aspects of the platform: alertness and unification.</p>
      <Information>I had also worked on <Link type="regular" to="/works/secfusion-website">SecFusion Website</Link> and <Link type="regular" to="/works/secfusion-brochure">SecFusion Brochure</Link>.</Information>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Logo</Heading>
      <Media type="image" width={640} source="/secfusion-branding/01.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Symbol</Heading>
      <Media type="image" width={256} source="/secfusion-branding/02.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Colors</Heading>
      <Media type="image" width={640} source="/secfusion-branding/03.png" />
      <small>Brand colors</small>
      <Media type="image" width={256} source="/secfusion-branding/04.png" />
      <small>Helper colors</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Typography</Heading>
      <Media className="monocolor" type="image" width={640} source="/secfusion-branding/05.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Application Icon</Heading>
      <Media type="image" width={240} source="/secfusion-branding/06.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Visuals</Heading>
      <Media type="image" width={640} source="/secfusion-branding/07.png" />
      <small>Sharing preview</small>
      <Media type="image" width={960} source="/secfusion-branding/08.png" />
      <small>Banner</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Document</Heading>
      <Media type="image" width={640} source="/secfusion-branding/09.png" />
      <Media type="image" width={640} source="/secfusion-branding/10.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Workflow Diagram</Heading>
      <Media type="image" width={640} source="/secfusion-branding/11.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Website</Heading>
      <Media type="image" width={1152} source="/secfusion-branding/12.png" />
    </Container>
  </>
)

// Export
export default SecFusionBranding
