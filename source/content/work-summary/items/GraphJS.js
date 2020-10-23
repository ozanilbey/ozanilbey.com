// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import Information from '~/components/type/information/Information'
import Media from '~/components/content/media/Media'

// Content: Work Summary > GraphJS (Item)
const GraphJS = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={320} source="/graphjs/badge.png" />
      <Media type="image" width={864} source="/graphjs/teaser.png" />
      <p className="lead">GraphJS (formerly “Graph.js“) is an amazing tool for <strong>making any website social</strong> with just a few lines of code. It’s an <strong>open source client-side JavaScript library</strong>. It helps you to easily add authentication, comments, messages, forum, groups, profiles and many more to static web pages.</p>
      <p className="lead">I had created the “Graph.js“ brand, designed all user interface components, and written <strong>more than 90% of its codebase</strong>, using Riot.js and LESS in <strong>2018–2019</strong>.</p>
      <Information>I had also designed <Link type="regular" to="/works/graphjs-website">GraphJS Website</Link>{/*, and created <Link type="regular" to="/works/groups-v2">Grou.ps v2</Link> frontend using powerful features of GraphJS */}.</Information>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Authentication</Heading>
      <Media type="image" width={1152} source="/graphjs/01.png" />
      <small>State</small>
      <Media type="image" width={1152} source="/graphjs/02.png" />
      <small>Registration</small>
      <Media type="image" width={1152} source="/graphjs/03.png" />
      <small>Login</small>
      <Media type="image" width={1152} source="/graphjs/04.png" />
      <small>Password Reset</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Profile</Heading>
      <Media type="image" width={1152} source="/graphjs/05.png" />
      <small>Profile Cards</small>
      <Media type="image" width={1152} source="/graphjs/06.png" />
      <small>Activity</small>
      <Media type="image" width={1152} source="/graphjs/07.png" />
      <small>Groups</small>
      <Media type="image" width={1152} source="/graphjs/08.png" />
      <small>Settings</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Messages</Heading>
      <Media type="image" width={1152} source="/graphjs/09.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Bookmark</Heading>
      <Media type="image" width={1152} source="/graphjs/10.png" />
      <small>Button</small>
      <Media type="image" width={1152} source="/graphjs/11.png" />
      <small>List</small>
      <Media type="image" width={1152} source="/graphjs/12.png" />
      <small>List (Global)</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Comments</Heading>
      <Media type="image" width={1152} source="/graphjs/13.png" />
      <small>Standalone</small>
      <Media type="image" width={1152} source="/graphjs/14.png" />
      <small>Inline (Blended Version)</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Forum</Heading>
      <Media type="image" width={1152} source="/graphjs/15.png" />
      <small>List</small>
      <Media type="image" width={1152} source="/graphjs/16.png" />
      <small>Composer</small>
      <Media type="image" width={1152} source="/graphjs/17.png" />
      <small>Thread</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Blog</Heading>
      <Media type="image" width={1152} source="/graphjs/18.png" />
      <small>Composer</small>
      <Media type="image" width={1152} source="/graphjs/19.png" />
      <small>Post</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Dialog Box</Heading>
      <Media type="image" width={1152} source="/graphjs/20.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>It’s responsive.</Heading>
      <small>Components adapt to the screen size.</small>
      <Media type="image" width={1152} source="/graphjs/21.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>It’s themable.</Heading>
      <small>Colors are adjustable to your brand.</small>
      <Media type="image" width={1152} source="/graphjs/22.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>It’s helpful.</Heading>
      <small>It’s easy to measure user engagement.</small>
      <Media type="image" width={1152} source="/graphjs/23.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>It’s full of options.</Heading>
      <small>UI components are fully customizable. Sky is the limit.</small>
      <Media type="image" width={1152} source="/graphjs/24.png" />
      <small>Color Options</small>
      <Media type="image" width={1152} source="/graphjs/25.png" />
      <small>Blended View</small>
      <Media type="image" width={1152} source="/graphjs/26.png" />
      <small>Alternative Layouts</small>
      <Media type="image" width={1152} source="/graphjs/27.png" />
      <small>Removable Parts (Title etc.)</small>
    </Container>
  </>
)

// Export
export default GraphJS
