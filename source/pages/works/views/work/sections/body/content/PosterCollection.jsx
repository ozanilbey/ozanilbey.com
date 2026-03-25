// Components
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/interface/media/Media'
import Separator from '@source/components/layout/separator/Separator'

// Content: Works > Work > Body > Poster collection
function PosterCollection () {
  return (
    <>
      <Content>
        <p className="lead">I’ve started designing posters <strong>in 2008</strong>, just for fun. I’ve learned lots of things about it since then. However, I’ve never considered it as one of my professional skills. I am still doing it for fun.</p>
        <p className="lead">Here are some of my works.</p>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          2016
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poster-collection/poster-mega.png" />
        <small className="note">Mega Quote</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poster-collection/poster-lettherebemorelight.png" />
        <small className="note">Let There Be More Light</small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2015
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poster-collection/poster-siberest.png" />
        <small className="note">Siberest Promo</small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2014
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poster-collection/poster-buildmore.png" />
        <small className="note">Keep Calm and Build More</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poster-collection/poster-favogue.png" />
        <small className="note">Favogue</small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2013
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poster-collection/poster-chessgame.png" />
        <small className="note">ChessGame</small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2012
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poster-collection/poster-sabahliyoruz.png" />
        <small className="note">StayAwake Event</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poster-collection/poster-sabahlayamiyoruz.png" />
        <small className="note">
          StayAwake Event
          <i className="detail">Delay Notice</i>
        </small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poster-collection/poster-typographyworkshop.png" />
        <small className="note">Typography Workshop</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poster-collection/poster-girisimcilikkongresi.png" />
        <small className="note">4th Entrepreneurship Congress</small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2011
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poster-collection/poster-rockfestival.png" />
        <small className="note">16th METU Rock Festival</small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2010
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poster-collection/poster-photoshop.png" />
        <small className="note">Adobe Photoshop Course</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poster-collection/poster-illustrator.png" />
        <small className="note">Adobe Illustrator Course</small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2009
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poster-collection/poster-mimarliktoplulugu.png" />
        <small className="note">Architecture Club Meeting</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poster-collection/poster-blender.png" />
        <small className="note">Blender Course</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poster-collection/poster-thefourdevils.png" />
        <small className="note">The Four Devils</small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2008
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/poster-collection/poster-dortbucuk.png" />
        <small className="note">Poster Design Workshop (4.5 Hours-long)</small>
      </Content>
    </>
  )
}

// Export
export default PosterCollection
