import React, { useState } from "react";
import {
  Flex,
  Image,
  Box,
  Text,
  Heading,
  createIcon,
  Skeleton,
} from "@chakra-ui/react";
import { MalpunMaxiFull } from "../../../assets/malpun";
import { Palette } from "../../../types/enums";
import { motion } from "framer-motion";
import { MxmButton } from "../../../shared/styled/buttons";
import { Link, useLocation } from "react-router-dom";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const footerVariants = {
  exit: { y: "50%", opacity: 0 },
  enter: {
    y: "0%",
    opacity: 1,
    transition: { delay: 1.8, ...transition },
  },
};

const numberVariants = {
  rest: { x: "-100%", opacity: 0 },
  enter: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2, duration: 1, ease: transition.ease },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: { delay: 0.2, duration: 1, ease: transition.ease },
  },
};

const MaxiVariants = {
  rest: { x: "100%", opacity: 0 },
  enter: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2, duration: 0.8, ease: transition.ease },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { delay: 0.2, duration: 0.8, ease: transition.ease },
  },
};

const cardVariants = {
  rest: { x: "-50%", opacity: 0 },
  enter: {
    x: 0,
    opacity: 1,
    transition: { delay: 1.2, duration: 0.5, ease: transition.ease },
  },
  enter_alt: {
    x: 0,
    opacity: 1,
    transition: { delay: 1.6, duration: 0.5, ease: transition.ease },
  },
};

const MalpunNumber = () => {
  const location = useLocation();
  const luckyNumber: number = Number(location.state);
  const [isLoaded, setLoaded] = useState<boolean>(false);

  return (
    <motion.div initial="rest" exit="exit" animate="enter">
      <Flex
        minH={{
          base: "calc(100vh - 3.5rem)",
          md: "calc(100vh - 4rem)",
          lg: "calc(100vh - 5rem)",
        }}
        padding={{
          base: "1rem",
          md: "2rem",
        }}
        bgColor="#1C3261"
        alignItems="center"
        justifyContent="center"
        fontFamily="Rubik"
        flexDir="column"
        overflow="hidden"
      >
        <Flex mt={{ base: "1rem", md: "0.5rem", xl: "2rem", "2xl": "5rem" }}>
          <Flex alignItems="center" flexDir={{ base: "column", lg: "row" }}>
            <motion.div variants={numberVariants}>
              <Flex
                flexDir="column"
                textAlign="center"
                mr={{ base: 0, lg: "2rem", "2xl": "3rem" }}
              >
                <Box
                  bgColor={Palette.Yellow}
                  borderRadius={{ base: "1rem", md: "2rem" }}
                  padding="1rem 2rem"
                  color="#1C3261"
                >
                  <Heading
                    fontSize={{ base: "1rem", md: "1.2rem", xl: "2rem" }}
                  >
                    HERE'S YOUR
                    <br />
                    LUCKY NUMBER
                  </Heading>
                </Box>
                <Box
                  bgColor={Palette.Yellow}
                  borderRadius={{ base: "1rem", md: "2rem" }}
                  padding={{ base: "1.5rem", md: "2.5rem", xl: "3rem" }}
                  color="#1C3261"
                  mt={{ base: "0.5rem", md: "1rem" }}
                >
                  <Heading fontSize={{ base: "3rem", md: "3rem", xl: "5rem" }}>
                    {luckyNumber ? luckyNumber : "- -"}
                  </Heading>
                </Box>
              </Flex>
            </motion.div>
            <motion.div variants={MaxiVariants}>
              <Flex
                mt={{ base: "2rem", lg: 0 }}
                flexDir={{ base: "column", md: "row" }}
                justifyContent="center"
                alignItems="center"
              >
                <Flex
                  borderRadius="2rem"
                  border="#EB2378 solid 0.5rem"
                  padding={{ base: "2rem", md: "3rem" }}
                  width="max-content"
                  justifyContent="center"
                  bgColor="white"
                  zIndex="99"
                >
                  <Skeleton borderRadius="1rem" isLoaded={isLoaded}>
                    <Image
                      src={MalpunMaxiFull}
                      w={{ base: "150px", xl: "200px" }}
                      transform="translateX(-0.5rem)"
                      onLoad={() => setLoaded(true)}
                    />
                  </Skeleton>
                </Flex>
                <Flex
                  flexDir="column"
                  justifyContent="center"
                  mt={{ base: "2rem", md: 0 }}
                  textAlign={{ base: "center", md: "left" }}
                >
                  <motion.div variants={cardVariants}>
                    <Box
                      bgColor={Palette.Red}
                      color="white"
                      borderRadius={{ base: "1.5rem", md: "0 2rem 2rem 0" }}
                      padding={{ base: "1rem", md: "1.5rem 2rem", xl: "2rem" }}
                    >
                      <Text>
                        <b>SIMPAN DAN INGAT BAIK-BAIK NOMOR INI YA!</b>
                        <br />
                        karena untuk kamu yang beruntung akan
                        <br />
                        mendapatkan kesempataan untuk <b>VIDEO CALL</b>
                        <br />
                        secara langsung dengan <b>GUEST STAR</b>
                        <br />
                        kita di Malam Puncak.
                      </Text>
                    </Box>
                  </motion.div>
                  <motion.div
                    initial={cardVariants.rest}
                    animate={cardVariants.enter_alt}
                  >
                    <Box
                      bgColor={Palette.Red}
                      color="white"
                      borderRadius={{ base: "1.5rem", md: "0 2rem 2rem 0" }}
                      padding={{ base: "1rem", md: "1.5rem", xl: "2rem" }}
                      mt="2rem"
                    >
                      <Heading>SEE YOU MAXIMERS!</Heading>
                    </Box>
                  </motion.div>
                </Flex>
              </Flex>
            </motion.div>
          </Flex>
        </Flex>
        <Flex
          w="100%"
          justifyContent={{ base: "center", md: "flex-end" }}
          paddingRight={{ base: "0", md: "2rem", xl: "5rem" }}
          mt={{ base: "1rem", md: "0.5rem", xl: "2rem", "2xl": "5rem" }}
        >
          <motion.div
            variants={footerVariants}
            initial="exit"
            animate="enter"
            exit="exit"
          >
          </motion.div>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default MalpunNumber;