// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Page from '~/components/layout/page/Page'
import Stack from '~/components/layout/stack/Stack'
import Headline from '~/components/model/headline/Headline'
import Link from '~/components/interface/link/Link'
import Card from '~/components/interface/card/Card'
import Heading from '~/components/type/heading/Heading'

// Style
import './OpenSource.less'

// Subcontent: Home > Open Source
function OpenSource () {
  // Render
  return (
    <Page.Section
      name="open-source"
      data-content="open-source">
      <Container>
        <Heading
          isSingleLine
          className="dim"
          rank={4}>
          I contribute to
        </Heading>
        <Headline
          isSingleLine
          displaySize="big">
          open source
          <mark>*</mark>
        </Headline>
        <p className="lead">I like to work on <strong>open source projects</strong>. Sometimes I publish my own on <Link type="external" href="https://github.com/ozanilbey">my GitHub</Link>.</p>
      </Container>
      <Container>
        <Stack>
          <Stack.Item
            sizeS={12}
            sizeM={6}>
            <Link
              isArrowHidden
              type="external"
              href="https://github.com/phonetworks/graphjs">
              <Card
                layout="vertical"
                icon="github"
                title="phonetworks/graphjs"
                description="GraphJS is a JavaScript client-side library to help developers easily enable social features on their web sites." />
            </Link>
          </Stack.Item>
          <Stack.Item
            sizeS={12}
            sizeM={6}>
            <Link
              isArrowHidden
              type="external"
              href="https://github.com/ozanilbey/isomorphic">
              <Card
                layout="vertical"
                icon="github"
                title="ozanilbey/isomorphic"
                description="Isomorphic is a boilerplate Webpack bundler to create isomorphic JavaScript web applications on Node, using React." />
            </Link>
          </Stack.Item>
        </Stack>
        <div className="note">
          <mark>*</mark>
          <p className="detail">The website you are browsing right now is also open source. You can browse, modify, and use <Link type="external" href="https://github.com/ozanilbey/ozanilbey.com">the code</Link>.</p>
        </div>
      </Container>
    </Page.Section>
  )
}

// Export
export default OpenSource
