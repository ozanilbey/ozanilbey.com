// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Cardz (Item)
const Cardz = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/cardz/teaser.png" />
      <p className="lead">Cardz is an amazing tool for networking. Buy a pack of Cardz anytime with <strong>any design option</strong> you want. Link your Cardz to your <strong>instantly-generated online profile</strong> by using the QR code on the back of your cards. Then share your information with your network with the help of your <strong>pack of printed cards</strong>. Get social in <i>the coolest way possible</i>.</p>
      <p className="lead">It’s not a business card. It’s your <i>persona</i>. Pick your style, provide your information, then have both a pack of cards and a web page.</p>
      <p className="lead"><strong>Simple as that.</strong></p>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>It’s practical.</Heading>
      <Media type="image" width={1152} source="/cardz/01.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>It’s responsive.</Heading>
      <Media type="image" width={1152} source="/cardz/02.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>It’s full of options.</Heading>
      <Media type="image" width={1152} source="/cardz/03.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>It’s full of colors.</Heading>
      <Media type="image" width={1152} source="/cardz/04.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>It’s thematic.</Heading>
      <small>UI theme is similar to your choice of print cards.</small>
      <Media type="image" width={1152} source="/cardz/05.png" />
      <small>Sign-up (Phone)</small>
      <Media type="image" width={1152} source="/cardz/06.png" />
      <small>Profile (Phone)</small>
      <Media type="image" width={1152} source="/cardz/07.png" />
      <small>Sign-up (Tablet)</small>
      <Media type="image" width={1152} source="/cardz/08.png" />
      <small>Profile (Tablet)</small>
      <Media type="image" width={1152} source="/cardz/09.png" />
      <small>Sign-up (Desktop)</small>
      <Media type="image" width={1152} source="/cardz/10.png" />
      <small>Profile (Desktop)</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Story of the project</Heading>
      <p className="lead">Cardz was <strong>entirely designed and developed in 48 hours</strong> at <strong>LAUNCH Hackathon 2014</strong>, by <strong>Ozan İlbey Yılmaz</strong> and <Link type="external" href="//volkan.io">Volkan Özçelik</Link>.</p>
      <p className="lead">Ozan, having had 5 years of experience on branding at the time, came up with the idea of <strong>easy-to-have, branded-looking, socially consumable business cards</strong>. Compared to ordinary business cards, the main distinguishing factor of Cardz concept is that <strong>it democratizes having business cards</strong> by making it <strong>simple and cheaper</strong>.</p>
      <Media type="image" width={1152} source="/cardz/story-picture.png" />
    </Container>
  </>
)

// Export
export default Cardz
