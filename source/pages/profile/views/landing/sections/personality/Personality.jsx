// Components
import Content from '@source/components/layout/content/Content'
import Headline from '@source/components/model/headline/Headline'
import List from '@source/components/interface/list/List'
import Page from '@source/components/layout/page/Page'

// Styles
import './Personality.scss'

// Section: Profile > Landing > Personality
function Personality () {
  // Render
  return (
    <Page.Section name="personality">
      <Content>
        <Headline
          isSingleLine
          displaySize="big"
          contentBefore="First things first:">
          personality
        </Headline>
        <List
          className="list lead"
          data={[
            <>I love anything <strong>technical</strong>.</>,
            <>I respect <strong>intelligence</strong> and praise <strong>beauty</strong>.</>,
            <><strong>Learning</strong> is like eating to me. I crave a lot.</>,
            <>I enjoy creating <strong>systems</strong>, down to every little component.</>,
            <>
              <del className="redacted">My computer is my best friend. Don’t tell my wife.</del>
              <span className="explanation">Someone told her.</span>
            </>
          ]} />
      </Content>
    </Page.Section>
  )
}

// Export
export default Personality
