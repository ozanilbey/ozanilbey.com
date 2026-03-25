// Components
import Card from '@source/components/interface/card/Card'
import Content from '@source/components/layout/content/Content'
import Headline from '@source/components/model/headline/Headline'
import Link from '@source/components/interface/link/Link'
import Page from '@source/components/layout/page/Page'

// Data
import repositories from '@source/data/repositories'

// Styles
import './OpenSource.scss'

// Section: Home > Landing > Open source
function OpenSource () {
  // Functions
  function renderGitHubLink () {
    return (
      <Link
        isExternal
        arrow="upright"
        className="link"
        href="https://github.com/ozanilbey">
        my GitHub
      </Link>
    )
  }
  function renderSourceCodeLink () {
    return (
      <Link
        isExternal
        arrow="upright"
        className="link"
        href="https://github.com/ozanilbey/ozanilbey.com">
        source code
      </Link>
    )
  }

  // Render
  return (
    <Page.Section name="open-source">
      <Content>
        <Headline
          isSingleLine
          displaySize="big"
          contentBefore="I contribute to">
          open source
          <mark className="mark">*</mark>
        </Headline>
        <p className="lead">I like to work on <strong>open source projects</strong>. Sometimes I publish my own projects on {renderGitHubLink()}.</p>
      </Content>
      <Content>
        <ul className="repositories">
          {repositories.map((repository, repositoryIndex) =>
            <li
              key={repository.id}
              className="repository">
              <Link
                isExternal
                className="link"
                href={`//${repository.link}`}>
                <Card
                  icon="github"
                  className="card"
                  title={repository.id}
                  description={repository.description}
                  willFade={repositoryIndex < repositories.length - 1}
                  style={{ '--brand-color': 'var(--tone-weak-color)' }} />
              </Link>
            </li>
          )}
        </ul>
        <p className="note">
          <mark className="mark">*</mark>
          The website you browse right now is also open source. You can browse, modify, and use its {renderSourceCodeLink()}.
        </p>
      </Content>
    </Page.Section>
  )
}

// Export
export default OpenSource
