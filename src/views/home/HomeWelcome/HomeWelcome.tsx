import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import "./HomeWelcome.scss";
import { Palette } from "../../../types/enums";
import { Home } from "../../../assets";

const HomeWelcome = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      padding={{
        base: "1rem",
        md: "2rem",
      }}
      bgColor={Palette.Red}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        w="100%"
        h="100%"
        flexDir="column"
        bgColor="white"
        borderRadius="1rem"
        alignItems="center"
        justifyContent="center"
        padding="2rem"
      >
        <Flex
          h={{ base: "20%", sm: "25%", md: "30%" }}
          justifyContent="center"
          mb={{ base: "-0.25rem", md: "-0.5rem" }}
        >
          <Image title="MAXI" src={Home.Maxi} />
          <Image
            ml={{ base: "2rem", sm: "5rem", md: "8rem" }}
            title="XIMA"
            src={Home.Xima}
          />
        </Flex>
        <Box className="content-head">
          Hai MAXIMERS,
          <br />
          kenalin kami MAXI dan XIMA!
        </Box>
        <Box className="content-body">
          <p>
            Kami akan menemani kamu menyusuri Hocus Pocus, yaitu 8 Zona yang
            masing-masing mewakili Kategori Organisasi yang ada di <b>UMN</b>.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            Nah, Sebelum kita jalan-jalan nanti, <b>MAXI</b> dan <b>XIMA</b> mau
            ngajak <b>MAXIMERS</b> untuk membuat akun pada website MAXIMA
            sebagai
            <b> persyaratan kelulusan HoME 2021</b>.
          </p>
        </Box>
      </Flex>
    </Flex>
  );
};

export default HomeWelcome;