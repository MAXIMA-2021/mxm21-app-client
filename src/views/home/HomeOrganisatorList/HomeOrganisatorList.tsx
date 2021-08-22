import React, { useEffect, useState } from "react";
import "./HomeOrganisatorList.scss";
import { Palette } from "../../../types/enums";
import { Flex, Image, Grid, Skeleton, useMediaQuery } from "@chakra-ui/react";
import {
  cat1,
  cat2,
  cat3,
  cat4,
  cat5,
  cat6,
  cat7,
  cat8,
  homeMaxiTalk,
} from "../../../assets/home";
import { MxmDivider } from "../../../shared/styled/input";
import { useHistory, useLocation, useParams } from "react-router-dom";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { MxmButton } from "../../../shared/styled/buttons";
import homeService from "../../../services/home";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

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

const HomeOrganisatorList = () => {
  const [data, setData] = useState<any>();
  const { homeChapter } = useParams<{ homeChapter: string }>();
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const history = useHistory();

  const [isShorterThan800px] = useMediaQuery("(max-height: 750px)");
  const [isSmallerThan886px] = useMediaQuery("(max-width: 886px)");

  var images: any = [];

  images[0] = <Image src={cat1} alt="chapter logo" />;
  images[1] = <Image src={cat2} alt="chapter logo" />;
  images[2] = <Image src={cat3} alt="chapter logo" />;
  images[3] = <Image src={cat4} alt="chapter logo" />;
  images[4] = <Image src={cat5} alt="chapter logo" />;
  images[5] = <Image src={cat6} alt="chapter logo" />;
  images[6] = <Image src={cat7} alt="chapter logo" />;
  images[7] = <Image src={cat8} alt="chapter logo" />;

  window.sessionStorage.setItem("chapter", homeChapter);

  useEffect(() => {
    document.title = "HoME 2021: Daftar Organisator";
    setLoading(true);
    setImageLoading(true);
    const fetchData = async () => {
      try {
        const returnedData = await homeService.getChapterData(homeChapter);
        console.log(returnedData[0].home);
        setData(returnedData[0]);
      } catch (error) {
        Swal.fire({
          title: "Perhatian!",
          text: error.response?.data.message,
          icon: "error",
          confirmButtonText: "Coba lagi",
        });
      }
    };
    setLoading(false);
    fetchData();
  }, []);

  var chapter: JSX.Element = images[Number(homeChapter?.slice(-1)) - 1];

  const findSearchKey = (IDhome: any) => {
    for (let homeDataX in data) {
      if (data[homeDataX]["homeID"] == IDhome) {
        return data[homeDataX]["search_key"];
      }
    }
  };

  const showSkeleton = () => {
    return (
      <Skeleton
        startColor={Palette.Cyan}
        endColor={Palette.Navy}
        height="100px"
        width="100px"
      />
    );
  };

  return (
    <motion.div
      initial="rest"
      animate="enter"
      exit="exit"
      variants={cardVariants}
    >
      <Flex
        bg={"#FBCF10"}
        className="home-orglist-outer_container"
        justifyContent="center"
        h={
          isShorterThan800px || isSmallerThan886px
            ? "max-content"
            : {
                base: "calc(100vh - 3.5rem)",
                md: "calc(100vh - 4rem)",
                xl: "calc(100vh - 5rem)",
              }
        }
        padding={{
          base: "1rem",
          md: "2rem",
        }}
      >
        <Flex className="home-orglist-inner_container" w="100%" h="100%">
          <Grid className="home-orglist-grid-header">
            <div className="home-orglist-chap-logo">{chapter}</div>
            <div
              className="home-orglist-chap-desc"
              style={{ backgroundColor: Palette.Navy }}
            >
              <div
                className="chap-desc-image"
                style={{ backgroundColor: Palette.Yellow }}
              >
                <Image src={homeMaxiTalk} alt="maxi" width="100px" />
              </div>
              <div className="chap-desc-text">
                <p style={{ color: Palette.Yellow }}>{data?.message}</p>
              </div>
            </div>
            <MxmDivider
              color={Palette.Yellow}
              margin={"2rem 0 1rem 0"}
              height={"5px"}
              className="home-orglist-divider"
            />
          </Grid>
          <Flex className="home-orglist-content_container">
            {data?.home.map((item: any, index: any) => (
              <Grid className="home-orglist-content-grid" key={index}>
                {console.log(item)}
                <div
                  className="content-org-logo"
                  onClick={() => {
                    history.push(
                      `/home/organisator-detail/${item?.search_key}`
                    );
                  }}
                >
                  <Skeleton
                    startColor={Palette.Cyan}
                    endColor={Palette.Navy}
                    height="100px"
                    width="100px"
                    isLoaded={!imageLoading}
                    borderRadius="10px"
                  >
                    <Image
                      src={item?.linkLogo}
                      alt={`logo ${item?.name}`}
                      onLoad={() => setImageLoading(false)}
                    />
                  </Skeleton>
                </div>
                <div
                  className="content-org-desc"
                  onClick={() => {
                    history.push(
                      `/home/organisator-detail/${item?.search_key}`
                    );
                  }}
                  style={{
                    backgroundColor: Palette.Yellow,
                    color: Palette.Navy,
                  }}
                >
                  <h3>{item?.name}</h3>
                  <p>{item?.shortDesc}</p>
                </div>
                <div className="home-orglist-arrow_icon">
                  <button
                    onClick={() => {
                      history.push(
                        `/home/organisator-detail/${item?.search_key}`
                      );
                    }}
                  >
                    <PlayArrowIcon />
                  </button>
                </div>
              </Grid>
            ))}
          </Flex>
          <motion.div
            className="home-orglist-back-btn"
            variants={buttonVariants}
            initial="rest"
            animate="enter"
            exit="exit"
          >
            <MxmButton
              onClick={() => history.push("/home/category")}
              variant="squared"
              colorScheme="cyan-navy"
            >
              Kembali
            </MxmButton>
          </motion.div>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default HomeOrganisatorList;
