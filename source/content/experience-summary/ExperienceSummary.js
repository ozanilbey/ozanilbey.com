// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Subcontent
import AnadoluUniversity from './items/education/AnadoluUniversity'
import MiddleEastTechnicalUniversity from './items/education/MiddleEastTechnicalUniversity'

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
