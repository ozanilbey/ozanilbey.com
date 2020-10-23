// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Poker Extra Ads - Mixed (Item)
const PokerExtraAdsMixed = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/poker-extra-ads-mixed/teaser.png" />
      <p className="lead">Poker Extra is a <strong>social game</strong>, based on Texas Hold’em Poker, developed and managed by Digitoy Games. It is available on Apple Store, Google Play Store, and Facebook.</p>
      <p className="lead">I had designed advertisement visuals for Poker Extra <strong>in 2017</strong>. All images are used on Facebook as sponsored content.</p>
      <p className="lead">Special thanks to <Link type="external" to="https://cerenmurgan.com">Ceren</Link> for helping me on this project!</p>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Facebook Ads</Heading>
      <Media type="image" width={1152} source="/poker-extra-ads-mixed/01.png" />
      <Media type="image" width={1152} source="/poker-extra-ads-mixed/02.png" />
      <Media type="image" width={1152} source="/poker-extra-ads-mixed/03.png" />
      <Media type="image" width={1152} source="/poker-extra-ads-mixed/04.png" />
      <Media type="image" width={1152} source="/poker-extra-ads-mixed/05.png" />
      <Media type="image" width={1152} source="/poker-extra-ads-mixed/06.png" />
      <Media type="image" width={1152} source="/poker-extra-ads-mixed/07.png" />
      <Media type="image" width={1152} source="/poker-extra-ads-mixed/08.png" />
    </Container>
  </>
)

// Export
export default PokerExtraAdsMixed
