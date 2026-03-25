// Sections
import Introduction from './sections/introduction/Introduction'
import OpenSource from './sections/open-source/OpenSource'
import Portfolio from './sections/portfolio/Portfolio'
import Promotion from '@source/sections/promotion/Promotion'

// Components
import Page from '@source/components/layout/page/Page'

// Styles
import './Landing.scss'

// Page: Home > Landing
function Landing () {
  // Render
  return (
    <Page.View name="landing">
      <Introduction />
      <Portfolio />
      <OpenSource />
      <Promotion />
    </Page.View>
  )
}

// Export
export default Landing
