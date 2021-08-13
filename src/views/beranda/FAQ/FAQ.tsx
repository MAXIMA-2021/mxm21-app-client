import React, { useEffect } from "react";
import { Heading, Center } from "@chakra-ui/react";

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ - MAXIMA 2021";
  }, []);

  return (
    <Center>
      <Heading>FAQ</Heading>
    </Center>
  );
};

export default FAQ;
