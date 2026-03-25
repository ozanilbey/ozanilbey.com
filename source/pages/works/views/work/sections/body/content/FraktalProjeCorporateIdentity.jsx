// Components
import Callout from '@source/components/interface/callout/Callout'
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > Fraktal Proje corporate identity
function FraktalProjeCorporateIdentity () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/fraktal-proje-corporate-identity/teaser.png" />
        <p className="lead">Fraktal Proje is a <strong>multidisciplinary design company</strong> located in <strong>Ankara</strong>.</p>
        <p className="lead">I designed <strong>a corporate identity</strong> for Fraktal Proje <strong>in 2013</strong>, providing essential pieces of a corporate identity such as logo, business cards, letterhead, folder, envelope and invoice.</p>
        <Callout
          size="large"
          intent="information"
          hasBackground={false}
          className="information">
          I am one of the co-founders of the company.
        </Callout>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Icon
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/fraktal-proje-corporate-identity/01.png" />
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
          source="/fraktal-proje-corporate-identity/02.png" />
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
          source="/fraktal-proje-corporate-identity/03.png" />
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
          source="/fraktal-proje-corporate-identity/04.png" />
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
          source="/fraktal-proje-corporate-identity/05.png" />
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
          source="/fraktal-proje-corporate-identity/06.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/fraktal-proje-corporate-identity/07.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/fraktal-proje-corporate-identity/08.png" />
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
          source="/fraktal-proje-corporate-identity/09.png" />
      </Content>
    </>
  )
}

// Export
export default FraktalProjeCorporateIdentity
