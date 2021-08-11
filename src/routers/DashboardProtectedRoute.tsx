import React from "react";
import { Redirect, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";

export const DashboardProtectedRoute = (props: any, { ...options }) => {
  const token: string | null = window.sessionStorage.getItem("token");
  let decoded: any = null;
  try {
    token !== null && (decoded = jwtDecode(token));
  } catch (error) {
    window.sessionStorage.clear();
  } finally {
    if (decoded !== null && (decoded.division || decoded.stateID)) {
      return <Route {...options}>{props.children}</Route>;
    } else {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: {
              title: "Harap Login Kembali",
              icon: "error",
              confirmButtonText: "Kembali",
            },
          }}
        />
      );
    }
  }
};
