// Modules
import React, { useState, useEffect } from 'react'

// Content
import Fihrist from '~/content/work/Fihrist'

// Helper
function renderWorkSummary (slug) {
  switch (slug) {
    case 'fihrist':
      return <Fihrist />
    default:
      return null
  }
}

// Hook: useWorkSummary
function useWorkSummary (slug) {
  // State
  const [summary, setSummary] = useState(null)

  // Effect
  useEffect(() => {
    setSummary(
      renderWorkSummary(slug)
    )
  }, [slug])

  return summary
}

// Export
export default useWorkSummary
