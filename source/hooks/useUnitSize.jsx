// Modules
import { useEffect, useState } from 'react'

// Hook: Unit size
function useUnitSize (reference, formula) {
  // State
  const [unitSize, setUnitSize] = useState(0)

  // Effects
  useEffect(() => {
    function handleUnitSizeCalculation () {
      if (reference.current) {
        const { clientWidth = 0, clientHeight = 0 } = reference.current || {}
        setUnitSize(formula(clientWidth, clientHeight))
      }
    }
    handleUnitSizeCalculation()
    window.addEventListener('resize', handleUnitSizeCalculation)
    return () => window.removeEventListener('resize', handleUnitSizeCalculation)
  }, [formula, reference])

  // Response
  return unitSize
}

// Exports
export default useUnitSize
