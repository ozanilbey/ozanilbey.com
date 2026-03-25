// Modules
import { useEffect, useMemo, useState } from 'react'

// Constants (Local)
const DEVICE_MINIMUM_SIZES = {
  mobile: 0,
  tablet: 768,
  desktop: 1024
}

// Hook: Dimensions
function useDimensions () {
  // State
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 })

  // Data (Memoized)
  const isMobile = useMemo(() => dimensions.width >= DEVICE_MINIMUM_SIZES.mobile && dimensions.width < DEVICE_MINIMUM_SIZES.tablet, [dimensions.width])
  const isTablet = useMemo(() => dimensions.width >= DEVICE_MINIMUM_SIZES.tablet && dimensions.width < DEVICE_MINIMUM_SIZES.desktop, [dimensions.width])
  const isDesktop = useMemo(() => dimensions.width >= DEVICE_MINIMUM_SIZES.desktop, [dimensions.width])

  // Effects
  useEffect(() => {
    function handleDimensions () {
      setDimensions({
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth
      })
    }
    handleDimensions()
    window.addEventListener('resize', handleDimensions)
    return () => window.removeEventListener('resize', handleDimensions)
  }, [])

  // Response
  return {
    height: dimensions.height,
    isDesktop,
    isMobile,
    isTablet,
    width: dimensions.width
  }
}

// Export
export default useDimensions
