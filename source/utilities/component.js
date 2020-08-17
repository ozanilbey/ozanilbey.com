// Constants
import { SIZING_ALTERNATIVES } from '~/constants/layout'

// Get final className of component
export const getClassName = (suffix, items) => {
  const classes = []
  for (const item in items) items[item] && classes.push(items[item] === true ? item : `${item}-${items[item]}`)
  if (suffix) classes.push(suffix)
  if (classes.length > 0) return classes.join(' ')
}

// Get values of a property at each breakpoint
export const getResponsiveData = (source, property, formatLabel) => {
  const list = {}
  SIZING_ALTERNATIVES.forEach(size => {
    let label = size === 'auto' ? property : `${property}-${size}`
    label = formatLabel ? formatLabel(label) : label
    list[label] = source[`${property}${size === 'auto' ? '' : size.toUpperCase()}`]
  })
  return list
}
