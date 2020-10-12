// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import Information from '~/components/type/information/Information'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Can Okey Ads - Your Move (Item)
const CanOkeyAdsYourMove = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/can-okey-ads-your-move/teaser.png" />
      <p className="lead">Can Okey is a <strong>social game</strong>, based on traditional Turkish game Okey, developed and managed by Digitoy Games. It is available on Apple Store, Google Play Store, and Facebook.</p>
      <p className="lead">I had designed advertisement visuals for Can Okey <strong>in 2017</strong>. All images are used on Facebook as sponsored content.</p>
      <p className="lead">Thanks <Link type="external" to="http://cerenmurgan.com">Ceren</Link> for helping me on this project!</p>
      <Information>I had also designed <Link type="regular" to="/works/can-okey-facebook-page">Can Okey Facebook Page</Link>.</Information>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Facebook Ads</Heading>
      <Media type="image" width={1152} source="/can-okey-ads-your-move/01.png" />
      <Media type="image" width={1152} source="/can-okey-ads-your-move/02.png" />
      <Media type="image" width={1152} source="/can-okey-ads-your-move/03.png" />
      <Media type="image" width={1152} source="/can-okey-ads-your-move/04.png" />
    </Container>
  </>
)

// Export
export default CanOkeyAdsYourMove
