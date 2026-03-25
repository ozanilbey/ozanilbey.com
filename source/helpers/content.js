// Constants
import { MEDIA_URL } from '@source/constants/environment'

// Helper: Content > Get month & year
function getMonthYear ({ year, month }) {
  return `${new Date(new Date().setMonth(month - 1)).toLocaleString('default', { month: 'long' })} ${year}`
}

// Helper: Content > Get month & year range
function getMonthYearRange ({ start, end }) {
  return `${getMonthYear(start)} — ${end ? getMonthYear(end) : 'Present'}`
}

// Helper: Content > Get work preview image URL
function getWorkPreviewImageURL (identifier) {
  return `${MEDIA_URL}/v1/${identifier}/thumbnail.png`
}

// Helper: Content > Get work title
function getWorkTitle ({ type, brand, label, output, attribute }) {
  let title
  if (type === 'collection') title = `Collection: ${attribute || ''}`
  else {
    title = brand || ''
    if (label) title += `: ${label}`
    else {
      if (output) title += ` ${output}`
      if (attribute) title += ` (${attribute})`
    }
  }
  return title
}

// Helper: Content > Sort month & year by date
function sortMonthYearByDate (x, y) {
  return (y.start.year * 100 + y.start.month) - (x.start.year * 100 + x.start.month)
}

// Export
export {
  getMonthYear,
  getMonthYearRange,
  getWorkPreviewImageURL,
  getWorkTitle,
  sortMonthYearByDate
}
