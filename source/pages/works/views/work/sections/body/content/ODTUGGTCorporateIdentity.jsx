// Components
import Callout from '@source/components/interface/callout/Callout'
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > ODTÜ GGT corporate identity
function ODTUGGTCorporateIdentity () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/odtu-ggt-corporate-identity/teaser.png" />
        <p className="lead">ODTÜ GGT (Young Entrepreneurs Society) is a <strong>student club</strong> operating at <strong>Middle East Technical University</strong>.</p>
        <p className="lead">I designed <strong>a simple corporate identity with a bright look</strong> for ODTÜ GGT <strong>in 2011</strong>, providing essential pieces of a corporate identity such as logo, business cards, letterhead, folder, and email signatures. I also designed and developed the website.</p>
        <Callout
          size="large"
          intent="information"
          hasBackground={false}
          className="information">
          The logo design work is mainly a revision.
        </Callout>
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
          source="/odtu-ggt-corporate-identity/01.png" />
        <small className="note">Young Entrepreneurs Society</small>
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
          source="/odtu-ggt-corporate-identity/02.png" />
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
          source="/odtu-ggt-corporate-identity/03.png" />
        <small className="note">“Empowering Your Ideas“</small>
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
          source="/odtu-ggt-corporate-identity/04.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/odtu-ggt-corporate-identity/05.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/odtu-ggt-corporate-identity/06.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Website
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/odtu-ggt-corporate-identity/07.png" />
        <small className="note">odtuggt.org</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Slides
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/odtu-ggt-corporate-identity/08.png" />
        <small className="note">Meeting</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/odtu-ggt-corporate-identity/09.png" />
        <small className="note">Teaching</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/odtu-ggt-corporate-identity/10.png" />
        <small className="note">Developing</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Email Signatures
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/odtu-ggt-corporate-identity/11.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/odtu-ggt-corporate-identity/12.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/odtu-ggt-corporate-identity/13.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Academy-G Logo
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/odtu-ggt-corporate-identity/14.png" />
      </Content>
    </>
  )
}

// Export
export default ODTUGGTCorporateIdentity
