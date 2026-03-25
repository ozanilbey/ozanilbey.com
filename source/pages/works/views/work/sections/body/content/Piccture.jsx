// Components
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > Piccture
function Piccture () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/piccture/teaser.png" />
        <p className="lead">Piccture is <strong>a social platform for designers</strong> and everyone else. It provides a tool for giving <strong>visual feedback</strong> on images. No more text comments!</p>
        <p className="lead">Any feedback on Piccture is <strong>point-specific</strong> and <strong>visually-informant</strong>. Piccture connects everyone with designers all over the world. Piccture connects everyone with designers all over the world. Users follow each other, and they also have the chance to follow other artists, stylists, painters, photographers, illustrators, architects, designers, and even companies.</p>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Visual feedback!
        </Heading>
        <i className="detail">It’s a thing now.</i>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/piccture/01.png"
          full={true} />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/piccture/02.png"
          full={true} />
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
          source="/piccture/03.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/piccture/04.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/piccture/05.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/piccture/06.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/piccture/07.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/piccture/08.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/piccture/09.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/piccture/10.png" />
      </Content>
    </>
  )
}

// Export
export default Piccture
