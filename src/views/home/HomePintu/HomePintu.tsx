import React from "react";
import { NavLink } from "react-router-dom";
import {
  HStack,
  PinInput,
  PinInputField,
  Center,
  Heading,
  VStack,
  Box,
  Grid,
  Image,
  Container,
  Flex,
  Button,
} from "@chakra-ui/react";
import {
  MiddleGateDesktop,
  LeftGateDesktop,
  RightGateDesktop,
  StartMapDesktop,
  MiddleGateMobile,
  LeftGateMobile,
  RightGateMobile,
  StartMapMobile,
} from "../../../assets/home-pintu";
import "./HomePintu.scss";

const HomePintu = () => {
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
    <>
      <Center>
        <Box boxSize="xs" my={20}>
          <Flex>
            <NavLink to="/home/home-category">
              <Image
                srcSet={StartMapDesktop}
                alt="start-map-mxm"
                className="start-map"
                objectFit="cover"
              />
            </NavLink>
            <Image
              srcSet={LeftGateDesktop}
              alt="left-gate-mxm"
              className="left-gate"
              objectFit="cover"
              onClick={openGate}
            />
            {/* <Center> */}
            <Image
              srcSet={MiddleGateDesktop}
              alt="middle-gate-mxm"
              className="middle-gate"
              objectFit="cover"
            />
            {/* </Center> */}
            <Image
              srcSet={RightGateDesktop}
              alt="right-gate-mxm"
              className="right-gate"
              objectFit="cover"
              onClick={openGate}
            />
          </Flex>
        </Box>
      </Center>
    </>
  );
};

export default HomePintu;
