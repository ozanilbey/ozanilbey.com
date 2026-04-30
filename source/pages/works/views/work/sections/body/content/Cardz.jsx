// Components
import Content from '@source/components/layout/content/Content'
import Link from '@source/components/interface/link/Link'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/model/media/Media'

// Content: Works > Work > Body > Cardz
function Cardz () {
  return (
    <>
      <Content>
        <Media
          width={768}
          type="image"
          className="media"
          path="/cardz/teaser.png" />
        <p>Cardz is an amazing tool for networking. Buy a pack of Cardz anytime with <strong>any design option</strong> you want. Link your Cardz to your <strong>instantly-generated online profile</strong> by using the QR code on the back of your cards. Then share your information with your network with the help of your <strong>pack of printed cards</strong>. Get social in <strong>the coolest way possible</strong>.</p>
        <p>It’s not a business card. It’s your <strong>persona</strong>. Pick your style, provide your information, then have both a pack of cards and a web page.</p>
        <p className="lead"><strong>Simple as that.</strong></p>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          It’s practical.
        </Heading>
        <Media
          width={512}
          type="image"
          className="media"
          path="/cardz/01.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          It’s responsive.
        </Heading>
        <Media
          width={512}
          type="image"
          className="media"
          path="/cardz/02.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          It’s full of options.
        </Heading>
        <Media
          width={768}
          type="image"
          className="media"
          path="/cardz/03.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          It’s full of colors.
        </Heading>
        <Media
          width={768}
          type="image"
          className="media"
          path="/cardz/04.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          It’s thematic.
        </Heading>
        <small className="note">UI theme is similar to your choice of print cards.</small>
        <Media
          width={384}
          type="image"
          className="media"
          path="/cardz/05.png" />
        <small className="note">Sign-up (Phone)</small>
        <Media
          width={384}
          type="image"
          className="media"
          path="/cardz/06.png" />
        <small className="note">Profile (Phone)</small>
        <Media
          width={768}
          type="image"
          className="media"
          path="/cardz/07.png" />
        <small className="note">Sign-up (Tablet)</small>
        <Media
          width={768}
          type="image"
          className="media"
          path="/cardz/08.png" />
        <small className="note">Profile (Tablet)</small>
        <Media
          width={1024}
          type="image"
          className="media"
          path="/cardz/09.png" />
        <small className="note">Sign-up (Desktop)</small>
        <Media
          width={1024}
          type="image"
          className="media"
          path="/cardz/10.png" />
        <small className="note">Profile (Desktop)</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title"
          style={{ marginBottom: '2rem' }}>
          Story of the project
        </Heading>
        <p className="lead">Cardz was <strong>entirely designed and developed in 48 hours</strong> at <strong>LAUNCH Hackathon 2014</strong>, by <strong>Ozan Yilmaz</strong> and <Link isExternal arrow="upright" to="//volkan.io">Volkan Özçelik</Link>.</p>
        <p>Ozan, having had 5 years of experience on branding at the time, came up with the idea of <strong>easy-to-have, branded-looking, socially consumable business cards</strong>. Compared to ordinary business cards, the main distinguishing factor of Cardz concept is that <strong>it democratizes having business cards</strong> by making it <strong>simple and cheaper</strong>.</p>
        <Media
          width={1152}
          type="image"
          className="media"
          path="/cardz/story-picture.png" />
      </Content>
    </>
  )
}

// Export
export default Cardz
