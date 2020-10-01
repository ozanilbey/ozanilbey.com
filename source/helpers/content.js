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
