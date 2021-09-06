import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Flex, Image, Text, createIcon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Malpun, MxmLogoText } from "../../../assets";
import { MxmButton } from "../../../shared/styled/buttons";
import { Palette } from "../../../types/enums";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const headerVariants = {
  exit: { y: "-50%", opacity: 0, transition: { delay: 0.4, ...transition } },
  rest: { y: "50%", opacity: 0 },
  enter: {
    y: "0%",
    opacity: 1,
    transition: { delay: 0.2, ...transition },
  },
};

const leftSlideVariant = {
  rest: { x: -300, opacity: 0 },
  enter: { x: 0, opacity: 1, transition: { delay: 0.3, ...transition } },
  exit: { x: -300, opacity: 0, transition: { delay: 0.3, ...transition } },
};

const rightSlideVariant = {
  rest: { x: 300, opacity: 0 },
  enter: { x: 0, opacity: 1, transition: { delay: 0.3, ...transition } },
  exit: { x: 300, opacity: 0, transition: { delay: 0.3, ...transition } },
};

const footerVariants = {
  exit: { y: "50%", opacity: 0, transition: { delay: 0.2, ...transition } },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

const MalpunCover = () => {
  useEffect(() => {
    document.title = "Malam Puncak 2021";
  }, []);

  return (
    <Flex
      minH={{
        base: "calc(100vh - 3.5rem)",
        md: "calc(100vh - 4rem)",
        xl: "calc(100vh - 5rem)",
      }}
      flexDir="column"
      padding={{
        base: "1rem",
        md: "2rem",
      }}
      bgColor="#1C3261"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="flex-end"
        className="flex-header-malpun"
      >
        <motion.div
          variants={headerVariants}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <Flex
            bgColor="white"
            borderRadius="50%"
            boxSize="3rem"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={MxmLogoText}
              alt="Logo Maxima 2021"
              className="malpun-sponsor-img"
            />
          </Flex>
        </motion.div>
      </Flex>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "space-between" }}
        justifyContent={{ base: "space-between", md: "center" }}
      >
        <motion.div
          variants={leftSlideVariant}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <Image src={Malpun.MalpunSimsalabim} className="malpun-pintu" />
        </motion.div>
        <motion.div
          variants={rightSlideVariant}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <Image src={Malpun.MalpunSimsalabimText} className="malpun-text" />
        </motion.div>
      </Flex>
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
          <Link to="/malpun/form">
            <MxmButton colorScheme="red-yellow" padding="1.5rem">
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
                color={Palette.Yellow}
              />
            </MxmButton>
          </Link>
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default MalpunCover;

const NextIcon = createIcon({
  viewBox: "0 0 88 88",
  d: "M14.4721 1.23605C7.82311 -2.08846 0 2.74651 0 10.1803V77.8196C0 85.2535 7.82312 90.0884 14.4721 86.7639L82.1115 52.9443C89.482 49.259 89.4819 38.741 82.1115 35.0557L14.4721 1.23605Z",
});
