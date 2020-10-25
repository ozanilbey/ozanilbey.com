// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import Information from '~/components/type/information/Information'
import Media from '~/components/content/media/Media'

// Content: Work Summary > SOCRadar Branding (Item)
const SOCRadarBranding = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/socradar-website/teaser.png" />
      <p className="lead">SOCRadar is a <strong>digital risk protection platform</strong> providing contextualized intelligence.</p>
      <p className="lead">I had created <strong>a fresh brand image</strong> for SOCRadar with <Link type="external" to="https://cerenmurgan.com">Ceren</Link> to properly express the company’s dynamic yet stable nature.</p>
      <Information>We had also worked on <Link type="regular" to="/works/socradar-website">SOCRadar Website</Link>{/* and created <Link type="regular" to="/works/socradar-docs">SOCRadar Docs</Link> */}.</Information>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Logo</Heading>
      <Media type="image" width={640} source="/socradar-branding/01.png" />
      <small>Final</small>
      <Media type="image" width={1152} source="/socradar-branding/02.png" />
      <small>Revision</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Symbol</Heading>
      <Media type="image" width={240} source="/socradar-branding/03.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Colors</Heading>
      <Media type="image" width={640} source="/socradar-branding/04.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Typography</Heading>
      <Media type="image" width={864} source="/socradar-branding/05.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Icons</Heading>
      <Media type="image" width={1152} source="/socradar-branding/06.png" />
      <small>Sample icons: Application</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Illustrations</Heading>
      <Media type="image" width={864} source="/socradar-branding/07.png" />
      <small>2D</small>
      <Media type="image" width={864} source="/socradar-branding/08.png" />
      <small>3D</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Product Icons</Heading>
      <Media type="image" width={864} source="/socradar-branding/09.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Product Labels</Heading>
      <Media type="image" width={480} source="/socradar-branding/10.png" />
      <Media type="image" width={480} source="/socradar-branding/11.png" />
      <Media type="image" width={480} source="/socradar-branding/12.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Product Cards</Heading>
      <Media type="image" width={480} source="/socradar-branding/13.png" />
      <Media type="image" width={480} source="/socradar-branding/14.png" />
      <Media type="image" width={480} source="/socradar-branding/15.png" />
      <Media type="image" width={480} source="/socradar-branding/16.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Marketecture Diagram</Heading>
      <Media type="image" width={1152} source="/socradar-branding/17.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Products and Services</Heading>
      <Media type="image" width={1152} source="/socradar-branding/18.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Webinar</Heading>
      <Media type="image" width={864} source="/socradar-branding/19.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Documents</Heading>
      <Media type="image" width={864} source="/socradar-branding/20.png" />
      <Media type="image" width={864} source="/socradar-branding/21.png" />
      <small>Sample document: POV</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Website</Heading>
      <Media type="image" width={1152} source="/socradar-branding/22.png" />
    </Container>
  </>
)

// Export
export default SOCRadarBranding
