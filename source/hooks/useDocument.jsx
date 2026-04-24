// Modules
import { useEffect, useState } from 'react'

// Hook: Document
function useDocument () {
  // State
  const [isReady, setIsReady] = useState(false)

  // Effects
  useEffect(() => {
    function handleDocumentReadiness () {
      setIsReady(true)
    }
    if (document.readyState === 'complete') handleDocumentReadiness()
    window.addEventListener('load', handleDocumentReadiness, { once: true })
    return () => window.removeEventListener('load', handleDocumentReadiness)
  }, [])

  // Response
  return { isReady }
}

// Exports
export default useDocument
