// Modules
import { useState, useEffect } from 'react'

// Helpers
import { checkIfClient } from '~/helpers/document'

// Hook: useUnitSize
function useUnitSize (ref, formula) {
  // State
  const [unitSize, setUnitSize] = useState(0)

  // Effects
  useEffect(() => {
    function handleResize () {
      if (ref.current) {
        const { clientWidth, clientHeight } = ref.current
        setUnitSize(formula(clientWidth, clientHeight))
      }
    }
    if (checkIfClient()) {
      handleResize()
      window.addEventListener('resize', handleResize)
    }
    return () => {
      if (checkIfClient()) window.removeEventListener('resize', handleResize)
    }
  }, [ref, formula])

  // Return
  return unitSize
}

// Export
export default useUnitSize
