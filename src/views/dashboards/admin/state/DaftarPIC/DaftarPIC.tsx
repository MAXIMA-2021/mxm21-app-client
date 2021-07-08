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
import "./DaftarPIC.scss";
import MUIDataTable from "mui-datatables";
import { MxmDivider } from "../../../../../shared/styled/input";
import { DashboardFooter } from "../../../../../shared/component/DashboardFooter";

const DaftarPIC: React.FC = () => {
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
      label: "Nama PIC",
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
          style: { minWidth: "350px" },
        }),
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
        setCellProps: () => ({
          style: { minWidth: "200px" },
        }),
        customBodyRender: (value: any) => (
          <Text fontSize={responsiveData}>{value}</Text>
        ),
      },
    },

    {
      name: "nama_state",
      label: "Nama STATE",
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
          style: { minWidth: "350px" },
        }),
        customBodyRender: (value: any) => (
          <Text fontSize={responsiveData}>{value}</Text>
        ),
      },
    },
  ];

  const data = [
    ["Jane Cooper Krisna Cahyadi", "34242", "jane.cooper@student.umn.ac.id"],
    [
      "Maximilliano Adrian Stefan Gabrielsar",
      "23231",
      "jane.cooper@student.umn.ac.id",
    ],
    ["Carlos Cooper", "12121", "jane.cooper@student.umn.ac.id"],
    ["Jane Dharmawan Cooper", "56565", "jane.cooper@student.umn.ac.id"],
    ["Jane Cooper June Caaper", "35353", "jane.cooper@student.umn.ac.id"],
    [
      "Jane Cooper Krisna Finantyo Chandra",
      "35353",
      "jane.cooper@student.umn.ac.id",
    ],
    ["Jane Dharmawan Cooper", "56565", "jane.cooper@student.umn.ac.id"],
    ["Jane Cooper June Caaper", "35353", "jane.cooper@student.umn.ac.id"],
    [
      "Jane Cooper Krisna Finantyo Chandra",
      "35353",
      "jane.cooper@student.umn.ac.id",
    ],
    ["William Cooper", "34242", "jane.cooper@student.umn.ac.id"],
    [
      "Jane Cooper Krisna Finantyo Chandra",
      "35353",
      "jane.cooper@student.umn.ac.id",
    ],
    ["Jane Dharmawan Cooper", "56565", "jane.cooper@student.umn.ac.id"],
    ["Jane Cooper June Caaper", "35353", "jane.cooper@student.umn.ac.id"],
    [
      "Jane Cooper Krisna Finantyo Chandra",
      "35353",
      "jane.cooper@student.umn.ac.id",
    ],
    ["Jane Bonifasius", "23231", "jane.cooper@student.umn.ac.id"],
    ["Jane Cooper", "12121", "jane.cooper@student.umn.ac.id"],
    ["Gabrielsar Cooper", "56565", "jane.cooper@student.umn.ac.id"],
  ];

  return (
    <>
      <Flex
        backgroundColor="#f4f4f4"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
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
          mt={{
            base: "1vh",
            sm: "1vh",
            md: "3vh",
            lg: "3vh",
            xl: "3vh",
          }}
          mb={{
            base: "1vh",
            sm: "1vh",
            md: "8vh",
            lg: "8vh",
            xl: "8vh",
          }}
          mx={{
            base: "1vw",
            sm: "1vw",
            md: "2vw",
            lg: "2vw",
            xl: "2vw",
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
                Daftar PIC Organisator
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
            <MxmDivider color="black" height="3px" margin="1.5rem 0 0.5rem 0" />
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

export default DaftarPIC;
