// Modules
import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

// Context
import ControllerContext from '~/context/Controller'

// Components
import Navigation from '~/components/model/navigation/Navigation'
import Container from '~/components/layout/container/Container'
import Stack from '~/components/layout/stack/Stack'
import Link from '~/components/interface/link/Link'
import Icon from '~/components/interface/icon/Icon'


// Hooks
import useScroll from '~/hooks/useScroll'
import useDimensions from '~/hooks/useDimensions'

// Utilities
import { getBaseFontSize } from '~/utilities/document'

// Constants
import { THEME_OPTIONS, COLOR_OPTIONS, NAVIGATION_MENU_OPTIONS } from '~/constants/options'

// Style
import './Controller.less'

// Component: Model > Controller
function Controller (props) {
  // References
  const screen = useRef()

  // Data
  const pages = useParams()
  const scroll = useScroll(screen)
  const dimensions = useDimensions(screen)

  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState(props.defaultTheme)

  // Methods
  const toggleMenu = () => setIsMenuOpen(condition => !condition)
  const toggleTheme = () => setTheme(theme => THEME_OPTIONS.find(item => item !== theme))
  function getColor (page) {
    const pages = [...NAVIGATION_MENU_OPTIONS]
    pages.shift()
    return pages.includes(page)
      ? COLOR_OPTIONS[pages.indexOf(page)]
      : COLOR_OPTIONS[COLOR_OPTIONS.length - 1]
  }

  // Effects
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
    screen.current.scrollTo(0, 0)
    if (typeof window !== 'undefined' && window.location.hash) {
      const target = screen.current.querySelector(`[data-section="${window.location.hash.substring(1)}"]`)
      if (target) {
        // Timeout prevents the jumpy feeling
        const timer = setTimeout(() => {
          screen.current.scrollTo({
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
  }, [pages])

  // Render
  return (
    <ControllerContext.Provider value={{ pages, scroll, dimensions, theme }}>
      <div
        data-model="controller"
        data-color={getColor(pages.page)}
        className={isMenuOpen ? 'open' : null}>
        <div
          ref={screen}
          className="screen">
          <Navigation
            page={pages.page}
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            toggleTheme={toggleTheme} />
          {props.children}
        </div>
        <nav className="menu">
          <Container>
            <Stack
              willWrap
              vertical="middle">
              <Stack.Item
                sizeS={12}
                sizeM={9}>
                <ul className="pages">
                  {NAVIGATION_MENU_OPTIONS.map(option =>
                    <li key={option}>
                      <Link
                        to={`/${option === 'home' ? '' : option}`}
                        className={`${option} item`}
                        activeClassName="active"
                        onClick={() => setIsMenuOpen(false)}>
                        {option}
                      </Link>
                    </li>
                  )}
                </ul>
              </Stack.Item>
              <Stack.Item
                sizeS={12}
                sizeM={3}>
                <ul className="social">
                  <li>
                    <Link
                      type="external"
                      href="//github.com/ozanilbey">
                      <Icon name="github" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      type="external"
                      href="//twitter.com/ozanilbey">
                      <Icon name="twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      type="external"
                      href="//linkedin.com/in/ozanilbey">
                      <Icon name="linkedin" />
                    </Link>
                  </li>
                </ul>
              </Stack.Item>
            </Stack>
          </Container>
        </nav>
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
