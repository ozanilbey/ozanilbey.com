// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Information from '~/components/type/information/Information'
import Media from '~/components/content/media/Media'

// Content: Work Summary > i-kort Mobile Application (Item)
const IkortMobileApplication = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/ikort-mobile-application/teaser.png" />
      <p className="lead">i-kort is a <strong>sports app</strong> displaying real-time scores, results and match statistics of tennis matches. It also displays player profiles, personalised player-related alerts, play status, the order of play, and tournament schedules. It is <strong>the official app of the Turkish Tennis Federation</strong>.</p>
      <p className="lead">I had designed <strong>a clean and data-focused user interface</strong> for i-kort apps (iOS and Android) <strong>in 2015</strong>. I had also provided image assets at various resolutions for iOS and Android platforms.</p>
      <Information>I am also the designer of the typographic “i-kort“ logo.</Information>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Screens</Heading>
      <Media type="image" width={1152} source="/ikort-mobile-application/01.png" />
      <small>Login Page</small>
      <Media type="image" width={1152} source="/ikort-mobile-application/02.png" />
      <Media type="image" width={1152} source="/ikort-mobile-application/03.png" />
      <Media type="image" width={1152} source="/ikort-mobile-application/04.png" />
      <Media type="image" width={1152} source="/ikort-mobile-application/05.png" />
      <small>Sliding Menu</small>
      <Media type="image" width={1152} source="/ikort-mobile-application/06.png" />
      <Media type="image" width={1152} source="/ikort-mobile-application/07.png" />
      <Media type="image" width={1152} source="/ikort-mobile-application/08.png" />
      <Media type="image" width={1152} source="/ikort-mobile-application/09.png" />
      <small>Overlay</small>
      <Media type="image" width={1152} source="/ikort-mobile-application/10.png" />
    </Container>
  </>
)

// Export
export default IkortMobileApplication
