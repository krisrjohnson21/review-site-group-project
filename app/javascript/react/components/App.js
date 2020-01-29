import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewCapeContainer from './capeform/NewCapeContainer';
import CapesList from './capes/CapesList';

export const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={CapesList} />
        <Route exact path='/superheroes' component={CapesList} />
        <Route exact path='/new' component={NewCapeContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
