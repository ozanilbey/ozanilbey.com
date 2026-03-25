// Modules
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

// Hook: Route
function useRoute () {
  // Data
  const { pathname } = useLocation()

  // Data (Memoized)
  const { identifier, page } = useMemo(() => {
    const pieces = pathname
      .split('/')
      .filter(Boolean)
    const page = pieces[0] || null
    const identifier = pieces[1] || null
    return { identifier, page }
  }, [pathname])

  // Response
  return { identifier, page }
}

// Export
export default useRoute
