// Modules
import { useState, useEffect } from 'react'

// Utilities
import { checkIfClient } from '~/utilities/document'

// Data
const defaultScrollValue = {
  horizontal: 0,
  vertical: 0
}

// Hook: useScroll
function useScroll () {
  // State
  const [scroll, setScroll] = useState(defaultScrollValue)

  // Effects
  useEffect(() => {
    function handleScroll () {
      setScroll({
        horizontal: window.scrollX || 0,
        vertical: window.scrollY || 0
      })
    }
    if (checkIfClient()) window.addEventListener('scroll', handleScroll)
    return () => {
      if (checkIfClient()) window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Return
  return scroll
}

// Export
export default useScroll
