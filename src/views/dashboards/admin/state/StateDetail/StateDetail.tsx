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
} from "@chakra-ui/react";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ClearIcon from '@material-ui/icons/Clear';
import {
  MxmContainers,
  MxmVerticalAlign,
} from "../../../../../shared/styled/containers";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "../../../../../types/enums";
import { MxmLogo } from "../../../../../assets";
import "./StateDetail.scss";
import MUIDataTable from 'mui-datatables'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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
      name: 'name',
      label: 'Nama Mahasiswa',
      options: { 
        filter: true,
        sort: true,
        customHeadLabelRender: ({index, ...column}) => (
          <Text key={index} fontWeight="bold" fontFamily="Rubik" fontSize="1.1em">
            {column.label}
          </Text>
        ),
        setCellProps: () => ({ style: { minWidth: "300px", maxWidth: "300px" }}),
      },
    },
    {
      name: 'nim',
      label: 'NIM',
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender: ({index, ...column}) => (
          <Text key={index} fontWeight="bold" fontFamily="Rubik" fontSize="1.1em">
            {column.label}
          </Text>
        ),
        setCellProps: () => ({ style: { minWidth: "250px", maxWidth: "250px" }}),
      },
    },
    {
      name: 'attendance',
      label: 'Kehadiran',
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender: ({index, ...column}) => (
          <Text key={index} fontWeight="bold" fontFamily="Rubik" fontSize="1.1em">
            {column.label}
          </Text>
        ),
        setCellProps: () => ({ style: { minWidth: "250px", maxWidth: "250px" }}),
        customBodyRender: (value: any) => (
          <Text ml={8}>{value ? <ThemeProvider theme={colorTheme}><CheckCircleOutlineIcon color="primary"/></ThemeProvider> : <ThemeProvider theme={colorTheme}><ClearIcon color="secondary"/></ThemeProvider>}</Text>
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
        height={{
          base: "100vh",
          sm: "100vh",
          md: "80vh",
          lg: "80vh",
          xl: "80vh",
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          direction="column"
          background="lightgray"
          py={{
            base: "3vh",
            sm: "3vh",
            md: "3vh",
            lg: "3vh",
            xl: "3vh",
          }}
          px={{
            base: "5vw",
            sm: "5vw",
            md: "2vw",
            lg: "2vw",
            xl: "2vw",
          }}
          my={{
            base: "1vh",
            sm: "1vh",
            md: "10vh",
            lg: "10vh",
            xl: "10vh",
          }}
          mx={{
            base: "1vw",
            sm: "1vw",
            md: "10vw",
            lg: "10vw",
            xl: "10vw",
          }}
          rounded={20}
        >
          <form>
            <Flex>
              <Heading
                mb={3}
                color="black"
                letterSpacing="0.05em"
                fontSize={{
                  base: "1.5em",
                  sm: "1.5em",
                  md: "1.5em",
                  lg: "1.5em",
                  xl: "1.7em",
                  "2xl": "1.7em",
                }}
              >
                Daftar STATE
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
                mt={2}
              />
            </Flex>
            <Divider
              colorScheme="blackAlpha"
              style={{ border: "2px solid black" }}
            />
            <Flex direction="row">
                <img src="http://lorempixel.com/400/200/sports/"/>
                <div>
                  <Text>Ultimagz</Text>
                  <Text>Ultimagz</Text>
                </div>
            </Flex>
            <Text fontWeight="bold" fontSize="1.2em">Peserta Registrasi STATE</Text>
            <Center>
            <MUIDataTable 
              data={data} 
              columns={tableColumns} 
              options={{
                selectableRows: false
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
