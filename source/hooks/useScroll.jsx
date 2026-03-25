// Modules
import { useEffect, useMemo, useState } from 'react'

// Helpers
import { checkIfClient } from '@source/helpers/document'

// Hook: Scroll
function useScroll (container) {
  // Data (Memoized)
  const scrollContainer = useMemo(() => container || (checkIfClient() ? window : null), [container])

  // State
  const [scrollAmounts, setScrollAmounts] = useState({ horizontal: scrollContainer?.scrollX || null, vertical: scrollContainer?.scrollY || null })

  // Data
  const isScrolledHorizontally = scrollAmounts?.horizontal > 0
  const isScrolledVertically = scrollAmounts?.vertical > 0
  const isScrolled = isScrolledHorizontally || isScrolledVertically

  // Effects
  useEffect(() => {
    function handleScroll () {
      setScrollAmounts({ horizontal: scrollContainer?.scrollX || null, vertical: scrollContainer?.scrollY || null })
    }
    handleScroll()
    scrollContainer?.addEventListener('scroll', handleScroll)
    return () => scrollContainer?.removeEventListener('scroll', handleScroll)
  }, [scrollContainer])

  // Response
  return {
    horizontal: scrollAmounts?.horizontal,
    isScrolled,
    isScrolledHorizontally,
    isScrolledVertically,
    vertical: scrollAmounts?.vertical
  }
}

// Export
export default useScroll
