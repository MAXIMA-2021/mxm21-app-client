import { Flex, HStack, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import "./HomeFooter.scss";
import { MxmWhiteLogoText } from "../../../assets";
import { InstagramIcon, LineIcon, LoveIcon, TiktokIcon } from "./icon";
import { motion } from "framer-motion";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const footerVariants = {
  exit: { y: "50%", opacity: 0, transition: { delay: 0.2, ...transition } },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

const HomeFooter: React.FC = () => {
  return (
    <motion.div
      className="footer-container"
      variants={footerVariants}
      initial="exit"
      animate="enter"
      exit="exit"
    >
      <Flex justifyContent="center" alignItems="center" flexDir="column">
        <Image src={MxmWhiteLogoText} alt="MAXIMA 2021" height="150px" />
        <HStack margin="2.5rem 0" spacing={{ base: "2rem", md: "3rem" }}>
          <a href="/" className="nav-footer">
            HoME
          </a>
          <a href="/" className="nav-footer">
            STATE
          </a>
          <a href="/" className="nav-footer">
            FAQ
          </a>
          <a href="/" className="nav-footer">
            About Us
          </a>
        </HStack>
        <HStack mb="1.5rem" spacing="2rem">
          <a href="https://www.instagram.com/maximaumn" target="blank">
            <InstagramIcon boxSize="1.8rem" className="icon instagram" />
          </a>
          <a
            href="https://timeline.line.me/user/_dcKA2yvVjcNfYDLhcKetgtujFRGIGuaMtxtf0XY?utm_medium=windows&utm_source=desktop&utm_campaign=OA_Profile"
            target="blank"
          >
            <LineIcon boxSize="1.8rem" className="icon line" />
          </a>
          <a href="https://www.tiktok.com/@maximaumn" target="blank">
            <TiktokIcon boxSize="1.8rem" className="icon tiktok" />
          </a>
        </HStack>
        <h5 className="copyright-footer">
          Created with <LoveIcon color="#FF0000" /> by WEB MAXIMA 2021 Team
        </h5>
      </Flex>
    </motion.div>
  );
};

export default HomeFooter;
