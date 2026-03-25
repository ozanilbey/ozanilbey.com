// Components
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > Fihrist
function Fihrist () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/fihrist/teaser.png" />
        <p className="lead">Fihrist is a platform for reading curated articles. There is no imagery, no ads, no moving items on the article pages to prevent an uncomfortable experience.</p>
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
          source="/fihrist/01.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/fihrist/02.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/fihrist/03.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/fihrist/04.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/fihrist/05.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/fihrist/06.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/fihrist/07.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Mobile Screens
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/fihrist/08.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/fihrist/09.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/fihrist/10.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/fihrist/11.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/fihrist/12.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/fihrist/13.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/fihrist/14.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/fihrist/15.png" />
      </Content>
    </>
  )
}

// Export
export default Fihrist
