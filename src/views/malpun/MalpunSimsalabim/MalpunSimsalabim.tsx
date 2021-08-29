import React, { useEffect } from "react";
import { Flex, Image, Text, Box, createIcon } from "@chakra-ui/react";

const MalpunSimsalabim = () => {
  useEffect(() => {
    document.title = "Malam Puncak 2021";
  }, []);

  return (
    <Flex
      flexDir="column"
      height={{
        base: "calc(100vh - 3.5rem)",
        md: "calc(100vh - 4rem)",
        lg: "calc(100vh - 5rem)",
      }}
      padding={{
        base: "1rem",
        md: "2rem",
      }}
      overflow="hidden"
      bgColor="#1C3261"
      alignItems="center"
      justifyContent="space-between"
    ></Flex>
  );
};

export default MalpunSimsalabim;
