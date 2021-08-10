import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import * as Auth from ".././views/auth";
import { AnimatePresence } from "framer-motion";

export default function AuthRouters() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route path="/auth" exact component={Auth.LoginMhs} />
              <Route path="/auth/masuk" component={Auth.LoginMhs} />
              <Route path="/auth/daftar" component={Auth.RegisterMhs} />
              <Route path="/auth/panitia" exact component={Auth.LoginPanitia} />
              <Route path="/auth/panitia/masuk" component={Auth.LoginPanitia} />
              <Route
                path="/auth/panitia/daftar"
                component={Auth.RegisterPanitia}
              />
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
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}
