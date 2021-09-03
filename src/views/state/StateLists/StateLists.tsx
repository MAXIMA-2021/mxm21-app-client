import React, { useEffect } from "react";
import { useState } from "react";
import {
  Box,
  Flex,
  Grid,
  Text,
  Center,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  chakra,
  useTab,
  useStyles,
  useDisclosure,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { MxmHeading } from "../../../shared/styled/containers";
import { createIcon } from "@chakra-ui/icons";
import "./StateLists.scss";
import Swal from "sweetalert2";
import stateService from "../../../services/state";
import { StateModal } from "../../../shared/component/StateModal";
import { motion } from "framer-motion";
import { MxmButton } from "../../../shared/styled/buttons";
import { NavLink, useHistory } from "react-router-dom";

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
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
};

const XimaIcon = createIcon({
  displayName: "XimaIcon",
  path: (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="-1px"
      width="30px"
      height="30px"
      viewBox="0 0 120 120"
      enable-background="new 0 0 98 98"
      xmlSpace="preserve"
    >
      <g>
        <defs>
          <rect
            id="SVGID_1_"
            x="-291.566"
            y="-41.265"
            width="584.233"
            height="328.631"
          />
        </defs>
        <clipPath id="SVGID_2_">
          <use xlinkHref="#SVGID_1_" overflow="visible" />
        </clipPath>
        <path
          clip-path="url(#SVGID_2_)"
          fill="#ED328C"
          d="M37.173,98.57c0.435-1.343,0.676-2.772,0.676-4.26
		c0-7.642-6.195-13.837-13.836-13.837c-7.642,0-13.836,6.195-13.836,13.837c0,1.487,0.241,2.917,0.675,4.26H37.173z"
        />
        <path
          clip-path="url(#SVGID_2_)"
          fill="#ED328C"
          d="M87.527,98.57c0.617-1.569,0.968-3.271,0.968-5.06
		c0-7.641-6.194-13.836-13.836-13.836c-7.641,0-13.836,6.195-13.836,13.836c0,1.789,0.35,3.49,0.967,5.06H87.527z"
        />
        <path
          clip-path="url(#SVGID_2_)"
          fill="#DDAE8B"
          d="M46.445,74.354h5.574c0.418,0,0.761,0.341,0.761,0.761v9.121
		c0,0.418-0.342,0.761-0.761,0.761h-5.574c-0.418,0-0.761-0.343-0.761-0.761v-9.121C45.685,74.695,46.027,74.354,46.445,74.354"
        />
        <path
          clip-path="url(#SVGID_2_)"
          fill="#FDC694"
          d="M70.981,98.57c-4.602-9.255-11.501-16.729-21.646-15.259
		c-10.146-1.47-17.043,6.004-21.646,15.259H70.981z"
        />
        <path
          clip-path="url(#SVGID_2_)"
          fill="#DF227D"
          d="M85.966,60.251c0,8.377-6.79,15.167-15.167,15.167
		c-8.376,0-15.167-6.79-15.167-15.167c0-8.376,6.791-15.167,15.167-15.167C79.176,45.084,85.966,51.875,85.966,60.251"
        />
        <path
          clip-path="url(#SVGID_2_)"
          fill="#DF227D"
          d="M70.09,72.712c0,3.552-2.878,6.432-6.43,6.432c-3.55,0-6.43-2.88-6.43-6.432
		c0-3.551,2.88-6.43,6.43-6.43C67.211,66.282,70.09,69.161,70.09,72.712"
        />
        <path
          clip-path="url(#SVGID_2_)"
          fill="#CD237B"
          d="M55.101,43.621c0,8.891-7.207,16.099-16.098,16.099
		s-16.099-7.208-16.099-16.099c0-8.892,7.208-16.098,16.099-16.098S55.101,34.729,55.101,43.621"
        />
        <path
          clip-path="url(#SVGID_2_)"
          fill="#CD237B"
          d="M12.527,60.251c0,8.377,6.791,15.167,15.167,15.167s15.167-6.79,15.167-15.167
		c0-8.376-6.791-15.167-15.167-15.167S12.527,51.875,12.527,60.251"
        />
        <path
          clip-path="url(#SVGID_2_)"
          fill="#CD237B"
          d="M28.404,72.712c0,3.552,2.879,6.432,6.43,6.432c3.551,0,6.43-2.88,6.43-6.432
		c0-3.551-2.879-6.43-6.43-6.43C31.283,66.282,28.404,69.161,28.404,72.712"
        />
        <path
          clip-path="url(#SVGID_2_)"
          fill="#DDAE8B"
          d="M30.875,54.578c-3.305,0-5.983,2.679-5.983,5.983
		c0,3.304,2.679,5.984,5.983,5.984V54.578z"
        />
        <path
          clip-path="url(#SVGID_2_)"
          fill="#DDAE8B"
          d="M67.744,66.546c3.304,0,5.983-2.681,5.983-5.984
		c0-3.305-2.68-5.983-5.983-5.983V66.546z"
        />
        <path
          clip-path="url(#SVGID_2_)"
          fill="#FDC694"
          d="M68.775,59.736c0,10.825-8.775,19.601-19.602,19.601
		c-10.825,0-19.602-8.775-19.602-19.601c0-10.827,8.776-19.603,19.602-19.603C60,40.134,68.775,48.909,68.775,59.736"
        />
        <path
          clip-path="url(#SVGID_2_)"
          fill="#CD237B"
          d="M37.968,7.522c3.601-1.446,6.416-0.898,7.575-0.545
		c0.345,0.105,0.581,0.419,0.591,0.78c0.08,2.815,0.411,15.059,0.129,15.276l-5.433,1.104c-0.344-0.091-4.822-11.49-5.849-14.113
		c-0.132-0.336-0.037-0.718,0.239-0.948c0.929-0.777,3.307-2.383,7.186-2.458"
        />
        <path
          clip-path="url(#SVGID_2_)"
          fill="#FBD111"
          d="M46.378,19.919c-3.654-1.054-6.866,1.381-6.866,1.381l0.321,0.841
		c0.153,0.398,0.329,0.788,0.526,1.166l0.195,0.553l5.76-1.172l0.037-0.485l0.025-0.91L46.378,19.919z"
        />
        <path
          clip-path="url(#SVGID_2_)"
          fill="#ED328C"
          d="M52.62,22.715L35.332,26.23c-0.183,0.038-0.362-0.082-0.399-0.265L34.715,24.9
		c-0.037-0.183,0.083-0.362,0.265-0.399l17.287-3.517c0.183-0.036,0.363,0.082,0.4,0.265l0.216,1.064
		C52.921,22.497,52.803,22.678,52.62,22.715"
        />
        <path
          clip-path="url(#SVGID_2_)"
          fill="#FBD111"
          d="M48.818,16.742c0.585-0.885,1.778-1.127,2.664-0.542
		c0.885,0.586,1.128,1.778,0.542,2.663c-0.586,0.887-2.315,1.941-3.201,1.354C47.938,19.633,48.232,17.627,48.818,16.742"
        />
        <path
          clip-path="url(#SVGID_2_)"
          fill="#040303"
          d="M42.182,61.781h-1.55c-0.272,0-0.494-0.223-0.494-0.493v-5.799
		c0-0.271,0.222-0.493,0.494-0.493h1.55c0.271,0,0.493,0.222,0.493,0.493v5.799C42.675,61.559,42.453,61.781,42.182,61.781"
        />

        <path
          clip-path="url(#SVGID_2_)"
          fill="none"
          stroke="#040303"
          stroke-width="2"
          stroke-linecap="round"
          stroke-miterlimit="10"
          d="
		M38.298,52.284c0.832-1.699,2.875-2.43,4.599-1.629"
        />
        <path
          clip-path="url(#SVGID_2_)"
          fill="#FFFFFF"
          d="M56.638,65.337c0,3.589-3.333,6.755-7.442,6.755s-7.441-3.166-7.441-6.755
		c4.77-0.842,9.681-0.865,14.461-0.071L56.638,65.337z"
        />
        <path
          clip-path="url(#SVGID_2_)"
          fill="#ED328C"
          d="M69.53,98.57c-4.124-5.103-9.742-8.784-17.383-8.784h-5.165
		c-7.647,0.259-13.287,3.86-17.438,8.784H69.53z"
        />

        <path
          clip-path="url(#SVGID_2_)"
          fill="none"
          stroke="#040303"
          stroke-width="2"
          stroke-linecap="round"
          stroke-miterlimit="10"
          d="
		M54.198,59.344c1.371-1.305,3.54-1.279,4.878,0.071"
        />
        <path
          clip-path="url(#SVGID_2_)"
          fill="#EE3A90"
          d="M43.394,43.621c0,8.891,7.207,16.099,16.098,16.099
		c8.891,0,16.098-7.208,16.098-16.099c0-8.892-7.207-16.098-16.098-16.098C50.601,27.523,43.394,34.729,43.394,43.621"
        />
      </g>
    </svg>
  ),
});

