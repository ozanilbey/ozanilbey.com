// Modules
import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

// Context
import ControllerContext from '~/context/Controller'

// Components
import Navigation from '~/components/model/navigation/Navigation'

// Content
import Colophon from '~/content/colophon/Colophon'

// Hooks
import useScroll from '~/hooks/useScroll'
import useDimensions from '~/hooks/useDimensions'

// Helpers
import { checkIfClient, getBaseFontSize } from '~/helpers/document'

// Utilities
import { slug } from '~/utilities/format'

// Constants
import { THEME_OPTIONS, COLOR_OPTIONS } from '~/constants/options'
import { WORK_FILTERS } from '~/constants/content'

// Style
import './Controller.less'

// Component: Model > Controller
function Controller (props) {
  // Data
  const pages = useParams()
  const scroll = useScroll()
  const dimensions = useDimensions()

  // References
  const controller = useRef()

  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState(props.settings?.theme)
  const [color, setColor] = useState(props.settings?.color)

  // Methods
  function toggleMenu () {
    setIsMenuOpen(condition => !condition)
  }
  function toggleTheme () {
    setTheme(theme => THEME_OPTIONS.find(item => item !== theme))
  }

  // Effects
  useEffect(() => {
    if (checkIfClient()) {
      document.body.classList[isMenuOpen ? 'add' : 'remove']('stationary')
    }
  }, [isMenuOpen])
  useEffect(() => {
    if (props.settings?.theme) setTheme(props.settings.theme)
    if (props.settings?.color) setColor(props.settings.color)
  }, [props.settings])
  useEffect(() => {
    if (THEME_OPTIONS.includes(theme)) {
      if (document) document.documentElement.className = theme
      if (localStorage) localStorage.setItem('theme', theme)
    }
    if (COLOR_OPTIONS.includes(color)) {
      if (localStorage) localStorage.setItem('color', color)
    }
  }, [theme, color])
  useEffect(() => {
    if (checkIfClient()) {
      const willPreventScroll = (
        // Prevent scroll after changing Works page filter
        pages.page === 'works' &&
        WORK_FILTERS.map(filter => slug(filter)).includes(pages.subpage)
      )
      if (!willPreventScroll) window.scrollTo(0, 0)
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
        ref={controller}
        data-model="controller"
        data-page={pages?.page || 'home'}
        data-subpage={pages?.subpage || null}
        data-color={color}
        className={isMenuOpen ? 'open' : null}>
        <Navigation
          page={pages.page}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          toggleTheme={toggleTheme} />
        {props.children}
        <Colophon
          color={color}
          updateColor={setColor} />
      </div>
    </ControllerContext.Provider>
  )
}

// Properties
Controller.propTypes = {
  children: PropTypes.node,
  settings: PropTypes.shape({
    theme: PropTypes.oneOf(THEME_OPTIONS),
    color: PropTypes.oneOf(COLOR_OPTIONS)
  })
}

// Export
export default Controller
