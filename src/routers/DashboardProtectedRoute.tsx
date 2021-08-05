import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import authService from "../services/auth";
import Swal from "sweetalert2";
import { DashboardFooter } from "../shared/component/DashboardFooter";
import { DashboardNavigation } from "../shared/component/DashboardNavigation";
import jwtDecode from "jwt-decode";

export const DashboardProtectedRoute = ({ ...options }) => {
  const history = useHistory();
  const [status, setStatus] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState<string>(
    window.sessionStorage.getItem("name") || ""
  );

  useEffect(() => {
    const auth = async () => {
      try {
        const decoded: any = jwtDecode(
          window.sessionStorage.getItem("token") || ""
        );
        (decoded?.division !== "" || decoded?.division !== null) &&
          setStatus(true);
        setName(window.sessionStorage.getItem("name") || "");
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

  return (
    <Route {...options}>
      <Switch>
        <div
          style={{
            minHeight: "100vh",
            background: "#f4f4f4",
            paddingBottom: "2rem",
          }}
        >
          <DashboardNavigation name={name} />
          <DashboardFooter />
        </div>
      </Switch>
    </Route>
  );
};
