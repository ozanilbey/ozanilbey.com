// Modules
import { useEffect, useReducer } from 'react'

// Routes
import Page from '@source/routes/Main'

// Components
import Navigation from '@source/components/layout/navigation/Navigation'
import Colophon from '@source/components/layout/colophon/Colophon'

// Context
import Data from '@source/context/Data'
import Dispatch from '@source/context/Dispatch'

// Reducers
import reducer from '@source/reducers'
import { COLOR_ACTIONS } from '@source/reducers/color'
import { THEME_ACTIONS } from '@source/reducers/theme'

// Helpers
import { getColor, getTheme } from '@source/helpers/system'

// Constants
import { DEFAULT_COLOR, DEFAULT_THEME } from '@source/constants/settings'

// Styles
import '@source/styles/index.scss'

// Constants (Local)
const DEFAULT_INITIAL_STATE = Object.freeze({
  color: DEFAULT_COLOR,
  menu: { isActive: false },
  theme: DEFAULT_THEME
})

// Functions (Local)
function handleApplicationReadiness () {
  document.documentElement.setAttribute('data-application-ready', '')
}
function handleColorChange (color) {
  document.documentElement.setAttribute('data-color', color)
  localStorage.setItem('color', color)
}
function handleMenuChange (isActive) {
  if (isActive) document.documentElement.setAttribute('data-menu-active', '')
  else document.documentElement.removeAttribute('data-menu-active')
}
function handleThemeChange (theme) {
  document.documentElement.setAttribute('data-theme', theme)
  document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', theme)
  localStorage.setItem('theme', theme)
}

// Application
function Application () {
  // State
  const [state, dispatch] = useReducer(reducer, DEFAULT_INITIAL_STATE)

  // Effects
  useEffect(() => {
    const color = getColor()
    const theme = getTheme()
    handleColorChange(color)
    handleThemeChange(theme)
    dispatch({ payload: color, type: COLOR_ACTIONS.SET })
    dispatch({ payload: theme, type: THEME_ACTIONS.SET })
  }, [])
  useEffect(() => handleThemeChange(state.theme), [state.theme])
  useEffect(() => handleColorChange(state.color), [state.color])
  useEffect(() => handleMenuChange(state.menu.isActive), [state.menu.isActive])
  useEffect(() => {
    setTimeout(() => handleApplicationReadiness(), 500) // Prevents premature transition
  }, [])

  // Render
  return (
    <Dispatch.Provider value={dispatch}>
      <Data.Provider value={state}>
        <Navigation />
        <Page />
        <Colophon />
      </Data.Provider>
    </Dispatch.Provider>
  )
}

// Export
export default Application
