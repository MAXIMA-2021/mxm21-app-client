import React from "react";
import { Redirect, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";

export const StateProtectedRoute = (props: any, { ...options }) => {
  const token: string | null = window.sessionStorage.getItem("token");
  const decoded: any = token !== null && jwtDecode(token);

  if (decoded.nim && !decoded.division && !decoded.stateID) {
    return <Route {...options}>{props.children}</Route>;
  } else {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: {
            title: token !== null ? "Token Invalid" : "Harap Login Kembali",
            icon: "error",
            confirmButtonText: "Kembali",
          },
        }}
      />
    );
  }
};
