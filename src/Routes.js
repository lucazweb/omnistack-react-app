import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

const Routes = () => (  
  <Router>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/register' component={Register} />
    </Switch>
  </Router>
);

export default Routes;
