import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { DashboardFooter } from "../shared/component/DashboardFooter";
import { DashboardNavigation } from "../shared/component/DashboardNavigation";
import jwtDecode from "jwt-decode";

export const StateProtectedRoute = (props: any, { ...options }) => {
  const history = useHistory();
  const [status, setStatus] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = () => {
      const decoded: any = jwtDecode(
        window.sessionStorage.getItem("token") || ""
      );
      decoded.nim && !decoded.division && !decoded.stateID && setStatus(true);
      setLoading(false);
    };

    if (window.sessionStorage.getItem("token")) {
      auth();
    } else {
      history.push("/", {
        title: "Harap Login Kembali",
        icon: "error",
        confirmButtonText: "Kembali",
      });
    }
  }, []);

  useEffect(() => {
    if (!status && !loading) {
      history.push("/", {
        title: "Token Invalid",
        icon: "error",
        confirmButtonText: "Kembali",
      });
    }
  }, [loading]);

  return <Route {...options}>{props.children}</Route>;
};
