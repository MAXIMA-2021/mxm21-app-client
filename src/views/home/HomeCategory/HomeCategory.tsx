import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
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
import { motion } from "framer-motion";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const cardVariants = {
  exit: { y: "-50%", opacity: 0, transition: { delay: 0.2, ...transition } },
  rest: { y: "50%", opacity: 0, transition: { delay: 0.2, ...transition } },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

const buttonVariants = {
  rest: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
  exit: { x: -100, opacity: 1, transition: { delay: 0.2, ...transition } },
};

const titleVariants = {
  rest: { opacity: 0, transition },
  enter: { opacity: 1, transition: { delay: 0.5, ...transition } },
};

const HomeCategory = () => {
  const history = useHistory();

  useEffect(() => {
    document.title = "HoME Category Page";
  }, []);

  const handleChapterClick = (homeChapter: string) => {
    history.push(`/home/organisator-list/${homeChapter}`);
  };

  return (
    <Box overflow={{ md: "hidden" }} className="main-bg">
      <motion.div
        initial="rest"
        animate="enter"
        exit="exit"
        variants={cardVariants}
        className="content-container"
      >
        <motion.div variants={titleVariants} initial="rest" animate="enter">
          <Flex
            w="100%"
            alignItems="center"
            flexDir="column"
            mb={{ base: "1rem", md: "3rem" }}
          >
            <Text
              fontFamily="Rubik"
              color="#164273"
              fontWeight="bold"
              textAlign="center"
              fontSize={{ base: "1.2rem", md: "2.5rem", xl: "3rem" }}
            >
              Selamat Datang di Hocus Pocus
            </Text>
            <Text
              fontFamily="Rubik"
              color="white"
              bgColor="#164273"
              borderRadius="5px"
              padding="0.2rem 0.5rem"
              fontWeight="medium"
              w="max-content"
              textAlign="center"
              fontSize={{ base: "0.8rem", md: "1rem", xl: "1.2rem" }}
            >
              Pilih chapter yang kamu mau!
            </Text>
          </Flex>
        </motion.div>
        <Flex
          flexDir={{ base: "row", md: "column" }}
          alignItems="center"
          justifyContent="center"
          paddingBottom={{ base: "3rem", md: "5rem" }}
          fontFamily="Rubik !important"
        >
          <Flex
            className="category"
            flexDir={{ base: "column", md: "row" }}
            height={{
              base: "100%",
              md: "max-content",
            }}
            width={{
              base: "100%",
              md: "90%",
              xl: "70%",
            }}
            justifyContent={{ base: "flex-end ", md: "space-between" }}
            alignItems={{ base: "center", md: "flex-end " }}
            fontSize={{ base: "0.5rem", xl: "0.8rem" }}
          >
            <Box
              textAlign="center"
              onClick={() => handleChapterClick(HomeChapter.LostTreasureIsland)}
            >
              <Image className="chapter" src={cat1} />
              <Text fontWeight="medium" mt="0.5rem">
                Lembaga Kampus
              </Text>
            </Box>
            <Box
              textAlign="right"
              onClick={() => handleChapterClick(HomeChapter.FantasyBridge)}
            >
              <Image className="chapter" src={cat2} />
              <Text fontWeight="medium" mt="0.5rem">
                Organisasi dan Himpunan
              </Text>
            </Box>
            <Box
              textAlign="center"
              onClick={() => handleChapterClick(HomeChapter.MedalistPlayground)}
            >
              <Image className="chapter" src={cat3} />
              <Text fontWeight="medium" mt="0.5rem">
                UKM Olahraga
              </Text>
            </Box>
            <Box
              textAlign="center"
              onClick={() => handleChapterClick(HomeChapter.RainbowMines)}
            >
              <Image className="chapter" src={cat4} />
              <Text fontWeight="medium" mt="0.5rem">
                UKM Seni & Budaya
              </Text>
            </Box>
          </Flex>
          <Flex
            className="category"
            flexDir={{ base: "column", md: "row" }}
            height={{
              base: "100%",
              md: "max-content",
            }}
            width={{
              base: "100%",
              md: "90%",
              xl: "70%",
            }}
            justifyContent={{ base: "flex-end ", md: "space-between" }}
            alignItems={{ base: "center", md: "flex-end " }}
            mt={{
              base: "0",
              md: "2.5rem",
            }}
            fontSize={{ base: "0.5rem", xl: "0.8rem" }}
          >
            <Box
              textAlign="center"
              onClick={() => handleChapterClick(HomeChapter.TomorrowVille)}
            >
              <Image className="chapter" src={cat5} />
              <Text fontWeight="medium" mt="0.5rem">
                UKM Sains & Sosial
              </Text>
            </Box>
            <Box
              textAlign="center"
              onClick={() => handleChapterClick(HomeChapter.AdventureLand)}
            >
              <Image className="chapter" src={cat6} />
              <Text fontWeight="medium" mt="0.5rem">
                Kegiatan Kemahasiswaan & LSO
              </Text>
            </Box>
            <Box
              textAlign="center"
              onClick={() => handleChapterClick(HomeChapter.TownArea)}
            >
              <Image className="chapter" src={cat7} />
              <Text fontWeight="medium" mt="0.5rem">
                Media Kampus
              </Text>
            </Box>
            <Box
              textAlign="center"
              onClick={() =>
                handleChapterClick(HomeChapter.WonderousCampground)
              }
            >
              <Image className="chapter" src={cat8} />
              <Text fontWeight="medium" mt="0.5rem">
                Komunitas
              </Text>
            </Box>
          </Flex>
        </Flex>
      </motion.div>
      <motion.div
        variants={buttonVariants}
        initial="rest"
        animate="enter"
        exit="exit"
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          height: "max-content",
        }}
      >
        <Image
          height={{ base: "1.5rem", md: "2.5rem", "2xl": "5rem" }}
          mb={{ base: "1rem", md: "2rem" }}
          ml={{ base: "2rem", md: "4rem" }}
          className="arrow-btn"
          src={arrow}
          onClick={() => history.push("/home/enter")}
        />
      </motion.div>
    </Box>
  );
};

export default HomeCategory;
