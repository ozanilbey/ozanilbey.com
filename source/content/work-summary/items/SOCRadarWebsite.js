// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import Information from '~/components/type/information/Information'
import Media from '~/components/content/media/Media'

// Content: Work Summary > SOCRadar Website (Item)
const SOCRadarWebsite = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/socradar-website/teaser.png" />
      <p className="lead">SOCRadar is a <strong>digital risk protection platform</strong> providing contextualized intelligence.</p>
      <p className="lead">I had <strong>designed the SOCRadar website</strong> with <Link type="external" to="https://cerenmurgan.com">Ceren</Link>. Then I heavily <strong>customized a WordPress theme</strong> (HTML + CSS + JS + graphics) to match the design and also accommodate the client’s needs.</p>
      <Information>We had also worked on <Link type="regular" to="/works/socradar-branding">SOCRadar Branding</Link>{/* and created <Link type="regular" to="/works/socradar-docs">SOCRadar Docs</Link> */}.</Information>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Desktop Screens</Heading>
      <Media type="image" width={1152} source="/socradar-website/01.png" />
      <small>Home</small>
      <Media type="image" width={1152} source="/socradar-website/02.png" />
      <small>Hover/click menu (Products)</small>
      <Media type="image" width={1152} source="/socradar-website/03.png" />
      <small>Products (ThreatFusion)</small>
      <Media type="image" width={1152} source="/socradar-website/04.png" />
      <small>Modules</small>
      <Media type="image" width={1152} source="/socradar-website/05.png" />
      <small>Modules (Vulnerability Intelligence)</small>
      <Media type="image" width={1152} source="/socradar-website/06.png" />
      <small>Hover/click menu (Solutions)</small>
      <Media type="image" width={1152} source="/socradar-website/07.png" />
      <small>Solutions (Incident Response)</small>
      <Media type="image" width={1152} source="/socradar-website/08.png" />
      <small>Resources</small>
      <Media type="image" width={1152} source="/socradar-website/09.png" />
      <small>Resources (Solution Brief)</small>
      <Media type="image" width={1152} source="/socradar-website/10.png" />
      <small>Resources (Blog)</small>
      <Media type="image" width={1152} source="/socradar-website/11.png" />
      <small>Contact</small>
      <Media type="image" width={1152} source="/socradar-website/12.png" />
      <small>Cookie notice</small>
      <Media type="image" width={1152} source="/socradar-website/13.png" />
      <small>Community Edition</small>
      <Media type="image" width={1152} source="/socradar-website/14.png" />
      <small>Partners</small>
      <Media type="image" width={1152} source="/socradar-website/15.png" />
      <small>Subscription Plans</small>
      <Media type="image" width={1152} source="/socradar-website/16.png" />
      <small>Webinars</small>
      <Media type="image" width={1152} source="/socradar-website/17.png" />
      <small>Company</small>
      <Media type="image" width={1152} source="/socradar-website/18.png" />
      <small>Demo request page</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Mobile Screens</Heading>
      <Media type="image" width={360} source="/socradar-website/19.png" />
      <small>Home</small>
      <Media type="image" width={360} source="/socradar-website/20.png" />
      <small>Mobile menu</small>
      <Media type="image" width={360} source="/socradar-website/21.png" />
      <small>Mobile menu (Products)</small>
      <Media type="image" width={360} source="/socradar-website/22.png" />
      <small>Products (ThreatFusion)</small>
      <Media type="image" width={360} source="/socradar-website/23.png" />
      <small>Modules</small>
      <Media type="image" width={360} source="/socradar-website/24.png" />
      <small>Modules (Vulnerability Intelligence)</small>
      <Media type="image" width={360} source="/socradar-website/25.png" />
      <small>Solutions (Incident Response)</small>
      <Media type="image" width={360} source="/socradar-website/26.png" />
      <small>Resources</small>
      <Media type="image" width={360} source="/socradar-website/27.png" />
      <small>Resources (Solution Brief)</small>
      <Media type="image" width={360} source="/socradar-website/28.png" />
      <small>Resources (Blog)</small>
      <Media type="image" width={360} source="/socradar-website/29.png" />
      <small>Contact</small>
      <Media type="image" width={360} source="/socradar-website/30.png" />
      <small>Community Edition</small>
      <Media type="image" width={360} source="/socradar-website/31.png" />
      <small>Partners</small>
      <Media type="image" width={360} source="/socradar-website/32.png" />
      <small>Webinars</small>
      <Media type="image" width={360} source="/socradar-website/33.png" />
      <small>Company</small>
      <Media type="image" width={360} source="/socradar-website/34.png" />
      <small>Demo request page</small>
    </Container>
  </>
)

// Export
export default SOCRadarWebsite
