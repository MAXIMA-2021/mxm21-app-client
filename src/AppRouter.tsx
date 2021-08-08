import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Beranda from "./views/beranda";
import * as Home from "./views/home";
import * as Auth from "./views/auth";

import {
  AuthRouters,
  AdminRouters,
  HomeRouters,
  StateRouters,
} from "./routers";
import { AnimatePresence } from "framer-motion";
import { DashboardNavigation } from "./shared/component/DashboardNavigation";
import { DashboardFooter } from "./shared/component/DashboardFooter";
import { HomeNavbar } from "./shared/component/HomeNavbar";
import { HomeFooter } from "./shared/component/HomeFooter";
import { DashboardProtectedRoute } from "./routers/DashboardProtectedRoute";
import { StateProtectedRoute } from "./routers/StateProtectedRoute";
import { ErrorPage } from "./views/error";

export default function AppRouter() {
  return (
    <Switch>
      <Router>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route path="/auth/:path1?/:path2?">
                  <div style={{ minHeight: "100vh", paddingBottom: "24rem" }}>
                    <HomeNavbar />
                    <Switch>
                      <AuthRouters />
                    </Switch>
                    <HomeFooter />
                  </div>
                </Route>
                <DashboardProtectedRoute
                  path="/admin/:path1?/:path2?/:path3?"
                  exact
                >
                  <Switch>
                    <div
                      style={{
                        minHeight: "100vh",
                        background: "#f4f4f4",
                        paddingBottom: "2rem",
                      }}
                    >
                      <DashboardNavigation
                        name={window.sessionStorage?.getItem("name") || ""}
                      />
                      <DashboardFooter />
                    </div>
                  </Switch>
                </DashboardProtectedRoute>
                <Route path="/home/:path1?/:path2?" exact>
                  <HomeNavbar />
                  <Switch>
                    <HomeRouters />
                  </Switch>
                </Route>
                <StateProtectedRoute path="/state/:path1?/:path2?" exact>
                  <HomeNavbar />
                  <Switch>
                    <StateRouters />
                  </Switch>
                </StateProtectedRoute>
                <Route>
                  <div style={{ minHeight: "100vh", paddingBottom: "37.5rem" }}>
                    <HomeNavbar />
                    <Switch>
                      <Route path="/" exact component={Beranda.Beranda} />
                      <Route path="/about-us" component={Beranda.AboutUs} />
                      <Route path="/faq" component={Beranda.FAQ} />
                      <Route component={ErrorPage} />
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
