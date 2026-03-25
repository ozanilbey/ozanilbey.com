// Components
import Callout from '@source/components/interface/callout/Callout'
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Link from '@source/components/interface/link/Link'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > Base64.ai platform
function Base64AIPlatform () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/base64-ai-platform/teaser.png" />
        <p className="lead">Base64.ai is an <strong>document processing AI platform</strong> extracting and interpreting data from more than 500 types of documents.</p>
        <p className="lead">I worked at Base64.ai as <strong>the #1 employee</strong>. I designed and developed both web and mobile clients for Base64.ai in <strong>2020</strong>. Additionally, I worked on creating AI data extraction algorithms.</p>
        <Callout
          size="large"
          intent="information"
          hasBackground={false}
          className="information">
          I designed and developed <Link to="/works/base64-ai-website">Base64.ai Website</Link> and also worked on <Link to="/works/base64-ai-branding">Base64.ai Branding</Link>.
        </Callout>
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
          source="/base64-ai-platform/01.mov" />
        <small className="note">Demo</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/base64-ai-platform/02.png" />
        <small className="note">Idle</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/base64-ai-platform/03.png" />
        <small className="note">Filtering</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/base64-ai-platform/04.png" />
        <small className="note">Processing/Results</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/base64-ai-platform/05.png" />
        <small className="note">Mobile</small>
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
          source="/base64-ai-platform/06.mov" />
        <small className="note">Demo</small>
        <Media
          width={480}
          type="image"
          className="media"
          source="/base64-ai-platform/07.png" />
        <small className="note">Splash screen</small>
        <Media
          width={480}
          type="image"
          className="media"
          source="/base64-ai-platform/08.png" />
        <small className="note">Idle</small>
        <Media
          width={480}
          type="image"
          className="media"
          source="/base64-ai-platform/09.png" />
        <small className="note">Processing</small>
        <Media
          width={480}
          type="image"
          className="media"
          source="/base64-ai-platform/10.png" />
        <small className="note">Results (preview)</small>
        <Media
          width={480}
          type="image"
          className="media"
          source="/base64-ai-platform/11.png" />
        <small className="note">Results (expanded)</small>
        <Media
          width={480}
          type="image"
          className="media"
          source="/base64-ai-platform/12.png" />
        <small className="note">Results (scrolling)</small>
      </Content>
    </>
  )
}

// Export
export default Base64AIPlatform
