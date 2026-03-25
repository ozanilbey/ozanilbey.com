// Components
import Callout from '@source/components/interface/callout/Callout'
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Link from '@source/components/interface/link/Link'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > SOCRadar branding
function SOCRadarBranding () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/socradar-website/teaser.png" />
        <p className="lead">SOCRadar is a <strong>digital risk protection platform</strong> providing contextualized intelligence.</p>
        <p className="lead">I created <strong>a fresh brand image</strong> for SOCRadar with <Link isExternal arrow="upright" to="https://cerenmurgan.com">Ceren</Link> to properly express the company’s dynamic yet reliable nature.</p>
        <Callout
          size="large"
          intent="information"
          hasBackground={false}
          className="information">
          We also worked on <Link to="/works/socradar-website">SOCRadar Website</Link>{/* and created <Link to="/works/socradar-docs">SOCRadar Docs</Link> */}.
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
          source="/socradar-branding/01.png" />
        <small className="note">Final</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/socradar-branding/02.png" />
        <small className="note">Revision</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Symbol
        </Heading>
        <Media
          width={240}
          type="image"
          className="media"
          source="/socradar-branding/03.png" />
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
          source="/socradar-branding/04.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Typography
        </Heading>
        <Media
          isAdaptive
          width={864}
          type="image"
          className="media"
          source="/socradar-branding/05.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Icons
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/socradar-branding/06.png" />
        <small className="note">Sample icons: Application</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Illustrations
        </Heading>
        <Media
          width={864}
          type="image"
          className="media"
          source="/socradar-branding/07.png" />
        <small className="note">2D</small>
        <Media
          width={864}
          type="image"
          className="media"
          source="/socradar-branding/08.png" />
        <small className="note">3D</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Product Icons
        </Heading>
        <Media
          width={864}
          type="image"
          className="media"
          source="/socradar-branding/09.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Product Labels
        </Heading>
        <Media
          width={480}
          type="image"
          className="media"
          source="/socradar-branding/10.png" />
        <Media
          width={480}
          type="image"
          className="media"
          source="/socradar-branding/11.png" />
        <Media
          width={480}
          type="image"
          className="media"
          source="/socradar-branding/12.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Product Cards
        </Heading>
        <Media
          width={480}
          type="image"
          className="media"
          source="/socradar-branding/13.png" />
        <Media
          width={480}
          type="image"
          className="media"
          source="/socradar-branding/14.png" />
        <Media
          width={480}
          type="image"
          className="media"
          source="/socradar-branding/15.png" />
        <Media
          width={480}
          type="image"
          className="media"
          source="/socradar-branding/16.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Marketecture Diagram
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/socradar-branding/17.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Products and Services
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/socradar-branding/18.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Webinar
        </Heading>
        <Media
          width={864}
          type="image"
          className="media"
          source="/socradar-branding/19.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Documents
        </Heading>
        <Media
          width={864}
          type="image"
          className="media"
          source="/socradar-branding/20.png" />
        <Media
          width={864}
          type="image"
          className="media"
          source="/socradar-branding/21.png" />
        <small className="note">Sample document: POV</small>
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
          source="/socradar-branding/22.png" />
      </Content>
    </>
  )
}

// Export
export default SOCRadarBranding
