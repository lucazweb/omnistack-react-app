import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

const Routes = () => (  
  <Router>
    <Switch>
      <Route patch='/' component={Login} />
    </Switch>
  </Router>
);

export default Routes;
