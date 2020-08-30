import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ChangePassword from './pages/ChangePassword';
import Profile from './pages/Profile';
import LoanRequest from './pages/LoanRequest';
import MyLoans from './pages/MyLoans';

import AuthContext from './contexts/auth';

interface Props {
  isPrivate: boolean;
}

const CustomRoute: React.FC<Props & any> = ({ isPrivate, ...rest }) => {
  const { loading, signed } = useContext(AuthContext);

  if (loading) return <h1>Loading...</h1>;

  if (isPrivate && !signed) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
};

const Routes = () => {
  return (
    <Switch>
      <CustomRoute path="/" exact component={Home} />
      <CustomRoute path="/login" component={Login} />
      <CustomRoute path="/sign-up" component={SignUp} />

      <CustomRoute isPrivate path="/change-password" component={ChangePassword} />
      <CustomRoute isPrivate path="/profile" component={Profile} />
      <CustomRoute isPrivate path="/loan-request" component={LoanRequest} />
      <CustomRoute isPrivate path="/my-loans" component={MyLoans} />
    </Switch>
  );
};

export default Routes;
