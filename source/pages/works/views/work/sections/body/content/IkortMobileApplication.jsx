// Components
import Callout from '@source/components/interface/callout/Callout'
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > i-kort mobile application
function IkortMobileApplication () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/ikort-mobile-application/teaser.png" />
        <p className="lead">i-kort is a <strong>sports app</strong> displaying real-time scores, results and match statistics of tennis matches. It also displays player profiles, personalised player-related alerts, play status, the order of play, and tournament schedules. It is <strong>the official app of the Turkish Tennis Federation</strong>.</p>
        <p className="lead">I designed <strong>a clean and data-focused user interface</strong> for i-kort apps (iOS and Android) <strong>in 2015</strong>. I also provided image assets at various resolutions for iOS and Android platforms.</p>
        <Callout
          size="large"
          intent="information"
          hasBackground={false}
          className="information">
          I am also the designer of the typographic “i-kort“ logo.
        </Callout>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Screens
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/ikort-mobile-application/01.png" />
        <small className="note">Login Page</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/ikort-mobile-application/02.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/ikort-mobile-application/03.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/ikort-mobile-application/04.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/ikort-mobile-application/05.png" />
        <small className="note">Sliding Menu</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/ikort-mobile-application/06.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/ikort-mobile-application/07.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/ikort-mobile-application/08.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/ikort-mobile-application/09.png" />
        <small className="note">Overlay</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/ikort-mobile-application/10.png" />
      </Content>
    </>
  )
}

// Export
export default IkortMobileApplication
