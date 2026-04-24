// Modules
import { useMemo } from 'react'

// Hooks
import useDimensions from '@source/hooks/useDimensions'
import useDocument from '@source/hooks/useDocument'
import useScroll from '@source/hooks/useScroll'

// Helpers
import { checkIfClient } from '@source/helpers/document'

// Functions (Local)
function calculateFadeLimit () {
  let navigationHeight = 100
  if (checkIfClient()) navigationHeight = document.getElementById('navigation')?.offsetHeight || navigationHeight
  return 1.25 * navigationHeight
}
function getFadingStyles (element, limit) {
  if (!checkIfClient() || !element) return
  const { y: containerTopPosition, height: containerHeight } = element.parentElement.getBoundingClientRect()
  const factor = containerTopPosition <= limit
    ? Math.max(1 - (limit - containerTopPosition) / containerHeight, 0)
    : 1
  return { opacity: factor, transform: `translateY(${(1 - factor) * containerHeight}px) scale(${(1 - 1 / 10) + factor / 10})` }
}

// Hook: Fade
function useFade (element) {
  // Data
  const { width: windowWidth } = useDimensions()
  const { vertical: verticalScroll } = useScroll()
  const { isReady: isDocumentReady } = useDocument()

  // Data (Memoized)
  const limit = useMemo(() => calculateFadeLimit(), [isDocumentReady, windowWidth]) // Recalculates on layout change
  const styles = useMemo(() => getFadingStyles(element, limit), [element, limit, verticalScroll]) // Recalculates on related changes

  // Response
  return { styles }
}

// Export
export default useFade
