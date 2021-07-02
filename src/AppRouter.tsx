import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Auth from "./views/auth";
import * as Dashboards from "./views/dashboards";
import Home from "./views/Home";
import { AnimatePresence } from "framer-motion";

export default function AppRouter() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact component={Home} />
              <Route path="/masuk" exact component={Auth.Login} />
              <Route path="/daftar" exact component={Auth.RegisterMaba} />
              <Route
                path="/tambah-state"
                exact
                component={Dashboards.TambahState}
              />
              <Route
                path="/tambah-pic"
                exact
                component={Dashboards.TambahPIC}
              />
              <Route
                path="/edit-state"
                exact
                component={Dashboards.EditState}
              />
              <Route
                path="/daftar-state"
                exact
                component={Dashboards.DaftarState}
              />
              <Route
                path="/daftar-organisator"
                exact
                component={Dashboards.DaftarOrganisator}
              />
              <Route
                path="/daftar-pic"
                exact
                component={Dashboards.DaftarPIC}
              />
              <Route
                path="/state-detail"
                exact
                component={Dashboards.StateDetail}
              />
              <Route path="/" component={Home} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}
