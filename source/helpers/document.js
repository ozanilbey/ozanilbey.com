// Get base font size
export const getBaseFontSize = () => window && document
  ? parseFloat(window.getComputedStyle(document.documentElement, null).getPropertyValue('font-size'))
  : 15

// Check if client
export const checkIfClient = () => typeof window !== 'undefined'
