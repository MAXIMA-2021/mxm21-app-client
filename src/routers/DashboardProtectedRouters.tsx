import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import authService from "../services/auth";
import { Flex, Spinner, Heading } from "@chakra-ui/react";

export const DashboardProtectedRoute = (props: any) => {
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

  return <>{props.children}</>;

  // if (status && !loading) {
  //   return <>{props.children}</>;
  // } else {
  //   return (
  //     <Flex w="100%" minH="100vh" justifyContent="center" alignItems="center">
  //       <Spinner
  //         thickness="4px"
  //         speed="0.65s"
  //         emptyColor="gray.200"
  //         color="red"
  //         w="2rem"
  //         h="2rem"
  //         mr="1rem"
  //       />
  //       <Heading fontFamily="Poppins">Loading...</Heading>
  //     </Flex>
  //   );
  // }
};
