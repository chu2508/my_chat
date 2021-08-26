import React, { ComponentType, lazy, Suspense } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router";
import SignIn from "../views/SignIn";

const SignUp = lazy(() => import("../views/SignUp"));

const withSuspense =
  (WrapComponent: ComponentType): ComponentType =>
  (props: any) => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <WrapComponent {...props} />
      </Suspense>
    );
  };

const Router = () => {
  const location = useLocation();
  return (
    <Switch location={location}>
      <Redirect exact path="/" to="/sign_in" />
      <Route path="/sign_in" component={SignIn} />
      <Route path="/sign_up" component={withSuspense(SignUp)} />
    </Switch>
  );
};

export default Router;
