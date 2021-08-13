import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Center, Box, Image, Flex, Text } from "@chakra-ui/react";
import {
  MiddleGateDesktop,
  LeftGateDesktop,
  RightGateDesktop,
  StartMapDesktop,
  MiddleGateMobile,
  LeftGateMobile,
  RightGateMobile,
  StartMapMobile,
} from "../../../assets/home";
import "./HomePintu.scss";
import { motion } from "framer-motion";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const cardVariants = {
  exit: { y: "-50%", opacity: 0, transition: { delay: 0.2, ...transition } },
  rest: { y: "50%", opacity: 0, transition: { delay: 0.2, ...transition } },
  enter: {
    y: "-15%",
    opacity: 1,
    transition,
  },
};

const HomePintu = () => {
  const history = useHistory();

  useEffect(() => {
    document.title = "HoME Pintu Page";
  }, []);

  const handleClickNext = () => {
    history.push("/home/category");
  };

  let count = 0;
  const openGate = () => {
    count++;

    if (count === 3) {
      document.querySelector(".left-gate")?.classList.add("left-gate-open");
      document.querySelector(".right-gate")?.classList.add("right-gate-open");
    } else if (count > 3) {
      document.querySelector(".left-gate")?.classList.remove("left-gate-open");
      document
        .querySelector(".right-gate")
        ?.classList.remove("right-gate-open");
      count = 0;
    }
  };

  return (
    <motion.div
      initial="rest"
      animate="enter"
      exit="exit"
      variants={cardVariants}
    >
      <Center>
        <Box boxSize="xs" my="4rem">
          <Flex>
            <button onClick={handleClickNext}>
              <Image
                src={StartMapMobile}
                srcSet={`${StartMapMobile} 300w, ${StartMapDesktop} 1000w`}
                alt="start-map-mxm"
                className="start-map"
                objectFit="cover"
              />
            </button>
            <Image
              src={LeftGateMobile}
              srcSet={`${LeftGateMobile} 300w, ${LeftGateDesktop} 1000w`}
              alt="left-gate-mxm"
              className="left-gate"
              objectFit="cover"
              onClick={openGate}
            />
            <Image
              src={MiddleGateMobile}
              srcSet={`${MiddleGateMobile} 300w, ${MiddleGateDesktop} 1000w`}
              alt="middle-gate-mxm"
              className="middle-gate"
              objectFit="cover"
            />
            <Image
              src={RightGateMobile}
              srcSet={`${RightGateMobile} 300w, ${RightGateDesktop} 1000w`}
              alt="right-gate-mxm"
              className="right-gate"
              objectFit="cover"
              onClick={openGate}
            />
            <Text className="hint">Ketuk 3 kali sampai pintu terbuka</Text>
          </Flex>
        </Box>
      </Center>
    </motion.div>
  );
};

export default HomePintu;
