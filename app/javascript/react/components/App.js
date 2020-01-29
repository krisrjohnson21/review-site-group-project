import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CapesList from './capes/CapesList'
import CapeShow from './capes/CapeShow'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/superheroes" component={CapesList} />
        <Route exact path="/superheroes/:id" component={CapeShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
