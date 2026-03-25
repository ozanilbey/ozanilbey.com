// Helper: Format > Check if URL
function checkIfURL (value, { isDomainBasedOnly = true } = {}) {
  if (!value) return false
  let url
  try {
    url = new URL(value)
  } catch {
    return false
  }
  const hasValidProtocol = url.protocol === 'http:' || url.protocol === 'https:'
  if (!isDomainBasedOnly) return hasValidProtocol
  const hasValidDomain = /\.[a-zA-Z]{1,}$/.test(url.hostname)
  return hasValidProtocol && hasValidDomain
}

// Export
export {
  checkIfURL
}
