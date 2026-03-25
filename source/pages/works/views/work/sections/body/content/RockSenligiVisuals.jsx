// Components
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > Rock Şenliği visuals
function RockSenligiVisuals () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/rock-senligi-visuals/teaser.png" />
        <p className="lead">Rock Şenliği is a <strong>Rock Festival</strong> organized by ODTÜ MT (Music Society).</p>
        <p className="lead">I designed a set of promotional visuals for ODTÜ MT <strong>in 2011</strong>: A poster, a handout, and a set of 5 tickets (one per each day).</p>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Poster
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rock-senligi-visuals/01.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Handout
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rock-senligi-visuals/02.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Tickets
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rock-senligi-visuals/03.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rock-senligi-visuals/04.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rock-senligi-visuals/05.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rock-senligi-visuals/06.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/rock-senligi-visuals/07.png" />
      </Content>
    </>
  )
}

// Export
export default RockSenligiVisuals
