// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Subcontent
import AnadoluUniversity from './items/education/AnadoluUniversity'
import MiddleEastTechnicalUniversity from './items/education/MiddleEastTechnicalUniversity'
import DigitoyGames from './items/employment/DigitoyGames'
import DocuAI from './items/employment/DocuAI'
import FraktalProje from './items/employment/FraktalProje'
import Freelance from './items/employment/Freelance'
import Groups from './items/employment/Groups'
import LabrisNetworks from './items/employment/LabrisNetworks'
import Kodobur from './items/employment/Kodobur'
import Semantica from './items/employment/Semantica'

// Constants
import { EXPERIENCE_SUMMARY_TYPES } from '~/constants/content'

// Style
import './ExperienceSummary.less'

// Content: Experience Summary
function ExperienceSummary (props) {
  // Methods
  function renderSummary () {
    switch (props.type) {
      case 'education':
        return renderEducationSummary()
      case 'employment':
        return renderEmploymentSummary()
      default:
        return null
    }
  }
  function renderEducationSummary () {
    switch (props.identifier) {
      case 'anadolu-university':
        return <AnadoluUniversity />
      case 'middle-east-technical-university':
        return <MiddleEastTechnicalUniversity />
      default:
        return null
    }
  }
  function renderEmploymentSummary () {
    switch (props.identifier) {
      case 'digitoy-games':
        return <DigitoyGames />
      case 'docu-ai':
        return <DocuAI />
      case 'fraktal-proje':
        return <FraktalProje />
      case 'freelance':
        return <Freelance />
      case 'grou-ps':
        return <Groups />
      case 'kodobur':
        return <Kodobur />
      case 'labris-networks':
        return <LabrisNetworks />
      case 'semantica':
        return <Semantica />
      default:
        return null
    }
  }

  // Render
  return (
    <div
      data-content="experience-summary"
      data-experience-summary={props.identifier}>
      {renderSummary()}
    </div>
  )
}

// Properties
ExperienceSummary.propTypes = {
  type: PropTypes.oneOf(EXPERIENCE_SUMMARY_TYPES),
  identifier: PropTypes.string
}

// Export
export default ExperienceSummary
