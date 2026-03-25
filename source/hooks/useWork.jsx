// Modules
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Hooks
import useTheme from '@source/hooks/useTheme'

// Helpers
import { calculateColorExtremity } from '@source/helpers/system'

// Utilities
import { rgbColor, slug } from '@source/utilities/format'

// Data
import works from '@source/data/works'

// Constants
import { FULL_FEATURED_WORKS, WORK_CATEGORIES } from '@source/constants/content'

// Constants (Local)
const CATEGORIES = WORK_CATEGORIES.map((category, categoryIndex) => ({ id: slug(category), isDefault: categoryIndex === 0, label: category }))
const DEFAULT_CATEGORY = CATEGORIES[0]

// Functions (Local)
function getCategory (identifier) {
  return CATEGORIES.find(category => category.id === identifier)
}
function getWorkOptions (list, identifier) {
  if (!list) return { current: null, next: null, previous: null }
  const currentWork = works.find(work => work.slug === identifier)
  const currentIndexInList = list.findIndex(item => item.slug === identifier) || 0
  const nextIndexInList = (currentIndexInList + 1) % list.length
  const previousIndexInList = (currentIndexInList - 1 + list.length) % list.length
  return {
    current: currentWork,
    next: list[nextIndexInList],
    previous: list[previousIndexInList]
  }
}

// Hook: Work
function useWork (identifier) {
  // State
  const [category, setCategory] = useState(getCategory(identifier) || DEFAULT_CATEGORY)

  // Data
  const navigate = useNavigate()
  const { current: theme } = useTheme()

  // Data (Memoized)
  const items = useMemo(() => {
    if (!category?.id) return works
    if (category.id === DEFAULT_CATEGORY.id) return works.filter(work => FULL_FEATURED_WORKS.includes(work.slug))
    return works.filter(work => work.tags.some(tag => slug(tag) === category.id))
  }, [category?.id])
  const { current, next, previous } = useMemo(() => getWorkOptions(items, identifier), [identifier, items])

  // Effects
  useEffect(() => {
    const requestedCategory = getCategory(identifier)
    if (identifier) {
      if (requestedCategory) setCategory(requestedCategory)
      else if (!current) navigate('/works', { replace: true })
    }
  }, [current, identifier, navigate])
  useEffect(() => {
    if (current) {
      const extremity = calculateColorExtremity(current.colors.primary)
      document.documentElement.setAttribute('data-extreme', extremity)
      if (extremity === theme) {
        document.documentElement.style.setProperty('--brand-original-color', rgbColor(current.colors.primary))
      } else document.documentElement.style.setProperty('--brand-color', rgbColor(current.colors.primary))
    }
    return () => {
      document.documentElement.removeAttribute('data-extreme')
      document.documentElement.style.removeProperty('--brand-color')
      document.documentElement.style.removeProperty('--brand-original-color')
    }
  }, [current, theme])

  // Response
  return { categories: CATEGORIES, category, current, items, next, previous }
}

// Export
export default useWork