import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import FinishRegister from './pages/FinishRegister';

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Login } />
          <Route path="/register" exact component={ Register } />
          <Route path="/finish-register" exact component={ FinishRegister } />
        </Switch>
    </BrowserRouter>
  );
}
