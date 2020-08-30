// Modules
import { useState, useEffect } from 'react'

// Data
const defaultDimensionValues = {
  width: 0,
  height: 0
}

// Hook: useDimensions
function useDimensions (ref) {
  // State
  const [dimensions, setDimensions] = useState(defaultDimensionValues)

  // Effects
  useEffect(() => {
    const element = ref.current
    function handleDimensions () {
      setDimensions({
        width: element?.innerWidth || 0,
        height: element?.innerHeight || 0
      })
    }
    if (element) element.addEventListener('resize', handleDimensions)
    return () => {
      if (element) element.removeEventListener('resize', handleDimensions)
    }
  }, [ref])

  // Return
  return dimensions
}

// Export
export default useDimensions
