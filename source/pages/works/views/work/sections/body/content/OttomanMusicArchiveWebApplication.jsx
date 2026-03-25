// Components
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > Ottoman Music Archive web application
function OttomanMusicArchiveWebApplication () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/ottoman-music-archive-web-application/teaser.png" />
        <p className="lead">TRT Külliyat is an <strong>online note archive</strong> of Ottoman music, owned and operated by TRT (Turkish National Television).</p>
        <p className="lead">I designed a user interface for the project <strong>in 2012</strong>. The interface includes many oriental design details to reflect the Ottoman Culture properly. I also developed the frontend of the web application.</p>
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
          source="/ottoman-music-archive-web-application/01.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/ottoman-music-archive-web-application/02.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/ottoman-music-archive-web-application/03.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/ottoman-music-archive-web-application/04.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/ottoman-music-archive-web-application/05.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/ottoman-music-archive-web-application/06.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/ottoman-music-archive-web-application/07.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/ottoman-music-archive-web-application/08.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/ottoman-music-archive-web-application/09.png" />
      </Content>
    </>
  )
}

// Export
export default OttomanMusicArchiveWebApplication
