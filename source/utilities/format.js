// Get two-digit number
export const getTwoDigitNumber = integer =>
  ('0' + integer).slice(-2)

// Get slug
export const getSlug = text =>
  text
    .trim()
    .replace(/[\s\W-]+/g, '-')
    .toLowerCase()
