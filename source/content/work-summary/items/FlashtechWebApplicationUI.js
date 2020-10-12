// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Information from '~/components/type/information/Information'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Flashtech Web Application UI (Item)
const FlashtechWebApplicationUI = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/flashtech-web-application-ui/teaser.png" />
      <p className="lead">Flashtech is a <strong>terminal automation system</strong> used in petroleum industry that controls the flow of information from the loading area to the central business system of an enterprise. It provides user-friendly access to data and events.</p>
      <p className="lead">I had provided <strong>a complete design solution</strong> for Flashtech (a set of 16 applications) <strong>in 2016</strong>: A dashboard screen to choose between apps, a generic login screen, a common navigation bar, and a UI kit to be used in all current/future apps. I had also created design guidelines for all the apps.</p>
      <Information>I am also the designer of the typographic “Flashtech“ logo.</Information>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Dashboard</Heading>
      <Media type="image" width={1152} source="/flashtech-web-application-ui/01.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Login</Heading>
      <Media type="image" width={1152} source="/flashtech-web-application-ui/02.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>User Interface Kit</Heading>
      <Media type="image" width={1152} source="/flashtech-web-application-ui/03.png" />
    </Container>
  </>
)

// Export
export default FlashtechWebApplicationUI
