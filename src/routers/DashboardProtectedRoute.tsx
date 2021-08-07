import React from "react";
import { Redirect, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";

export const DashboardProtectedRoute = (props: any, { ...options }) => {
  const token: string | null = window.sessionStorage.getItem("token");
  const decoded: any = token !== null && jwtDecode(token);

  if (decoded.division || decoded.stateID) {
    return <Route {...options}>{props.children}</Route>;
  } else {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: {
            title: "Token Invalid",
            icon: "error",
            confirmButtonText: "Kembali",
          },
        }}
      />
    );
  }
};
