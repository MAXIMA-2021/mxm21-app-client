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
          style: { minWidth: "300px", maxWidth: "300px" },
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
          style: { minWidth: "150px", maxWidth: "150px" },
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
          style: { minWidth: "150px", maxWidth: "150px" },
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
          py="2rem"
          px="1.5rem"
          mt={{
            base: "1rem",
            md: "3rem",
          }}
          mb={{
            base: "1rem",
            md: "8rem",
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
                  sm: "1.2em",
                  md: "1.2em",
                  lg: "1.3em",
                  xl: "1.5em",
                  "2xl": "1.5em",
                }}
              >
                STATE Detail
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
            <MxmDivider color="black" height="3px" margin="1vh 0 2.8vh 0" />
            <Flex direction="row">
              <img
                src="https://ultimagz.com/wp-content/uploads/cropped-thumbnail_Logo-Ultimagz-01.png"
                style={{ maxWidth: "50%", height: "100%" }}
              />
              <div style={{ marginLeft: "1.5rem", maxWidth: "50%" }}>
                <Text style={{ fontSize: "2em", fontWeight: 700 }}>
                  Ultimagz
                </Text>
                <Text style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque mi felis, fermentum eu nunc et, egestas malesuada
                  lectus. Vivamus dapibus, dolor a dictum rutrum, nulla elit
                  tincidunt enim, quis facilisis mi est a urna. Sed rutrum porta
                  augue nec interdum. Vestibulum sit amet varius magna.
                  Pellentesque eu risus nulla. Curabitur accumsan mi eu felis
                  hendrerit, nec dignissim velit consequat. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Sed pretium
                  finibus commodo. Morbi eu tortor urna. Nulla pretium venenatis
                  consequat. Aliquam vestibulum justo orci, a elementum mauris
                  tincidunt at. Proin vel cursus metus. Vivamus mattis lorem in
                  neque luctus cursus. Mauris sed odio ut odio sagittis
                  facilisis.
                </Text>
              </div>
            </Flex>
            <Text fontWeight="bold" fontSize="1.2em" mt="1rem">
              Peserta Registrasi STATE
            </Text>
            <Center>
              <MUIDataTable
                data={data}
                columns={tableColumns}
                options={{
                  selectableRows: false,
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
