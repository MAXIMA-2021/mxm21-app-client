import React, { useEffect } from "react";
import {
  Flex,
  Image,
  Text,
  Box,
  createIcon,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { MxmButton } from "../../../shared/styled/buttons";
import { MalpunMaxi, MalpunXima } from "../../../assets/malpun";

import "./MalpunWelcome.scss";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const cardVariants = {
  exit: { y: -100, opacity: 0, transition: { delay: 0.2, ...transition } },
  rest: { y: 100, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.2, ...transition },
  },
};

const footerVariants = {
  exit: { y: "50%", opacity: 0, transition: { delay: 0.2, ...transition } },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

const MalpunWelcome = () => {
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
      overflow="hidden"
      bgColor="#1C3261"
      alignItems="center"
      justifyContent="center"
    >
      <motion.div
        className="motion-container"
        initial="rest"
        animate="enter"
        exit="exit"
        variants={cardVariants}
      >
        <Flex
          h={{ base: "35%", sm: "40%", md: "50%" }}
          justifyContent="flex-start"
          className="mp-welcome-maskot"
        >
          <Image title="MAXI" src={MalpunMaxi} h="100%" w="auto" />
          <Image
            ml={{ base: "1rem", sm: "2rem", md: "3rem" }}
            title="XIMA"
            src={MalpunXima}
            h="100%"
            w="auto"
          />
        </Flex>
        <Box className="mp-welcome-content-body">
          <p>
            "Selamat karena kamu hampir menyelesaikan perjalanan bersama{" "}
            <strong>MAXIMA 2021</strong>. Pasti kamu lelah ya? Tenang saja, aku
            akan mengajak kamu ketempat yang seru dan bisa bersenang-senang
            sembari melepas lelah di sana!"
          </p>
        </Box>
        <Flex
          w="100%"
          justifyContent={{ base: "center", md: "flex-end" }}
          paddingRight={{ base: "0", md: "2rem", xl: "5rem" }}
        >
          <motion.div
            variants={footerVariants}
            initial="exit"
            animate="enter"
            exit="exit"
          >
            <Link to="/malpun/welcome">
              <MxmButton colorScheme="red-red" padding="1.5rem">
                <Text
                  fontStyle="Rubik"
                  fontWeight="500"
                  fontSize={{ base: "1.2rem", md: "2rem" }}
                >
                  Berikutnya
                </Text>
                <NextIcon
                  ml="1rem"
                  boxSize={{ base: "0.7rem", md: "1.5rem" }}
                  color="white"
                />
              </MxmButton>
            </Link>
          </motion.div>
        </Flex>
      </motion.div>
    </Flex>
  );
};

export default MalpunWelcome;

const NextIcon = createIcon({
  viewBox: "0 0 88 88",
  d: "M14.4721 1.23605C7.82311 -2.08846 0 2.74651 0 10.1803V77.8196C0 85.2535 7.82312 90.0884 14.4721 86.7639L82.1115 52.9443C89.482 49.259 89.4819 38.741 82.1115 35.0557L14.4721 1.23605Z",
});
