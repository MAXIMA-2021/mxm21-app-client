import React, { useEffect } from "react";
import { Heading, Center } from "@chakra-ui/react";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us - MAXIMA 2021";
  }, []);

  return (
    <Center>
      <Heading>About Us</Heading>
    </Center>
  );
};

export default AboutUs;
