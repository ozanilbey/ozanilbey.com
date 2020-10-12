// Modules
import { useState, useEffect } from 'react'

// Helpers
import { checkIfClient } from '~/helpers/document'

// Utilities
import { rgbColor } from '~/utilities/format'

// Data
import works from '~/data/works'

// Hook: useWork
function useWork (slug) {
  // Data
  const initialState = works.find(work => work.slug === slug)

  // State
  const [work, setWork] = useState(initialState)

  // Methods
  function checkColorExtremity (rgb) {
    const lightness = rgb.reduce((x, y) => x + y) / (255 * 3)
    if (lightness < 0.225) return 'dark'
    else if (lightness > 0.75) return 'light'
  }

  // Effects
  useEffect(() => {
    const data = works.find(work => work.slug === slug)
    setWork(data || null)
  }, [slug])
  useEffect(() => {
    let controller
    let navigation
    function setColors ({ primary, secondary }) {
      const extremity = checkColorExtremity(primary)
      if (extremity) controller.setAttribute('data-extreme', extremity)
      controller.style.setProperty('--primary-color', rgbColor(primary))
      navigation.style.setProperty('--ground-color', rgbColor(primary))
      navigation.style.setProperty('--figure-color', rgbColor(secondary))
    }
    function resetColors () {
      controller.removeAttribute('data-extreme')
      controller.style.removeProperty('--primary-color')
      navigation.style.removeProperty('--figure-color')
      navigation.style.removeProperty('--ground-color')
    }
    if (checkIfClient()) {
      controller = document.querySelector('[data-model="controller"]')
      navigation = document.querySelector('[data-model="navigation"] .base')

      if (work && controller && navigation) setColors(work.colors)
    }
    return () => {
      if (controller && navigation) resetColors()
    }
  }, [work])

  // Return
  return work
}

// Export
export default useWork
