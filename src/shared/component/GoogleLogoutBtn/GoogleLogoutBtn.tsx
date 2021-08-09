import React from "react";
import { GoogleLogout } from "react-google-login";
import { Center } from "@chakra-ui/react";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const GoogleLogoutBtn: React.FC = () => {
  const onSuccess = () => {
    console.log("Logout made successfully");
    window.sessionStorage.clear();
    window.location.href = "/auth/google";
  };

  return (
    <>
      <Center>
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onSuccess}
        />
      </Center>
    </>
  );
};

export default GoogleLogoutBtn;
