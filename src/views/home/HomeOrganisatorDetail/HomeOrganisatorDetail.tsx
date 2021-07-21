import React, { useEffect, useState } from "react";
import { AspectRatio, Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { Palette } from "../../../types/enums";
import { createIcon } from "@chakra-ui/icons";
import { Corousell, maxIndex } from "./OrganisatorCorousell";

const HomeOrganisatorDetail = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [rslide, setRslide] = useState(true);

  const handleNext = () => {
    setRslide(true);
    setVisible(false);
    setTimeout(() => {
      index === maxIndex ? setIndex(0) : setIndex(index + 1);
      setVisible(true);
    }, 300);
  };
  const handlePrev = () => {
    setRslide(false);
    setVisible(false);
    setTimeout(() => {
      index === 0 ? setIndex(maxIndex) : setIndex(index - 1);
      setVisible(true);
    }, 300);
  };

  useEffect(() => {
    document.title = "HoME - Organisator Detail";
  });

  return (
    <Flex
      w="100vw"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      bgColor={{ base: Palette.Cyan, md: "white" }}
    >
      <Flex
        bgColor={Palette.Navy}
        borderRadius={{ base: "1.5rem", md: "3rem" }}
        p={{ base: "0.5rem 2rem", md: "0.5rem 3rem", xl: "0.5rem 5rem" }}
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        mb={{ base: "-3rem", md: "-3rem", xl: "-4rem" }}
        mt={{ base: "1rem", xl: "2rem" }}
        zIndex="2"
      >
        <Heading
          fontFamily="Rubik"
          color="white"
          fontSize={{ base: "1.5rem", md: "1.8rem", xl: "2.2rem" }}
        >
          Hocus Pocus
        </Heading>
        <Heading
          mt={{ base: "0.2rem", md: "0.5rem" }}
          fontFamily="Rubik"
          color={Palette.Yellow}
          fontWeight="500"
          fontSize={{ base: "1rem", md: "1.5rem", xl: "1.8rem" }}
        >
          Chapter One: Lost Treasure Island
        </Heading>
      </Flex>
      <Box
        bgColor={Palette.Cyan}
        p="1rem"
        borderRadius={{ base: "0", md: "3rem" }}
        mb={{ base: "0", xl: "2rem" }}
      >
        <Box
          bgColor={Palette.Red}
          p={{
            base: "3.5rem 1rem 1.5rem 1rem",
            md: "3.5rem 7.5rem 1.5rem 7.5rem",
            xl: "4.5rem 15rem 1.5rem 15rem",
          }}
          borderRadius={{ base: "1.5rem", md: "3rem" }}
        >
          <Box
            maxW={{ base: "calc(100vw - 4rem)", md: "60vw", xl: "40vw" }}
            minH={{ base: "calc(100vh - 10rem)", md: "max-content" }}
            color="white"
            textAlign="center"
          >
            <Flex
              justifyContent="center"
              mb={{ base: "2rem", md: "1.5rem" }}
              alignItems="center"
            >
              <button onClick={handlePrev}>
                <ArrowIcon
                  _hover={{ transform: "scaleX(-1) translateX(5px)" }}
                  transform="scaleX(-1)"
                  color={Palette.Navy}
                  boxSize={{ base: "1.5rem", md: "2rem", xl: "3rem" }}
                  transition="all 0.2s ease-in-out"
                />
              </button>
              <AspectRatio
                onLoad={() => setVisible(true)}
                id="corousell"
                w="100%"
                ratio={16 / 9}
                ml={{ base: "0.2rem", md: "0.5rem", xl: "0.8rem" }}
                mr={{ base: "0.2rem", md: "0.5rem", xl: "0.8rem" }}
                borderRadius={{ base: "1rem", md: "2rem" }}
                style={{ overflow: "hidden" }}
                transition="all 0.3s ease-in-out"
                opacity={visible ? "1" : "0"}
                transform={
                  visible
                    ? ""
                    : rslide
                    ? "translateX(5rem)"
                    : "translateX(-5rem)"
                }
              >
                <Corousell index={index} />
              </AspectRatio>
              <button onClick={handleNext}>
                <ArrowIcon
                  _hover={{ transform: "translateX(5px)" }}
                  color={Palette.Navy}
                  boxSize={{ base: "1.5rem", md: "2rem", xl: "3rem" }}
                  transition="all 0.2s ease-in-out"
                />
              </button>
            </Flex>
            <Heading
              fontFamily="Rubik"
              fontSize={{ base: "1.2rem", md: "1.5rem", xl: "1.8rem" }}
              mb="1rem"
            >
              Penjelasan Tentang Organisasi
            </Heading>
            <Text
              // textAlign="justify"
              fontFamily="Poppins"
              fontSize={{ base: "0.9rem", md: "1rem" }}
            >
              {contentData.description}
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default HomeOrganisatorDetail;

const contentData = {
  name: "MAXIMA 2021",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at est eu mi vestibulum egestas ac sit amet quam. Phasellus eget dictum enim. Pellentesque molestie, velit vitae egestas elementum, quam felis molestie lorem, eget imperdiet metus ex in ligula. Duis semper ornare tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam arcu ex, consectetur vitae diam et, ultrices congue turpis. Suspendisse eget aliquet urna. Maecenas sed leo eu elit pulvinar dapibus et quis nulla. Curabitur finibus sodales lectus. Fusce mollis tincidunt nibh, eget facilisis erat commodo in.",
};

const ArrowIcon = createIcon({
  viewBox: "0 0 10 18",
  d: "M0.292787 0.292861C0.464979 0.120685 0.694079 0.0172534 0.937105 0.00197221C1.18013 -0.013309 1.42038 0.06061 1.61279 0.209861L1.70679 0.292861L9.70679 8.29286C9.87896 8.46505 9.98239 8.69415 9.99767 8.93718C10.013 9.18021 9.93904 9.42046 9.78979 9.61286L9.70679 9.70686L1.70679 17.7069C1.52683 17.8862 1.28535 17.9903 1.0314 17.9981C0.777453 18.0058 0.530073 17.9166 0.339508 17.7486C0.148942 17.5806 0.0294809 17.3463 0.00538731 17.0934C-0.0187063 16.8405 0.0543746 16.5879 0.209786 16.3869L0.292787 16.2929L7.58579 8.99986L0.292787 1.70686C0.105316 1.51933 0 1.26503 0 0.999861C0 0.734697 0.105316 0.480389 0.292787 0.292861Z",
});
