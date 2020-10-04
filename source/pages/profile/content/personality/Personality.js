// Modules
import React from 'react'

// Components
import Headline from '~/components/model/headline/Headline'
import Container from '~/components/layout/container/Container'
import Page from '~/components/layout/page/Page'
import Heading from '~/components/type/heading/Heading'
import List from '~/components/content/list/List'

// Style
import './Personality.less'

// Content: Personality
function Personality () {
  // Render
  return (
    <Page.Section
      name="personality"
      data-content="personality">
      <Container>
        <Heading
          isSingleLine
          className="dim"
          rank={4}>
          First things first:
        </Heading>
        <Headline
          isSingleLine
          displaySize="big">
          personality
        </Headline>
        <List data={[
          <>I love anything <strong>technical</strong>.</>,
          <>I respect <strong>intelligence</strong> and praise <strong>beauty</strong>.</>,
          <><strong>Learning</strong> is like eating to me. I crave a lot.</>,
          <>I enjoy creating <strong>systems</strong>, down to every little component.</>,
          <>
            <del data-explanation="">My computer is my best friend. Don’t tell my wife.</del>
            <span className="explanation">Someone told her.</span>
          </>
        ]} />
      </Container>
    </Page.Section>
  )
}

// Export
export default Personality
