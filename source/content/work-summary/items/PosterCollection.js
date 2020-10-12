// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Poster Collection (Item)
const PosterCollection = () => (
  <>
    <Container isBlockLayout>
      <p className="lead">I’ve started designing posters <strong>in 2008</strong>, just for fun. I’ve learned lots of things about it since then. However, I’ve never considered it as one of my professional skills. I am still doing it for fun.</p>
      <p className="lead">Here are some of my works.</p>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>2016</Heading>
      <Media type="image" width={1152} source="/poster-collection/poster-mega.png" />
      <small>Mega Quote</small>
      <Media type="image" width={1152} source="/poster-collection/poster-lettherebemorelight.png" />
      <small>Let There Be More Light</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>2014</Heading>
      <Media type="image" width={1152} source="/poster-collection/poster-buildmore.png" />
      <small>Keep Calm and Build More</small>
      <Media type="image" width={1152} source="/poster-collection/poster-favogue.png" />
      <small>Favogue</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>2013</Heading>
      <Media type="image" width={1152} source="/poster-collection/poster-chessgame.png" />
      <small>ChessGame</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>2012</Heading>
      <Media type="image" width={1152} source="/poster-collection/poster-sabahliyoruz.png" />
      <small>StayAwake Event</small>
      <Media type="image" width={1152} source="/poster-collection/poster-sabahlayamiyoruz.png" />
      <small>
        StayAwake Event
        <i>Delay Notice</i>
      </small>
      <Media type="image" width={1152} source="/poster-collection/poster-typographyworkshop.png" />
      <small>Typography Workshop</small>
      <Media type="image" width={1152} source="/poster-collection/poster-girisimcilikkongresi.png" />
      <small>4th Entrepreneurship Congress</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>2011</Heading>
      <Media type="image" width={1152} source="/poster-collection/poster-rockfestival.png" />
      <small>16th METU Rock Festival</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>2010</Heading>
      <Media type="image" width={1152} source="/poster-collection/poster-photoshop.png" />
      <small>Adobe Photoshop Course</small>
      <Media type="image" width={1152} source="/poster-collection/poster-illustrator.png" />
      <small>Adobe Illustrator Course</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>2009</Heading>
      <Media type="image" width={1152} source="/poster-collection/poster-mimarliktoplulugu.png" />
      <small>Architecture Club Meeting</small>
      <Media type="image" width={1152} source="/poster-collection/poster-blender.png" />
      <small>Blender Course</small>
      <Media type="image" width={1152} source="/poster-collection/poster-thefourdevils.png" />
      <small>The Four Devils</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>2008</Heading>
      <Media type="image" width={1152} source="/poster-collection/poster-dortbucuk.png" />
      <small>Poster Design Workshop (4.5 Hours-long)</small>
    </Container>
  </>
)

// Export
export default PosterCollection
