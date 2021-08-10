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

const HomeTwibbon = () => {
  const history = useHistory();
  var images = [];
  var index = 0;

  const handleChapterClick = (homeChapter: string) => {
    history.push(`/home/organisator-list/${homeChapter}`);
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
    <>
      <Flex flexDir="column" className="box-flex">
        <Flex flexDir={{ base: "column", md: "row" }}>
          <Box
            justifyContent={{ base: "center", md: "initial" }}
            display={{ base: "flex", md: "initial" }}
            my={{ base: "2rem", md: 0 }}
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
            <Box className="twibbon-body">
              <Heading fontSize="1.2rem" textAlign="center">
                Regulasi Twibbon:
              </Heading>
              <br />
              <p>
                1. Twibbon dapat diunduh pada website MAXIMA 2021 sesuai dengan
                Zona favorit pilihan MAXIMERS.
              </p>
              <br />
              <p>
                2. Maximers mengunggah twibbon tersebut di akun Instagram
                pribadi dan akun tidak di-private.
              </p>
              <br />
              <p>
                3. Maximers men-tag akun instagram @maximaumn menggunakan
                hashtag <b>#HoME2021 #DreamBigBuildEnormous</b>
              </p>
              <br />
              <p>
                4. Maximers mengawali caption dengan kalimat seperti dibawah
                ini:
                <br />
                Halo, MAXIMERS! Saya (Nama Lengkap) siap untuk mengikuti
                rangkaian kegiatan #MAXIMA2021 bersama #(Nama Organisasi yang
                ingin diikuti) untuk menjadi satu langkah lebih dekat menuju
                mimpiku.
                <br />
                <br />
                <b>#HoME2021 #DreamBigBuildEnormous</b>
              </p>
              <br />
              <p>
                5. Post twibbon tidak boleh dihapus sampai Sabtu, 28 Agustus
                2021.
              </p>
              <br />
              <Flex>
                <MxmButton
                  variant="rounded"
                  colorScheme="navy-white"
                  margin="0"
                >
                  DOWNLOAD TWIBBON
                </MxmButton>
                <Spacer />
                <MxmButton
                  variant="rounded"
                  colorScheme="navy-white"
                  margin="0"
                >
                  AUTOMATED TWIBBON
                </MxmButton>
              </Flex>
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

        <Flex mt={10}>
          <MxmButton
            onClick={history.goBack}
            variant="rounded"
            colorScheme="navy-white"
            margin="0"
          >
            Back
          </MxmButton>
          <Spacer />
          <NavLink to="/home/zeppelin">
            <MxmButton variant="desktop" colorScheme="navy-white" margin="0">
              Next
            </MxmButton>
          </NavLink>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeTwibbon;
