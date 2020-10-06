// Modules
import React from 'react'

// Components
import Page from '~/components/layout/page/Page'

// Content
import Meta from '~/content/meta/Meta'

// Subcontent
import Welcome from './content/welcome/Welcome'
import Profile from './content/profile/Profile'
import Portfolio from './content/portfolio/Portfolio'
import OpenSource from './content/open-source/OpenSource'
import Contact from './content/contact/Contact'

// Style
import './Home.less'

// Page: Home
function Home () {
  // Render
  return (
    <Page name="home">
      <Meta page="home" />
      <Welcome />
      <Profile />
      <Portfolio />
      <OpenSource />
      <Contact />
    </Page>
  )
}

// Export
export default Home
