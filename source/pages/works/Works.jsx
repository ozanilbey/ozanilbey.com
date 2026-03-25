// Modules
import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

// Routes
import Routes from './routes/Main'

// Components
import Page from '@source/components/layout/page/Page'

// Hooks
import useWork from '@source/hooks/useWork'

// Styles
import './Works.scss'

// Page: Works
function Works () {
  const memorizedScrollPosition = useRef(0)

  // Data
  const { workOrCategory } = useParams()
  const data = useWork(workOrCategory)
  const { current: work } = data
  const isDisplayingWork = !!work?.slug

  // Effects
  useEffect(() => {
    function memorizeScrollPosition () {
      memorizedScrollPosition.current = window.scrollY
    }
    if (!isDisplayingWork) {
      document.addEventListener('scroll', memorizeScrollPosition)
      setTimeout(() => window.scrollTo(0, memorizedScrollPosition.current), 0) // Timeout prevents rendering issues
    }
    return () => document.removeEventListener('scroll', memorizeScrollPosition)
  }, [isDisplayingWork])

  // Render
  return (
    <Page
      name="works"
      willPreventScroll={!isDisplayingWork}>
      <Routes {...data} />
    </Page>
  )
}

// Export
export default Works
