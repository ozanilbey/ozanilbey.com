// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Waplog Web Application (Item)
const WaplogWebApplication = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/waplog-web-application/teaser.png" />
      <p className="lead">Waplog is a <strong>dating platform</strong> for people who are on a quest to find their soulmate. It has <strong>over 90 million members</strong> from more than 50 countries. It provides over 20 universal languages.</p>
      <p className="lead">I had designed an attractive user interface and crafted a frontend for Waplog Web <strong>in 2012</strong>.</p>
      <p className="lead">I had also worked on user interface design of <Link type="regular" to="/works/waplog-mobile-application">Waplog Mobile</Link> (mobile website + iOS app + Android app) in 2010.</p>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Screens</Heading>
      <Media type="image" width={1152} source="/waplog-web-application/01.png" />
      <Media type="image" width={1152} source="/waplog-web-application/02.png" />
      <Media type="image" width={1152} source="/waplog-web-application/03.png" />
      <Media type="image" width={1152} source="/waplog-web-application/04.png" />
      <Media type="image" width={1152} source="/waplog-web-application/05.png" />
      <Media type="image" width={1152} source="/waplog-web-application/06.png" />
      <Media type="image" width={1152} source="/waplog-web-application/07.png" />
      <Media type="image" width={1152} source="/waplog-web-application/08.png" />
      <Media type="image" width={1152} source="/waplog-web-application/09.png" />
      <Media type="image" width={1152} source="/waplog-web-application/10.png" />
      <Media type="image" width={1152} source="/waplog-web-application/11.png" />
      <Media type="image" width={1152} source="/waplog-web-application/12.png" />
      <Media type="image" width={1152} source="/waplog-web-application/13.png" />
      <Media type="image" width={1152} source="/waplog-web-application/14.png" />
      <Media type="image" width={1152} source="/waplog-web-application/15.png" />
      <Media type="image" width={1152} source="/waplog-web-application/16.png" />
      <Media type="image" width={1152} source="/waplog-web-application/17.png" />
      <Media type="image" width={1152} source="/waplog-web-application/18.png" />
      <Media type="image" width={1152} source="/waplog-web-application/19.png" />
      <Media type="image" width={1152} source="/waplog-web-application/20.png" />
    </Container>
  </>
)

// Export
export default WaplogWebApplication
