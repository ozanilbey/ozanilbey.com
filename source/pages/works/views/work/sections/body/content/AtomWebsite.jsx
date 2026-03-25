// Components
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > Atom website
function AtomWebsite () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/atom-website/teaser.png" />
        <p className="lead">ATOM is an <strong>early-stage incubator for game development startups</strong>. It is a part of ODTÜ TEKNOKENT and located in Ankara, Turkey.</p>
        <p className="lead">I designed and developed the website of ATOM <strong>in 2011</strong>.</p>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Screens
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/atom-website/01.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/atom-website/02.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/atom-website/03.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/atom-website/04.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/atom-website/05.png" />
      </Content>
    </>
  )
}

// Export
export default AtomWebsite
