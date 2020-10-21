// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Siberest Posters (Item)
const SiberestPosters = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/siberest-posters/teaser.png" />
      <p className="lead">Siberest is a <strong>cybersecurity company</strong> located in Ankara, Turkey. Its mission is to build a local approach to cybersecurity problems with its global know-how.</p>
      <p className="lead">I had designed two simple posters for Siberest <strong>in 2015</strong> to be used in an international cybersecurity convention to convey the company’s message clearly.</p>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Posters</Heading>
      <Media type="image" width={1152} source="/siberest-posters/01.png" />
      <Media type="image" width={1152} source="/siberest-posters/02.png" />
    </Container>
  </>
)

// Export
export default SiberestPosters
