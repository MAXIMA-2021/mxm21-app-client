/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Flex,
  Heading,
  Spacer,
  Image,
  Center,
  Text,
  Container,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ClearIcon from "@material-ui/icons/Clear";
import { Palette, Role } from "../../../../../types/enums";
import { MxmLogo } from "../../../../../assets";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { MxmDivider } from "../../../../../shared/styled/input";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import adminService from "../../../../../services/admin";
import Swal from "sweetalert2";
import jwtDecode from "jwt-decode";
import { DivisionList } from "../../../../../shared/constants";

const colorTheme = createMuiTheme({
  palette: {
    primary: {
      main: `#13DF80`,
    },
    secondary: {
      main: `${Palette.Red}`,
    },
  },
});

const StateDetail = (props: any) => {
  const { stateID }: any = useParams();
  const [detailState, setDetailState] = useState<any>([]);
  const [dataKehadiranMhs, setDataKehadiranMhs] = useState<any>([]);
  const [isSmallerThan600px] = useMediaQuery("(max-width: 600px)");
  const [isSmallerThan800px] = useMediaQuery("(max-width: 800px)");
  const role = window.sessionStorage.getItem("role");

  useEffect(() => {
    const fetchDataDetail = async () => {
      try {
        const returnedDataState = await adminService.getSpecificState(stateID);
        document.title = `[Dashboard] - Detail STATE ${returnedDataState[0]?.name}`;
        setDetailState(returnedDataState[0]);
        window.sessionStorage.setItem(
          "organisator",
          returnedDataState[0]?.name
        );
        window.sessionStorage.getItem("role") === "organizator" &&
          props.setDisplayName(returnedDataState[0]?.name);
      } catch (error) {
        Swal.fire({
          title: "Perhatian!",
          text: error.response?.data.message,
          icon: "error",
          confirmButtonText: "Coba lagi",
        });
      }
    };

    const fetchDataMhs = async () => {
      try {
        let returnedDataMhs = "";
        if (role === Role.Panitia) {
          returnedDataMhs = await adminService.getRegistrationStateMhsPanit(
            stateID
          );
        } else if (role === Role.Organisator) {
          returnedDataMhs = await adminService.getRegistrationStateMhsOrg(
            stateID
          );
        }

        setDataKehadiranMhs(returnedDataMhs);
      } catch (error) {
        Swal.fire({
          title: "Perhatian!",
          text: error.response?.data.message,
          icon: "error",
          confirmButtonText: "Coba lagi",
        });
      }
    };
    fetchDataDetail();
    fetchDataMhs();
  }, []);

  const handleZoomButton = () => {
    try {
      const { division } = jwtDecode(window.sessionStorage.getItem("token")!);
      const divisionName = DivisionList.find((d) => d.id === division)?.name;
      const name = window.sessionStorage.getItem("name");
      if (role === Role.Panitia) {
        const link = `${detailState?.zoomLink}&uname=${divisionName} - ${name}`;
        window.open(link, "_blank");
      } else {
        window.open(detailState?.zoomLink, "_blank");
      }
    } catch (InvalidTokenError) {
      Swal.fire({
        title: "Perhatian!",
        text: InvalidTokenError,
        icon: "error",
        confirmButtonText: "Coba lagi",
      });
    }
  };

  const tableColumns = [
    {
      name: "mahasiswa",
      label: "Nama Mahasiswa",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender: ({ index, ...column }) => (
          <Text
            key={index}
            fontWeight="bold"
            fontFamily="Rubik"
            fontSize="1.1em"
          >
            {column.label}
          </Text>
        ),
        setCellProps: () => ({
          style: { minWidth: "250px" },
        }),
      },
    },
    {
      name: "nim",
      label: "NIM",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender: ({ index, ...column }) => (
          <Text
            key={index}
            fontWeight="bold"
            fontFamily="Rubik"
            fontSize="1.1em"
          >
            {column.label}
          </Text>
        ),
        setCellProps: () => ({
          style: { minWidth: "100px" },
        }),
      },
    },
    {
      name: "attendanceTime",
      label: "Jam Masuk",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender: ({ index, ...column }) => (
          <Text
            key={index}
            fontWeight="bold"
            fontFamily="Rubik"
            fontSize="1.1em"
          >
            {column.label}
          </Text>
        ),
        setCellProps: () => ({
          style: { minWidth: "150px" },
        }),
        customBodyRender: (value: any) => (
          <Text>
            {value === null ? "N/A" : new Date(value).toLocaleString("id-ID")}
          </Text>
        ),
      },
    },
    {
      name: "exitAttendance",
      label: "Status Absen",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender: ({ index, ...column }) => (
          <Text
            key={index}
            fontWeight="bold"
            fontFamily="Rubik"
            fontSize="1.1em"
          >
            {column.label}
          </Text>
        ),
        setCellProps: () => ({
          style: { minWidth: "100px" },
        }),
        customBodyRender: (value: any) => (
          <Text ml={8}>
            {value ? (
              <ThemeProvider theme={colorTheme}>
                <CheckCircleOutlineIcon color="primary" />
              </ThemeProvider>
            ) : (
              <ThemeProvider theme={colorTheme}>
                <ClearIcon color="secondary" />
              </ThemeProvider>
            )}
          </Text>
        ),
      },
    },
    {
      name: "tokenTime",
      label: "Jam Absen",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender: ({ index, ...column }) => (
          <Text
            key={index}
            fontWeight="bold"
            fontFamily="Rubik"
            fontSize="1.1em"
          >
            {column.label}
          </Text>
        ),
        setCellProps: () => ({
          style: { minWidth: "150px" },
        }),
        customBodyRender: (value: any) => (
          <Text>
            {value === null ? "N/A" : new Date(value).toLocaleString("id-ID")}
          </Text>
        ),
      },
    },
  ];

  return (
    <>
      <Flex
        backgroundColor="#f4f4f4"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Flex
          direction="column"
          background="white"
          py="1.5rem"
          px="1.5rem"
          mt={{
            base: "1rem",
            md: "1rem",
          }}
          mb={{
            base: "1rem",
            md: "3rem",
          }}
          mx={{
            base: "0.2rem",
            md: "2rem",
          }}
          width={{ base: "95vw", md: "initial" }}
          rounded={20}
          minW={isSmallerThan800px ? "" : "800px"}
        >
          <form>
            <Flex mb="1vh" alignItems="center">
              <Heading
                letterSpacing="0.05em"
                fontSize={{
                  base: "1.2em",
                  lg: "1.3em",
                  xl: "1.5em",
                }}
              >
                Detail Kegiatan dan Peserta Registrasi STATE
              </Heading>
              <Spacer basis={500} />
              <Image
                src={MxmLogo}
                alt="Logo MAXIMA 2021"
                h="100%"
                w={{
                  base: "4vw",
                  md: "2.5vw",
                  lg: "2vw",
                  "2xl": "1.2vw",
                }}
              />
            </Flex>
            <MxmDivider color="black" height="3px" margin="1rem 0 1.5rem 0" />
            <Flex direction={isSmallerThan600px ? "column" : "row"}>
              {isSmallerThan600px ? (
                <Flex justifyContent="center">
                  <img
                    src={detailState?.stateLogo}
                    style={{
                      maxWidth: "20rem",
                      height: "100%",
                    }}
                    alt={`Logo ${detailState?.name}`}
                  />
                </Flex>
              ) : (
                <img
                  src={detailState?.stateLogo}
                  style={{
                    maxWidth: "20rem",
                    height: "100%",
                    marginRight: "1.5rem",
                  }}
                  alt={`Logo ${detailState?.name}`}
                />
              )}

              <Container pl="1rem" m="0">
                <Heading
                  style={{ letterSpacing: "0.022em" }}
                  textAlign={isSmallerThan600px ? "center" : "left"}
                  mt={isSmallerThan600px ? "0.5rem" : ""}
                >
                  {detailState?.name}
                </Heading>
                <Heading
                  fontSize={"1.2rem"}
                  fontWeight={600}
                  mt={"0.2rem"}
                  textAlign={isSmallerThan600px ? "center" : "left"}
                >
                  {detailState?.category}
                </Heading>
                <Text mt="1.2rem">
                  <EventOutlinedIcon /> Hari ke-{detailState?.day?.substr(1, 1)}{" "}
                  ({detailState?.tanggal})
                </Text>
                <Flex direction="row" my="1rem">
                  <Text>
                    <PeopleAltOutlinedIcon /> {detailState?.registered} /{" "}
                    {detailState?.quota}
                  </Text>
                  <Text ml="6rem">
                    <VpnKeyOutlinedIcon /> {detailState?.attendanceCode}
                  </Text>
                </Flex>
                <Flex direction="row">
                  <VideocamOutlinedIcon />
                  <Text ml="0.5rem" wordBreak="break-all">
                    <Button
                      colorScheme="blue"
                      size="sm"
                      onClick={handleZoomButton}
                    >
                      Masuk ZOOM
                    </Button>
                  </Text>
                </Flex>
                <Heading mt="1.2rem" fontSize={"1rem"} fontWeight={700}>
                  Deskripsi Pendek
                </Heading>
                <Text wordBreak="break-all" mt="0.2rem">
                  {detailState?.shortDesc}
                </Text>
              </Container>
            </Flex>

            <Text fontWeight="bold" fontSize="1.2em" mt="3rem">
              Peserta Registrasi STATE
            </Text>
            <Center>
              <MUIDataTable
                data={dataKehadiranMhs}
                columns={tableColumns}
                options={{
                  selectableRows: false,
                  rowsPerPage: 15,
                  rowsPerPageOptions: [10, 15, 20],
                  elevation: 0,
                }}
              />
            </Center>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

export default StateDetail;
