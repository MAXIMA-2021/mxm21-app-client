import React, { useEffect, useState } from "react";
import { AspectRatio, Flex, Center } from "@chakra-ui/react";
import { MxmButton } from "../../../shared/styled/buttons";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import adminService from "../../../services/admin";
import { motion } from "framer-motion";
import "./HomeOrganisatorDetail.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const cardVariants = {
  rest: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
  exit: { x: -100, opacity: 1, transition: { delay: 0.2, ...transition } },
};
const buttonVariants = {
  exit: { y: "-50%", opacity: 0, transition: { delay: 0.2, ...transition } },
  rest: { y: "50%", opacity: 0, transition: { delay: 0.2, ...transition } },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};
const frameVariants = {
  rest: { opacity: 0 },
  enter: { opacity: 1, transition: { delay: 0, ...transition } },
  exit: { opacity: 0, transition: { delay: 0.6, ...transition } },
};
const HomeOrganisatorDetail = () => {
  const [visible, setVisible] = useState(false);
  const [homeDetail, setHomeDetail] = useState<any>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { searchKey } = useParams<{ searchKey: string }>();
  const history = useHistory();
  const [images, setImages] = useState([]);

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
  const chapterName = () => {
    const kode = homeDetail.kategori?.slice(-1);
    const nama = eval(`chapterSub.C0${kode}`);
    return nama;
  };
  return (
    <>
      <motion.div
        variants={frameVariants}
        initial="rest"
        animate="enter"
        exit="exit"
      >
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
            <motion.div variants={cardVariants}>
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
                          <div key={image["original"]}>
                            <img
                              src={image["original"]}
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
            </motion.div>
            <motion.div variants={buttonVariants}>
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
            </motion.div>
          </Flex>
        </Flex>
      </motion.div>
    </>
  );
};
export default HomeOrganisatorDetail;

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
