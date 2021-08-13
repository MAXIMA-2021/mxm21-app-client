import React from "react";
import { NavLink } from "react-router-dom";
import {
  Heading,
  Flex,
  Box,
  Grid,
  Divider,
  Spacer,
  Image,
} from "@chakra-ui/react";
import {
  XimaFull,
  cat1,
  cat2,
  cat3,
  cat4,
  cat5,
  cat6,
  cat7,
  cat8,
} from "../../../assets/home";
import "./HomeTwibbon.scss";
import { Palette } from "../../../types/enums";
import { MxmButton } from "../../../shared/styled/buttons";
import { useHistory } from "react-router-dom";
import { HomeChapter } from "../../../types/enums";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { DownloadIcon, ExternalLinkIcon } from "@chakra-ui/icons";

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
  exit: { x: 100, opacity: 1, transition: { delay: 0.2, ...transition } },
};

const buttonVariantsTwo = {
  rest: { y: 100, opacity: 0, transition },
  enter: { y: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
  exit: { y: 100, opacity: 1, transition: { delay: 0.2, ...transition } },
};

const frameVariants = {
  rest: { opacity: 0 },
  enter: { opacity: 1, transition: { delay: 0, ...transition } },
  exit: { opacity: 0, transition: { delay: 0.6, ...transition } },
};

const HomeTwibbon = () => {
  const history = useHistory();
  var images = [];
  var index = 0;

  useEffect(() => {
    document.title = "HoME 2021 - Twibbon HoME";
  }, []);

  const handleChapterClick = (homeChapter: string) => {
    history.push(`/home/organisator-list/${homeChapter}`);
  };

  const randomNumber = () => Math.random() * 7 + 1;

  const handleDownloadTwibbon = () => {
    const chapterStorage =
      window?.sessionStorage?.getItem("chapter") || `C0${randomNumber()}`;
    const anchor = document.createElement("a");
    anchor.href = downloadTwibbon[Number(chapterStorage?.slice(-1)) - 1].path;
    anchor.download =
      downloadTwibbon[Number(chapterStorage?.slice(-1)) - 1].name;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const handleAutomatedTwibbon = () => {
    const chapterStorage =
      window?.sessionStorage?.getItem("chapter") || `C0${randomNumber()}`;
    window.open(automatedTwibbon[Number(chapterStorage?.slice(-1)) - 1]);
  };

  images[0] = (
    <Box justifyContent="center" width="100%" display="flex">
      <button
        onClick={() => handleChapterClick(HomeChapter.LostTreasureIsland)}
      >
        <Image src={cat1} className="chapter" />
      </button>
    </Box>
  );
  images[1] = (
    <Box justifyContent="center" width="100%" display="flex">
      <button onClick={() => handleChapterClick(HomeChapter.FantasyBridge)}>
        <Image src={cat2} className="chapter" />
      </button>
    </Box>
  );
  images[2] = (
    <Box justifyContent="center" width="100%" display="flex">
      <button
        onClick={() => handleChapterClick(HomeChapter.MedalistPlayground)}
      >
        <Image src={cat3} className="chapter" />
      </button>
    </Box>
  );
  images[3] = (
    <Box justifyContent="center" width="100%" display="flex">
      <button onClick={() => handleChapterClick(HomeChapter.RainbowMines)}>
        <Image src={cat4} className="chapter" />
      </button>
    </Box>
  );
  images[4] = (
    <Box justifyContent="center" width="100%" display="flex">
      <button onClick={() => handleChapterClick(HomeChapter.TomorrowVille)}>
        <Image src={cat5} className="chapter" />
      </button>
    </Box>
  );
  images[5] = (
    <Box justifyContent="center" width="100%" display="flex">
      <button onClick={() => handleChapterClick(HomeChapter.AdventureLand)}>
        <Image src={cat6} className="chapter" />
      </button>
    </Box>
  );
  images[6] = (
    <Box justifyContent="center" width="100%" display="flex">
      <button onClick={() => handleChapterClick(HomeChapter.TownArea)}>
        <Image src={cat7} className="chapter" />
      </button>
    </Box>
  );
  images[7] = (
    <Box justifyContent="center" width="100%" display="flex">
      <button
        onClick={() => handleChapterClick(HomeChapter.WonderousCampground)}
      >
        <Image src={cat8} className="chapter" />
      </button>
    </Box>
  );

  var temp1 = null,
    temp2 = null;

  const chapter: JSX.Element[] = [];

  for (let i = 1; i <= 3; i++) {
    do {
      index = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
    } while (index === temp1 || index === temp2);

    chapter.push(images[index]);
    if (temp1 === null) {
      temp1 = index;
    } else {
      temp2 = index;
    }
  }

  return (
    <motion.div
      variants={frameVariants}
      initial="rest"
      animate="enter"
      exit="exit"
    >
      <Flex
        padding={{
          base: "1rem",
          md: "2rem",
        }}
        bgColor={Palette.Cyan}
        overflow="hidden"
      >
        <Flex
          w="100%"
          h="100%"
          flexDir="column"
          bgColor="white"
          borderRadius="1rem"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
        >
          <Flex
            backgroundColor="transparent"
            className="home-twibbon-middle_container"
            flexDirection="column"
          >
            <Box overflow="hidden">
              <motion.div
                variants={cardVariants}
                initial="rest"
                animate="enter"
                exit="exit"
              >
                <Flex flexDir="column" className="box-flex">
                  <Flex flexDir={{ base: "column", md: "row" }}>
                    <Box
                      justifyContent={{ base: "center", md: "initial" }}
                      display={{ base: "flex", md: "initial" }}
                      my={{ base: "2rem", md: 0 }}
                      pt={4}
                    >
                      <Image
                        src={XimaFull}
                        className="xima-full"
                        w={{
                          base: "50%",
                          md: "100%",
                        }}
                      />
                    </Box>
                    <Flex
                      ml={{ base: 0, md: "3rem" }}
                      w="100%"
                      h="100%"
                      flexDir="column"
                      bgColor="white"
                      borderRadius="1rem"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Box className="twibbon-head">TWIBBON</Box>
                      <Box
                        className="twibbon-body"
                        maxW={{ "2xl": "80%" }}
                        overflow="hidden"
                      >
                        <Heading fontSize="1.2rem" textAlign="center">
                          Regulasi Twibbon:
                        </Heading>
                        <br />
                        <p>
                          1. Twibbon dapat diunduh pada website MAXIMA 2021
                          sesuai dengan Zona favorit pilihan MAXIMERS.
                        </p>
                        <br />
                        <p>
                          2. Maximers mengunggah twibbon tersebut di akun
                          Instagram pribadi dan akun tidak di-private.
                        </p>
                        <br />
                        <p>
                          3. Maximers men-tag akun instagram @maximaumn
                          menggunakan hashtag{" "}
                          <b>#HoME2021 #DreamBigBuildEnormous</b>
                        </p>
                        <br />
                        <p>
                          4. Maximers mengawali caption dengan kalimat seperti
                          dibawah ini:
                          <br />
                          Halo, MAXIMERS! Saya (Nama Lengkap) siap untuk
                          mengikuti rangkaian kegiatan #MAXIMA2021 bersama
                          #(Nama Organisasi yang ingin diikuti) untuk menjadi
                          satu langkah lebih dekat menuju mimpiku.
                          <br />
                          <br />
                          <b>#HoME2021 #DreamBigBuildEnormous</b>
                        </p>
                        <br />
                        <p>
                          5. Post twibbon tidak boleh dihapus sampai Sabtu, 28
                          Agustus 2021.
                        </p>
                        <br />
                        <motion.div
                          variants={buttonVariantsTwo}
                          initial="rest"
                          animate="enter"
                          exit="exit"
                        >
                          <Flex
                            flexDir={{ base: "column", md: "row" }}
                            h={{ base: "6rem", md: "max-content" }}
                          >
                            <MxmButton
                              variant="rounded"
                              colorScheme="navy-white"
                              margin="0"
                              padding={{
                                base: "1rem 2rem",
                                md: "0 1rem",
                                lg: "1rem 2rem",
                              }}
                              height={{
                                base: "initial",
                                md: "2rem",
                                lg: "initial",
                              }}
                              fontSize={{
                                base: "0.8rem",
                                md: "0.5rem",
                                lg: "1rem",
                              }}
                              onClick={handleDownloadTwibbon}
                            >
                              DOWNLOAD TWIBBON
                            </MxmButton>
                            <Spacer />
                            <MxmButton
                              variant="rounded"
                              colorScheme="navy-white"
                              margin="0"
                              padding={{
                                base: "1rem 2rem",
                                md: "0 1rem",
                                lg: "1rem 2rem",
                              }}
                              height={{
                                base: "initial",
                                md: "2rem",
                                lg: "initial",
                              }}
                              fontSize={{
                                base: "0.8rem",
                                md: "0.5rem",
                                lg: "1rem",
                              }}
                              onClick={handleAutomatedTwibbon}
                            >
                              AUTOMATED TWIBBON
                            </MxmButton>
                          </Flex>
                        </motion.div>
                      </Box>
                    </Flex>
                  </Flex>
                  <Divider
                    mt={9}
                    mb={8}
                    style={{ border: `2px solid ${Palette.Cyan}` }}
                  />
                  <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                    {chapter}
                  </Grid>
                  <motion.div
                    variants={buttonVariants}
                    initial="rest"
                    animate="enter"
                  >
                    <Flex mt={10}>
                      <motion.div
                        exit={{
                          x: -100,
                          opacity: 1,
                          transition: { delay: 0.2, ...transition },
                        }}
                      >
                        <MxmButton
                          onClick={history.goBack}
                          variant="rounded"
                          colorScheme="navy-white"
                          margin="0"
                          padding="1rem"
                        >
                          Back
                        </MxmButton>
                      </motion.div>
                      <Spacer />
                      <motion.div
                        exit={{
                          x: 100,
                          opacity: 1,
                          transition: { delay: 0.2, ...transition },
                        }}
                      >
                        <NavLink to="/home/zeppelin">
                          <MxmButton
                            variant="desktop"
                            colorScheme="navy-white"
                            margin="0"
                            padding="1rem"
                          >
                            Next
                          </MxmButton>
                        </NavLink>
                      </motion.div>
                    </Flex>
                  </motion.div>
                </Flex>
              </motion.div>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default HomeTwibbon;

const downloadTwibbon: string | any = [
  {
    path: "/files/twibbon/twibbon-01.png",
    name: "Twibbon-MAXIMA_Lost-Treasure-Island.png",
  },
  {
    path: "/files/twibbon/twibbon-02.png",
    name: "Twibbon-MAXIMA_Fantasy-Bridge.png",
  },
  {
    path: "/files/twibbon/twibbon-03.png",
    name: "Twibbon-MAXIMA_Medalist-Playground.png",
  },
  {
    path: "/files/twibbon/twibbon-04.png",
    name: "Twibbon-MAXIMA_Rainbow-Mines.png",
  },
  {
    path: "/files/twibbon/twibbon-05.png",
    name: "Twibbon-MAXIMA_Tomorrow-Ville.png",
  },
  {
    path: "/files/twibbon/twibbon-06.png",
    name: "Twibbon-MAXIMA_Adventure-Land.png",
  },
  {
    path: "/files/twibbon/twibbon-07.png",
    name: "Twibbon-MAXIMA_Town-Area.png",
  },
  {
    path: "/files/twibbon/twibbon-08.png",
    name: "Twibbon-MAXIMA_Wondrous-Campground.png",
  },
];

const automatedTwibbon: { [index: number]: string } = [
  "https://twb.nz/home2021-lost-treasure-island",
  "https://twb.nz/home2021-fantasy-bridge",
  "https://twb.nz/home2021-medalist-playground",
  "https://twb.nz/home2021-rainbow-mines",
  "https://twb.nz/home2021-tomorrowville",
  "https://twb.nz/home2021-adventure-land",
  "https://twb.nz/home2021-town-area",
  "https://twb.nz/home2021-wondrous-campground",
];
