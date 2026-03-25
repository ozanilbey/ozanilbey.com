// Modules
import PropTypes from 'prop-types'

// Components
import Callout from '@source/components/interface/callout/Callout'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './Notice.scss'

// Constants (Local)
const LATEST_UPDATE_YEAR = 2020

// Functions (Local)
function getNotice () {
  const yearsSinceUpdate = new Date().getFullYear() - LATEST_UPDATE_YEAR
  const outdatedWorkNotice = `This portfolio was last updated about ${yearsSinceUpdate} ${yearsSinceUpdate === 1 ? 'year' : 'years'} ago and it captures snapshots from an earlier phase of my work.`
  const priviligedWorkNotice = 'Most of my projects aren’t included here because they aren’t public or haven’t been released yet.'
  if (yearsSinceUpdate < 2) return priviligedWorkNotice
  return `${outdatedWorkNotice} Additionally, ${priviligedWorkNotice.toLowerCase()}`
}

// Component: Content > Showcase > Notice
function Notice ({ className, style, ...rest }) {
  // Data
  const notice = getNotice()
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  if (!notice) return null
  return (
    <div
      {...attributes}
      className={className}
      data-component="notice"
      style={style}>
      <Callout
        size="small"
        intent="warning"
        className="notice"
        description={notice} />
    </div>
  )
}

// Properties
Notice.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

// Export
export default Notice
