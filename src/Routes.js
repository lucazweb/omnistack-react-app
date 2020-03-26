import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

const Routes = () => (  
  <Router>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/profile' component={Profile} />
    </Switch>
  </Router>
);

export default Routes;
