import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewCapeContainer from './capeform/NewCapeContainer';
import CapeShowContainer from './capes/CapeShowContainer';
import CapesList from './capes/CapesList';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={CapesList} />
        <Route exact path='/superheroes' component={CapesList} />
        <Route exact path='/new' component={NewCapeContainer} />
        <Route exact path='/superheroes/:id' component={CapeShowContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
