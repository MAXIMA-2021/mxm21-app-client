import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useToast,
  SkeletonCircle,
  Skeleton,
} from "@chakra-ui/react";
import { Palette } from "../../../types/enums";
import * as State from "../../../assets/state";
import { MxmWhiteLogoText } from "../../../assets";
import { MxmButton } from "../../../shared/styled/buttons";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import stateService from "../../../services/state";
import Swal from "sweetalert2";
import { StateModal } from "../../../shared/component/StateModal";
import { motion, useCycle } from "framer-motion";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const stateCard = {
  rest: {
    scale: 1,
    y: 0,
    transition: { delay: 0, duration: 0.3, ease: transition.ease },
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: { delay: 0.2, duration: 0.3, ease: transition.ease },
  },
};

const cardVariants = {
  exit: { y: "-50%", opacity: 0, transition: { delay: 0.2, ...transition } },
  rest: { y: "50%", opacity: 0 },
  enter: {
    y: "0%",
    opacity: 1,
    transition: { delay: 0.2, ...transition },
  },
};

const buttonVariants = {
  rest: { x: 100, opacity: 0 },
  exit: { x: 100, opacity: 0, transition: { delay: 0.2, ...transition } },
  enter: { x: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
};

const StateSchedule = () => {
  const [stateData, setStateData] = useState<any>({});
  const disable = stateData?.remainingToken < 1;

  useEffect(() => {
    document.title = "STATE 2021 - Jadwal STATE";

    const fetchData = async () => {
      try {
        const data = await stateService.getStateReistration();
        setStateData(data);
      } catch (error) {
        Swal.fire({
          title: "Perhatian!",
          text: error.response?.data.message,
          icon: "error",
          confirmButtonText: "Coba lagi",
        });
      }
    };

    window.sessionStorage.getItem("token") && fetchData();
  }, []);

  return (
    <Box bgColor={Palette.Navy} overflow="hidden">
      <motion.div
        initial="rest"
        animate="enter"
        exit="exit"
        variants={cardVariants}
      >
        <Flex
          minH={{
            base: "calc(100vh - 3.5rem)",
            md: "calc(100vh - 4rem)",
            xl: "calc(100vh - 5rem)",
          }}
          w="100%"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          padding={{ base: "2rem 0.5rem", "2xl": "0" }}
        >
          <Image src={MxmWhiteLogoText} w={{ base: "80px", md: "100px" }} />
          <Heading
            fontSize="1.4rem"
            fontFamily="Rubik"
            fontWeight="bold"
            color="white"
            padding="1rem 0 2rem 0"
          >
            STATE
          </Heading>
          <Flex
            flexDir="column"
            bgColor="white"
            h="max-content"
            w={{ base: "100%", md: "max-content" }}
            padding={{ base: "2rem 1rem", md: "2rem" }}
            borderRadius="1rem"
            textAlign="center"
            justifyContent="space-between"
            alignItems="center"
            fontFamily="Rubik"
          >
            <Heading
              fontFamily="Rubik"
              fontSize="2rem"
              fontWeight="bold"
              color={Palette.Navy}
              mb={{ base: "1rem", md: "0" }}
            >
              JADWAL STATE
            </Heading>
            <Flex flexDir={{ base: "column", md: "row" }}>
              <BoxJadwal
                stateData={stateData}
                i="0"
                setStateData={setStateData}
              />
              <BoxJadwal
                stateData={stateData}
                i="1"
                setStateData={setStateData}
              />
              <BoxJadwal
                stateData={stateData}
                i="2"
                setStateData={setStateData}
              />
            </Flex>
            <Box>
              <Text fontWeight="medium">
                Sisa Token Anda: {stateData ? stateData.remainingToken : "-"}
              </Text>
              <motion.div
                variants={buttonVariants}
                initial="exit"
                animate="enter"
                exit="exit"
              >
                <NavLink
                  to="/state/lists"
                  onClick={(event) => disable && event.preventDefault()}
                >
                  <MxmButton
                    isDisabled={stateData?.remainingToken === 0 ? true : false}
                    colorScheme="yellow-navy"
                    variant="squared"
                    w="max-content"
                    margin="1rem 0 0 0"
                  >
                    <Text margin="1rem">Pilih STATE</Text>
                  </MxmButton>
                </NavLink>
              </motion.div>
            </Box>
          </Flex>
        </Flex>
      </motion.div>
    </Box>
  );
};

export default StateSchedule;

const BoxJadwal = (props: { stateData: any; i: string; setStateData: any }) => {
  const defaultImage = [State.Maxi, State.Icon, State.Xima];
  const i = Number(props.i);
  const day = ["Hari ke-1", "Hari ke-2", "Hari ke-3", "Hari ke-4", "Hari ke-5"];

  const [loading, setLoading] = useState(false);
  const [cancelStatus, setCancelStatus] = useState(false);
  const [tokenModalStatus, setTokenModalStatus] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hover, toggleHover] = useCycle(false, true);

  const toast = useToast();

  const handleCancel = async (id: number) => {
    try {
      setLoading(true);
      setCancelStatus(false);

      await stateService.deleteStateRegistration(id);

      const deletedState = props.stateData.state.find(
        (item: any) => item.stateData.stateID === id
      );

      const tempData = props.stateData.state.filter(
        (data: any) => data.stateData === null || data.stateData.stateID !== id
      );
      tempData.push({ hasRegistered: 0, stateData: null });
      props.setStateData({
        ...props.stateData,
        state: tempData,
        remainingToken: props.stateData.remainingToken + 1,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: `STATE ${deletedState?.stateData.name} berhasil dibatalkan!`,
        showConfirmButton: false,
        timer: 2000,
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

  const handleZoom = async (id: number, zoomLink: string) => {
    try {
      setLoading(true);
      await stateService.updateZoomAttendence(id);
      window.open(zoomLink);
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

  const handleToken = async (id: number, token: string) => {
    const data = { attendanceCode: token };
    const tempData = props.stateData.state;
    try {
      setLoading(true);
      setTokenModalStatus(false);
      await stateService.updateVerifyAbsence(id, data);
      tempData[i].stateData.exitAttendance = 1;
      props.setStateData({ ...props.stateData, state: tempData });
      toast({
        title: `Absensi STATE ${props.stateData.state[i].stateData.name} berhasil!`,
        position: "bottom-right",
        status: "success",
        duration: 3000,
        isClosable: true,
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

  if (props.stateData.state) {
    return (
      <motion.div variants={stateCard} animate={hover ? "hover" : "rest"}>
        <Flex flexDir="column" margin={{ base: "1rem 0", md: "2rem 0 1rem 0" }}>
          <Box
            boxSize={{ base: "15rem", md: "12rem", xl: "18rem" }}
            borderRadius="1rem"
            border={
              props.stateData.state[i].hasRegistered === 1
                ? `3px solid ${Palette.Navy}`
                : ""
            }
            margin={{ base: "0 1rem", md: "0 1rem" }}
            fontFamily="Poppins"
            fontWeight="medium"
            textAlign="center"
            color="white"
            bgColor={
              props.stateData.state[i].hasRegistered === 1
                ? "white"
                : Palette.Navy
            }
            bgImage={
              props.stateData.state[i].hasRegistered === 1
                ? ""
                : defaultImage[i]
            }
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize="100%"
            boxShadow="inset 0px -5rem 2rem -1rem rgba(0, 0, 0, 0.5), -1.2px 1.6px 6px rgba(0, 0, 0, 0.25)"
            overflow="hidden"
          >
            {props.stateData.state[i].hasRegistered === 1 ? (
              <Flex
                h="100%"
                flexDir="column"
                justifyContent="space-between"
                alignItems="center"
                padding="1rem"
              >
                <Flex w="100%" justifyContent="flex-end">
                  {props.stateData.state[i].stateData.exitAttendance === 1 ? (
                    <Flex
                      boxSize="2rem"
                      borderRadius="50%"
                      bgColor="#39DA79"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <CheckIcon />
                    </Flex>
                  ) : props.stateData.state[i].stateData.exitAttendance === 0 &&
                    props.stateData.state[i].stateData.open === "close" ? (
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
                      {
                        day[
                          Number(
                            props.stateData.state[i].stateData.day.slice(-1)
                          ) - 1
                        ]
                      }
                    </Text>
                  )}
                </Flex>
                <SkeletonCircle
                  startColor={Palette.Cyan}
                  endColor={Palette.Navy}
                  size="50%"
                  display={isLoaded ? "none" : ""}
                />
                <Image
                  onLoad={() => setIsLoaded(true)}
                  src={props.stateData.state[i].stateData.stateLogo}
                  maxW="100%"
                  maxH="50%"
                  display={isLoaded ? "" : "none"}
                />
                <Box>
                  <Text>{props.stateData.state[i].stateData.name}</Text>
                  <Text>{props.stateData.state[i].stateData.tanggal}</Text>
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
          {props.stateData.state[i].hasRegistered === 1 ? (
            props.stateData.state[i].stateData.open === "prepare" ? (
              <>
                <StateModal.CancelState
                  isOpen={cancelStatus}
                  onClose={() => setCancelStatus(false)}
                  data={props.stateData.state[i].stateData}
                  handleCancel={handleCancel}
                />
                <MxmButton
                  onMouseEnter={toggleHover}
                  onMouseLeave={toggleHover}
                  isLoading={loading ? true : false}
                  loadingText={loading ? "Pembatalan Diproses" : ""}
                  colorScheme="red-yellow"
                  variant="squared"
                  onClick={() => setCancelStatus(true)}
                >
                  Cancel
                </MxmButton>
              </>
            ) : (
              (props.stateData.state[i].stateData.open === "ready" ||
                props.stateData.state[i].stateData.open === "open" ||
                props.stateData.state[i].stateData.open === "close") && (
                <Flex
                  justifyContent="space-between"
                  padding="0 1rem"
                  m="1rem 0"
                >
                  <MxmButton
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
                    isLoading={loading ? true : false}
                    loadingText={loading ? "ZOOM" : ""}
                    w="45%"
                    margin="0"
                    colorScheme="cyan-navy"
                    variant="squared"
                    isDisabled={
                      props.stateData.state[i].stateData.open === "open"
                        ? props.stateData.state[i].stateData.exitAttendance ===
                          0
                          ? false
                          : true
                        : true
                    }
                    onClick={() =>
                      handleZoom(
                        props.stateData.state[i].stateData.stateID,
                        props.stateData.state[i].stateData.zoomLink
                      )
                    }
                  >
                    ZOOM
                  </MxmButton>
                  <StateModal.TokenState
                    isOpen={tokenModalStatus}
                    onClose={() => setTokenModalStatus(false)}
                    data={props.stateData.state[i].stateData}
                    handleToken={handleToken}
                  />
                  <MxmButton
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
                    isLoading={loading ? true : false}
                    loadingText={loading ? "Token Diproses" : ""}
                    w="45%"
                    margin="0"
                    colorScheme="yellow-red"
                    variant="squared"
                    isDisabled={
                      props.stateData.state[i].stateData.open === "open"
                        ? props.stateData.state[i].stateData.exitAttendance ===
                          0
                          ? false
                          : true
                        : true
                    }
                    onClick={() => setTokenModalStatus(true)}
                  >
                    TOKEN
                  </MxmButton>
                </Flex>
              )
            )
          ) : (
            ""
          )}
        </Flex>
      </motion.div>
    );
  } else {
    return <Box boxSize={{ base: "15rem", md: "12rem", xl: "18rem" }} />;
  }
};
