// Modules
import React, { useState, useEffect, useLayoutEffect } from 'react'

// Utilities
import { checkIfClient } from '~/utilities/document'

// Content
import Fihrist from '~/content/summary/work/Fihrist'

// Utilities
import { rgbColor } from '~/utilities/format'

// Data
import works from '~/data/works'

// Helper
function renderWorkSummary (slug) {
  switch (slug) {
    case 'fihrist':
      return <Fihrist />
    default:
      return null
  }
}

// Hook: useWork
function useWork (slug) {
  // State
  const [work, setWork] = useState({})

  // Methods
  function checkColorExtremity (rgb) {
    const lightness = rgb.reduce((a, b) => a + b) / (255 * 3)
    if (lightness < 0.25) return 'dark'
    else if (lightness > 0.75) return 'light'
  }

  // Effects
  useEffect(() => {
    const meta = works.find(work => work.slug === slug)
    if (!meta) return
    setWork({
      meta,
      summary: renderWorkSummary(slug)
    })
  }, [slug])
  useLayoutEffect(() => {
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
      navigation = document.querySelector('[data-model="navigation"]')
      if (work.meta && controller && navigation) setColors(work.meta.colors)
    }
    return () => {
      if (controller && navigation) resetColors()
    }
  }, [work.meta])

  // Return
  return work
}

// Export
export default useWork
