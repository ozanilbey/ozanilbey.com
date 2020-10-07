// Modules
import React from 'react'

// Components
import Page from '~/components/layout/page/Page'
import Container from '~/components/layout/container/Container'
import Headline from '~/components/model/headline/Headline'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import ConnectButtons from '~/components/content/connect-buttons/ConnectButtons'

// Utilities
import { slug } from '~/utilities/format'

// Data
import professionalAccounts from '~/data/professionalAccounts'
import socialAccounts from '~/data/socialAccounts'

// Style
import './SocialAccounts.less'

// Subcontent: Contact > SocialAccounts
function SocialAccounts () {
  // Data
  const accounts = [...professionalAccounts, ...socialAccounts]

  // Methods
  function renderLink (name) {
    const data = accounts.filter(account => slug(account.name) === name)[0]
    return <Link type="external" href={`//${data.link}`}>{data.name}</Link>
  }

  // Render
  return (
    <Page.Section
      name="social-accounts"
      data-content="social-accounts">
      <Container>
        <Heading
          isSingleLine
          className="dim"
          rank={4}>
          I feel social today,
        </Heading>
        <Headline displaySize="big">let’s be friends</Headline>
        <p className="lead">You can add me on {renderLink('linkedin')} and follow my {renderLink('github')}.</p>
      </Container>
      <Container>
        <ConnectButtons
          isIconColored
          data={accounts.map(account => ({ ...account, link: `//${account.link}` }))} />
      </Container>
    </Page.Section>
  )
}

// Export
export default SocialAccounts
