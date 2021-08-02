import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { Palette } from "../../../types/enums";
import * as State from "../../../assets/state";
import { MxmWhiteLogoText } from "../../../assets";
import { MxmButton } from "../../../shared/styled/buttons";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

// Ini Adalah Komponen Utama Dari Halaman StateSchedule
const StateSchedule = () => {
  useEffect(() => {
    document.title = "STATE - Jadwal STATE";
  }, []);

  return (
    <Flex
      minH={{
        base: "calc(100vh - 3.5rem)",
        md: "calc(100vh - 4rem)",
        xl: "calc(100vh - 5rem)",
      }}
      w="100%"
      bgColor={Palette.Navy}
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      padding={{ base: "2rem 0", "2xl": "0" }}
    >
      <Image src={MxmWhiteLogoText} w={{ base: "80px", md: "100px" }} />
      <Heading
        fontFamily="Rubik"
        fontWeight="bold"
        color="white"
        padding="2rem 0"
      >
        STATE
      </Heading>
      <Flex
        flexDir="column"
        bgColor="white"
        h="max-content"
        padding={{ base: "2rem 1rem", md: "2rem" }}
        borderRadius="1rem"
        textAlign="center"
        justifyContent="space"
        fontFamily="Rubik"
      >
        <Heading
          fontFamily="Rubik"
          fontSize="2rem"
          fontWeight="bold"
          color={Palette.Navy}
        >
          JADWAL STATE
        </Heading>
        <Flex flexDir={{ base: "column", md: "row" }}>
          <BoxJadwal index="0" />
          <BoxJadwal
            index="1"
            status="filled"
            image="https://ultimagz.com/wp-content/uploads/cropped-thumbnail_Logo-Ultimagz-01.png"
          />
          <BoxJadwal
            index="2"
            status="active"
            image="https://uscope.umn.ac.id/assets/images/photos/activities/ultima-sonora/logo.png"
            presence="true"
          />
        </Flex>
        <Box>
          <Text fontWeight="medium">Sisa Token Anda: 1</Text>
          <MxmButton colorScheme="yellow-navy" variant="mobile" w="max-content">
            <Text margin="1rem">Pilih STATE</Text>
          </MxmButton>
        </Box>
      </Flex>
    </Flex>
  );
};

export default StateSchedule;

// Ini Adalah Komponen BoxJadwal Untuk Menampilkan Info Dari State Yang Terpilih
const BoxJadwal = (props: {
  image?: string;
  status?: string;
  index: string;
  presence?: string;
}) => {
  const defaultImage = [State.Maxi, "", State.Xima];
  const handleCancel = () => {};
  const handleZoom = () => {};
  const handleToken = () => {};

  return (
    <Flex flexDir="column" margin={{ base: "1rem 0", md: "2rem 0 1rem 0" }}>
      <Box
        boxSize={{ base: "18rem", md: "12rem", xl: "18rem" }}
        borderRadius="1rem"
        border={props.status ? `3px solid ${Palette.Navy}` : ""}
        margin={{ base: "0 1rem", md: "0 1rem" }}
        fontFamily="Poppins"
        fontWeight="medium"
        textAlign="center"
        color="white"
        bgColor={props.status ? "white" : Palette.Navy}
        bgImage={props.status ? "" : defaultImage[Number(props.index)]}
        bgRepeat="no-repeat"
        bgPosition="bottom"
        bgSize="90%"
        boxShadow="inset 0px -5rem 2rem -1rem rgba(0, 0, 0, 0.5), -1.2px 1.6px 6px rgba(0, 0, 0, 0.25)"
        overflow="hidden"
      >
        {props.status ? (
          <Flex
            h="100%"
            flexDir="column"
            justifyContent="space-between"
            alignItems="center"
            padding="1rem"
          >
            <Flex w="100%" justifyContent="flex-end">
              {props.presence === "true" ? (
                <Flex
                  boxSize="2rem"
                  borderRadius="50%"
                  bgColor="#39DA79"
                  alignItems="center"
                  justifyContent="center"
                >
                  <CheckIcon />
                </Flex>
              ) : props.presence === "false" ? (
                <Flex
                  boxSize="2rem"
                  borderRadius="50%"
                  bgColor="#F4224B"
                  alignItems="center"
                  justifyContent="center"
                >
                  <ClearIcon />
                </Flex>
              ) : (
                <Text
                  bgColor={Palette.Red}
                  borderRadius="1rem"
                  padding="0.2rem 1rem"
                  fontSize="0.8rem"
                >
                  Day-3
                </Text>
              )}
            </Flex>
            <Image src={props.image} maxW="100%" maxH="50%" />
            <Box>
              <Text>ULTIMAGZ</Text>
              <Text>Kamis, 31 Juli 2021</Text>
            </Box>
          </Flex>
        ) : (
          <Flex
            h="100%"
            justifyContent="center"
            alignItems="flex-end"
            padding="1rem"
          >
            <Text>Kamu belum memilih STATE</Text>
          </Flex>
        )}
      </Box>
      {props.status === "filled" ? (
        <MxmButton colorScheme="red-yellow" variant="mobile">
          Cancel
        </MxmButton>
      ) : props.status === "active" ? (
        <Flex justifyContent="space-between">
          <MxmButton
            w="50%"
            colorScheme="cyan-navy"
            variant="mobile"
            isDisabled={props.presence ? true : false}
          >
            ZOOM
          </MxmButton>
          <MxmButton
            w="50%"
            colorScheme="yellow-red"
            variant="mobile"
            isDisabled={props.presence ? true : false}
          >
            TOKEN
          </MxmButton>
        </Flex>
      ) : (
        ""
      )}
    </Flex>
  );
};
