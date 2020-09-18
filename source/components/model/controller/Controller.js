// Modules
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

// Context
import ControllerContext from '~/context/Controller'

// Components
import Navigation from '~/components/model/navigation/Navigation'


// Hooks
import useScroll from '~/hooks/useScroll'
import useDimensions from '~/hooks/useDimensions'

// Utilities
import { getBaseFontSize } from '~/utilities/document'

// Constants
import { THEME_OPTIONS, COLOR_OPTIONS, PAGES_MENU_OPTIONS } from '~/constants/options'

// Style
import './Controller.less'

// Component: Model > Controller
function Controller (props) {
  // Data
  const pages = useParams()
  const scroll = useScroll()
  const dimensions = useDimensions()

  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState(props.defaultTheme)

  // Methods
  const toggleMenu = () => setIsMenuOpen(condition => !condition)
  const toggleTheme = () => setTheme(theme => THEME_OPTIONS.find(item => item !== theme))
  function getColor (page) {
    const pages = [...PAGES_MENU_OPTIONS]
    pages.shift()
    return pages.includes(page)
      ? COLOR_OPTIONS[pages.indexOf(page)]
      : COLOR_OPTIONS[COLOR_OPTIONS.length - 1]
  }

  // Effects
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.classList[isMenuOpen ? 'add' : 'remove']('stationary')
    }
  }, [isMenuOpen])
  useEffect(() => {
    if (props.defaultTheme) setTheme(props.defaultTheme)
  }, [props.defaultTheme])
  useEffect(() => {
    if (THEME_OPTIONS.includes(theme)) {
      if (document) document.documentElement.className = theme
      if (localStorage) localStorage.setItem('theme', theme)
    }
  }, [theme])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
      if (window.location.hash) {
        const target = document.body.querySelector(`[data-section="${window.location.hash.substring(1)}"]`)
        if (target) {
          // Timeout prevents the jumpy feeling
          const timer = setTimeout(() => {
            document.body.scrollTo({
              top: target.offsetTop - 3.5 * getBaseFontSize(), // Navigation height is 3.5rem
              behavior: 'smooth'
            })
            window.history.replaceState(
              null,
              null,
              window.location.href.split('#')[0]
            )
          }, 500)
          return () => clearTimeout(timer)
        }
      }
    }
  }, [pages])

  // Render
  return (
    <ControllerContext.Provider value={{ pages, scroll, dimensions, theme }}>
      <div
        data-model="controller"
        data-color={getColor(pages.page)}
        className={isMenuOpen ? 'open' : null}>
        <Navigation
          page={pages.page}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          toggleTheme={toggleTheme} />
        {props.children}
      </div>
    </ControllerContext.Provider>
  )
}

// Properties
Controller.propTypes = {
  children: PropTypes.node,
  defaultTheme: PropTypes.oneOf(THEME_OPTIONS)
}

// Export
export default Controller
