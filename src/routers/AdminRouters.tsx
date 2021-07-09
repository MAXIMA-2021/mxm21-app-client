import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Auth from "../views/auth";
import * as Dashboards from "../views/dashboards";
import { Home } from "../views";
import { DashboardNavigation } from "../shared/component/DashboardNavigation";
import { DashboardFooter } from "../shared/component/DashboardFooter";
import { AnimatePresence } from "framer-motion";
import { Container } from "@chakra-ui/react";
import { Flex, Spacer, Box } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";

export default function AdminRouters(show: boolean) {
  const [isSmallerThan450px] = useMediaQuery("(max-width: 28.125em)");

  return (
    <div>
      <Router>
        <Box
          // marginBottom="3vh"
          // height={{
          //   base: "100vh",
          //   sm: "100vh",
          //   md: "100vh",
          //   lg: "92vh",
          //   xl: "92vh",
          // }}
          // width={
          //   isSmallerThan450px
          //     ? show
          //       ? "100vw"
          //       : "100vw"
          //     : show
          //     ? "79vw"
          //     : "100vw"
          // }
          alignItems="center"
          justifyContent="center"
          backgroundColor="#f4f4f4"
        >
          <Route
            path="/admin/state/tambah-state"
            exact
            component={Dashboards.TambahState}
          />
          <Route
            path="/admin/state/tambah-pic"
            exact
            component={Dashboards.TambahPIC}
          />
          <Route
            path="/admin/state/edit-state"
            exact
            component={Dashboards.EditState}
          />
          <Route
            path="/admin/state/daftar-state"
            exact
            component={Dashboards.DaftarState}
          />
          <Route
            path="/admin/state/daftar-organisator"
            exact
            component={Dashboards.DaftarOrganisator}
          />
          <Route
            path="/admin/state/daftar-pic"
            exact
            component={Dashboards.DaftarPIC}
          />
          <Route
            path="/admin/state/state-detail"
            exact
            component={Dashboards.StateDetail}
          />
          <Route
            path="/admin/home/daftar-home"
            exact
            component={Dashboards.DaftarHome}
          />
          <Route
            path="/admin/home/edit-home"
            exact
            component={Dashboards.EditHome}
          />
          <Route
            path="/admin/home/tambah-home"
            exact
            component={Dashboards.TambahHome}
          />
          <Route
            path="/admin/home/tambah-media"
            exact
            component={Dashboards.TambahMedia}
          />
        </Box>
      </Router>
    </div>
  );
}
