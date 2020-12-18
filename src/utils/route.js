import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mapStateToProps = ({ session: { userId} }) => ({
  loggedIn: Boolean(userId)
});

// Auth routes such as /user/login & /user/register
const Auth = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ?
      <Redirect to='/user/dashboard' /> :
      <Component {...props} />
    )}
  />
);

// Protected routes such as /user/dashboard
const Protected = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ?
      <Component {...props} /> :
      <Redirect to='/user/login' />
    )}
  />
);

export const AuthRoute = withRouter(
  connect(mapStateToProps)(Auth)
);
export const ProtectedRoute = withRouter(
  connect(mapStateToProps)(Protected)
);