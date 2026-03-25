// Components
import Callout from '@source/components/interface/callout/Callout'
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Link from '@source/components/interface/link/Link'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > GraphJS
function GraphJS () {
  return (
    <>
      <Content>
        <Media
          width={320}
          type="image"
          className="media"
          source="/graphjs/badge.png" />
        <Media
          width={864}
          type="image"
          className="media"
          source="/graphjs/teaser.png" />
        <p className="lead">GraphJS (formerly “Graph.js“) is an amazing tool for <strong>making any website social</strong> with just a few lines of code. It’s an <strong>open source client-side JavaScript library</strong>. It helps you to easily add authentication, comments, messages, forum, groups, profiles and many more to static web pages.</p>
        <p className="lead">I created the “Graph.js“ brand, designed all user interface components, and written <strong>more than 90% of its codebase</strong>, using Riot.js and LESS in <strong>2018–2019</strong>.</p>
        <Callout
          size="large"
          intent="information"
          hasBackground={false}
          className="information">
          I also designed <Link to="/works/graphjs-website">GraphJS Website</Link>.
        </Callout>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Authentication
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/01.png" />
        <small className="note">State</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/02.png" />
        <small className="note">Registration</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/03.png" />
        <small className="note">Login</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/04.png" />
        <small className="note">Password Reset</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Profile
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/05.png" />
        <small className="note">Profile Cards</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/06.png" />
        <small className="note">Activity</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/07.png" />
        <small className="note">Groups</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/08.png" />
        <small className="note">Settings</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Messages
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/09.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Bookmark
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/10.png" />
        <small className="note">Button</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/11.png" />
        <small className="note">List</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/12.png" />
        <small className="note">List (Global)</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Comments
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/13.png" />
        <small className="note">Standalone</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/14.png" />
        <small className="note">Inline (Blended Version)</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Forum
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/15.png" />
        <small className="note">List</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/16.png" />
        <small className="note">Composer</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/17.png" />
        <small className="note">Thread</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Blog
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/18.png" />
        <small className="note">Composer</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/19.png" />
        <small className="note">Post</small>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Dialog Box
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/20.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          It’s responsive.
        </Heading>
        <small className="note">Components adapt to the screen size.</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/21.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          It’s themable.
        </Heading>
        <small className="note">Colors are adjustable to your brand.</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/22.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          It’s useful.
        </Heading>
        <small className="note">It’s easy to measure user engagement.</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/23.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          It’s full of options.
        </Heading>
        <small className="note">UI components are fully customizable. Sky is the limit.</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/24.png" />
        <small className="note">Color Options</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/25.png" />
        <small className="note">Blended View</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/26.png" />
        <small className="note">Alternative Layouts</small>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/graphjs/27.png" />
        <small className="note">Removable Parts (Title etc.)</small>
      </Content>
    </>
  )
}

// Export
export default GraphJS
