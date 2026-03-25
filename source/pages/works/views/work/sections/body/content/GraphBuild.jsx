// Components
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > GraphBuild
function GraphBuild () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/graphbuild/teaser.png" />
        <p className="lead">GraphBuild (or “Graph.build“) is a simple visual <strong>graph application builder</strong>.</p>
        <p className="lead">I created the “Graph.build“ brand, <strong>designed the user interface</strong>, and <strong>developed the web application</strong> using React in <strong>2018</strong>.</p>
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
          source="/graphbuild/01.png" />
        <small className="note">Start</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphbuild/02.png" />
        <small className="note">Main graph</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphbuild/03.png" />
        <small className="note">Adding attributes</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphbuild/04.png" />
        <small className="note">Adding edges by drawing</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphbuild/05.png" />
        <small className="note">Adding edges via form</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphbuild/06.png" />
        <small className="note">Edge properties</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphbuild/07.png" />
        <small className="note">Node properties</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphbuild/08.png" />
        <small className="note">Editing node properties</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphbuild/09.png" />
        <small className="note">Editing node permissions</small>
      </Content>
    </>
  )
}

// Export
export default GraphBuild
