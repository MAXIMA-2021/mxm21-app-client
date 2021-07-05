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
import "./DaftarState.scss";
import MUIDataTable from "mui-datatables";

const DaftarState: React.FC = () => {
  const tableColumns = [
    {
      name: "state_id",
      label: "ID STATE",
      options: { display: false },
    },
    {
      name: "name",
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
          style: { minWidth: "250px", maxWidth: "250px" },
        }),
      },
    },
    {
      name: "kuota_terisi",
      label: "Kuota Terisi",
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
          style: { minWidth: "250px", maxWidth: "250px" },
        }),
        customBodyRender: (value: any) => <Text>{value}/100</Text>,
      },
    },
    {
      name: "kode_presensi",
      label: "Kode Presensi",
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
          style: { minWidth: "250px", maxWidth: "250px" },
        }),
      },
    },
    {
      name: "Actions",
      label: "Aksi",
      options: {
        print: false,
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
        customBodyRender: (value: any, tableMeta: any) => (
          <HStack spacing={2}>
            <Link
              to={`/admin/state-detail/${tableMeta.rowData[0]}`}
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                size="sm"
                leftIcon={<InfoOutlineIcon />}
                bgColor={Palette.Navy}
                color="white"
              >
                Detail
              </Button>
            </Link>
            <Link
              to={`/admin/edit-state/${tableMeta.rowData[0]}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                size="sm"
                leftIcon={<EditIcon />}
                bgColor="white"
                color={Palette.Navy}
                border="1px"
                borderColor={Palette.Navy}
              >
                Edit
              </Button>
            </Link>
            <CloseButton size="sm" color={Palette.Red} />
          </HStack>
        ),
      },
    },
  ];

  const data = [
    ["U0001", "Ultimagz", 100, "IF430"],
    ["U0002", "J-Cafe Cosplay", 50, "IF430"],
    ["U0003", "Ultima Sonora", 90, "IF430"],
    ["U0004", "Teater Katak", 60, "IF430"],
    ["U0005", "Game Development Club", 70, "IF430"],
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
            <Center>
              <MUIDataTable
                data={data}
                columns={tableColumns}
                options={{
                  selectableRows: false,
                }}
              />
            </Center>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

export default DaftarState;
