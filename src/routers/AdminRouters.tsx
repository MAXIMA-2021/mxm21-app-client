import React from "react";
import { Route, Switch } from "react-router-dom";
import * as Dashboards from "../views/dashboards";
import { Box } from "@chakra-ui/react";

const AdminRouters = (props: any) => {
  return (
    <div>
      <Box
        alignItems="center"
        justifyContent="center"
        backgroundColor="#f4f4f4"
      >
        <Switch>
          <Route path="/admin" exact component={Dashboards.LandingDashboard} />
          <Route
            path="/admin/tambah-state"
            component={Dashboards.TambahState}
          />
          <Route path="/admin/tambah-pic" component={Dashboards.TambahPIC} />
          <Route
            path="/admin/edit-state/:stateID"
            component={Dashboards.EditState}
          />
          <Route
            path="/admin/daftar-state"
            component={Dashboards.DaftarState}
          />
          <Route path="/admin/daftar-pic" component={Dashboards.DaftarPIC} />
          <Route
            path="/admin/state-detail/:stateID"
            component={Dashboards.StateDetail}
          />
          <Route
            path="/admin/daftar-maba"
            component={Dashboards.DaftarMahasiswaBaru}
          />
          <Route
            path="/admin/detail-maba/:nim"
            component={Dashboards.DetailMahasiswaBaru}
          />
          <Route path="/admin/daftar-home" component={Dashboards.DaftarHome} />
          <Route
            path="/admin/edit-home/:search_key"
            component={Dashboards.EditHome}
          />
          <Route path="/admin/tambah-home" component={Dashboards.TambahHome} />
          <Route
            path="/admin/tambah-media"
            component={Dashboards.TambahMedia}
          />
          <Route
            path="/admin/daftar-narasi"
            component={Dashboards.DaftarNarasi}
          />
          <Route
            path="/admin/edit-narasi/:homeChapterID"
            component={Dashboards.EditNarasi}
          />
          <Route
            path="/admin/tambah-mahasiswa"
            component={Dashboards.TambahMahasiswa}
          />
          <Route
            path="/admin/tambah-panitia"
            component={Dashboards.TambahPanitia}
          />
          <Route
            path="/admin/tambah-organisator"
            component={Dashboards.TambahOrganisator}
          />
          <Route
            path="/admin/daftar-mahasiswa"
            component={Dashboards.DaftarMahasiswa}
          />
          <Route
            path="/admin/daftar-panitia"
            component={Dashboards.DaftarPanitia}
          />
          <Route
            path="/admin/daftar-organisator"
            component={Dashboards.DaftarOrganisator}
          />
          <Route
            path="/admin/edit-mahasiswa/:nim"
            component={Dashboards.EditMahasiswa}
          />
          <Route path="/admin/edit-akun" component={Dashboards.EditAkun} />
        </Switch>
      </Box>
    </div>
  );
};

export default AdminRouters;
