import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import authService from "../services/auth";
import Swal from "sweetalert2";

export const DashboardProtectedRoute = (props: any, { ...options }) => {
  const history = useHistory();
  const [status, setStatus] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = async () => {
      try {
        const user = await authService.checkToken();
        (user.role === "panitia" || user.role === "organizator") &&
          setStatus(true);
      } catch (error) {
        Swal.fire({
          title: "Perhatian!",
          text: error.response?.data.message,
          icon: "error",
          confirmButtonText: "Coba lagi",
        });
      } finally {
        setLoading(false);
      }
    };
    if (window.sessionStorage.getItem("token")) {
      auth();
    } else {
      history.push("/", {
        title: "",
        message: "Harap Login Kembali",
      });
    }
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
