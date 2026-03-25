// Components
import Callout from '@source/components/interface/callout/Callout'
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Link from '@source/components/interface/link/Link'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > 101 Extra ads - ramadan
function _101ExtraAdsRamadan () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/101-extra-ads-ramadan/teaser.png" />
        <p className="lead">101 Extra is a <strong>social game</strong>, based on traditional Turkish game Okey, developed and managed by Digitoy Games. It is available on Apple Store, Google Play Store, and Facebook.</p>
        <p className="lead">I designed advertisement visuals for 101 Extra <strong>in 2017</strong>. All images are used on Facebook as sponsored content.</p>
        <p className="lead">Special thanks to <Link isExternal arrow="upright" to="https://cerenmurgan.com">Ceren</Link> for helping me on this project!</p>
        <Callout
          size="large"
          intent="information"
          hasBackground={false}
          className="information">
          I also designed <Link to="/works/101-extra-facebook-page">101 Extra Facebook Page</Link>.
        </Callout>
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
          source="/101-extra-ads-ramadan/01.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/101-extra-ads-ramadan/02.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/101-extra-ads-ramadan/03.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/101-extra-ads-ramadan/04.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/101-extra-ads-ramadan/05.png" />
      </Content>
    </>
  )
}

// Export
export default _101ExtraAdsRamadan
