import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Auth from "../views/auth";
import * as Dashboards from "../views/dashboards";
import { Home } from "../views";
import { DashboardNavigation } from "../shared/component/DashboardNavigation";
import { DashboardFooter } from "../shared/component/DashboardFooter";
import { AnimatePresence } from "framer-motion";
import { Container } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";

export default function AdminRouters(show: boolean) {
  const [isSmallerThan450px] = useMediaQuery("(max-width: 28.125em)");

  return (
    <div>
      <Router>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route path="/" exact component={Home} />
                <Route path="/masuk" exact component={Auth.Login} />
                <Route path="/daftar" exact component={Auth.RegisterMaba} />
                <Flex
                  height={{
                    base: "100vh",
                    sm: "100vh",
                    md: "92vh",
                    lg: "92vh",
                    xl: "92vh",
                  }}
                  width={
                    isSmallerThan450px
                      ? show
                        ? "100vw"
                        : "100vw"
                      : show
                      ? "79vw"
                      : "100vw"
                  }
                  alignItems="center"
                  justifyContent="center"
                >
                  <Route
                    path="/admin/tambah-state"
                    exact
                    component={Dashboards.TambahState}
                  />
                  <Route
                    path="/admin/tambah-pic"
                    exact
                    component={Dashboards.TambahPIC}
                  />
                  <Route
                    path="/admin/edit-state"
                    exact
                    component={Dashboards.EditState}
                  />
                  <Route
                    path="/admin/daftar-state"
                    exact
                    component={Dashboards.DaftarState}
                  />
                  <Route
                    path="/admin/daftar-organisator"
                    exact
                    component={Dashboards.DaftarOrganisator}
                  />
                  <Route
                    path="/admin/daftar-pic"
                    exact
                    component={Dashboards.DaftarPIC}
                  />
                  <Route
                    path="/admin/state-detail"
                    exact
                    component={Dashboards.StateDetail}
                  />
                </Flex>
                <Route path="/" component={Home} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </div>
  );
}
