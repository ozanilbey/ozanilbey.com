// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Page from '~/components/layout/page/Page'

// Subcontent
import Brush from './items/Brush'
import Cardz from './items/Cardz'
import Favogue from './items/Favogue'
import Fihrist from './items/Fihrist'
import Piccture from './items/Piccture'

// Style
import './WorkSummary.less'

// Content: Work Summary (Type)
function WorkSummary (props) {
  // Methods
  function renderSummary () {
    switch (props.identifier) {
      case 'brush':
        return <Brush />
      case 'cardz':
        return <Cardz />
      case 'favogue':
        return <Favogue />
      case 'fihrist':
        return <Fihrist />
      case 'piccture':
        return <Piccture />
      default:
        return null
    }
  }

  // Render
  return (
    <Page.Section
      name="work-summary"
      data-content="work-summary">
      {renderSummary()}
    </Page.Section>
  )
}

// Properties
WorkSummary.propTypes = {
  identifier: PropTypes.string
}

// Export
export default WorkSummary
