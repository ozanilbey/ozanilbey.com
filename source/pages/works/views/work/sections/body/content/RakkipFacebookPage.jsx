// Components
import Callout from '@source/components/interface/callout/Callout'
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Link from '@source/components/interface/link/Link'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > Rakkip Facebook page
function RakkipFacebookPage () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/rakkip-facebook-page/teaser.png" />
        <p className="lead">Rakkip is a <strong>social game</strong>, based on traditional Turkish game Okey, developed and managed by Digitoy Games. It is available on Apple Store, Google Play Store, and Facebook.</p>
        <p className="lead">I designed 8 different Facebook post templates for Rakkip <strong>in 2016</strong>. Each of these templates serves different purposes.</p>
        <p className="lead">Special thanks to <Link isExternal arrow="upright" to="https://cerenmurgan.com">Ceren</Link> for helping me on this project!</p>
        <Callout
          size="large"
          intent="information"
          hasBackground={false}
          className="information">
          I also designed Facebook Pages for the other games developed by Digitoy Games such as <Link to="/works/okey-extra-facebook-page">Okey Extra</Link>, <Link to="/works/101-extra-facebook-page">101 Extra</Link>, <Link to="/works/can-okey-facebook-page">Can Okey</Link>, and <Link to="/works/tekel-okey-facebook-page">Tekel Okey</Link>.
        </Callout>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          “Poll Time“
        </Heading>
        <small className="note">Function: Asking the user’s preference on a subject.</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rakkip-facebook-page/01.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rakkip-facebook-page/02.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          “Find the Answer“
        </Heading>
        <small className="note">Function: Testing the user’s knowledge.</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rakkip-facebook-page/03.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rakkip-facebook-page/04.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          “Your Turn“
        </Heading>
        <small className="note">Function: Making the user contribute to the subject.</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rakkip-facebook-page/05.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rakkip-facebook-page/06.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          “Laughmaker“
        </Heading>
        <small className="note">Function: Making the user laugh.</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rakkip-facebook-page/07.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rakkip-facebook-page/08.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Morning Greetings
        </Heading>
        <small className="note">Function: Greeting the user each morning.</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rakkip-facebook-page/09.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rakkip-facebook-page/10.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Fun Facts
        </Heading>
        <small className="note">Function: Giving the user interesting information.</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rakkip-facebook-page/11.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rakkip-facebook-page/12.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Gift
        </Heading>
        <small className="note">Function: Giving the user free chips to play.</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rakkip-facebook-page/13.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rakkip-facebook-page/14.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rakkip-facebook-page/15.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Advertisement
        </Heading>
        <small className="note">Function: Promoting the game.</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rakkip-facebook-page/16.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rakkip-facebook-page/17.png" />
      </Content>
    </>
  )
}

// Export
export default RakkipFacebookPage
