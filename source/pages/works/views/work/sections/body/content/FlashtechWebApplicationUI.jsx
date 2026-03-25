// Components
import Callout from '@source/components/interface/callout/Callout'
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > Flashtech web application UI
function FlashtechWebApplicationUI () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/flashtech-web-application-ui/teaser.png" />
        <p className="lead">Flashtech is a <strong>terminal automation system</strong> used in petroleum industry that controls the flow of information from the loading area to the central business system of an enterprise. It provides user-friendly access to data and events.</p>
        <p className="lead">I provided <strong>a complete design solution</strong> for Flashtech (a set of 16 applications) <strong>in 2016</strong>: A dashboard screen to choose between apps, a generic login screen, a common navigation bar, and a UI kit to be used in all current/future apps. I also created design guidelines for all the apps.</p>
        <Callout
          size="large"
          intent="information"
          hasBackground={false}
          className="information">
          I am also the designer of the typographic “Flashtech“ logo.
        </Callout>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Dashboard
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/flashtech-web-application-ui/01.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Login
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/flashtech-web-application-ui/02.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          User Interface Kit
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/flashtech-web-application-ui/03.png" />
      </Content>
    </>
  )
}

// Export
export default FlashtechWebApplicationUI
