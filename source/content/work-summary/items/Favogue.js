// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Favogue (Item)
const Favogue = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/favogue/teaser.png" />
      <p className="lead">Favogue is a <strong>photo-sharing platform</strong> focused on <strong>daily fashion inspiration</strong>. Favogue <i>redefines</i> “feedback“ by going beyond likes and comments. Give feedback by clicking/tapping on <i>any clothing item</i> you want to “like“, then let Favogue do its job.</p>
      <p className="lead">It is all about giving style feedback and getting suggestions for better clothing combinations. <strong>No irrelevant feedback, no negative reactions, no spam.</strong></p>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Core Feature</Heading>
      <Media type="image" width={1152} source="/favogue/01.png" />
      <Media type="image" width={1152} source="/favogue/02.png" />
      <Media type="image" width={1152} source="/favogue/03.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Web Application</Heading>
      <Media type="image" width={1152} source="/favogue/04.png" />
      <Media type="image" width={1152} source="/favogue/05.png" />
      <Media type="image" width={1152} source="/favogue/06.png" />
      <Media type="image" width={1152} source="/favogue/07.png" />
      <Media type="image" width={1152} source="/favogue/08.png" />
      <Media type="image" width={1152} source="/favogue/09.png" />
      <Media type="image" width={1152} source="/favogue/10.png" />
      <Media type="image" width={1152} source="/favogue/11.png" />
      <Media type="image" width={1152} source="/favogue/12.png" />
      <Media type="image" width={1152} source="/favogue/13.png" />
      <Media type="image" width={1152} source="/favogue/14.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Editor Panel</Heading>
      <Media type="image" width={1152} source="/favogue/15.png" />
      <Media type="image" width={1152} source="/favogue/16.png" />
      <Media type="image" width={1152} source="/favogue/17.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Invitation</Heading>
      <Media type="image" width={1152} source="/favogue/18.png" />
      <small>VIP Invitation Page</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Blog</Heading>
      <Media type="image" width={1152} source="/favogue/19.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>iOS Application</Heading>
      <Media type="image" width={1152} source="/favogue/20.png" />
      <Media type="image" width={1152} source="/favogue/21.png" />
      <Media type="image" width={1152} source="/favogue/22.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Embedding</Heading>
      <Media type="image" width={1152} source="/favogue/23.png" />
      <small>FAME: Favogue Adaptive Media Embedding</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Advertisement</Heading>
      <Media type="image" width={1152} source="/favogue/24.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Business Cards</Heading>
      <Media type="image" width={1152} source="/favogue/25.png" />
      <Media type="image" width={1152} source="/favogue/26.png" />
      <Media type="image" width={1152} source="/favogue/27.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Poster</Heading>
      <Media type="image" width={1152} source="/favogue/28.png" />
    </Container>
  </>
)

// Export
export default Favogue
