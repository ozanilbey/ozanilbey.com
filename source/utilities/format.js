// Format number to have two digits
export const twoDigitNumber = integer =>
  ('0' + integer).slice(-2)

// Format text to be slug
export const slug = text =>
  text
    .trim()
    .replace(/[\s\W-]+/g, '-')
    .toLowerCase()

// Format text to have uppercased first letter
export const upperCaseFirstLetter = text =>
  text.charAt(0).toUpperCase() + text.substring(1)

// Format array to be an RGB color string
export const rgbColor = array =>
  `rgb(${array.join(', ')})`
