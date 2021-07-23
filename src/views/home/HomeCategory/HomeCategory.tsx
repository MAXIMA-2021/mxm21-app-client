import { Flex, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
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
import { HomeChapter } from "../../../types/enums";

const HomeCategory = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    document.title = "HoME Category Page";
    try {
      if (!location.state) {
        history.push("/home/cover");
      }
    } catch {
      history.push("/home/cover");
    }
  }, []);

  const handleChapterClick = (homeChapter: string) => {
    history.push(`/home/organisator-list/${homeChapter}`, {
      status: true,
    });
    //NOT FINISHED
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
          <button
            onClick={() => handleChapterClick(HomeChapter.LostTreasureIsland)}
          >
            <Image className="chapter" src={cat1} />
          </button>
          <button onClick={() => handleChapterClick(HomeChapter.FantasyBridge)}>
            <Image className="chapter" src={cat2} />
          </button>
          <button
            onClick={() => handleChapterClick(HomeChapter.MedalistPlayground)}
          >
            <Image className="chapter" src={cat3} />
          </button>
          <button onClick={() => handleChapterClick(HomeChapter.RainbowMines)}>
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
          <button onClick={() => handleChapterClick(HomeChapter.TomorrowVille)}>
            <Image className="chapter" src={cat5} />
          </button>
          <button onClick={() => handleChapterClick(HomeChapter.AdventureLand)}>
            <Image className="chapter" src={cat6} />
          </button>
          <button onClick={() => handleChapterClick(HomeChapter.TownArea)}>
            <Image className="chapter" src={cat7} />
          </button>
          <button
            onClick={() => handleChapterClick(HomeChapter.WonderousCampground)}
          >
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
