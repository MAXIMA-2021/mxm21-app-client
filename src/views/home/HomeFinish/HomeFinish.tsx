import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { bendera } from "../../../assets/home";
import { MxmLogoText } from "../../../assets";
import { Palette } from "../../../types/enums";

const HomeFinish = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      p={{ base: "1rem", md: "2rem", xl: "3rem" }}
    >
      <Flex
        flexDir="column"
        bgColor={Palette.Cyan}
        w="100%"
        h="100%"
        borderRadius={{ base: "1rem", md: "2rem", xl: "3rem" }}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          title="Bendera Website MAXIMA"
          h={{ base: "200px", md: "300px" }}
          transform={{ base: "translateX(10px)", md: "translateX(20px)" }}
          src={bendera}
          mb={{ base: "-1.5rem", md: "-2.5rem" }}
        />
        <Box
          padding={{ base: "0.5rem", md: "1rem" }}
          style={{
            backgroundColor: `${Palette.Yellow}`,
            color: `${Palette.Navy}`,
            borderRadius: "1rem",
            zIndex: 2,
          }}
        >
          <Heading
            fontSize={{ base: "1.8rem", md: "2rem" }}
            padding={{ base: "0.75rem 1rem", md: "1.5rem 3rem" }}
            style={{
              fontFamily: "Poppins",
              fontWeight: 900,

              backgroundColor: "white",
              borderRadius: "1rem",
            }}
          >
            FINISH HOME 2021
          </Heading>
        </Box>
        <Box
          mt={{ base: "2rem", md: "3rem", xl: "3rem" }}
          mb="2rem"
          style={{
            padding: "1rem",
            backgroundColor: "white",
            borderRadius: "1rem",
          }}
        >
          <Image
            title="MAXIMA 2021"
            h={{ base: "50px", md: "80px", xl: "90px" }}
            src={MxmLogoText}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default HomeFinish;
