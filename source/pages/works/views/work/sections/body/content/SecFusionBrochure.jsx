// Components
import Callout from '@source/components/interface/callout/Callout'
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Link from '@source/components/interface/link/Link'
import Media from '@source/components/model/media/Media'

// Content: Works > Work > Body > SecFusion brochure
function SecFusionBrochure () {
  return (
    <>
      <Content>
        <Media
          width={768}
          type="image"
          className="media"
          path="/secfusion-brochure/teaser.png" />
        <p>SecFusion is a <strong>unified vunerability management platform</strong> providing vulnerability management automation solutions.</p>
        <p>I designed a promotional product brochure for SecFusion in <strong>2020</strong>.</p>
        <Callout
          size="large"
          intent="information"
          hasBackground={false}
          className="information">
          I also worked on <Link to="/works/secfusion-branding">SecFusion Branding</Link> and <Link to="/works/secfusion-website">SecFusion Website</Link>.
        </Callout>
        <Callout
          size="large"
          intent="information"
          hasBackground={false}
          className="information">
          Special thanks to <Link isExternal arrow="upright" to="https://cerenmurgan.com">Ceren</Link> for her significant contribution to this project!
        </Callout>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Pages
        </Heading>
        <Media
          width={768}
          type="image"
          className="media"
          path="/secfusion-brochure/01.png" />
        <small className="note">Front</small>
        <Media
          width={768}
          type="image"
          className="media"
          path="/secfusion-brochure/02.png" />
        <small className="note">Left</small>
        <Media
          width={768}
          type="image"
          className="media"
          path="/secfusion-brochure/03.png" />
        <small className="note">Right</small>
        <Media
          width={768}
          type="image"
          className="media"
          path="/secfusion-brochure/04.png" />
        <small className="note">Back</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          All-in-one
        </Heading>
        <Media
          width={768}
          type="document"
          className="media"
          path="/secfusion-brochure/05.pdf" />
      </Content>
    </>
  )
}

// Export
export default SecFusionBrochure
