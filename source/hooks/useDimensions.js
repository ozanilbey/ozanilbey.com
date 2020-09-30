// Modules
import { useState, useEffect } from 'react'

// Utilities
import { checkIfClient } from '~/utilities/document'

// Data
const defaultDimensionValues = {
  width: 0,
  height: 0
}

// Hook: useDimensions
function useDimensions () {
  // State
  const [dimensions, setDimensions] = useState(defaultDimensionValues)

  // Effects
  useEffect(() => {
    function handleDimensions () {
      if (typeof window !== 'undefined') {
        setDimensions({
          width: window?.innerWidth || 0,
          height: window?.innerHeight || 0
        })
      }
    }
    handleDimensions()
    if (checkIfClient()) window.addEventListener('resize', handleDimensions)
    return () => {
      if (checkIfClient()) window.removeEventListener('resize', handleDimensions)
    }
  }, [])

  // Return
  return dimensions
}

// Export
export default useDimensions
