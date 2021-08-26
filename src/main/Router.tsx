import React from "react";
import { Switch, Route, useLocation, Redirect } from "react-router";
import SignIn from "../views/SignIn";

const Router = () => {
  const location = useLocation();
  return (
    <Switch location={location}>
      <Redirect exact path="/" to="/sign_in"/>
      <Route path="/sign_in" component={SignIn} />
    </Switch>
  );
};

export default Router;
