// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import Information from '~/components/type/information/Information'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Okey Extra Ads - Reactions (Item)
const OkeyExtraAdsReactions = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/okey-extra-ads-reactions/teaser.png" />
      <p className="lead">Okey Extra is a <strong>social game</strong>, based on traditional Turkish game Okey, developed and managed by Digitoy Games. It is available on Apple Store, Google Play Store, and Facebook.</p>
      <p className="lead">I had designed advertisement visuals for Okey Extra <strong>in 2017</strong>. All images are used on Facebook as sponsored content.</p>
      <p className="lead">Special thanks to <Link type="external" to="https://cerenmurgan.com">Ceren</Link> for helping me on this project!</p>
      <Information>I had also designed <Link type="regular" to="/works/okey-extra-facebook-page">Okey Extra Facebook Page</Link>.</Information>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Facebook Ads</Heading>
      <Media type="image" width={1152} source="/okey-extra-ads-reactions/01.png" />
      <Media type="image" width={1152} source="/okey-extra-ads-reactions/02.png" />
      <Media type="image" width={1152} source="/okey-extra-ads-reactions/03.png" />
      <Media type="image" width={1152} source="/okey-extra-ads-reactions/04.png" />
      <Media type="image" width={1152} source="/okey-extra-ads-reactions/05.png" />
      <Media type="image" width={1152} source="/okey-extra-ads-reactions/06.png" />
      <Media type="image" width={1152} source="/okey-extra-ads-reactions/07.png" />
      <Media type="image" width={1152} source="/okey-extra-ads-reactions/08.png" />
      <Media type="image" width={1152} source="/okey-extra-ads-reactions/09.png" />
      <Media type="image" width={1152} source="/okey-extra-ads-reactions/10.png" />
    </Container>
  </>
)

// Export
export default OkeyExtraAdsReactions
