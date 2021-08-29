import { AnimatePresence } from "framer-motion";
import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import * as Auth from ".././views/auth";

const AuthRouters = (props: any) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={props.location} key={props.location.pathname}>
        <Route path="/auth" exact component={Auth.LoginMhs} />
        <Route path="/auth/masuk" component={Auth.LoginMhs} />
        <Route path="/auth/daftar" component={Auth.RegisterMhs} />
        <Route path="/auth/panitia" exact component={Auth.LoginPanitia} />
        <Route path="/auth/panitia/masuk" component={Auth.LoginPanitia} />
        <Route path="/auth/panitia/daftar" component={Auth.RegisterPanitia} />
        <Route
          path="/auth/organisator"
          exact
          component={Auth.LoginOrganisator}
        />
        <Route
          path="/auth/organisator/masuk"
          component={Auth.LoginOrganisator}
        />
        <Route
          path="/auth/organisator/daftar"
          component={Auth.RegisterOrganisator}
        />
        <Route path="/auth/reset" component={Auth.ResetPassword} />
        <Route path="/auth/*" render={() => <Redirect to="/404" />} />
      </Switch>
    </AnimatePresence>
  );
};

export default AuthRouters;
