import React, { useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "./HomeWelcome.scss";
import { Maxi, Xima } from "../../../assets/home";
import { MxmButton } from "../../../shared/styled/buttons";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

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

const buttonVariantsTwo = {
  rest: { y: 100, opacity: 0, transition },
  enter: { y: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
  exit: { y: 100, opacity: 0, transition: { delay: 0.2, ...transition } },
};

const frameVariants = {
  rest: { opacity: 0 },
  enter: { opacity: 1, transition: { delay: 0, ...transition } },
  exit: { opacity: 0, transition: { delay: 0.2, ...transition } },
};

const HomeWelcome = () => {
  const history = useHistory();
  useEffect(() => {
    document.title = "HoME 2021: Pembukaan";
  }, []);

  const handleClick = () => {
    history.push("/home/enter");
  };

  return (
    <Box overflow="hidden">
      <motion.div
        className="main-container"
        variants={frameVariants}
        initial="rest"
        animate="enter"
        exit="exit"
      >
        <Flex
          w="100%"
          h={{
            base: "calc(100vh - 3.5rem)",
            md: "calc(100vh - 4rem)",
            xl: "calc(100vh - 5rem)",
          }}
          padding={{
            base: "1rem",
            md: "2rem",
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            bgColor="white"
            w="100%"
            h="100%"
            padding="2rem"
            borderRadius="1rem"
          >
            <motion.div
              className="motion-container"
              initial="rest"
              animate="enter"
              exit="exit"
              variants={cardVariants}
            >
              <Flex
                h={{ base: "20%", sm: "25%", md: "30%" }}
                justifyContent="center"
                mb={{ base: "-0.25rem", md: "-0.5rem" }}
              >
                <Image title="MAXI" src={Maxi} h="100%" w="auto" />
                <Image
                  ml={{ base: "1rem", sm: "2rem", md: "3rem" }}
                  title="XIMA"
                  src={Xima}
                  h="100%"
                  w="auto"
                />
              </Flex>
              <Box className="content-head">
                Hai MAXIMERS,
                <br />
                kenalin kami MAXI dan XIMA!
              </Box>
              <Box className="content-body">
                <p>
                  Kami akan menemani kamu menyusuri Hocus Pocus, yaitu 8 Zona
                  yang masing-masing mewakili Kategori Organisasi yang ada di{" "}
                  <b>UMN</b>.
                </p>
              </Box>
              <motion.div
                variants={buttonVariantsTwo}
                initial="rest"
                animate="enter"
                exit="exit"
              >
                <MxmButton
                  onClick={handleClick}
                  variant="squared"
                  colorScheme="yellow-red"
                  padding="1.2rem 2.2rem"
                >
                  <Text fontSize={{ base: "1rem", md: "1.5rem" }}>
                    Ayo Pergi!
                  </Text>
                </MxmButton>
              </motion.div>
            </motion.div>
          </Box>
        </Flex>
      </motion.div>
    </Box>
  );
};

export default HomeWelcome;
