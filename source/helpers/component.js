// Helper: Component > Get attributes
function getAttributes (properties, list) {
  const attributes = {}
  Object.keys(properties).forEach(property => {
    if (
      property && properties[property] !== undefined && properties[property] !== null &&
      list.includes(property.split('-')[0])
    ) attributes[property] = properties[property]
  })
  return attributes
}

// Helper: Component > Get class name
function getClassName (suffix, items) {
  const classes = []
  for (const item in items) {
    if (items[item]) classes.push(items[item] === true ? item : `${item}-${items[item]}`)
  }
  if (suffix) classes.push(suffix)
  if (classes.length > 0) return classes.join(' ')
}

// Export
export {
  getAttributes,
  getClassName
}
