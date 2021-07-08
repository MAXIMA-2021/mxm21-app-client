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
import { InfoOutlineIcon, EditIcon } from "@chakra-ui/icons";
import {
  MxmContainers,
  MxmVerticalAlign,
} from "../../../../../shared/styled/containers";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "../../../../../types/enums";
import { MxmLogo } from "../../../../../assets";
import "./DaftarOrganisator.scss";
import MUIDataTable from "mui-datatables";
import { MxmDivider } from "../../../../../shared/styled/input";
import { DashboardFooter } from "../../../../../shared/component/DashboardFooter";

const DaftarOrganisator: React.FC = () => {
  const responsiveData = {
    base: "1em",
    sm: "1em",
    md: "1em",
    lg: "1em",
    "2xl": "1.2em",
  };

  const tableColumns = [
    {
      name: "name",
      label: "Nama Organisator",
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
        // setCellProps: () => ({
        //   style: { minWidth: "200px", maxWidth: "200px" },
        // }),
        customBodyRender: (value: any) => (
          <Text fontSize={responsiveData}>{value}</Text>
        ),
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
        // setCellProps: () => ({
        //   style: { minWidth: "100px", maxWidth: "100px" },
        // }),
        customBodyRender: (value: any) => (
          <Text fontSize={responsiveData}>{value}</Text>
        ),
      },
    },

    {
      name: "email",
      label: "Alamat Email",
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
        // setCellProps: () => ({
        //   style: { minWidth: "300px", maxWidth: "300px" },
        // }),
        customBodyRender: (value: any) => (
          <Text fontSize={responsiveData}>{value}</Text>
        ),
      },
    },
  ];

  const data = [
    ["Jane Cooper Krisna Cahyadi", "34242", "jane.cooper@student.umn.ac.id"],
    ["Jane Cooper", "23231", "jane.cooper@student.umn.ac.id"],
    ["Jane Cooper", "12121", "jane.cooper@student.umn.ac.id"],
    ["Jane Cooper", "56565", "jane.cooper@student.umn.ac.id"],
    ["Jane Cooper", "35353", "jane.cooper@student.umn.ac.id"],
    ["Jane Cooper", "34242", "jane.cooper@student.umn.ac.id"],
    ["Jane Cooper", "23231", "jane.cooper@student.umn.ac.id"],
    ["Jane Cooper", "12121", "jane.cooper@student.umn.ac.id"],
    ["Jane Cooper", "56565", "jane.cooper@student.umn.ac.id"],
    ["Jane Cooper", "35353", "jane.cooper@student.umn.ac.id"],
  ];

  return (
    <>
      <Flex
        backgroundColor="#f4f4f4"
        height={{
          base: "100vh",
          sm: "100vh",
          md: "92vh",
          lg: "92vh",
          xl: "92vh",
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          backgroundColor="#f4f4f4"
          direction="column"
          background="white"
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
                Daftar Akun Organisator
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
            <Center>
              <MUIDataTable
                data={data}
                columns={tableColumns}
                options={{
                  selectableRows: false,
                  rowsPerPage: 5,
                  rowsPerPageOptions: 5,
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

export default DaftarOrganisator;
