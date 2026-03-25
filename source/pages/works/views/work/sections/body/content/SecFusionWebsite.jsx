// Components
import Callout from '@source/components/interface/callout/Callout'
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Link from '@source/components/interface/link/Link'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > SecFusion website
function SecFusionWebsite () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/secfusion-website/teaser.png" />
        <p className="lead">SecFusion is a <strong>unified vunerability management platform</strong> providing vulnerability management automation solutions.</p>
        <p className="lead">I designed and developed a clean, multilingual, and responsive website for SecFusion in <strong>2020</strong>.</p>
        <Callout
          size="large"
          intent="information"
          hasBackground={false}
          className="information">
          I also worked on <Link to="/works/secfusion-branding">SecFusion Branding</Link> and <Link to="/works/secfusion-brochure">SecFusion Brochure</Link>.
        </Callout>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Desktop Screens
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/secfusion-website/01.png" />
        <small className="note">Home</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/secfusion-website/02.png" />
        <small className="note">Platform</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/secfusion-website/03.png" />
        <small className="note">Feature</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/secfusion-website/04.png" />
        <small className="note">Contact</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Mobile Screens
        </Heading>
        <Media
          width={360}
          type="image"
          className="media"
          source="/secfusion-website/05.png" />
        <small className="note">Home</small>
        <Media
          width={360}
          type="image"
          className="media"
          source="/secfusion-website/06.png" />
        <small className="note">Mobile Menu</small>
        <Media
          width={360}
          type="image"
          className="media"
          source="/secfusion-website/07.png" />
        <small className="note">Platform</small>
        <Media
          width={360}
          type="image"
          className="media"
          source="/secfusion-website/08.png" />
        <small className="note">Feature</small>
        <Media
          width={360}
          type="image"
          className="media"
          source="/secfusion-website/09.png" />
        <small className="note">Contact</small>
      </Content>
    </>
  )
}

// Export
export default SecFusionWebsite
