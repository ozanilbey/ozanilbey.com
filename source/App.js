// Modules
import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

// Pages
import Home from '~/pages/home/Home'
import Profile from '~/pages/profile/Profile'
import Works from '~/pages/works/Works'
import Contact from '~/pages/contact/Contact'
import Error from '~/pages/error/Error'

// Components
import Controller from '~/components/model/controller/Controller'

// Constants
import { THEME_OPTIONS } from '~/constants/options'
import { DEFAULT_THEME } from '~/constants/settings'

// Style
import '~/styles/index.less'

// Application
function App () {
  // State
  const [defaultTheme, setDefaultTheme] = useState(null)

  // Effects
  useEffect(() => {
    const getDefaultTheme = () => {
      let theme
      if (localStorage) theme = localStorage.getItem('theme')
      if (THEME_OPTIONS.includes(theme)) return theme
      else {
        if (window) {
          const otherTheme = THEME_OPTIONS.find(option => option !== DEFAULT_THEME)
          const isOtherThemePreferred = window.matchMedia(`(prefers-color-scheme: ${otherTheme})`).matches
          return isOtherThemePreferred ? otherTheme : DEFAULT_THEME
        } else return DEFAULT_THEME
      }
    }
    setDefaultTheme(getDefaultTheme() || DEFAULT_THEME)
  }, [])
  // Render
  return (
    <Route path="/:page?/:subpage?">
      <Controller defaultTheme={defaultTheme}>
        <Switch>
          {/* Home */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* Profile */}
          <Route path="/profile">
            <Profile />
          </Route>
          {/* Works */}
          <Route path="/works/:work?">
            <Works />
          </Route>
          {/* Contact */}
          <Route path="/contact">
            <Contact />
          </Route>
          {/* Error */}
          <Route>
            <Error />
          </Route>
        </Switch>
      </Controller>
    </Route>
  )
}

// Export
export default App
