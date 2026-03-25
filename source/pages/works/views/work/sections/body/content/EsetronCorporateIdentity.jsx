// Components
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > Esetron corporate identity
function EsetronCorporateIdentity () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/esetron-corporate-identity/teaser.png" />
        <p className="lead">Esetron is a <strong>robotics company</strong> located in Ankara, Turkey.</p>
        <p className="lead">I designed <strong>a simple corporate identity</strong> for Esetron <strong>in 2012</strong>, providing essential pieces of a corporate identity such as logo, business cards, letterhead, folder, envelope, and invoice.</p>
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
          source="/esetron-corporate-identity/01.png" />
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
          source="/esetron-corporate-identity/02.png" />
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
          source="/esetron-corporate-identity/03.png" />
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
          source="/esetron-corporate-identity/04.png" />
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
          source="/esetron-corporate-identity/05.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/esetron-corporate-identity/06.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/esetron-corporate-identity/07.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Invoice
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/esetron-corporate-identity/08.png" />
      </Content>
    </>
  )
}

// Export
export default EsetronCorporateIdentity
