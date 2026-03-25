// Components
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Link from '@source/components/interface/link/Link'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > Poker Extra ads - mixed
function PokerExtraAdsMixed () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/poker-extra-ads-mixed/teaser.png" />
        <p className="lead">Poker Extra is a <strong>social game</strong>, based on Texas Hold’em Poker, developed and managed by Digitoy Games. It is available on Apple Store, Google Play Store, and Facebook.</p>
        <p className="lead">I designed advertisement visuals for Poker Extra <strong>in 2017</strong>. All images are used on Facebook as sponsored content.</p>
        <p className="lead">Special thanks to <Link isExternal arrow="upright" to="https://cerenmurgan.com">Ceren</Link> for helping me on this project!</p>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Facebook Ads
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poker-extra-ads-mixed/01.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poker-extra-ads-mixed/02.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poker-extra-ads-mixed/03.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poker-extra-ads-mixed/04.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poker-extra-ads-mixed/05.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poker-extra-ads-mixed/06.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poker-extra-ads-mixed/07.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poker-extra-ads-mixed/08.png" />
      </Content>
    </>
  )
}

// Export
export default PokerExtraAdsMixed
