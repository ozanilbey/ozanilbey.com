// Modules
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Pages
import Home from '~/pages/home/Home'
import Error from '~/pages/error/Error'
import Works from '~/pages/works/Works'

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
      {/* Works */}
      <Route path="/works/:work?">
        <Works />
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
