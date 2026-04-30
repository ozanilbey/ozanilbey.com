// Components
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/model/media/Media'

// Content: Works > Work > Body > Mega posters
function MegaPosters () {
  return (
    <>
      <Content>
        <Media
          width={768}
          type="image"
          className="media"
          path="/mega-posters/teaser.png" />
        <p className="lead">MEGA Industries is a <strong>petroleum solutions company</strong> located in Ankara, Turkey. Its mission is to design, develop and implement end-to-end monitoring and control systems.</p>
        <p className="lead">I designed 12 posters (one per each month of 2017) for MEGA Industries <strong>in 2016</strong> utilising famous quotations about corporate image, success, engineering, design, and business in poster designs for inspirational and motivational purposes.</p>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Posters
        </Heading>
        <small className="note">Ordered by Month</small>
        <Media
          width={768}
          type="image"
          className="media"
          path="/mega-posters/01.png" />
        <Media
          width={768}
          type="image"
          className="media"
          path="/mega-posters/02.png" />
        <Media
          width={768}
          type="image"
          className="media"
          path="/mega-posters/03.png" />
        <Media
          width={768}
          type="image"
          className="media"
          path="/mega-posters/04.png" />
        <Media
          width={768}
          type="image"
          className="media"
          path="/mega-posters/05.png" />
        <Media
          width={768}
          type="image"
          className="media"
          path="/mega-posters/06.png" />
        <Media
          width={768}
          type="image"
          className="media"
          path="/mega-posters/07.png" />
        <Media
          width={768}
          type="image"
          className="media"
          path="/mega-posters/08.png" />
        <Media
          width={768}
          type="image"
          className="media"
          path="/mega-posters/09.png" />
        <Media
          width={768}
          type="image"
          className="media"
          path="/mega-posters/10.png" />
        <Media
          width={768}
          type="image"
          className="media"
          path="/mega-posters/11.png" />
        <Media
          width={768}
          type="image"
          className="media"
          path="/mega-posters/12.png" />
      </Content>
    </>
  )
}

// Export
export default MegaPosters
