// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Content: Work Summary > GraphBuild (Item)
const GraphBuild = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/graphbuild/teaser.png" />
      <p className="lead">GraphBuild (or “Graph.build“) is a simple visual <strong>graph application builder</strong>.</p>
      <p className="lead">I had created the “Graph.build“ brand, <strong>designed the user interface</strong>, and <strong>developed the web application</strong> using React in <strong>2018</strong>.</p>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Screens</Heading>
      <Media type="image" width={1152} source="/graphbuild/01.png" />
      <small>Start</small>
      <Media type="image" width={1152} source="/graphbuild/02.png" />
      <small>Main graph</small>
      <Media type="image" width={1152} source="/graphbuild/03.png" />
      <small>Adding attributes</small>
      <Media type="image" width={1152} source="/graphbuild/04.png" />
      <small>Adding edges by drawing</small>
      <Media type="image" width={1152} source="/graphbuild/05.png" />
      <small>Adding edges via form</small>
      <Media type="image" width={1152} source="/graphbuild/06.png" />
      <small>Edge properties</small>
      <Media type="image" width={1152} source="/graphbuild/07.png" />
      <small>Node properties</small>
      <Media type="image" width={1152} source="/graphbuild/08.png" />
      <small>Editing node properties</small>
      <Media type="image" width={1152} source="/graphbuild/09.png" />
      <small>Editing node permissions</small>
    </Container>
  </>
)

// Export
export default GraphBuild
