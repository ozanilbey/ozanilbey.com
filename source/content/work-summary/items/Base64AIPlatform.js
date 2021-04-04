// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import Information from '~/components/type/information/Information'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Base64AIPlatform (Item)
const Base64AIPlatform = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/base64-ai-platform/teaser.png" />
      <p className="lead">Base64.ai is an <strong>document processing AI platform</strong> extracting and interpreting data from more than 500 types of documents.</p>
      <p className="lead">I had worked at Base64.ai as <strong>the #1 employee</strong>. I had designed and developed both web and mobile clients for Base64.ai in <strong>2020</strong>. Additionally, I had worked on creating AI data extraction algorithms.</p>
      <Information>I had designed and developed <Link type="regular" to="/works/base64-ai-website">Base64.ai Website</Link> and also worked on <Link type="regular" to="/works/base64-ai-branding">Base64.ai Branding</Link>.</Information>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Web Application</Heading>
      <Media type="video" width={1152} source="/base64-ai-platform/01.mov" />
      <small>Demo</small>
      <Media type="image" width={1152} source="/base64-ai-platform/02.png" />
      <small>Idle</small>
      <Media type="image" width={1152} source="/base64-ai-platform/03.png" />
      <small>Filtering</small>
      <Media type="image" width={1152} source="/base64-ai-platform/04.png" />
      <small>Processing/Results</small>
      <Media type="image" width={1152} source="/base64-ai-platform/05.png" />
      <small>Mobile</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Mobile Application</Heading>
      <Media type="video" width={480} source="/base64-ai-platform/06.mov" />
      <small>Demo</small>
      <Media type="image" width={480} source="/base64-ai-platform/07.png" />
      <small>Splash screen</small>
      <Media type="image" width={480} source="/base64-ai-platform/08.png" />
      <small>Idle</small>
      <Media type="image" width={480} source="/base64-ai-platform/09.png" />
      <small>Processing</small>
      <Media type="image" width={480} source="/base64-ai-platform/10.png" />
      <small>Results (preview)</small>
      <Media type="image" width={480} source="/base64-ai-platform/11.png" />
      <small>Results (expanded)</small>
      <Media type="image" width={480} source="/base64-ai-platform/12.png" />
      <small>Results (scrolling)</small>
    </Container>
  </>
)

// Export
export default Base64AIPlatform
