import React, { useEffect, useState } from "react";
import { AspectRatio, Flex, Skeleton } from "@chakra-ui/react";
import { MxmButton } from "../../../shared/styled/buttons";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import adminService from "../../../services/admin";
import { motion } from "framer-motion";
import "./HomeOrganisatorDetail.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Palette } from "../../../types/enums";

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

const HomeOrganisatorDetail = () => {
  const [visible, setVisible] = useState(false);
  const [homeDetail, setHomeDetail] = useState<any>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingInfo, setLoadingInfo] = useState(false);
  const { searchKey } = useParams<{ searchKey: string }>();
  const history = useHistory();
  const [images, setImages] = useState<any>([]);

  window.sessionStorage.setItem("organisator", searchKey);

  useEffect(() => {
    document.title = `HoME 2021: Detail Organisator`;
    const fetchData = async () => {
      try {
        const data = await adminService.getHomeBySearchKey(searchKey);
        setHomeDetail(data[0]);
        setTimeout(() => {
          setLoadingInfo(true);
        }, 300);
        for (let media of data[0].home_media) {
          setImages((prevImages: string[]) => [
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
          }, 500);
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
              <Skeleton isLoaded={loadingInfo} borderRadius="5px">
                <div className="title">{homeDetail.name}</div>
              </Skeleton>
              <Skeleton isLoaded={loadingInfo} borderRadius="5px">
                <div className="subtitle">{chapterName()}</div>
              </Skeleton>
            </Flex>
            <motion.div variants={cardVariants}>
              <div className="flex-container">
                <div className="iframe-container">
                  <Skeleton
                    isLoaded={loadingInfo}
                    startColor={Palette.Cyan}
                    endColor={Palette.Navy}
                  >
                    <AspectRatio ratio={16 / 9}>
                      <iframe
                        title="Video STATE"
                        src={homeDetail.linkYoutube}
                        allowFullScreen
                        frameBorder="0"
                        className="iframe-radius"
                      />
                    </AspectRatio>
                  </Skeleton>
                </div>
                <div className="img-container">
                  <Skeleton
                    isLoaded={isLoaded}
                    startColor={Palette.Cyan}
                    endColor={Palette.Navy}
                  >
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
                      {images.map((image: any) => (
                        <div key={image["original"]}>
                          <AspectRatio ratio={16 / 9}>
                            <img
                              src={image["original"]}
                              alt="Foto Kegiatan Organisator"
                              style={{ borderRadius: 5 }}
                            />
                          </AspectRatio>
                        </div>
                      ))}
                    </Carousel>
                  </Skeleton>
                </div>
              </div>
              <div className="desc-detail">
                <Skeleton isLoaded={loadingInfo} borderRadius="5px">
                  {homeDetail.longDesc}
                </Skeleton>
                <br />
                <br />
                <div className="social-org">
                  <Skeleton
                    isLoaded={loadingInfo}
                    startColor={Palette.Cyan}
                    endColor={Palette.Navy}
                    borderRadius="5px"
                  >
                    Jika kamu tertarik, silakan kunjungi media sosial{" "}
                    {homeDetail.name}:
                  </Skeleton>
                  <br />
                  <div className="svg-div">
                    <Skeleton
                      isLoaded={loadingInfo}
                      startColor={Palette.Cyan}
                      endColor={Palette.Navy}
                      borderRadius="5px"
                    >
                      <div className="svg-org">
                        <a
                          href={`https://line.me/R/ti/p/@${homeDetail.lineID}`}
                          target="blank"
                        >
                          <svg
                            viewBox="0 0 476 476"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M372.867 476H103.133C46.1742 476 0 429.826 0 372.867V103.133C0 46.1742 46.1742 0 103.133 0H372.867C429.826 0 476 46.1742 476 103.133V372.867C476 429.826 429.826 476 372.867 476Z"
                              fill="#00B900"
                            />
                            <path
                              d="M410.534 217.069C410.534 139.521 332.79 76.429 237.226 76.429C141.672 76.429 63.9206 139.521 63.9206 217.069C63.9206 286.592 125.576 344.816 208.86 355.826C214.504 357.042 222.186 359.545 224.128 364.372C225.877 368.75 225.271 375.615 224.69 380.042C224.69 380.042 222.655 392.271 222.215 394.877C221.461 399.258 218.733 412.013 237.226 404.221C255.724 396.427 337.034 345.451 373.393 303.6H373.387C398.502 276.056 410.534 248.106 410.534 217.069V217.069Z"
                              fill="white"
                            />
                            <path
                              d="M202.013 179.595H189.858C187.994 179.595 186.482 181.105 186.482 182.965V258.479C186.482 260.339 187.994 261.846 189.858 261.846H202.013C203.878 261.846 205.392 260.339 205.392 258.479V182.965C205.392 181.105 203.878 179.595 202.013 179.595Z"
                              fill="#00B900"
                            />
                            <path
                              d="M285.686 179.595H273.53C271.666 179.595 270.157 181.105 270.157 182.965V227.83L235.55 181.094C235.47 180.975 235.38 180.862 235.287 180.752C235.278 180.746 235.272 180.737 235.265 180.73C235.199 180.657 235.131 180.589 235.063 180.523C235.041 180.503 235.021 180.483 235.001 180.466C234.944 180.413 234.882 180.362 234.818 180.316C234.791 180.289 234.761 180.267 234.732 180.248C234.675 180.206 234.617 180.164 234.558 180.126C234.523 180.104 234.492 180.084 234.457 180.065C234.395 180.032 234.335 179.994 234.274 179.963C234.238 179.948 234.203 179.93 234.168 179.913C234.104 179.886 234.042 179.855 233.974 179.831C233.934 179.818 233.903 179.802 233.864 179.791C233.8 179.767 233.734 179.747 233.665 179.725C233.626 179.716 233.588 179.708 233.546 179.697C233.48 179.679 233.419 179.666 233.352 179.653C233.306 179.644 233.258 179.639 233.211 179.633C233.152 179.622 233.092 179.617 233.033 179.611C232.976 179.606 232.918 179.604 232.859 179.602C232.817 179.602 232.782 179.595 232.74 179.595H220.584C218.722 179.595 217.21 181.105 217.21 182.965V258.479C217.21 260.339 218.722 261.846 220.584 261.846H232.74C234.604 261.846 236.118 260.339 236.118 258.479V213.631L270.765 260.425C271.003 260.76 271.3 261.038 271.622 261.256C271.633 261.264 271.646 261.271 271.657 261.282C271.726 261.326 271.794 261.37 271.864 261.41C271.9 261.428 271.928 261.445 271.961 261.461C272.014 261.489 272.067 261.516 272.122 261.54C272.177 261.562 272.23 261.586 272.287 261.608C272.323 261.624 272.351 261.637 272.389 261.648C272.468 261.674 272.541 261.699 272.618 261.721C272.633 261.723 272.651 261.729 272.667 261.732C272.94 261.807 273.231 261.846 273.53 261.846H285.686C287.553 261.846 289.062 260.339 289.062 258.479V182.965C289.062 181.105 287.553 179.595 285.686 179.595V179.595Z"
                              fill="#00B900"
                            />
                            <path
                              d="M172.711 242.938H139.68V182.967C139.68 181.105 138.17 179.595 136.308 179.595H124.15C122.286 179.595 120.774 181.105 120.774 182.967V258.472V258.477C120.774 259.385 121.133 260.204 121.717 260.808C121.73 260.826 121.744 260.844 121.763 260.861C121.781 260.877 121.797 260.89 121.814 260.907C122.42 261.489 123.24 261.848 124.143 261.848H124.15H172.711C174.573 261.848 176.083 260.335 176.083 258.472V246.315C176.083 244.452 174.573 242.938 172.711 242.938V242.938Z"
                              fill="#00B900"
                            />
                            <path
                              d="M352.817 198.503C354.682 198.503 356.189 196.993 356.189 195.129V182.973C356.189 181.107 354.682 179.595 352.817 179.595H304.257H304.25C303.34 179.595 302.518 179.959 301.91 180.547C301.899 180.56 301.881 180.571 301.872 180.582C301.852 180.605 301.833 180.624 301.817 180.642C301.24 181.248 300.881 182.066 300.881 182.967V182.973V258.472V258.479C300.881 259.385 301.242 260.204 301.824 260.811C301.837 260.826 301.855 260.844 301.872 260.861C301.885 260.874 301.903 260.892 301.921 260.905C302.525 261.487 303.344 261.848 304.25 261.848H304.257H352.817C354.682 261.848 356.189 260.337 356.189 258.472V246.315C356.189 244.452 354.682 242.938 352.817 242.938H319.791V230.177H352.817C354.682 230.177 356.189 228.665 356.189 226.799V214.645C356.189 212.779 354.682 211.267 352.817 211.267H319.791V198.503H352.817V198.503Z"
                              fill="#00B900"
                            />
                          </svg>
                        </a>
                      </div>
                    </Skeleton>{" "}
                    <Skeleton
                      isLoaded={loadingInfo}
                      startColor={Palette.Cyan}
                      endColor={Palette.Navy}
                      borderRadius="5px"
                    >
                      <div className="svg-org">
                        <a
                          href={`https://www.instagram.com/${homeDetail.instagram}`}
                          target="blank"
                        >
                          <svg
                            viewBox="0 0 476 476"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M238.077 0C138.715 0 109.655 0.10253 104.007 0.571253C83.6154 2.26668 70.9269 5.47813 57.1035 12.3624C46.4505 17.6537 38.0488 23.7874 29.757 32.3853C14.656 48.0654 5.50388 67.356 2.19081 90.2868C0.580042 101.419 0.111453 103.689 0.0162705 160.55C-0.0203381 179.504 0.0162705 204.448 0.0162705 237.906C0.0162705 337.215 0.126096 366.254 0.602006 371.894C2.24939 391.741 5.36111 404.228 11.9506 417.887C24.5439 444.032 48.5958 463.659 76.9307 470.983C86.7418 473.51 97.578 474.901 111.489 475.56C117.383 475.817 177.457 476 237.569 476C297.68 476 357.791 475.927 363.538 475.633C379.646 474.875 389 473.62 399.342 470.947C413.391 467.343 426.485 460.714 437.709 451.524C448.932 442.334 458.015 430.805 464.321 417.739C470.783 404.411 474.059 391.447 475.542 372.637C475.864 368.536 476 303.146 476 237.845C476 172.531 475.854 107.263 475.532 103.162C474.03 84.0467 470.754 71.1936 464.084 57.6082C458.611 46.4872 452.534 38.182 443.711 29.6903C427.97 14.6474 408.713 5.49277 385.763 2.18246C374.646 0.574913 372.43 0.0988711 315.541 0H238.077Z"
                              fill="url(#paint0_radial)"
                            />
                            <path
                              d="M238.077 0C138.715 0 109.655 0.10253 104.007 0.571253C83.6154 2.26668 70.9269 5.47813 57.1035 12.3624C46.4505 17.6537 38.0488 23.7874 29.757 32.3853C14.656 48.0654 5.50388 67.356 2.19081 90.2868C0.580042 101.419 0.111453 103.689 0.0162705 160.55C-0.0203381 179.504 0.0162705 204.448 0.0162705 237.906C0.0162705 337.215 0.126096 366.254 0.602006 371.894C2.24939 391.741 5.36111 404.228 11.9506 417.887C24.5439 444.032 48.5958 463.659 76.9307 470.983C86.7418 473.51 97.578 474.901 111.489 475.56C117.383 475.817 177.457 476 237.569 476C297.68 476 357.791 475.927 363.538 475.633C379.646 474.875 389 473.62 399.342 470.947C413.391 467.343 426.485 460.714 437.709 451.524C448.932 442.334 458.015 430.805 464.321 417.739C470.783 404.411 474.059 391.447 475.542 372.637C475.864 368.536 476 303.146 476 237.845C476 172.531 475.854 107.263 475.532 103.162C474.03 84.0467 470.754 71.1936 464.084 57.6082C458.611 46.4872 452.534 38.182 443.711 29.6903C427.97 14.6474 408.713 5.49277 385.763 2.18246C374.646 0.574913 372.43 0.0988711 315.541 0H238.077Z"
                              fill="url(#paint1_radial)"
                            />
                            <path
                              d="M238.013 62C190.213 62 184.215 62.2084 165.441 63.0604C146.704 63.9159 133.915 66.8738 122.724 71.2138C111.148 75.6963 101.329 81.6926 91.5461 91.4514C81.7562 101.206 75.7428 110.998 71.2327 122.537C66.8693 133.699 63.8993 146.456 63.056 165.132C62.22 183.852 62 189.837 62 237.501C62 285.163 62.2126 291.126 63.0633 309.847C63.925 328.53 66.8914 341.283 71.2401 352.442C75.7392 363.985 81.7526 373.776 91.539 383.531C101.318 393.293 111.137 399.304 122.706 403.787C133.904 408.126 146.697 411.084 165.431 411.94C184.204 412.791 190.199 413 237.995 413C285.797 413 291.778 412.791 310.552 411.94C329.289 411.084 342.092 408.126 353.29 403.787C364.863 399.304 374.667 393.293 384.447 383.531C394.237 373.776 400.25 363.985 404.76 352.446C409.087 341.283 412.057 328.527 412.937 309.85C413.78 291.13 414 285.163 414 237.501C414 189.837 413.78 183.856 412.937 165.136C412.057 146.452 409.087 133.699 404.76 122.54C400.25 110.998 394.237 101.206 384.447 91.4514C374.656 81.6889 364.866 75.6927 353.279 71.2138C342.059 66.8738 329.263 63.9159 310.526 63.0604C291.752 62.2084 285.776 62 237.962 62H238.013ZM222.224 93.6267C226.91 93.6195 232.139 93.6267 238.013 93.6267C285.006 93.6267 290.575 93.7951 309.132 94.6354C326.293 95.4179 335.606 98.2775 341.81 100.679C350.024 103.86 355.879 107.663 362.036 113.806C368.196 119.948 372.009 125.798 375.207 133.988C377.615 140.167 380.487 149.454 381.268 166.565C382.111 185.066 382.294 190.623 382.294 237.46C382.294 284.297 382.111 289.854 381.268 308.355C380.483 325.465 377.615 334.753 375.207 340.932C372.016 349.122 368.196 354.953 362.036 361.092C355.876 367.235 350.027 371.037 341.81 374.219C335.613 376.632 326.293 379.483 309.132 380.266C290.579 381.107 285.006 381.29 238.013 381.29C191.017 381.29 185.447 381.107 166.894 380.266C149.733 379.476 140.42 376.617 134.212 374.215C125.999 371.034 120.132 367.231 113.972 361.089C107.812 354.946 103.999 349.111 100.801 340.917C98.3917 334.738 95.5212 325.451 94.7401 308.34C93.8965 289.84 93.7276 284.282 93.7276 237.416C93.7276 190.55 93.8965 185.022 94.7401 166.522C95.5248 149.41 98.3917 140.123 100.801 133.937C103.992 125.747 107.812 119.896 113.972 113.754C120.132 107.612 125.999 103.81 134.212 100.621C140.416 98.208 149.733 95.3564 166.894 94.5695C183.13 93.8388 189.422 93.6195 222.224 93.583V93.6267ZM331.962 122.767C327.784 122.767 323.7 124.002 320.227 126.317C316.754 128.631 314.047 131.921 312.448 135.769C310.85 139.618 310.432 143.853 311.248 147.938C312.063 152.024 314.075 155.776 317.03 158.721C319.984 161.666 323.748 163.672 327.845 164.484C331.943 165.295 336.19 164.877 340.049 163.281C343.908 161.686 347.206 158.986 349.526 155.522C351.846 152.058 353.083 147.985 353.082 143.82C353.082 132.192 343.621 122.76 331.962 122.76V122.767ZM238.013 147.374C188.098 147.374 147.628 187.728 147.628 237.501C147.628 287.272 188.098 327.609 238.013 327.609C287.928 327.609 328.386 287.272 328.386 237.501C328.386 187.728 287.924 147.374 238.009 147.374H238.013ZM238.013 179C270.412 179 296.681 205.19 296.681 237.501C296.681 269.807 270.412 296 238.013 296C205.611 296 179.345 269.807 179.345 237.501C179.345 205.19 205.611 179 238.013 179Z"
                              fill="white"
                            />
                            <defs>
                              <radialGradient
                                id="paint0_radial"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(126.438 512.662) rotate(-90) scale(471.751 438.765)"
                              >
                                <stop stopColor="#FFDD55" />
                                <stop offset="0.1" stopColor="#FFDD55" />
                                <stop offset="0.5" stopColor="#FF543E" />
                                <stop offset="1" stopColor="#C837AB" />
                              </radialGradient>
                              <radialGradient
                                id="paint1_radial"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(-79.7325 34.2902) rotate(78.6806) scale(210.875 869.235)"
                              >
                                <stop stopColor="#3771C8" />
                                <stop offset="0.128" stopColor="#3771C8" />
                                <stop
                                  offset="1"
                                  stopColor="#6600FF"
                                  stopOpacity="0"
                                />
                              </radialGradient>
                            </defs>
                          </svg>
                        </a>
                      </div>
                    </Skeleton>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <div className="btn-div">
                <MxmButton
                  variant="squared"
                  colorScheme="navy-cyan"
                  className="btn-detail"
                  onClick={() => { history.goBack() }}
                >
                  Kembali
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
