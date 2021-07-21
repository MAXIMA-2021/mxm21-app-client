import React from "react";
import "./HomeCover.scss";
import { Flex, Image } from "@chakra-ui/react";
import { Palette } from "../../../types/enums";
import { Home } from "../../../assets";
import { MxmLogoText } from "../../../assets";

const HomeCover = () => {
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
            <button
              style={{ color: Palette.Yellow, backgroundColor: Palette.Red }}
            >
              HoME 2021
            </button>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomeCover;
