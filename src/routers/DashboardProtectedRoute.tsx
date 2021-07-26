import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import authService from "../services/auth";

export const DashboardProtectedRoute = (props: any, { ...options }) => {
  const history = useHistory();
  const [status, setStatus] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = async () => {
      try {
        const panitia = await authService.checkTokenPanitia();
        panitia.message === "true" && setStatus(true);
      } catch {
        const organisator = await authService.checkTokenOrganisator();
        organisator.message === "true" && setStatus(true);
      } finally {
        setLoading(false);
      }
    };
    auth();
  }, []);

  useEffect(() => {
    if (!status && !loading) {
      history.push("/", {
        message: "Harap Login Kembali",
      });
    }
  }, [loading]);

  return <Route {...options}>{props.children}</Route>;
};
