import React from "react";
import { Palette } from "../../../types/enums";
import {
  MxmLogo,
  MxmLogoText,
  MxmWhiteLogo,
  MxmWhiteLogoText,
} from "../../../assets";
import "./Beranda.scss";
import {
  Flex,
  Heading,
  Spacer,
  Image,
  Divider,
  Center,
  Button,
  HStack,
  SimpleGrid,
  CloseButton,
  Box,
  Text,
  Container,
} from "@chakra-ui/react";
import Tilt from "react-tilt";

const Beranda = () => {
  return (
    <Center>
      <SimpleGrid columns={2} spacing={10}>
        <Center>
          <Container>
            <Heading>Selamat datang di MAXIMA 2021!</Heading>
            <Text mt="1.5rem">
              Kegiatan tahunan terbesar di UMN yang memperkenalkan
              organisasi-organisasi UMN kepada mahasiswa baru.
            </Text>
          </Container>
        </Center>
        <Container>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <iframe
              width="486"
              height="262"
              src="https://www.youtube.com/embed/q94Pl_g-p2g"
            ></iframe>
          </Tilt>
        </Container>
        <Container>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <Box
              bg="gray"
              width="470"
              height="262"
              src="https://www.youtube.com/embed/q94Pl_g-p2g"
            ></Box>
          </Tilt>
        </Container>
        <Container>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <Box
              bg="gray"
              width="470"
              height="262"
              src="https://www.youtube.com/embed/q94Pl_g-p2g"
            >
              <Center height="100%">
                <div className="Tilt-inner">
                  <Center>
                    <Heading color="white">MAXIMA 2021</Heading>
                  </Center>
                </div>
              </Center>
            </Box>
          </Tilt>
        </Container>
      </SimpleGrid>
    </Center>
  );
};

export default Beranda;
