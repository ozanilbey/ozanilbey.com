// Helper: Document > Check if client
function checkIfClient () {
  return typeof window !== 'undefined'
}

// Helper: Document > Get base font size
function getBaseFontSize () {
  return checkIfClient()
    ? parseFloat(window.getComputedStyle(document.documentElement, null).getPropertyValue('font-size'))
    : 15
}

// Export
export {
  checkIfClient,
  getBaseFontSize
}
