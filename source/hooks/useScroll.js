// Modules
import { useState, useEffect } from 'react'

// Data
const defaultScrollValue = {
  horizontal: 0,
  vertical: 0
}

// Hook: useScroll
function useScroll (ref) {
  // State
  const [scroll, setScroll] = useState(defaultScrollValue)

  // Effects
  useEffect(() => {
    const element = ref.current
    function handleScroll () {
      setScroll({
        horizontal: element?.scrollLeft || 0,
        vertical: element?.scrollTop || 0
      })
    }
    if (element) element.addEventListener('scroll', handleScroll)
    return () => {
      if (element) element.removeEventListener('scroll', handleScroll)
    }
  }, [ref])

  // Return
  return scroll
}

// Export
export default useScroll
