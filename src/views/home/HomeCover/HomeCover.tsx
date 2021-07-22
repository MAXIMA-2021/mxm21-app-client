import React, { useEffect } from "react";
import "./HomeCover.scss";
import { Flex, Image } from "@chakra-ui/react";
import { Palette } from "../../../types/enums";
import { Home } from "../../../assets";
import { MxmLogoText } from "../../../assets";

import { MxmButton } from "../../../shared/styled/buttons";
import { Link, useHistory } from "react-router-dom";

const HomeCover = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/home/welcome", {
      status: true,
      message: "go to next page: welcome",
    });
  };

  useEffect(() => {
    document.title = "Home Cover Page";
  }, []);

  return (
    <Flex
      backgroundColor={Palette.Navy}
      className="home-cvr-container"
      justifyContent="center"
    >
      <Flex backgroundColor="#fff" className="home-cvr-inner_container">
        <Flex
          backgroundColor="transparent"
          className="home-cvr-middle_container"
          flexDirection="column"
        >
          <div className="home-cvr-mxm-logo">
            <Image src={MxmLogoText} alt="maxima logo text" />
          </div>
          <div className="home-cvr-gate">
            <Image src={Home.homeCoverGate} alt="home cover gate" />
          </div>
          <div className="home-cvr-header">
            <h1 style={{ color: Palette.Red }}>
              START THE JOURNEY TOWARDS YOUR DREAM WITH MAXIMA 2021!
            </h1>
          </div>
          <div className="home-cvr-btn">
            <MxmButton
              variant="desktop"
              colorScheme="cyan-navy"
              onClick={handleClick}
            >
              HoME 2021
            </MxmButton>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomeCover;
