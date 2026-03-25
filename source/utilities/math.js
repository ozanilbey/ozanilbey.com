// Utility: Math > Get two-point form equivalent
function getTwoPointFormEquivalent (x, x1, x2, y1, y2) {
  return (x - x1) / (x2 - x1) * (y2 - y1) + y1
}

// Export
export {
  getTwoPointFormEquivalent
}
