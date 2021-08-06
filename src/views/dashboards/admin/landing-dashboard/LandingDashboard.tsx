import React, { useEffect } from "react";
import { Flex } from "@chakra-ui/react";

const LandingDashboard: React.FC = () => {
  useEffect(() => {
    document.title = "[Dashboard] - Tambah HoME";
  }, []);

  return (
    <Flex
      width={{
        base: "calc(100vw - 18rem)",
        md: "calc(100vw - 18rem)",
      }}
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        mt={{
          base: "1rem",
          md: "1rem",
        }}
        mb={{
          base: "4.5rem",
          md: "5rem",
        }}
        direction="column"
        backgroundColor="#FFFFFF"
        py="1.5rem"
        px="1.5rem"
        rounded={25}
      >
        <h1>Ini Dashboard</h1>
      </Flex>
    </Flex>
  );
};

export default LandingDashboard;
