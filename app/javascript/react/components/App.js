import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CapesList from './capes/CapesList'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/superheroes" component={CapesList} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
