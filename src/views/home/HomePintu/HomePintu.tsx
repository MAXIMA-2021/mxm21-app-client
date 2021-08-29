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
import { useState } from "react";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const cardVariants = {
  exit: { opacity: 0, transition: { delay: 0, ...transition } },
  rest: { y: "50%", opacity: 0, transition: { delay: 0.2, ...transition } },
  enter: {
    y: "-15%",
    opacity: 1,
    transition,
  },
};

const HomePintu = () => {
  const history = useHistory();
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    document.title = "HoME 2021: Let's Dive Into Dreamland";
  }, []);

  const handleClickNext = () => {
    setIsToggle(true);
    setTimeout(() => {
      history.push("/home/category");
    }, 2000);
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
      variants={cardVariants}
      exit="exit"
    >
      <Center>
        <Box boxSize="xs" my="4rem">
          <Flex>
            <button onClick={handleClickNext}>
              <PetaisMap isToggle={isToggle} />
            </button>
            <Image
              zIndex={isToggle ? "0" : ""}
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
              zIndex={isToggle ? "0" : ""}
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

const MapVariants = {
  rest: { scale: 1 },
  next: {
    scale: 8,
    zIndex: 999,
    transition: { delay: 0.2, duration: 2, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

const PetaisMap = (props: any) => {
  return (
    <motion.div
      variants={MapVariants}
      animate={props.isToggle && "next"}
      initial="rest"
      className="start-map"
    >
      <Image
        src={StartMapMobile}
        srcSet={`${StartMapMobile} 300w, ${StartMapDesktop} 1000w`}
        alt="start-map-mxm"
        objectFit="cover"
      />
    </motion.div>
  );
};
