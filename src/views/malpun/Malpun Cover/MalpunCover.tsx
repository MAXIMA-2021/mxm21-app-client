import React, { useEffect } from "react";
import "./MalpunCover.scss";
import { Flex, Image, Text, Box, createIcon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Palette } from "../../../types/enums";
import { Malpun, MxmLogoText } from "../../../assets";
import { dermaExpress } from "../../../assets/beranda";
import { MxmButton } from "../../../shared/styled/buttons";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const cardVariants = {
  exit: { y: "-50%", opacity: 0, transition: { delay: 0.4, ...transition } },
  rest: { y: "50%", opacity: 0 },
  enter: {
    y: "0%",
    opacity: 1,
    transition: { delay: 0.2, ...transition },
  },
};

const MalpunCover = () => {
  useEffect(() => {
    document.title = "Malam Puncak 2021";
  }, []);

  return (
    <motion.div>
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
        bgColor={Palette.Navy}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex
          w="100%"
          alignItems="center"
          justifyContent={{ base: "center", md: "flex-end" }}
          paddingRight={{ base: "0", md: "2rem", xl: "5rem" }}
        >
          <Flex
            bgColor="white"
            h="max-content"
            borderRadius="15px"
            padding="0.5rem"
            alignItems="center"
            mr="2rem"
          >
            <Text
              fontFamily="Rubik"
              fontWeight="500"
              color={Palette.Navy}
              mr="1.5rem"
            >
              sponsored by
            </Text>
            <Image src={dermaExpress} alt="Logo Derma Express" h="3rem" />
          </Flex>
          <Flex
            bgColor="white"
            borderRadius="50%"
            boxSize="5.5rem"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={MxmLogoText} alt="Logo Maxima 2021" h="70%" w="auto" />
          </Flex>
        </Flex>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "space-between" }}
          justifyContent={{ base: "space-between", md: "center" }}
        >
          <Image
            src={Malpun.Pintu}
            maxH={{ base: "250px", md: "300px", lg: "350px", xl: "400px" }}
            w="auto"
            mr={{ base: "0", md: "3vw", xl: "10vw" }}
            mb={{ base: "2rem", md: "0" }}
          />
          <Image
            src={Malpun.Welcome}
            maxH={{ base: "150px", md: "200px", lg: "250px", xl: "300px" }}
            w="auto"
          />
        </Flex>
        <Flex
          w="100%"
          justifyContent={{ base: "center", md: "flex-end" }}
          paddingRight={{ base: "0", md: "2rem", xl: "5rem" }}
        >
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
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default MalpunCover;

const NextIcon = createIcon({
  viewBox: "0 0 88 88",
  d: "M14.4721 1.23605C7.82311 -2.08846 0 2.74651 0 10.1803V77.8196C0 85.2535 7.82312 90.0884 14.4721 86.7639L82.1115 52.9443C89.482 49.259 89.4819 38.741 82.1115 35.0557L14.4721 1.23605Z",
});
