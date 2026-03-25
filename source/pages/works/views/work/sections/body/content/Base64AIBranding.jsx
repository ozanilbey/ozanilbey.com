// Components
import Callout from '@source/components/interface/callout/Callout'
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Link from '@source/components/interface/link/Link'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > Base64.ai branding
function Base64AIBranding () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/base64-ai-branding/teaser.png" />
        <p className="lead">Base64.ai is an <strong>document processing AI platform</strong> extracting and interpreting data from more than 500 types of documents.</p>
        <p className="lead">I worked at Base64.ai as <strong>the #1 employee</strong>. I designed <strong>a really simple brand identity</strong> and related brand materials for Base64.ai in <strong>2020</strong>.</p>
        <Callout
          size="large"
          intent="information"
          hasBackground={false}
          className="information">
          I also designed and developed <Link to="/works/base64-ai-website">Base64.ai Website</Link> and worked on full-stack development of <Link to="/works/base64-ai-platform">Base64.ai Platform</Link>.
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
          source="/base64-ai-branding/01.png" />
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
          source="/base64-ai-branding/02.png" />
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
          source="/base64-ai-branding/03.png" />
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
          source="/base64-ai-branding/04.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Business Card
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/base64-ai-branding/05.png" />
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
          source="/base64-ai-branding/06.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Visuals
        </Heading>
        <Media
          width={960}
          type="image"
          className="media"
          source="/base64-ai-branding/07.png" />
        <small className="note">Banner</small>
        <Media
          width={640}
          type="image"
          className="media"
          source="/base64-ai-branding/08.png" />
        <small className="note">Sharing preview</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Web Animation
        </Heading>
        <Media
          willLoop
          width={960}
          type="video"
          willAutoplay
          willHideControls
          source="/base64-ai-branding/09.mov" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Web Application
        </Heading>
        <Media
          width={1152}
          type="video"
          className="media"
          source="/base64-ai-branding/10.mov" />
        <small className="note">Demo</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/base64-ai-branding/11.png" />
        <small className="note">Screen</small>
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
          source="/base64-ai-branding/12.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Mobile Application
        </Heading>
        <Media
          width={480}
          type="video"
          className="media"
          source="/base64-ai-branding/13.mov" />
        <small className="note">Demo</small>
        <Media
          width={480}
          type="image"
          className="media"
          source="/base64-ai-branding/14.png" />
        <small className="note">Screen</small>
      </Content>
    </>
  )
}

// Export
export default Base64AIBranding
