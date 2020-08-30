import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ChangePassword from './pages/ChangePassword';
import Profile from './pages/Profile';
import LoanRequest from './pages/LoanRequest';
import MyLoans from './pages/MyLoans';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={SignUp} />

      <Route path="/change-password" component={ChangePassword} />
      <Route path="/profile" component={Profile} />
      <Route path="/loan-request" component={LoanRequest} />
      <Route path="/my-loans" component={MyLoans} />
    </Switch>
  );
};

export default Routes;
