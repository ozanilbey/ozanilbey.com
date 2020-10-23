// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import Information from '~/components/type/information/Information'
import Media from '~/components/content/media/Media'

// Content: Work Summary > 101 Extra Ads - Ramadan (Item)
const _101ExtraAdsRamadan = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/101-extra-ads-ramadan/teaser.png" />
      <p className="lead">101 Extra is a <strong>social game</strong>, based on traditional Turkish game Okey, developed and managed by Digitoy Games. It is available on Apple Store, Google Play Store, and Facebook.</p>
      <p className="lead">I had designed advertisement visuals for 101 Extra <strong>in 2017</strong>. All images are used on Facebook as sponsored content.</p>
      <p className="lead">Special thanks to <Link type="external" to="https://cerenmurgan.com">Ceren</Link> for helping me on this project!</p>
      <Information>I had also designed <Link type="regular" to="/works/101-extra-facebook-page">101 Extra Facebook Page</Link>.</Information>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Facebook Ads</Heading>
      <Media type="image" width={1152} source="/101-extra-ads-ramadan/01.png" />
      <Media type="image" width={1152} source="/101-extra-ads-ramadan/02.png" />
      <Media type="image" width={1152} source="/101-extra-ads-ramadan/03.png" />
      <Media type="image" width={1152} source="/101-extra-ads-ramadan/04.png" />
      <Media type="image" width={1152} source="/101-extra-ads-ramadan/05.png" />
    </Container>
  </>
)

// Export
export default _101ExtraAdsRamadan
