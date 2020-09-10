// Format number to have two digits
export const twoDigitNumber = integer =>
  ('0' + integer).slice(-2)

// Format text to be slug
export const slug = text =>
  text
    .trim()
    .replace(/[\s\W-]+/g, '-')
    .toLowerCase()
