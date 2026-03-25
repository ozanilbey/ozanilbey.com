// Components
import Callout from '@source/components/interface/callout/Callout'
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Link from '@source/components/interface/link/Link'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > Okey Extra ads - Hacivat & Karagöz
function OkeyExtraAdsHacivatKaragoz () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/okey-extra-ads-hacivat-karagoz/teaser.png" />
        <p className="lead">Okey Extra is a <strong>social game</strong>, based on traditional Turkish game Okey, developed and managed by Digitoy Games. It is available on Apple Store, Google Play Store, and Facebook.</p>
        <p className="lead">I designed advertisement visuals for Okey Extra <strong>in 2017</strong>. All images are used on Facebook as sponsored content.</p>
        <p className="lead">Special thanks to <Link isExternal arrow="upright" to="https://cerenmurgan.com">Ceren</Link> for helping me on this project!</p>
        <Callout
          size="large"
          intent="information"
          hasBackground={false}
          className="information">
          I also designed <Link to="/works/okey-extra-facebook-page">Okey Extra Facebook Page</Link>.
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
          source="/okey-extra-ads-hacivat-karagoz/01.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/okey-extra-ads-hacivat-karagoz/02.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/okey-extra-ads-hacivat-karagoz/03.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/okey-extra-ads-hacivat-karagoz/04.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/okey-extra-ads-hacivat-karagoz/05.png" />
      </Content>
    </>
  )
}

// Export
export default OkeyExtraAdsHacivatKaragoz
