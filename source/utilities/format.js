// Utility: Format > Two-digit number
function twoDigitNumber (integer) {
  return ('0' + integer).slice(-2)
}

// Utility: Format > Slug
function slug (text) {
  return text
    .trim()
    .replace(/[\s\W-]+/g, '-')
    .toLowerCase()
}

// Utility: Format > RGB color
function rgbColor (array) {
  return `rgb(${array.join(', ')})`
}

// Utility: Format > RGBA color
function rgbaColor (array) {
  return `rgba(${array.join(', ')})`
}

// Utility: Format > Uppercase first
function uppercaseFirst (text) {
  return text.charAt(0).toUpperCase() + text.substring(1)
}

// Export
export {
  twoDigitNumber,
  slug,
  rgbColor,
  rgbaColor,
  uppercaseFirst
}
