import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Auth from "./views/auth";
import * as Dashboards from "./views/dashboards";
import * as Beranda from "./views/beranda";
import { Home } from "./views";
import { AuthRouters, AdminRouters } from "./routers";
import { AnimatePresence } from "framer-motion";
import { DashboardNavigation } from "./shared/component/DashboardNavigation";
import { HomeNavbar } from "./shared/component/HomeNavbar";
import { HomeFooter } from "./shared/component/HomeFooter";

export default function AppRouter() {
  return (
    <Switch>
      <Router>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route path="/auth/:path1?">
                  <Switch>
                    <AuthRouters />
                  </Switch>
                </Route>
                <Route path="/admin/:path1?/:path2?/:path3?" exact>
                  <Switch>
                    <DashboardNavigation />
                  </Switch>
                </Route>
                <Route>
                  <div style={{ minHeight: "100vh", paddingBottom: "37.5rem" }}>
                    <HomeNavbar />
                    <Switch>
                      <Route
                        path="/about-us"
                        exact
                        component={Beranda.AboutUs}
                      />
                      <Route path="/faq" exact component={Beranda.FAQ} />
                      <Route path="/" component={Beranda.Beranda} />
                    </Switch>
                    <HomeFooter />
                  </div>
                </Route>
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </Switch>
  );
}
