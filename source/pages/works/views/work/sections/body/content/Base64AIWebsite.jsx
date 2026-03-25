// Components
import Callout from '@source/components/interface/callout/Callout'
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Link from '@source/components/interface/link/Link'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > Base64.ai website
function Base64AIWebsite () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/base64-ai-website/teaser.png" />
        <p className="lead">Base64.ai is an <strong>document processing AI platform</strong> extracting and interpreting data from more than 500 types of documents.</p>
        <p className="lead">I worked at Base64.ai as <strong>the #1 employee</strong>. I designed and developed a clean SAAS website including a product demo for Base64.ai in <strong>2020</strong>.</p>
        <Callout
          size="large"
          intent="information"
          hasBackground={false}
          className="information">
          I worked on <Link to="/works/base64-ai-branding">Base64.ai Branding</Link> and full-stack development of <Link to="/works/base64-ai-platform">Base64.ai Platform</Link>.
        </Callout>
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
          className="media"
          source="/base64-ai-website/01.mov" />
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
          source="/base64-ai-website/02.png" />
        <small className="note">Home</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/base64-ai-website/03.png" />
        <small className="note">Solutions</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/base64-ai-website/04.png" />
        <small className="note">Solution</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/base64-ai-website/05.png" />
        <small className="note">Features</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/base64-ai-website/06.png" />
        <small className="note">Feature</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/base64-ai-website/07.png" />
        <small className="note">Demo</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/base64-ai-website/08.png" />
        <small className="note">Demo (filtering)</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/base64-ai-website/09.png" />
        <small className="note">Demo (processing/results)</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/base64-ai-website/10.png" />
        <small className="note">Signup</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/base64-ai-website/11.png" />
        <small className="note">Login</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/base64-ai-website/12.png" />
        <small className="note">Reset</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/base64-ai-website/13.png" />
        <small className="note">Error</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Mobile Screens
        </Heading>
        <Media
          width={480}
          type="image"
          className="media"
          source="/base64-ai-website/14.png" />
        <small className="note">Home</small>
        <Media
          width={480}
          type="image"
          className="media"
          source="/base64-ai-website/15.png" />
        <small className="note">Menu</small>
        <Media
          width={480}
          type="image"
          className="media"
          source="/base64-ai-website/16.png" />
        <small className="note">Solutions</small>
        <Media
          width={480}
          type="image"
          className="media"
          source="/base64-ai-website/17.png" />
        <small className="note">Solution</small>
        <Media
          width={480}
          type="image"
          className="media"
          source="/base64-ai-website/18.png" />
        <small className="note">Features</small>
        <Media
          width={480}
          type="image"
          className="media"
          source="/base64-ai-website/19.png" />
        <small className="note">Feature</small>
        <Media
          width={480}
          type="image"
          className="media"
          source="/base64-ai-website/20.png" />
        <small className="note">Demo</small>
        <Media
          width={480}
          type="image"
          className="media"
          source="/base64-ai-website/21.png" />
        <small className="note">Demo (processing)</small>
        <Media
          width={480}
          type="image"
          className="media"
          source="/base64-ai-website/22.png" />
        <small className="note">Signup</small>
        <Media
          width={480}
          type="image"
          className="media"
          source="/base64-ai-website/23.png" />
        <small className="note">Login</small>
        <Media
          width={480}
          type="image"
          className="media"
          source="/base64-ai-website/24.png" />
        <small className="note">Reset</small>
        <Media
          width={480}
          type="image"
          className="media"
          source="/base64-ai-website/25.png" />
        <small className="note">Error</small>
      </Content>
    </>
  )
}

// Export
export default Base64AIWebsite
