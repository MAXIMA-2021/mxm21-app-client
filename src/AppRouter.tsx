import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Auth from "./views/auth";
import * as Dashboards from "./views/dashboards";
import {Home} from "./views";
import { AdminRouters } from './routers';
import { AnimatePresence } from "framer-motion";
import { DashboardNavigation } from "./shared/component/DashboardNavigation";

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
              <Route path="/admin/:path1?/:path2?/:path3?" exact>
                <Switch>
                  <DashboardNavigation/>
                </Switch>
              </Route>
              <Route path="/" component={Home} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}
