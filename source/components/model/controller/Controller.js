// Modules
import React, { useState, useRef, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

// Components
import Navigation from '~/components/model/navigation/Navigation'
import Container from '~/components/layout/container/Container'
import Stack from '~/components/layout/stack/Stack'

// Context
import ControllerContext from '~/context/Controller'

// Hooks
import useScroll from '~/hooks/useScroll'
import useDimensions from '~/hooks/useDimensions'

// Constants
import { THEME_OPTIONS, NAVIGATION_MENU_OPTIONS } from '~/constants/options'

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
  }, [pages])

  // Render
  return (
    <ControllerContext.Provider value={{ pages, scroll, dimensions, theme }}>
      <div
        data-model="controller"
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
                sizeM={8}>
                <ul>
                  {NAVIGATION_MENU_OPTIONS.map(option =>
                    <li key={option}>
                      <NavLink
                        to={`/${option === 'home' ? '' : option}`}
                        className={`${option} item`}
                        activeClassName="active"
                        onClick={() => setIsMenuOpen(false)}>
                        {option}
                      </NavLink>
                    </li>
                  )}
                </ul>
              </Stack.Item>
              <Stack.Item
                sizeS={12}
                sizeM={4}>
                <ul>
                  <li>
                    <a href="https://github.com/ozanilbey">GitHub</a>
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
