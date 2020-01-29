import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CapesList from './capes/CapesList'
import CapeShowContainer from './capes/CapeShowContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/superheroes" component={CapesList} />
        <Route exact path="/superheroes/:id" component={CapeShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
