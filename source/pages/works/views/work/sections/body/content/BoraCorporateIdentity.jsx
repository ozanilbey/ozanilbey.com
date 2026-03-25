// Components
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > Bora corporate identity
function BoraCorporateIdentity () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/bora-corporate-identity/teaser.png" />
        <p className="lead">Bora is an <strong>architecture and planning company</strong> located in Ankara, Turkey. The company is mainly operating in 4 fields: city planning, architecture, construction, and cartography.</p>
        <p className="lead">I designed <strong>a clean corporate identity</strong> for Bora <strong>in 2012</strong>, providing essential pieces of a corporate identity such as logo, business cards, letterhead, folder, and envelope.</p>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Logo
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/bora-corporate-identity/01.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          The Strip
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/bora-corporate-identity/02.png" />
        <small className="note">City Planning / Cartography / Architecture / Construction</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Logo with Label
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/bora-corporate-identity/03.png" />
        <small className="note">Bora City Planning</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Letterhead
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/bora-corporate-identity/04.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Folder
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/bora-corporate-identity/05.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Envelope
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/bora-corporate-identity/06.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Business Cards
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/bora-corporate-identity/07.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/bora-corporate-identity/08.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/bora-corporate-identity/09.png" />
      </Content>
    </>
  )
}

// Export
export default BoraCorporateIdentity
