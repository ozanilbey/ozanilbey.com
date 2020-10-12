// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import Information from '~/components/type/information/Information'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Tekel Okey Facebook Page (Item)
const TekelOkeyFacebookPage = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/tekel-okey-facebook-page/teaser.png" />
      <p className="lead">Tekel Okey is a <strong>social game</strong>, based on traditional Turkish game Okey, developed and managed by Digitoy Games. It is available on Apple Store, Google Play Store, and Facebook.</p>
      <p className="lead">I had designed 8 different Facebook post templates for Tekel Okey <strong>in 2016</strong>. Each of these templates serves different purposes.</p>
      <p className="lead">Thanks <Link type="external" to="http://cerenmurgan.com">Ceren</Link> for helping me on this project!</p>
      <Information>I had also designed Facebook Pages for the other games developed by Digitoy Games such as <Link type="regular" to="/works/okey-extra-facebook-page">Okey Extra</Link>, <Link type="regular" to="/works/101-extra-facebook-page">101 Extra</Link>, <Link type="regular" to="/works/can-okey-facebook-page">Can Okey</Link>, and <Link type="regular" to="/works/rakkip-facebook-page">Rakkip</Link>.</Information>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>“Poll Time“</Heading>
      <small>Function: Asking the user’s preference on a subject.</small>
      <Media type="image" width={1152} source="/tekel-okey-facebook-page/01.png" />
      <Media type="image" width={1152} source="/tekel-okey-facebook-page/02.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>“Find the Answer“</Heading>
      <small>Function: Testing the user’s knowledge.</small>
      <Media type="image" width={1152} source="/tekel-okey-facebook-page/03.png" />
      <Media type="image" width={1152} source="/tekel-okey-facebook-page/04.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>“Your Turn“</Heading>
      <small>Function: Making the user contribute to the subject.</small>
      <Media type="image" width={1152} source="/tekel-okey-facebook-page/05.png" />
      <Media type="image" width={1152} source="/tekel-okey-facebook-page/06.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>“Laughmaker“</Heading>
      <small>Function: Making the user laugh.</small>
      <Media type="image" width={1152} source="/tekel-okey-facebook-page/07.png" />
      <Media type="image" width={1152} source="/tekel-okey-facebook-page/08.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Morning Greetings</Heading>
      <small>Function: Greeting the user each morning.</small>
      <Media type="image" width={1152} source="/tekel-okey-facebook-page/09.png" />
      <Media type="image" width={1152} source="/tekel-okey-facebook-page/10.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Fun Facts</Heading>
      <small>Function: Giving the user interesting information.</small>
      <Media type="image" width={1152} source="/tekel-okey-facebook-page/11.png" />
      <Media type="image" width={1152} source="/tekel-okey-facebook-page/12.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Gift</Heading>
      <small>Function: Giving the user free chips to play.</small>
      <Media type="image" width={1152} source="/tekel-okey-facebook-page/13.png" />
      <Media type="image" width={1152} source="/tekel-okey-facebook-page/14.png" />
      <Media type="image" width={1152} source="/tekel-okey-facebook-page/15.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Advertisement</Heading>
      <small>Function: Promoting the game.</small>
      <Media type="image" width={1152} source="/tekel-okey-facebook-page/16.png" />
      <Media type="image" width={1152} source="/tekel-okey-facebook-page/17.png" />
    </Container>
  </>
)

// Export
export default TekelOkeyFacebookPage
