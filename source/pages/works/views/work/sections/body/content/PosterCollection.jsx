// Components
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/model/media/Media'
import Separator from '@source/components/layout/separator/Separator'

// Constants
const POSTER_SIZE_WIDTH_MAPPING = {
  large: 1152,
  medium: 896,
  small: 640
}

// Content: Works > Work > Body > Poster collection
function PosterCollection () {
  // Functions
  function renderPoster (id, size = 'small') {
    return (
      <Media
        width={POSTER_SIZE_WIDTH_MAPPING[size]}
        type="image"
        className="media"
        path={`/poster-collection/poster-${id}.png`} />
    )
  }
  // Render
  return (
    <>
      <Content>
        <p>I’ve started designing posters <strong>in 2008</strong>, just for fun. I’ve learned lots of things about it since then. However, I’ve never considered it as one of my professional skills. I am still doing it for fun.</p>
        <p>Here are some of my works.</p>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          2016
        </Heading>
        {renderPoster('mega')}
        <small className="note">Mega Quote</small>
        {renderPoster('lettherebemorelight', 'medium')}
        <small className="note">Let There Be More Light</small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2015
        </Heading>
        {renderPoster('siberest')}
        <small className="note">Siberest Promo</small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2014
        </Heading>
        {renderPoster('buildmore')}
        <small className="note">Keep Calm and Build More</small>
        {renderPoster('favogue')}
        <small className="note">Favogue</small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2013
        </Heading>
        {renderPoster('chessgame')}
        <small className="note">ChessGame</small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2012
        </Heading>
        {renderPoster('sabahliyoruz')}
        <small className="note">StayAwake Event</small>
        {renderPoster('sabahlayamiyoruz', 'large')}
        <small className="note">
          StayAwake Event
          <i className="detail">Delay Notice</i>
        </small>
        {renderPoster('typographyworkshop', 'large')}
        <small className="note">Typography Workshop</small>
        {renderPoster('girisimcilikkongresi')}
        <small className="note">4th Entrepreneurship Congress</small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2011
        </Heading>
        {renderPoster('rockfestival')}
        <small className="note">16th METU Rock Festival</small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2010
        </Heading>
        {renderPoster('photoshop', 'large')}
        <small className="note">Adobe Photoshop Course</small>
        {renderPoster('illustrator', 'large')}
        <small className="note">Adobe Illustrator Course</small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2009
        </Heading>
        {renderPoster('mimarliktoplulugu')}
        <small className="note">Architecture Club Meeting</small>
        {renderPoster('blender', 'large')}
        <small className="note">Blender Course</small>
        {renderPoster('thefourdevils')}
        <small className="note">The Four Devils</small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2008
        </Heading>
        {renderPoster('dortbucuk')}
        <small className="note">Poster Design Workshop (4.5 Hours-long)</small>
      </Content>
    </>
  )
}

// Export
export default PosterCollection
