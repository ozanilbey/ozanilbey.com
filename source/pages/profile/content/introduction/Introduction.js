// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Page from '~/components/layout/page/Page'
import Headline from '~/components/model/headline/Headline'
import Hint from '~/components/type/hint/Hint'

// Style
import './Introduction.less'

// Subcontent: Profile > Introduction
function Introduction () {
  // Render
  return (
    <Page.Header
      name="introduction"
      data-content="introduction">
      <Container>
        <Headline displaySize="bigger">
          {'Converting '}
          <Hint
            isBodyClickable
            text="Obsessive-compulsive disorder">
            OCD
          </Hint>
          {' to '}
          <Hint
            isBodyClickable
            text="Interaction design">
            IxD
          </Hint>
          <br />
          since 2003.
        </Headline>
        <p className="lead">I have mastered <strong>multiple design disciplines</strong> along with <strong>frontend development</strong>. I have gained almost a decade of experience in <strong>product management</strong>. On top of these, I’ve been mastering <strong>full-stack development</strong> in recent years. Here you can find very detailed information about me.</p>
      </Container>
    </Page.Header>
  )
}

// Export
export default Introduction
