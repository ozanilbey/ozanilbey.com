// Get work title
export const getWorkTitle = ({ type, brand, label, output, attribute }) => {
  let title
  if (type === 'collection') title = `Collection: ${attribute}`
  else {
    title = brand
    if (label) title += `: ${label}`
    else {
      if (output) title += ` ${output}`
      if (attribute) title += ` (${attribute})`
    }
  }
  return title
}
export const getMonthYear = ({ year, month }) => {
  return `${new Date(new Date().setMonth(month - 1)).toLocaleString('default', { month: 'long' })} ${year}`
}
export const sortMonthYearByDate = (x, y) => {
  return (y.start.year * 100 + y.start.month) - (x.start.year * 100 + x.start.month)
}
export const getMonthYearRange = ({ start, end }) => {
  return `${getMonthYear(start)} — ${end ? getMonthYear(end) : 'Present'}`
}
