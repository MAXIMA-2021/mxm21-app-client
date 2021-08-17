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
  useMediaQuery,
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
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
  const [isShorterThan800px] = useMediaQuery("(max-height: 750px)");
  const [isWiderThan820px] = useMediaQuery("(min-width: 820px)");

  useEffect(() => {
    document.title = "HoME 2021 - Detail Organisator";
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
      } catch (error) {
        Swal.fire({
          title: "Perhatian!",
          text: error.response?.data.message,
          icon: "error",
          confirmButtonText: "Coba lagi",
        });
      } finally {
        if (!isLoaded && !visible) {
          setTimeout(() => {
            setVisible(true);
            setIsLoaded(true);
          }, 10000);
        }
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
    <>
      <Flex
        h="auto"
        padding={{
          base: "1rem",
          md: "2rem",
        }}
        bg={"#164273"}
        className="home-cvr-outer_container"
        overflow="hidden"
      >
        <Flex className="detail-content">
          <Flex alignItems="center" direction="column">
            <div className="title">{homeDetail.name}</div>
            <div className="subtitle">{chapterName()}</div>
          </Flex>
          <div className="flex-container">
            <div className="iframe-container">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  title="Video STATE"
                  src={homeDetail.linkYoutube}
                  allowFullScreen
                  frameBorder="0"
                  className="iframe-radius"
                />
              </AspectRatio>
            </div>
            <div className="img-container">
              {images.length === 0 ? (
                <Flex
                  w="100%"
                  h="100%"
                  bgColor="lightgrey"
                  textAlign="center"
                  border="1px solid black"
                >
                  <Center w="100%">
                    Anda belum memasukkan foto untuk {homeDetail.name}
                  </Center>
                </Flex>
              ) : (
                <Carousel
                  infiniteLoop
                  useKeyboardArrows
                  autoPlay
                  stopOnHover
                  swipeable
                  interval={6000}
                  emulateTouch
                  showThumbs={false}
                  className="slide"
                >
                  {images.map((image) => (
                    <AspectRatio ratio={16 / 9}>
                      <div key={image.original}>
                        <img
                          src={image.original}
                          alt="Foto Kegiatan Organisator"
                          style={{ borderRadius: 5 }}
                        />
                      </div>
                    </AspectRatio>
                  ))}
                </Carousel>
              )}
            </div>
          </div>
          <div className="desc-detail">{homeDetail.longDesc}</div>
          <div className="btn-div">
            <MxmButton
              variant="squared"
              colorScheme="navy-cyan"
              className="btn-detail"
              onClick={() => history.push("/home/category")}
            >
              Kembali ke Zona
            </MxmButton>
            <MxmButton
              variant="squared"
              colorScheme="cyan-navy"
              className="btn-detail"
              onClick={() =>
                history.push("/home/twibbon", {
                  status: true,
                })
              }
            >
              Dapatkan Twibbon
            </MxmButton>
          </div>
        </Flex>
      </Flex>
    </>
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
  C05: "Chapter 5: Tomorrowville",
  C06: "Chapter 6: Adventure Land",
  C07: "Chapter 7: Town Area",
  C08: "Chapter 8: Wondrous Campground",
};
