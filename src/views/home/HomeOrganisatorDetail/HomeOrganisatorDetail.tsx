import React, { useEffect, useState } from "react";
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Skeleton,
  Spacer,
  Grid,
  Center,
} from "@chakra-ui/react";
import { Palette } from "../../../types/enums";
import { createIcon } from "@chakra-ui/icons";
import { Carousell } from "./OrganisatorCarousell";
import { MxmButton } from "../../../shared/styled/buttons";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import adminService from "../../../services/admin";
import { motion } from "framer-motion";
import "./HomeOrganisatorDetail.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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

const frameVariants = {
  rest: { opacity: 0 },
  enter: { opacity: 1, transition: { delay: 0, ...transition } },
  exit: { opacity: 0, transition: { delay: 0.6, ...transition } },
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

  const [images, setImages] = useState([]);
  const validator =
    /(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/;
  let [validation, setValidation] = useState(null);
  useEffect(() => {
    document.title = "HoME Organisator Detail";

    const fetchData = async () => {
      try {
        const data = await adminService.getHomeBySearchKey(searchKey);
        setHomeDetail(data[0]);
        console.log(data[0]);

        for (let media of data[0].home_media) {
          setImages((prevImages: any) => [
            ...prevImages,
            { original: media.linkMedia },
          ]);
        }
        console.log(images);
        validation = homeDetail.linkYoutube.match(validator);
        console.log(validation);
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
        className="home-cvr-outer_container"
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
            className="home-cvr-middle_container"
            flexDirection="column"
            py={5}
            px={10}
          >
            <Heading
              color={Palette.Navy}
              fontFamily="Rubik"
              fontWeight="700"
              fontSize={{ base: "2rem", md: "2.15rem", "2xl": "4rem" }}
              letterSpacing="0.1rem"
            >
              Hocus Pocus
            </Heading>
            <Text
              backgroundColor={Palette.Navy}
              color="white"
              fontFamily="Rubik"
              fontWeight="400"
              fontSize={{ base: "0.8rem", md: "1rem", "2xl": "1.5rem" }}
              mt="0.5rem"
              px="0.4rem"
              borderRadius="5px"
              mb="1.5rem"
            >
              {chapterName()}
            </Text>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
              gap={6}
              width="100%"
              height="100%"
            >
              <div className="container">
                {validation !== null ? (
                  <iframe
                    title="video"
                    src={homeDetail.linkYoutube}
                    allowFullScreen
                    className="responsive-iframe"
                  />
                ) : (
                  <Flex w="100%" h="100%" bgColor="grey">
                    Video tidak dapat dimuat
                  </Flex>
                )}
                <iframe
                  title="video"
                  src={homeDetail.linkYoutube}
                  allowFullScreen
                  className="responsive-iframe"
                />
              </div>
              <div className="carousel">
                <ImageGallery
                  items={images}
                  showThumbnails={false}
                  showNav={true}
                  showBullets={true}
                  showPlayButton={false}
                  thumbnailPosition="bottom"
                  className="responsive-iframe"
                />
              </div>
            </Grid>
            <Heading
              color={Palette.Navy}
              fontFamily="Rubik"
              fontWeight="700"
              fontSize={{ base: "2rem", md: "2.15rem", "2xl": "4rem" }}
              // letterSpacing="0.1rem"
              textAlign="left"
              width="100%"
              mt="1rem"
            >
              {homeDetail.name}
            </Heading>
            <Text
              textAlign="justify"
              fontFamily="Poppins"
              fontWeight="400"
              mb="1.5rem"
            >
              {homeDetail.longDesc}
            </Text>
            <Flex
              flexDir={{ base: "column", md: "row" }}
              h={{ base: "6rem", md: "max-content" }}
              width="100%"
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
              >
                Back to Chapter
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
              >
                Go to Twibbon
              </MxmButton>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
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
