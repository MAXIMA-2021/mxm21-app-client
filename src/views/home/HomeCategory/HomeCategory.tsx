import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Home } from "../../../assets";
import "./HomeCategory.scss";

const HomeCategory = () => {
  return (
    <div>
      <Flex
        className="main-content"
        // bgColor="green"
        flexDir={{ base: "row", md: "column" }}
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          flexDir={{ base: "column", md: "row" }}
          height={{
            base: "90%",
            md: "max-content",
          }}
          width={{
            base: "100%",
            md: "80%",
            xl: "70%",
          }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Image className="chapter" src={Home.cat1} />
          <Image className="chapter" src={Home.cat2} />
          <Image className="chapter" src={Home.cat3} />
          <Image className="chapter" src={Home.cat4} />
        </Flex>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          height={{
            base: "90%",
            md: "max-content",
          }}
          width={{
            base: "100%",
            md: "80%",
            xl: "70%",
          }}
          justifyContent="space-between"
          alignItems="center"
          mt={{
            base: "0",
            md: "2.5rem",
          }}
        >
          <Image className="chapter" src={Home.cat5} />
          <Image className="chapter" src={Home.cat6} />
          <Image className="chapter" src={Home.cat7} />
          <Image className="chapter" src={Home.cat8} />
        </Flex>
      </Flex>
      <footer>
        <Image className="arrow-btn" src={Home.arrow} />
      </footer>
    </div>
  );
};

export default HomeCategory;
