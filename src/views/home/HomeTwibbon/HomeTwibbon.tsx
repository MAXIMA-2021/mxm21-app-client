import React from "react";
import { NavLink } from "react-router-dom";
import {
  HStack,
  PinInput,
  PinInputField,
  Center,
  Heading,
  VStack,
  Flex,
  Box,
  Grid,
  Divider,
  Spacer,
  Image,
} from "@chakra-ui/react";
import { XimaFull, First, Second, Third } from "../../../assets/home";
import "./HomeTwibbon.scss";
import { Palette } from "../../../types/enums";
import { MxmButton } from "../../../shared/styled/buttons";
import { useHistory } from "react-router-dom";

const HomeTwibbon = () => {
  const history = useHistory();

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
                  variant="desktop"
                  colorScheme="navy-white"
                  margin="0"
                >
                  DOWNLOAD TWIBBON
                </MxmButton>
                <Spacer />
                <MxmButton
                  variant="desktop"
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
          <Box justifyContent="center" width="100%" display="flex">
            <Image src={First} className="chapter" />
          </Box>
          <Box justifyContent="center" width="100%" display="flex">
            <Image src={Second} className="chapter" />
          </Box>
          <Box justifyContent="center" width="100%" display="flex">
            <Image src={Third} className="chapter" />
          </Box>
        </Grid>

        <Flex mt={10}>
          <MxmButton
            onClick={history.goBack}
            variant="desktop"
            colorScheme="navy-white"
            margin="0"
          >
            Back
          </MxmButton>
          <Spacer />
          <NavLink to="/home/finish">
            <MxmButton variant="desktop" colorScheme="navy-white" margin="0">
              Finish
            </MxmButton>
          </NavLink>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeTwibbon;
