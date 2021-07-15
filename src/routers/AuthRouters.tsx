import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Auth from ".././views/auth";

export default function AuthRouters() {
  return (
    <>
      <Route path="/auth/masuk" exact component={Auth.Login} />
      <Route path="/auth/daftar" exact component={Auth.RegisterMaba} />
    </>
  );
}
