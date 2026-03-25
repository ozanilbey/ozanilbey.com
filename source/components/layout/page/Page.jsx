// Modules
import { Children, cloneElement, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

// Components
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Panel from './components/panel/Panel'
import Section from './components/section/Section'
import View from './components/view/View'

// Hooks
import useRoute from '@source/hooks/useRoute'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './Page.scss'

// Component: Layout > Page
function Page ({ children, className, name, style, willPreventScroll = false, ...rest }) {
  // Data
  const navigate = useNavigate()
  const { hash } = useLocation()
  const { page, identifier } = useRoute()
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Functions
  function renderChildren (children) {
    return Children.map(children, child => {
      if (!child?.props) return child
      if (child.props?.isHidden) return null
      return cloneElement(child, child.props)
    })
  }

  // Effects
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
  }, [])
  useEffect(() => {
    if (!willPreventScroll) window.scrollTo(0, 0)
  }, [identifier, page, willPreventScroll])
  useEffect(() => {
    let timer
    if (hash) {
      const target = document.body.querySelector(`[data-section="${hash.substring(1)}"]`)
      if (target) {
        // Timeout prevents the jumpy feeling
        timer = setTimeout(() => {
          window.scrollTo({ behavior: 'smooth', top: target.offsetTop })
          navigate({ hash: '' }, { replace: true })
        }, 250)
      }
    }
    return () => clearTimeout(timer)
  }, [hash, navigate])

  // Render
  return (
    <main
      id="page"
      {...attributes}
      data-page={name}
      data-layout="page"
      className={className}
      style={style}>
      {renderChildren(children)}
    </main>
  )
}

// Properties
Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
  willPreventScroll: PropTypes.bool
}
Page.Footer = Footer
Page.Footer.displayName = 'Page.Footer'
Page.Header = Header
Page.Header.displayName = 'Page.Header'
Page.Panel = Panel
Page.Panel.displayName = 'Page.Panel'
Page.Section = Section
Page.Section.displayName = 'Page.Section'
Page.View = View
Page.View.displayName = 'Page.View'

// Export
export default Page
