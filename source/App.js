// Modules
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Pages
import Home from '~/pages/home/Home'
import Error from '~/pages/error/Error'
import Features from '~/pages/features/Features'

// Style
import '~/styles/index.less'

// Application
function App () {
  // Render
  return (
    <Switch>
      {/* Home */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* Features */}
      <Route path="/features/:feature?">
        <Features />
      </Route>
      {/* Error */}
      <Route>
        <Error />
      </Route>
    </Switch>
  )
}

// Export
export default App
