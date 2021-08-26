import React from "react";
import { Switch, Route, useLocation } from "react-router";
import SignIn from "../views/SignIn";

const Router = () => {
  const location = useLocation();
  return (
    <Switch location={location}>
      <Route path="/" component={SignIn} />
      <Route path="/sign_in" component={SignIn} />
    </Switch>
  );
};

export default Router;