const StyledTab = chakra("button", { themeKey: "Tabs.Tab" });

const CustomTab: any = React.forwardRef((props, ref) => {
  const tabProps = useTab(props);
  const isSelected = !!tabProps["aria-selected"];
  const styles = useStyles();

  return (
    <StyledTab __css={styles.tab} {...tabProps}>
      <Box>
        {isSelected ? <XimaIcon mr={2} /> : ""}
        {tabProps.children}
      </Box>
    </StyledTab>
  );
});

const Card = (props: any) => {
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [registerStatus, setRegisterStatus] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const handleRegister = async () => {
    try {
      setLoading(true);
      const data = {
        stateID: props.stateID,
      };
      await stateService.registerState(data);
      props.fetchData();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `STATE ${props.name} berhasil diambil!`,
        showConfirmButton: false,
        timer: 1000,
      });
      setLoading(false);
      setRegisterStatus(false);
      history.push("/state");
    } catch (error) {
      Swal.fire({
        title: "Perhatian!",
        text: error.response?.data.message,
        icon: "error",
        confirmButtonText: "Coba lagi",
      });
      setLoading(false);
      setRegisterStatus(false);
    }
  };

  return (
    <>
      <StateModal.PilihState
        closeOnOverlayClick={false}
        isOpen={registerStatus}
        onClose={() => setRegisterStatus(false)}
        {...props}
        loading={loading}
        handleRegister={handleRegister}
      />
      <button
        onClick={() => setRegisterStatus(true)}
        style={{ pointerEvents: props.status === "full" ? "none" : "auto" }}
      >
        <div className={props.status === "full" ? "card full" : "card"}>
          <div className="container-card">
            <div
              className="header"
              style={{
                backgroundImage: `url(${props.coverPhoto})`,
              }}
            ></div>
            <div className="card-img">
              <SkeletonCircle size="56px" isLoaded={!imageLoading}>
                <img
                  src={props.stateLogo}
                  alt="logo"
                  onLoad={() => setImageLoading(false)}
                />
              </SkeletonCircle>
            </div>
            <div className="card-text">
              <div className="name">{props.name}</div>
              <div className="category">{props.category}</div>
              {imageLoading ? (
                <SkeletonText mt="4" noOfLines={5} spacing="" />
              ) : (
                <div className="desc">{props.shortDesc}</div>
              )}
            </div>
            <div className={props.status === "full" ? "kuota full" : "kuota"}>
              {props.status === "full" ? (
                "PENUH"
              ) : (
                <Text>
                  <span className="kuota-head">KUOTA TERISI</span>
                  <br />
                  {props.registered}/{props.quota}
                </Text>
              )}
            </div>
          </div>
        </div>
      </button>
    </>
  );
};

