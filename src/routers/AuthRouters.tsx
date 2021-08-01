import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import * as Auth from ".././views/auth";

export default function AuthRouters() {
  return (
    <>
      <Route path="/auth/masuk" exact component={Auth.LoginMhs} />
      <Route path="/auth/daftar" exact component={Auth.RegisterMhs} />
      <Route path="/auth/panitia/masuk" exact component={Auth.LoginPanitia} />
      <Route
        path="/auth/panitia/daftar"
        exact
        component={Auth.RegisterPanitia}
      />
      <Route
        path="/auth/organisator/masuk"
        exact
        component={Auth.LoginOrganisator}
      />
      <Route
        path="/auth/organisator/daftar"
        exact
        component={Auth.RegisterOrganisator}
      />
      <Route
        path="/auth/keluar"
        exact
        strict
        render={() => {
          window.sessionStorage.clear();
          return <Redirect to="/" />;
        }}
      />
    </>
  );
}
