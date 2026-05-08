// Components
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/model/media/Media'

// Content: Works > Work > Body > Fihrist
function Fihrist () {
  return (
    <>
      <Content>
        <Media
          width={768}
          type="image"
          className="media"
          path="/fihrist/teaser.png" />
        <p>Fihrist is a platform for reading curated articles. There is no imagery, no ads, no moving items on the article pages to prevent an uncomfortable experience.</p>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Desktop Screens
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          path="/fihrist/01.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          path="/fihrist/02.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          path="/fihrist/03.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          path="/fihrist/04.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          path="/fihrist/05.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          path="/fihrist/06.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          path="/fihrist/07.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Mobile Screens
        </Heading>
        <Media
          width={384}
          type="image"
          className="media"
          path="/fihrist/08.png" />
        <Media
          width={384}
          type="image"
          className="media"
          path="/fihrist/09.png" />
        <Media
          width={384}
          type="image"
          className="media"
          path="/fihrist/10.png" />
        <Media
          width={384}
          type="image"
          className="media"
          path="/fihrist/11.png" />
        <Media
          width={384}
          type="image"
          className="media"
          path="/fihrist/12.png" />
        <Media
          width={384}
          type="image"
          className="media"
          path="/fihrist/13.png" />
        <Media
          width={384}
          type="image"
          className="media"
          path="/fihrist/14.png" />
        <Media
          width={384}
          type="image"
          className="media"
          path="/fihrist/15.png" />
      </Content>
    </>
  )
}

// Export
export default Fihrist
