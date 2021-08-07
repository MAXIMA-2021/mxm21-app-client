import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import { bendera } from "../../../assets/home";
import { MxmLogoText } from "../../../assets";
import { Palette } from "../../../types/enums";
import { MxmButton } from "../../../shared/styled/buttons";

const HomeFinish = () => {
  return (
    <Flex
      w="100vw"
      h={{
        base: "calc(100vh - 3.5rem)",
        md: "calc(100vh - 4rem)",
        lg: "calc(100vh - 5rem)",
      }}
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
          h={{ base: "200px", md: "200px" }}
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
          <NavLink to="/">
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
          </NavLink>
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
        <Flex>
          <NavLink to="/home/category">
            <MxmButton
              variant="rounded"
              colorScheme="navy-white"
              margin="1rem 1rem 1rem 0"
            >
              Back to Chapter Lists
            </MxmButton>
          </NavLink>
          <Spacer />
          <NavLink to="/">
            <MxmButton
              variant="rounded"
              colorScheme="navy-white"
              margin="1rem 0 1rem 1rem"
            >
              Finish HoME
            </MxmButton>
          </NavLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomeFinish;
