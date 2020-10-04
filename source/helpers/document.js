// Check if client
export const checkIfClient = () => typeof window !== 'undefined'

// Get base font size
export const getBaseFontSize = () => checkIfClient()
  ? parseFloat(window.getComputedStyle(document.documentElement, null).getPropertyValue('font-size'))
  : 15
