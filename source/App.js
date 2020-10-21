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

// Helpers
import { checkIfClient } from '~/helpers/document'

// Constants
import { THEME_OPTIONS, COLOR_OPTIONS } from '~/constants/options'
import { DEFAULT_THEME, DEFAULT_COLOR } from '~/constants/settings'

// Style
import '~/styles/index.less'

// Application
function App () {
  // State
  const [defaultSettings, setDefaultSettings] = useState(null)

  // Effects
  useEffect(() => {
    let theme
    if (localStorage) theme = localStorage.getItem('theme')
    if (!THEME_OPTIONS.includes(theme)) {
      theme = DEFAULT_THEME
      /* Removed option to select theme based on preferred system theme
      if (checkIfClient()) {
        const otherTheme = THEME_OPTIONS.find(option => option !== DEFAULT_THEME)
        const isOtherThemePreferred = window.matchMedia(`(prefers-color-scheme: ${otherTheme})`).matches
        theme = isOtherThemePreferred ? otherTheme : DEFAULT_THEME
      } else { theme = DEFAULT_THEME }
      */
    }
    let color
    if (localStorage) color = localStorage.getItem('color')
    color = COLOR_OPTIONS.includes(color) ? color : DEFAULT_COLOR
    setDefaultSettings({ theme, color })
  }, [])

  // Render
  return (
    <Route path="/:page?/:subpage?">
      <Controller settings={defaultSettings}>
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
          <Route path="/works/:workOrFilter?">
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
