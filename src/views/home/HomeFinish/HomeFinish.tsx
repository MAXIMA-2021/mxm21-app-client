import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Image,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import { bendera } from "../../../assets/home";
import { MxmLogoText } from "../../../assets";
import { Palette } from "../../../types/enums";
import { MxmButton } from "../../../shared/styled/buttons";
import "./HomeFinish.scss";
import { motion } from "framer-motion";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const finishVariants = {
  exit: { y: "50%", opacity: 0, transition: { delay: 0.6, ...transition } },
  rest: { y: "50%", opacity: 0 },
  enter: {
    y: "0%",
    opacity: 1,
    transition: { delay: 0.2, ...transition },
  },
};

const buttonVariants = {
  rest: { x: "50%", opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.6, ...transition } },
  exit: { x: "-50%", opacity: 0, transition: { delay: 0.4, ...transition } },
};

const frameVariants = {
  rest: { opacity: 0 },
  enter: { opacity: 1, transition: { delay: 0, ...transition } },
  exit: { opacity: 0, transition: { delay: 0.8, ...transition } },
};

const logoVariants = {
  rest: { opacity: 0 },
  enter: { opacity: 1, transition: { delay: 0.4, ...transition } },
  exit: { opacity: 0, transition: { delay: 0.2, ...transition } },
};

const benderaVariants = {
  exit: { y: "50%", opacity: 0, transition: { delay: 0.2, ...transition } },
  rest: { y: "50%", opacity: 0 },
  enter: {
    y: "0%",
    opacity: 1,
    transition: { delay: 0.6, ...transition },
  },
};

const HomeFinish = () => {
  const [isShorterThan800px] = useMediaQuery("(max-height: 750px)");
  const [isWiderThan820px] = useMediaQuery("(min-width: 820px)");

  useEffect(() => {
    document.title = "HoME 2021: Selesai";
  }, []);

  return (
    <Box overflow="hidden">
      <motion.div
        className="main-frame"
        variants={frameVariants}
        initial="rest"
        animate="enter"
        exit="exit"
      >
        <Flex
          w="100%"
          h={
            isShorterThan800px && isWiderThan820px
              ? "auto"
              : {
                  base: "calc(100vh - 3.5rem)",
                  md: "calc(100vh - 4rem)",
                  xl: "calc(100vh - 5rem)",
                }
          }
          padding={{
            base: "1rem",
            md: "2rem",
          }}
          alignItems="center"
          justifyContent="center"
          p={{ base: "1rem", md: "2rem", xl: "3rem" }}
        >
          <Flex
            bgColor="white"
            w="100%"
            h="100%"
            padding="2rem"
            borderRadius="1rem"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <Flex
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              w={{ base: "100%", sm: "80%", md: "60%", "2xl": "30%" }}
            >
              <motion.div
                variants={logoVariants}
                initial="rest"
                animate="enter"
                exit="exit"
              >
                <Image
                  title="MAXIMA 2021"
                  h={{ base: "60px", md: "80px", xl: "100px" }}
                  src={MxmLogoText}
                  mb={{ base: "2rem", md: "3rem" }}
                />
              </motion.div>
              <motion.div
                variants={benderaVariants}
                initial="rest"
                animate="enter"
                exit="exit"
              >
                <Image
                  title="Bendera Website MAXIMA"
                  h={{ base: "200px", md: "250px" }}
                  w="auto"
                  transform={{
                    base: "translateX(10px)",
                    md: "translateX(20px)",
                  }}
                  src={bendera}
                />
              </motion.div>
              <motion.div
                style={{ width: "100%" }}
                variants={finishVariants}
                initial="rest"
                animate="enter"
                exit="exit"
              >
                <Box
                  padding={{ base: "0.5rem", md: "1rem" }}
                  w="100%"
                  style={{
                    backgroundColor: `${Palette.Cyan}`,
                    color: `${Palette.Navy}`,
                    borderRadius: "1rem",
                    zIndex: 2,
                  }}
                >
                  <Heading
                    fontSize={{ base: "1.8rem", md: "2rem" }}
                    padding={{ base: "0.75rem 1rem", md: "1.5rem 3rem" }}
                    textAlign="center"
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
              </motion.div>
              <Flex
                flexDir={{ base: "column", md: "row" }}
                alignItems="center"
                justifyContent={{ base: "center", md: "space-between" }}
                w="100%"
              >
                <motion.div
                  variants={buttonVariants}
                  initial={{ x: -100, opacity: 0 }}
                  animate="enter"
                  exit="exit"
                  style={{ width: "100%" }}
                >
                  <NavLink
                    to="/home/category"
                    className="home-chapter-finish-btn"
                    style={{ display: "flex" }}
                  >
                    <MxmButton
                      variant="rounded"
                      colorScheme="navy-cyan"
                      margin="2rem 0 0 0"
                      padding="1rem"
                      width="90%"
                    >
                      Back to Chapter Lists
                    </MxmButton>
                  </NavLink>
                </motion.div>
                <motion.div
                  variants={buttonVariants}
                  initial="rest"
                  animate="enter"
                  exit={{
                    x: "50%",
                    opacity: 0,
                    transition: { delay: 0.2, ...transition },
                  }}
                  style={{
                    width: "100%",
                  }}
                >
                  <NavLink
                    to="/"
                    style={{
                      width: "100%",
                      display: "flex",
                    }}
                    className="home-finish-btn"
                  >
                    <MxmButton
                      variant="rounded"
                      colorScheme="navy-cyan"
                      margin={{ base: "1rem 0 0 0", md: "2rem 0 0 0" }}
                      padding="1rem"
                      width="90%"
                    >
                      Finish HoME
                    </MxmButton>
                  </NavLink>
                </motion.div>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </Box>
  );
};

export default HomeFinish;
