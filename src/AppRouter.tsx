import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Auth from "./views/auth";
import Home from "./views/Home";
import * as Dashboard from "./views/dashboards/";
import { AnimatePresence } from "framer-motion";

export default function AppRouter() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route
                path="/tambah-state"
                exact
                component={Dashboard.TambahState}
              />
              <Route path="/tambah-pic" exact component={Dashboard.TambahPIC} />
              <Route path="/edit-state" exact component={Dashboard.EditState} />
              <Route path="/" exact component={Home} />
              <Route path="/masuk" exact component={Auth.Login} />
              <Route path="/daftar" exact component={Auth.RegisterMaba} />
              <Route path="/" component={Home} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}
