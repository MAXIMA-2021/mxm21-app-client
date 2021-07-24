import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Flex,
  Heading,
  Spacer,
  Image,
  Center,
  Text,
  Container,
} from "@chakra-ui/react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ClearIcon from "@material-ui/icons/Clear";
import { Palette } from "../../../../../types/enums";
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

const StateDetail: React.FC = () => {
  const { stateID }: any = useParams();
  const [detailState, setDetailState] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const returnedData = await adminService.getSpecificState(stateID);

        console.log(returnedData);

        setDetailState(returnedData[0]);
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
    document.title = `State Detail ${detailState?.name}`;
  }, []);

  const tableColumns = [
    {
      name: "name",
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
          style: { minWidth: "400px" },
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
          style: { minWidth: "250px" },
        }),
      },
    },
    {
      name: "attendance",
      label: "Kehadiran",
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
  ];

  const data = [
    ["Bukan Jane Cooper", "32323", true],
    ["Bukan Jane Cooper", "45454", false],
    ["Bukan Jane Cooper", "95959", true],
    ["Bukan Jane Cooper", "56565", false],
    ["Bukan Jane Cooper", "46464", true],
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
          maxWidth="60%"
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
          rounded={20}
        >
          <form>
            <Flex>
              <Heading
                mb="1vh"
                letterSpacing="0.05em"
                fontSize={{
                  base: "1.2em",
                  lg: "1.3em",
                  xl: "1.5em",
                }}
              >
                Detail Kegiatan dan Peserta Registrasi STATE
              </Heading>
              <Spacer />
              <Image
                src={MxmLogo}
                alt="Logo MAXIMA 2021"
                h="100%"
                w={{
                  base: "4vw",
                  sm: "4vw",
                  md: "2.5vw",
                  lg: "2vw",
                  xl: "2vw",
                  "2xl": "1.2vw",
                }}
                mt="0.4vh"
                mb="1vh"
              />
            </Flex>
            <MxmDivider color="black" height="3px" margin="1rem 0 1.5rem 0" />
            <Flex direction="row">
              <img
                src={detailState?.stateLogo}
                style={{ maxWidth: "50%", height: "100%" }}
                alt="logoState"
              />
              <Container pl="1rem">
                <Heading>{detailState?.name}</Heading>
                <Text mt="1.5rem">
                  <EventOutlinedIcon /> Hari ke-{detailState?.day} (Rabu, 6
                  Agustus 2021)
                </Text>
                <Flex direction="row" my="1rem">
                  <Text>
                    <PeopleAltOutlinedIcon /> {detailState?.quota}
                  </Text>
                  <Text ml="2rem">
                    <VpnKeyOutlinedIcon /> {detailState?.attendanceCode}
                  </Text>
                </Flex>
                <Flex direction="row">
                  <VideocamOutlinedIcon />
                  <Text ml="0.5rem" wordBreak="break-all">
                    {detailState?.zoomLink}
                  </Text>
                </Flex>
              </Container>
            </Flex>
            <Text fontWeight="bold" fontSize="1.2em" mt="5rem">
              Peserta Registrasi STATE
            </Text>
            <Center>
              <MUIDataTable
                data={data}
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
