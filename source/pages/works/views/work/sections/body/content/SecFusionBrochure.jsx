// Components
import Callout from '@source/components/interface/callout/Callout'
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Link from '@source/components/interface/link/Link'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > SecFusion brochure
function SecFusionBrochure () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/secfusion-brochure/teaser.png" />
        <p className="lead">SecFusion is a <strong>unified vunerability management platform</strong> providing vulnerability management automation solutions.</p>
        <p className="lead">I designed a promotional product brochure for SecFusion in <strong>2020</strong>.</p>
        <Callout
          size="large"
          intent="information"
          hasBackground={false}
          className="information">
          I also worked on <Link to="/works/secfusion-branding">SecFusion Branding</Link> and <Link to="/works/secfusion-website">SecFusion Website</Link>.
        </Callout>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Pages
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/secfusion-brochure/01.png" />
        <small className="note">Front</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/secfusion-brochure/02.png" />
        <small className="note">Left</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/secfusion-brochure/03.png" />
        <small className="note">Right</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/secfusion-brochure/04.png" />
        <small className="note">Back</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          All-in-one
        </Heading>
        <Media
          width={1152}
          type="document"
          className="media"
          source="/secfusion-brochure/05.pdf" />
      </Content>
    </>
  )
}

// Export
export default SecFusionBrochure
