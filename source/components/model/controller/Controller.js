// Modules
import React, { useState, useRef, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

// Components
import Navigation from '~/components/model/navigation/Navigation'
import Container from '~/components/layout/container/Container'
import Stack from '~/components/layout/stack/Stack'

// Constants
import { THEME_OPTIONS, DEFAULT_THEME, NAVIGATION_MENU_OPTIONS } from '~/constants/settings'

// Style
import './Controller.less'

// Data
let defaultTheme
if (localStorage) defaultTheme = localStorage.getItem('theme')
if (!defaultTheme) defaultTheme = DEFAULT_THEME

// Component: Model > Controller
function Controller (props) {
  // Data
  const { page, subpage } = useParams()

  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState(props.defaultTheme)

  // Methods
  const toggleMenu = () => setIsMenuOpen(condition => !condition)
  const toggleTheme = () => setTheme(theme => THEME_OPTIONS.find(item => item !== theme))

  // Effects
  useEffect(() => {
    if (THEME_OPTIONS.includes(theme)) {
      if (document) document.documentElement.className = theme
      if (localStorage) localStorage.setItem('theme', theme)
    }
  }, [theme])

  // Render
  return (
    <div
      data-model="controller"
      className={isMenuOpen ? 'open' : null}>
      <div
        className="screen">
        <Navigation
          page={page}
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
              sizeM={2}
              offsetM={2}>
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
  )
}

// Properties
Controller.propTypes = {
  children: PropTypes.node,
  defaultTheme: PropTypes.oneOf(THEME_OPTIONS)
}

// Export
export default Controller
