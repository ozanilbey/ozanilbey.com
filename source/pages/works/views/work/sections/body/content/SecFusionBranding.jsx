// Components
import Callout from '@source/components/interface/callout/Callout'
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Link from '@source/components/interface/link/Link'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > SecFusion branding
function SecFusionBranding () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/secfusion-branding/teaser.png" />
        <p className="lead">SecFusion is a <strong>unified vunerability management platform</strong> providing vulnerability management automation solutions.</p>
        <p className="lead">I designed <strong>a fresh brand image</strong> for SecFusion in <strong>2020</strong> to express the main aspects of the platform: alertness and unification.</p>
        <Callout
          size="large"
          intent="information"
          hasBackground={false}
          className="information">
          I also worked on <Link to="/works/secfusion-website">SecFusion Website</Link> and <Link to="/works/secfusion-brochure">SecFusion Brochure</Link>.
        </Callout>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Logo
        </Heading>
        <Media
          width={640}
          type="image"
          className="media"
          source="/secfusion-branding/01.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Symbol
        </Heading>
        <Media
          width={256}
          type="image"
          className="media"
          source="/secfusion-branding/02.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Colors
        </Heading>
        <Media
          width={640}
          type="image"
          className="media"
          source="/secfusion-branding/03.png" />
        <small className="note">Brand colors</small>
        <Media
          width={256}
          type="image"
          className="media"
          source="/secfusion-branding/04.png" />
        <small className="note">Helper colors</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Typography
        </Heading>
        <Media
          isAdaptive
          width={640}
          type="image"
          className="media"
          source="/secfusion-branding/05.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Application Icon
        </Heading>
        <Media
          width={240}
          type="image"
          className="media"
          source="/secfusion-branding/06.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Visuals
        </Heading>
        <Media
          width={640}
          type="image"
          className="media"
          source="/secfusion-branding/07.png" />
        <small className="note">Sharing preview</small>
        <Media
          width={960}
          type="image"
          className="media"
          source="/secfusion-branding/08.png" />
        <small className="note">Banner</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Document
        </Heading>
        <Media
          width={640}
          type="image"
          className="media"
          source="/secfusion-branding/09.png" />
        <Media
          width={640}
          type="image"
          className="media"
          source="/secfusion-branding/10.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Workflow Diagram
        </Heading>
        <Media
          width={640}
          type="image"
          className="media"
          source="/secfusion-branding/11.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Website
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/secfusion-branding/12.png" />
      </Content>
    </>
  )
}

// Export
export default SecFusionBranding
