import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import * as Beranda from "./views/beranda";
import { AuthRouters, HomeRouters, StateRouters } from "./routers";
import { AnimatePresence } from "framer-motion";
import { DashboardNavigation } from "./shared/component/DashboardNavigation";
import { DashboardFooter } from "./shared/component/DashboardFooter";
import { HomeNavbar } from "./shared/component/HomeNavbar";
import { HomeFooter } from "./shared/component/HomeFooter";
import { DashboardProtectedRoute } from "./routers/DashboardProtectedRoute";
import { StateProtectedRoute } from "./routers/StateProtectedRoute";
import { ErrorPage } from "./views/error";

export default function AppRouter() {
  const location = useLocation();
  return (
    <Switch>
      <DashboardProtectedRoute path="/admin/:path1?/:path2?/:path3?" exact>
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
      </DashboardProtectedRoute>
      <Route
        strict
        path="/auth/keluar"
        render={() => {
          window.sessionStorage.clear();
          return <Redirect to="/" />;
        }}
      />
      <Route path="/404" exact component={ErrorPage} />
      <Route>
        <HomeNavbar />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route path="/home/:path1?/:path2?" exact>
              <HomeRouters />
            </Route>
            <StateProtectedRoute path="/state/:path1?/:path2?" exact>
              <StateRouters />
            </StateProtectedRoute>
            <Route path="/auth/:path1?/:path2?" exact>
              <div>
                <AuthRouters />
                {/* <HomeFooter /> */}
              </div>
            </Route>
            <Route>
              <div style={{ minHeight: "100vh", paddingBottom: "37.5rem" }}>
                <Switch>
                  <Route path="/" exact component={Beranda.Beranda} />
                  <Route path="/about-us" component={Beranda.AboutUs} />
                  <Route path="/faq" component={Beranda.FAQ} />
                  <Route render={() => <Redirect to="/404" />} />
                </Switch>
                <HomeFooter />
              </div>
            </Route>
          </Switch>
        </AnimatePresence>
      </Route>
    </Switch>
  );
}
