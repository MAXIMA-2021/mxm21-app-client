import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  cat1,
  cat2,
  cat3,
  cat4,
  cat5,
  cat6,
  cat7,
  cat8,
  arrow,
} from "../../../assets/home";
import "./HomeCategory.scss";

const HomeCategory = () => {
  const location = useLocation();
  const history = useHistory();

  const handleChapterClick = (chapter: string) => {
    history.push(`/home/home-organisator-list/${chapter}`);
  };

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
          <button onClick={() => handleChapterClick("c01")}>
            <Image className="chapter" src={cat1} />
          </button>
          <button onClick={() => handleChapterClick("c02")}>
            <Image className="chapter" src={cat2} />
          </button>
          <button onClick={() => handleChapterClick("c03")}>
            <Image className="chapter" src={cat3} />
          </button>
          <button onClick={() => handleChapterClick("c04")}>
            <Image className="chapter" src={cat4} />
          </button>
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
          <button onClick={() => handleChapterClick("c05")}>
            <Image className="chapter" src={cat5} />
          </button>
          <button onClick={() => handleChapterClick("c06")}>
            <Image className="chapter" src={cat6} />
          </button>
          <button onClick={() => handleChapterClick("c07")}>
            <Image className="chapter" src={cat7} />
          </button>
          <button onClick={() => handleChapterClick("c08")}>
            <Image className="chapter" src={cat8} />
          </button>
        </Flex>
      </Flex>
      <footer>
        <Image className="arrow-btn" src={arrow} />
      </footer>
    </div>
  );
};

export default HomeCategory;