const StateLists = () => {
  const [data, setData] = useState([]);
  const [hari, setHari] = useState(0);
  const [tanggalState, setTanggalState] = useState<any>();

  const fetchData = async () => {
    try {
      const returnedData = await stateService.getStateList();
      setData(returnedData);
    } catch (error) {
      Swal.fire({
        title: "Perhatian!",
        text: error.response?.data.message,
        icon: "error",
        confirmButtonText: "Coba lagi",
      });
    }
  };

  const searchTanggalState = (hari: number) => {
    const object: any = data?.find(
      (state) => state.day === `D${hari.toString()}`
    );
    return object?.tanggal;
  };

  useEffect(() => {
    document.title = "STATE 2021 - Daftar STATE";
    setHari(1);
    fetchData();
  }, []);

  return (
    <Box overflow="hidden">
      <motion.div
        initial="rest"
        animate="enter"
        exit="exit"
        variants={cardVariants}
      >
        <Flex direction="column" mb="2.5rem">
          <Center>
            <Tabs defaultIndex={0} onChange={(index) => setHari(index + 1)}>
              <Center my="2rem">
                <MxmHeading>Pilih STATE</MxmHeading>
              </Center>
              <Center>
                <Heading fontSize="1rem" mt="-1.5rem" mb="2rem">
                  Silakan pilih STATE yang kamu mau!
                  <Skeleton />
                </Heading>
              </Center>
              <Flex
                direction="column"
                px="2rem"
                py="1rem"
                background="#F9F9F9"
                borderRadius={15}
                border="2px solid #164273"
                className="light"
              >
                <TabList>
                  <CustomTab>Hari ke-1</CustomTab>
                  <CustomTab>Hari ke-2</CustomTab>
                  <CustomTab>Hari ke-3</CustomTab>
                  <CustomTab>Hari ke-4</CustomTab>
                  <CustomTab>Hari ke-5</CustomTab>
                </TabList>
                <Text
                  background="#164273"
                  color="white"
                  textAlign="center"
                  width="100%"
                  mt="1.5rem"
                  mb="1rem"
                  fontSize="1.05rem"
                  fontWeight="500"
                  borderRadius="5px"
                  py="0.3rem"
                >
                  STATE Hari ke-{hari}: {searchTanggalState(hari)}
                </Text>
                <TabPanels>
                  <TabPanel
                    pt="0.5rem"
                    pb="0.5rem"
                    px="0"
                    justifyContent="center"
                    display="flex"
                  >
                    <Flex direction="column">
                      <Grid
                        templateColumns={{
                          sm: "repeat(2, 1fr)",
                          md: "repeat(3, 1fr)",
                          lg: "repeat(4, 1fr)",
                        }}
                        gap={8}
                      >
                        {data
                          .filter((card) => card.day === "D1")
                          .sort((a: any, b: any) => {
                            if (a?.name < b?.name) {
                              return -1;
                            }
                            if (a?.name > b?.name) {
                              return 1;
                            }
                            return 0;
                          })
                          .map((card) => {
                            return card.quota === card.registered ? (
                              <Card
                                fetchData={fetchData}
                                {...card}
                                status="full"
                              />
                            ) : (
                              <Card fetchData={fetchData} {...card} />
                            );
                          })}
                      </Grid>
                    </Flex>
                  </TabPanel>
                  <TabPanel
                    pt="0.5rem"
                    pb="0.5rem"
                    px="0"
                    justifyContent="center"
                    display="flex"
                  >
                    <Flex direction="column">
                      <Grid
                        templateColumns={{
                          sm: "repeat(2, 1fr)",
                          md: "repeat(3, 1fr)",
                          lg: "repeat(4, 1fr)",
                        }}
                        gap={8}
                      >
                        {data
                          .filter((card) => card.day === "D2")
                          .sort((a: any, b: any) => {
                            if (a?.name < b?.name) {
                              return -1;
                            }
                            if (a?.name > b?.name) {
                              return 1;
                            }
                            return 0;
                          })
                          .map((card) => {
                            return card.quota === card.registered ? (
                              <Card
                                fetchData={fetchData}
                                {...card}
                                status="full"
                              />
                            ) : (
                              <Card fetchData={fetchData} {...card} />
                            );
                          })}
                      </Grid>
                    </Flex>
                  </TabPanel>
                  <TabPanel
                    pt="0.5rem"
                    pb="0.5rem"
                    px="0"
                    justifyContent="center"
                    display="flex"
                  >
                    <Flex direction="column">
                      <Grid
                        templateColumns={{
                          sm: "repeat(2, 1fr)",
                          md: "repeat(3, 1fr)",
                          lg: "repeat(4, 1fr)",
                        }}
                        gap={8}
                      >
                        {data
                          .filter((card) => card.day === "D3")
                          .sort((a: any, b: any) => {
                            if (a?.name < b?.name) {
                              return -1;
                            }
                            if (a?.name > b?.name) {
                              return 1;
                            }
                            return 0;
                          })
                          .map((card) => {
                            return card.quota === card.registered ? (
                              <Card
                                fetchData={fetchData}
                                {...card}
                                status="full"
                              />
                            ) : (
                              <Card fetchData={fetchData} {...card} />
                            );
                          })}
                      </Grid>
                    </Flex>
                  </TabPanel>
                  <TabPanel
                    pt="0.5rem"
                    pb="0.5rem"
                    px="0"
                    justifyContent="center"
                    display="flex"
                  >
                    <Flex direction="column">
                      <Grid
                        templateColumns={{
                          sm: "repeat(2, 1fr)",
                          md: "repeat(3, 1fr)",
                          lg: "repeat(4, 1fr)",
                        }}
                        gap={8}
                      >
                        {data
                          .filter((card) => card.day === "D4")
                          .sort((a: any, b: any) => {
                            if (a?.name < b?.name) {
                              return -1;
                            }
                            if (a?.name > b?.name) {
                              return 1;
                            }
                            return 0;
                          })
                          .map((card) => {
                            return card.quota === card.registered ? (
                              <Card
                                fetchData={fetchData}
                                {...card}
                                status="full"
                              />
                            ) : (
                              <Card fetchData={fetchData} {...card} />
                            );
                          })}
                      </Grid>
                    </Flex>
                  </TabPanel>
                  <TabPanel
                    pt="0.5rem"
                    pb="0.5rem"
                    px="0"
                    justifyContent="center"
                    display="flex"
                  >
                    <Flex direction="column">
                      <Grid
                        templateColumns={{
                          sm: "repeat(2, 1fr)",
                          md: "repeat(3, 1fr)",
                          lg: "repeat(4, 1fr)",
                        }}
                        gap={8}
                      >
                        {data
                          .filter((card) => card.day === "D5")
                          .sort((a: any, b: any) => {
                            if (a?.name < b?.name) {
                              return -1;
                            }
                            if (a?.name > b?.name) {
                              return 1;
                            }
                            return 0;
                          })
                          .map((card) => {
                            return card.quota === card.registered ? (
                              <Card
                                fetchData={fetchData}
                                {...card}
                                status="full"
                              />
                            ) : (
                              <Card fetchData={fetchData} {...card} />
                            );
                          })}
                      </Grid>
                    </Flex>
                  </TabPanel>
                </TabPanels>
              </Flex>
              <motion.div
                style={{ width: "100% !impotant" }}
                initial="exit"
                animate="enter"
                exit="exit"
                variants={buttonVariants}
              >
                <NavLink to="/state">
                  <MxmButton variant="squared">Kembali</MxmButton>
                </NavLink>
              </motion.div>
            </Tabs>
          </Center>
        </Flex>
      </motion.div>
    </Box>
  );
};

export default StateLists;
