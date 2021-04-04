// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import Information from '~/components/type/information/Information'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Base64AIWebsite (Item)
const Base64AIWebsite = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/base64-ai-website/teaser.png" />
      <p className="lead">Base64.ai is an <strong>document processing AI platform</strong> extracting and interpreting data from more than 500 types of documents.</p>
      <p className="lead">I had worked at Base64.ai as <strong>the #1 employee</strong>. I had designed and developed a clean SAAS website including a product demo for Base64.ai in <strong>2020</strong>.</p>
      <Information>I had worked on <Link type="regular" to="/works/base64-ai-branding">Base64.ai Branding</Link> and full-stack development of <Link type="regular" to="/works/base64-ai-platform">Base64.ai Platform</Link>.</Information>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Web Animation</Heading>
      <Media willAutoplay willHideControls willLoop type="video" width={960} source="/base64-ai-website/01.mov" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Desktop Screens</Heading>
      <Media type="image" width={1152} source="/base64-ai-website/02.png" />
      <small>Home</small>
      <Media type="image" width={1152} source="/base64-ai-website/03.png" />
      <small>Solutions</small>
      <Media type="image" width={1152} source="/base64-ai-website/04.png" />
      <small>Solution</small>
      <Media type="image" width={1152} source="/base64-ai-website/05.png" />
      <small>Features</small>
      <Media type="image" width={1152} source="/base64-ai-website/06.png" />
      <small>Feature</small>
      <Media type="image" width={1152} source="/base64-ai-website/07.png" />
      <small>Demo</small>
      <Media type="image" width={1152} source="/base64-ai-website/08.png" />
      <small>Demo (filtering)</small>
      <Media type="image" width={1152} source="/base64-ai-website/09.png" />
      <small>Demo (processing/results)</small>
      <Media type="image" width={1152} source="/base64-ai-website/10.png" />
      <small>Signup</small>
      <Media type="image" width={1152} source="/base64-ai-website/11.png" />
      <small>Login</small>
      <Media type="image" width={1152} source="/base64-ai-website/12.png" />
      <small>Reset</small>
      <Media type="image" width={1152} source="/base64-ai-website/13.png" />
      <small>Error</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Mobile Screens</Heading>
      <Media type="image" width={480} source="/base64-ai-website/14.png" />
      <small>Home</small>
      <Media type="image" width={480} source="/base64-ai-website/15.png" />
      <small>Menu</small>
      <Media type="image" width={480} source="/base64-ai-website/16.png" />
      <small>Solutions</small>
      <Media type="image" width={480} source="/base64-ai-website/17.png" />
      <small>Solution</small>
      <Media type="image" width={480} source="/base64-ai-website/18.png" />
      <small>Features</small>
      <Media type="image" width={480} source="/base64-ai-website/19.png" />
      <small>Feature</small>
      <Media type="image" width={480} source="/base64-ai-website/20.png" />
      <small>Demo</small>
      <Media type="image" width={480} source="/base64-ai-website/21.png" />
      <small>Demo (processing)</small>
      <Media type="image" width={480} source="/base64-ai-website/22.png" />
      <small>Signup</small>
      <Media type="image" width={480} source="/base64-ai-website/23.png" />
      <small>Login</small>
      <Media type="image" width={480} source="/base64-ai-website/24.png" />
      <small>Reset</small>
      <Media type="image" width={480} source="/base64-ai-website/25.png" />
      <small>Error</small>
    </Container>
  </>
)

// Export
export default Base64AIWebsite
