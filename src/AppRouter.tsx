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
import { Malpun } from "./views";

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
      <Route path="/auth/:path1?/:path2?" exact>
        <AuthRouters location={location} />
      </Route>
      <Route>
        <HomeNavbar />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/home/:path1?/:path2?" exact>
              <HomeRouters />
            </Route>
            <StateProtectedRoute path="/state/:path1?/:path2?" exact>
              <StateRouters />
            </StateProtectedRoute>
            <Route path="/malpun/:path1?/:path2?" exact>
              <Switch>
                <Route path="/malpun" exact component={Malpun.MalpunCover} />
                <Route
                  path="/malpun/welcome"
                  exact
                  component={Malpun.MalpunWelcome}
                />
                <Route
                  path="/malpun/simsalabim"
                  exact
                  component={Malpun.MalpunSimsalabim}
                />
                <Route
                  path="/malpun/form"
                  exact
                  component={Malpun.MalpunForm}
                />
                <Route
                  path="/malpun/number"
                  exact
                  component={Malpun.MalpunNumber}
                />
              </Switch>
            </Route>
            <Route>
              <div style={{ minHeight: "100vh", paddingBottom: "24rem" }}>
                <Switch>
                  <Route path="/" exact component={Beranda.Beranda} />
                  <Route path="/about-us" component={Beranda.AboutUs} />
                  <Route path="/faq" component={Beranda.FAQ} />
                  <Route path="/pusat-aset" component={Beranda.PusatAset} />
                  <Route render={() => <Redirect to="/" />} />
                </Switch>
                <HomeFooter />
              </div>
            </Route>
            <Route render={() => <Redirect to="/404" />} />
          </Switch>
        </AnimatePresence>
      </Route>
    </Switch>
  );
}
