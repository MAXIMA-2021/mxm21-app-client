import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as Dashboards from "../views/dashboards";
import { Box } from "@chakra-ui/react";

export default function AdminRouters(show: boolean) {
  return (
    <div>
      <Router>
        <Box
          alignItems="center"
          justifyContent="center"
          backgroundColor="#f4f4f4"
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
          <Route
            path="/admin/daftar-home"
            exact
            component={Dashboards.DaftarHome}
          />
          <Route
            path="/admin/edit-home"
            exact
            component={Dashboards.EditHome}
          />
          <Route
            path="/admin/tambah-home"
            exact
            component={Dashboards.TambahHome}
          />
          <Route
            path="/admin/tambah-media"
            exact
            component={Dashboards.TambahMedia}
          />
        </Box>
      </Router>
    </div>
  );
}
