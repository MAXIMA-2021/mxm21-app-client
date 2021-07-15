import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Auth from ".././views/auth";

export default function AuthRouters() {
  return (
    <>
      <Route path="/masuk" exact component={Auth.Login} />
      <Route path="/daftar" exact component={Auth.RegisterMaba} />
    </>
  );
}
