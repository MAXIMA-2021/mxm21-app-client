import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Flex,
  Heading,
  Spacer,
  Image,
  Divider,
  Center,
  Button,
  HStack,
  CloseButton,
  Text,
  Container,
} from "@chakra-ui/react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ClearIcon from "@material-ui/icons/Clear";
import {
  MxmContainers,
  MxmVerticalAlign,
} from "../../../../../shared/styled/containers";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "../../../../../types/enums";
import { MxmLogo } from "../../../../../assets";
import "./StateDetail.scss";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { MxmDivider } from "../../../../../shared/styled/input";
import { DashboardFooter } from "../../../../../shared/component/DashboardFooter";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";

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
                src="https://ultimagz.com/wp-content/uploads/cropped-thumbnail_Logo-Ultimagz-01.png"
                style={{ maxWidth: "50%", height: "100%" }}
                alt="logoState"
              />
              <Container pl="1rem">
                <Heading>Ultimagz</Heading>
                <Text mt="1.5rem">
                  <EventOutlinedIcon /> Hari ke-1 (Rabu, 6 Agustus 2021)
                </Text>
                <Flex direction="row" my="1rem">
                  <Text>
                    <PeopleAltOutlinedIcon /> 100
                  </Text>
                  <Text ml="2rem">
                    <VpnKeyOutlinedIcon /> ULA326
                  </Text>
                </Flex>
                <Flex direction="row">
                  <VideocamOutlinedIcon />
                  <Text ml="0.5rem" wordBreak="break-all">
                    https://mxm-one.zoom.us/j/4662717372?pwd=dTlPQSt1UHBHM1U3cDlYajZLTEJtdz09
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
        <DashboardFooter />
      </Flex>
    </>
  );
};

export default StateDetail;
