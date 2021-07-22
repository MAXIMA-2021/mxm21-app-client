import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Auth from "./views/auth";
import * as Dashboards from "./views/dashboards";
import * as Beranda from "./views/beranda";
import * as Home from "./views/home";

import { AuthRouters, AdminRouters, HomeRouters } from "./routers";
import { AnimatePresence } from "framer-motion";
import { DashboardNavigation } from "./shared/component/DashboardNavigation";
import { DashboardFooter } from "./shared/component/DashboardFooter";
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
                <Route
                  path="/home/category"
                  exact
                  component={Home.HomeCategory}
                />
                <Route
                  path="/home/welcome"
                  exact
                  component={Home.HomeWelcome}
                />
                <Route path="/home/finish" exact component={Home.HomeFinish} />
                <Route
                  path="/home/detail"
                  exact
                  component={Home.HomeOrganisatorDetail}
                />
                <Route path="/auth/:path1?/:path2?">
                  <div style={{ minHeight: "100vh", paddingBottom: "24rem" }}>
                    <HomeNavbar />
                    <Switch>
                      <AuthRouters />
                    </Switch>
                    <HomeFooter />
                  </div>
                </Route>
                <Route path="/admin/:path1?/:path2?/:path3?" exact>
                  <Switch>
                    <div style={{ minHeight: "100vh", paddingBottom: "1rem" }}>
                      <DashboardNavigation />
                      <DashboardFooter />
                    </div>
                  </Switch>
                </Route>
                <Route path="/home/:path1?" exact>
                  <Switch>
                    <HomeRouters />
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
