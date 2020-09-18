// Modules
import { useState, useEffect } from 'react'

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
      if (typeof window !== 'undefined') {
        setScroll({
          horizontal: window.scrollX || 0,
          vertical: window.scrollY || 0
        })
      }
    }
    if (typeof window !== 'undefined') window.addEventListener('scroll', handleScroll)
    return () => {
      if (typeof window !== 'undefined') window.removeEventListener('scroll', handleScroll)
    }
  })

  // Return
  return scroll
}

// Export
export default useScroll
