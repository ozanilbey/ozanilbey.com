// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import Information from '~/components/type/information/Information'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Okey Extra Facebook Page (Item)
const OkeyExtraFacebookPage = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/okey-extra-facebook-page/teaser.png" />
      <p className="lead">Okey Extra is a <strong>social game</strong>, based on traditional Turkish game Okey, developed and managed by Digitoy Games. It is available on Apple Store, Google Play Store, and Facebook.</p>
      <p className="lead">I had designed 8 different Facebook post templates for Okey Extra <strong>in 2016</strong>. Each of these templates serves different purposes.</p>
      <p className="lead">Special thanks to <Link type="external" to="https://cerenmurgan.com">Ceren</Link> for helping me on this project!</p>
      <Information>I had also designed Facebook Pages for the other games developed by Digitoy Games such as <Link type="regular" to="/works/101-extra-facebook-page">101 Extra</Link>, <Link type="regular" to="/works/can-okey-facebook-page">Can Okey</Link>, <Link type="regular" to="/works/tekel-okey-facebook-page">Tekel Okey</Link>, and <Link type="regular" to="/works/rakkip-facebook-page">Rakkip</Link>.</Information>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>“Poll Time“</Heading>
      <small>Function: Asking the user’s preference on a subject.</small>
      <Media type="image" width={1152} source="/okey-extra-facebook-page/01.png" />
      <Media type="image" width={1152} source="/okey-extra-facebook-page/02.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>“Find the Answer“</Heading>
      <small>Function: Testing the user’s knowledge.</small>
      <Media type="image" width={1152} source="/okey-extra-facebook-page/03.png" />
      <Media type="image" width={1152} source="/okey-extra-facebook-page/04.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>“Your Turn“</Heading>
      <small>Function: Making the user contribute to the subject.</small>
      <Media type="image" width={1152} source="/okey-extra-facebook-page/05.png" />
      <Media type="image" width={1152} source="/okey-extra-facebook-page/06.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>“Laughmaker“</Heading>
      <small>Function: Making the user laugh.</small>
      <Media type="image" width={1152} source="/okey-extra-facebook-page/07.png" />
      <Media type="image" width={1152} source="/okey-extra-facebook-page/08.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Morning Greetings</Heading>
      <small>Function: Greeting the user each morning.</small>
      <Media type="image" width={1152} source="/okey-extra-facebook-page/09.png" />
      <Media type="image" width={1152} source="/okey-extra-facebook-page/10.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Fun Facts</Heading>
      <small>Function: Giving the user interesting information.</small>
      <Media type="image" width={1152} source="/okey-extra-facebook-page/11.png" />
      <Media type="image" width={1152} source="/okey-extra-facebook-page/12.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Gift</Heading>
      <small>Function: Giving the user free chips to play.</small>
      <Media type="image" width={1152} source="/okey-extra-facebook-page/13.png" />
      <Media type="image" width={1152} source="/okey-extra-facebook-page/14.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Advertisement</Heading>
      <small>Function: Promoting the game.</small>
      <Media type="image" width={1152} source="/okey-extra-facebook-page/15.png" />
      <Media type="image" width={1152} source="/okey-extra-facebook-page/16.png" />
    </Container>
  </>
)

// Export
export default OkeyExtraFacebookPage
