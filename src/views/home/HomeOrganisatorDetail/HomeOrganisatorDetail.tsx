import React, { useEffect, useState } from "react";
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Text,
  Skeleton,
} from "@chakra-ui/react";
import { Palette } from "../../../types/enums";
import { createIcon } from "@chakra-ui/icons";
import { Carousell } from "./OrganisatorCarousell";
import { MxmButton } from "../../../shared/styled/buttons";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import adminService from "../../../services/admin";
import { motion } from "framer-motion";
import { ArrowBackIcon } from "@chakra-ui/icons";

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

const HomeOrganisatorDetail = () => {
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [rslide, setRslide] = useState(true);
  const [homeDetail, setHomeDetail] = useState<any>({});
  const [isLoaded, setIsLoaded] = useState(false);

  const { searchKey } = useParams<{ searchKey: string }>();
  const history = useHistory();

  useEffect(() => {
    document.title = "HoME Organisator Detail";

    const fetchData = async () => {
      try {
        const data = await adminService.getHomeBySearchKey(searchKey);
        setHomeDetail(data[0]);
      } catch (error) {
        Swal.fire({
          title: "Perhatian!",
          text: error.response?.data.message,
          icon: "error",
          confirmButtonText: "Coba lagi",
        });
      }
    };
    fetchData();
  }, []);

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

  const chapterName = () => {
    const kode = homeDetail.kategori?.slice(-1);
    const nama = eval(`chapterSub.C0${kode}`);
    return nama;
  };

  return (
    <Box overflow="hidden">
      <motion.div
        variants={cardVariants}
        initial="rest"
        animate="enter"
        exit="exit"
      >
        <Flex
          w="100%"
          minH={{
            base: "calc(100vh - 3.5rem)",
            md: "calc(100vh - 4rem)",
            xl: "calc(100vh - 5rem)",
          }}
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
              {chapterName()}
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
                base: "3.5rem 1rem 0rem 1rem",
                md: "3.5rem 7.5rem 1rem 7.5rem",
                xl: "4.5rem 15rem 1rem 15rem",
              }}
              borderRadius={{ base: "1.5rem", md: "3rem" }}
            >
              <Box
                maxW={{ base: "calc(100vw - 4rem)", md: "50vw" }}
                minW="40vw"
                minH={{ base: "calc(100vh - 14rem)", md: "max-content" }}
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
                  <Box
                    w="80%"
                    ml={{ base: "0.2rem", md: "0.5rem", xl: "0.8rem" }}
                    mr={{ base: "0.2rem", md: "0.5rem", xl: "0.8rem" }}
                    borderRadius={{ base: "1rem", md: "2rem" }}
                    overflow="hidden"
                  >
                    <Skeleton
                      isLoaded={isLoaded}
                      startColor={Palette.Cyan}
                      endColor={Palette.Navy}
                    >
                      <motion.div
                        whileHover={
                          index !== 0 ? { scale: 1.1, transition } : ""
                        }
                      >
                        <AspectRatio
                          onLoad={() => {
                            setVisible(true);
                            setIsLoaded(true);
                          }}
                          id="corousell"
                          ratio={16 / 9}
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
                          <Carousell
                            index={index}
                            setMaxIndex={setMaxIndex}
                            video={homeDetail.linkYoutube}
                            media={homeDetail.home_media}
                          />
                        </AspectRatio>
                      </motion.div>
                    </Skeleton>
                  </Box>
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
                  {homeDetail.name}
                </Heading>
                <Text
                  textAlign="justify"
                  fontFamily="Poppins"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  mb={{ base: "2rem" }}
                >
                  {homeDetail.longDesc}
                </Text>
                <motion.div
                  variants={buttonVariants}
                  initial="rest"
                  animate="enter"
                  exit="exit"
                >
                  <MxmButton
                    onClick={() =>
                      history.push("/home/twibbon", {
                        status: true,
                      })
                    }
                    variant="rounded"
                    colorScheme="navy-cyan"
                  >
                    <Text fontSize="1rem" p="0.2rem 2rem">
                      TWIBBON
                    </Text>
                  </MxmButton>
                </motion.div>
              </Box>
            </Box>
          </Box>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            h={{ base: "6rem", md: "max-content" }}
            width="100%"
            marginTop="2rem"
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
                lg: "2rem",
              }}
              fontSize={{
                base: "0.8rem",
                md: "0.5rem",
                lg: "0.9rem",
              }}
              onClick={() => history.goBack()}
            >
              <ArrowBackIcon marginRight="0.2rem" />
              Kembali ke Zona
            </MxmButton>
          </Flex>
        </Flex>
      </motion.div>
    </Box>
  );
};

export default HomeOrganisatorDetail;

const ArrowIcon = createIcon({
  viewBox: "0 0 10 18",
  d: "M0.292787 0.292861C0.464979 0.120685 0.694079 0.0172534 0.937105 0.00197221C1.18013 -0.013309 1.42038 0.06061 1.61279 0.209861L1.70679 0.292861L9.70679 8.29286C9.87896 8.46505 9.98239 8.69415 9.99767 8.93718C10.013 9.18021 9.93904 9.42046 9.78979 9.61286L9.70679 9.70686L1.70679 17.7069C1.52683 17.8862 1.28535 17.9903 1.0314 17.9981C0.777453 18.0058 0.530073 17.9166 0.339508 17.7486C0.148942 17.5806 0.0294809 17.3463 0.00538731 17.0934C-0.0187063 16.8405 0.0543746 16.5879 0.209786 16.3869L0.292787 16.2929L7.58579 8.99986L0.292787 1.70686C0.105316 1.51933 0 1.26503 0 0.999861C0 0.734697 0.105316 0.480389 0.292787 0.292861Z",
});

const chapterSub = {
  C01: "Chapter 1: Lost Treasure Island",
  C02: "Chapter 2: Fantasy Bridge",
  C03: "Chapter 3: Medalist Playground",
  C04: "Chapter 4: Rainbow Mines",
  C05: "Chapter 5: Tomorrow Ville",
  C06: "Chapter 6: Adventure Land",
  C07: "Chapter 7: Town Area",
  C08: "Chapter 8: Wondrous Campground",
};