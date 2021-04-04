// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import Information from '~/components/type/information/Information'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Base64AIBranding (Item)
const Base64AIBranding = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/base64-ai-branding/teaser.png" />
      <p className="lead">Base64.ai is an <strong>document processing AI platform</strong> extracting and interpreting data from more than 500 types of documents.</p>
      <p className="lead">I had worked at Base64.ai as <strong>the #1 employee</strong>. I had designed <strong>a really simple brand identity</strong> and related brand materials for Base64.ai in <strong>2020</strong>.</p>
      <Information>I had designed and developed <Link type="regular" to="/works/base64-ai-website">Base64.ai Website</Link> and also worked on full-stack development of <Link type="regular" to="/works/base64-ai-platform">Base64.ai Platform</Link>.</Information>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Logo</Heading>
      <Media type="image" width={640} source="/base64-ai-branding/01.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Symbol</Heading>
      <Media type="image" width={256} source="/base64-ai-branding/02.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Colors</Heading>
      <Media type="image" width={640} source="/base64-ai-branding/03.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Typography</Heading>
      <Media className="monocolor" type="image" width={640} source="/base64-ai-branding/04.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Business Card</Heading>
      <Media type="image" width={1152} source="/base64-ai-branding/05.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Application Icon</Heading>
      <Media type="image" width={240} source="/base64-ai-branding/06.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Visuals</Heading>
      <Media type="image" width={960} source="/base64-ai-branding/07.png" />
      <small>Banner</small>
      <Media type="image" width={640} source="/base64-ai-branding/08.png" />
      <small>Sharing preview</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Web Animation</Heading>
      <Media willAutoplay willHideControls willLoop type="video" width={960} source="/base64-ai-branding/09.mov" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Web Application</Heading>
      <Media type="video" width={1152} source="/base64-ai-branding/10.mov" />
      <small>Demo</small>
      <Media type="image" width={1152} source="/base64-ai-branding/11.png" />
      <small>Screen</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Website</Heading>
      <Media type="image" width={1152} source="/base64-ai-branding/12.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Mobile Application</Heading>
      <Media type="video" width={480} source="/base64-ai-branding/13.mov" />
      <small>Demo</small>
      <Media type="image" width={480} source="/base64-ai-branding/14.png" />
      <small>Screen</small>
    </Container>
  </>
)

// Export
export default Base64AIBranding
