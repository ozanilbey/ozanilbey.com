// Modules
import React from 'react'

// Components
import Page from '~/components/layout/page/Page'

// Content
import Meta from '~/content/meta/Meta'

// Subcontent
import Introduction from './content/introduction/Introduction'
import Personality from './content/personality/Personality'
import ProfessionalSkills from './content/professional-skills/ProfessionalSkills'
import Employment from './content/employment/Employment'
import Education from './content/education/Education'

// Style
import './Profile.less'

// Page: Profile
function Profile () {
  // Render
  return (
    <Page name="profile">
      <Meta page="profile" />
      <Introduction />
      <Personality />
      <ProfessionalSkills />
      <Employment />
      <Education />
    </Page>
  )
}

// Export
export default Profile
