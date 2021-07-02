import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Auth from "./views/auth";
import Home from "./views/Home";
import * as Dashboards from "./views/dashboards/";
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

              {/* TEST ROUTE */}
              <Route
                path="/daftarOrganisator"
                exact
                component={Dashboards.DaftarOrganisator}
              />
              <Route path="/daftarPic" exact component={Dashboards.DaftarPIC} />

              <Route path="/" component={Home} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}
