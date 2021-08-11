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
import { NavLink } from "react-router-dom";

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
      width="24"
      height="24"
      viewBox="0 0 112 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="112" height="133" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0"
            transform="translate(-0.00752888) scale(0.00391914 0.00330033)"
          />
        </pattern>
        <image
          id="image0"
          width="259"
          height="303"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
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

  const handleRegister = async () => {
    try {
      setLoading(true);
      setRegisterStatus(false);
      const data = {
        stateID: props.stateID,
      };
      await stateService.registerState(data);
      props.fetchData();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `State ${props.name} berhasil diambil!`,
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (error) {
      Swal.fire({
        title: "Perhatian!",
        text: error.response?.data.message,
        icon: "error",
        confirmButtonText: "Coba lagi",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <StateModal.PilihState
        closeOnOverlayClick={false}
        isOpen={registerStatus}
        onClose={() => setRegisterStatus(false)}
        {...props}
        handleRegister={handleRegister}
      />
      <button onClick={() => setRegisterStatus(true)}>
        <div className={props.status === "full" ? "card full" : "card"}>
          <div className="container">
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
              {loading ? (
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
                  <span className="kuota-head">SISA KUOTA:</span>
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

  useEffect(() => {
    document.title = "Daftar STATE - MAXIMA 2021";
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
                  STATE Hari ke-{hari}: {5 + hari} September 2021
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
