import React, { useEffect } from "react";
import "./HomeCover.scss";
import { Flex, Image } from "@chakra-ui/react";
import { Palette } from "../../../types/enums";
import { Home } from "../../../assets";
import { MxmLogoText } from "../../../assets";

import { MxmButton } from "../../../shared/styled/buttons";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

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

const buttonVariantsTwo = {
  rest: { y: 100, opacity: 0, transition },
  enter: { y: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
  exit: { y: 100, opacity: 0, transition: { delay: 0.4, ...transition } },
};

const logoVariants = {
  rest: { opacity: 0 },
  enter: { opacity: 1, transition: { delay: 0.4, ...transition } },
  exit: { opacity: 0, transition: { delay: 0.2, ...transition } },
};

const frameVariants = {
  rest: { opacity: 0 },
  enter: { opacity: 1, transition: { delay: 0, ...transition } },
  exit: { opacity: 0, transition: { delay: 0.6, ...transition } },
};

const HomeCover = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/home/welcome");
  };

  useEffect(() => {
    document.title = "HoME 2021 - Selamat Datang";
  }, []);

  return (
    <motion.div
      variants={frameVariants}
      initial="rest"
      animate="enter"
      exit="exit"
    >
      <Flex
        h={{
          base: "calc(100vh - 3.5rem)",
          md: "calc(100vh - 4rem)",
          xl: "calc(100vh - 5rem)",
        }}
        padding={{
          base: "1rem",
          md: "2rem",
        }}
        bg={"linear-gradient(180deg, #74C8B9 0%, #164273 56.25%)"}
        className="home-cvr-outer_container"
        overflow="hidden"
      >
        <Flex
          w="100%"
          h="100%"
          flexDir="column"
          bgColor="white"
          borderRadius="1rem"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
        >
          <Flex
            backgroundColor="transparent"
            className="home-cvr-middle_container"
            flexDirection="column"
          >
            <motion.div
              className="home-cvr-mxm-logo"
              variants={logoVariants}
              initial="rest"
              animate="enter"
              exit="exit"
            >
              <Image src={MxmLogoText} alt="maxima logo text" />
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="rest"
              animate="enter"
              exit="exit"
            >
              <div className="home-cvr-gate">
                <Image src={Home.homeCoverGate} alt="home cover gate" />
              </div>
              <div className="home-cvr-header">
                <h1 style={{ color: Palette.Navy }}>
                  START THE JOURNEY TOWARDS YOUR DREAM WITH MAXIMA 2021!
                </h1>
              </div>
            </motion.div>
            <motion.div
              className="home-cvr-btn"
              variants={buttonVariantsTwo}
              initial="rest"
              animate="enter"
              exit="exit"
            >
              <button onClick={handleClick} style={{ color: "white" }}>
                Enter HoME
                <ArrowForwardRoundedIcon />
              </button>
            </motion.div>
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default HomeCover;
