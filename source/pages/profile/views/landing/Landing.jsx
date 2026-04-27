// Sections
import Experience from './sections/experience/Experience'
import Introduction from './sections/introduction/Introduction'
import Personality from './sections/personality/Personality'
import Promotion from '@source/sections/promotion/Promotion'
import Skills from './sections/skills/Skills'

// Components
import Meta from '@source/components/utility/meta/Meta'
import Page from '@source/components/layout/page/Page'

// Styles
import './Landing.scss'

// Page: Profile > Landing
function Landing () {
  // Render
  return (
    <Page.View name="landing">
      <Meta page="profile" />
      <Introduction />
      <Personality />
      <Skills />
      <Experience />
      <Promotion />
    </Page.View>
  )
}

// Export
export default Landing
