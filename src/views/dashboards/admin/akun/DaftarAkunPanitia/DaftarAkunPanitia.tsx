import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Heading,
  Spacer,
  Image,
  Center,
  Text,
  HStack,
  Button,
  Switch,
} from "@chakra-ui/react";
import { MxmLogo } from "../../../../../assets";
import MUIDataTable from "mui-datatables";
import { MxmDivider } from "../../../../../shared/styled/input";
import adminService from "../../../../../services/admin";
import Swal from "sweetalert2";
import { RepeatIcon } from "@chakra-ui/icons";
import { Palette } from "../../../../../types/enums";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ClearIcon from "@material-ui/icons/Clear";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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

const DaftarAkunPanitia: React.FC = () => {
  const responsiveData = {
    base: "1em",
    "2xl": "1.2em",
  };

  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const returnedData = await adminService.getAllPanitia();
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
    document.title = "Daftar Organisator HoME - MAXIMA 2021";
    fetchData();
  }, []);

  const verifyThis = async (nim: string) => {
    try {
      await adminService.verifyPanitia(nim, data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil diperbaharui!",
        showConfirmButton: false,
        timer: 1000,
      });
      fetchData();
    } catch (error) {
      Swal.fire({
        title: "Perhatian!",
        text: error.response?.data.message,
        icon: "error",
        confirmButtonText: "Coba lagi",
      });
    }
  };

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
          style: { minWidth: "350px" },
        }),
        customBodyRender: (value: any, tableMeta: any) => (
          <Text fontSize={responsiveData}>
            {value}{" "}
            {tableMeta.rowData[3] ? (
              <ThemeProvider theme={colorTheme}>
                <CheckCircleOutlineIcon color="primary" />
              </ThemeProvider>
            ) : (
              <></>
            )}
          </Text>
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
          style: { minWidth: "100px" },
        }),
        customBodyRender: (value: any) => (
          <Text fontSize={responsiveData}>{value}</Text>
        ),
      },
    },
    {
      name: "divisi",
      label: "Divisi",
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
      name: "verified",
      label: "Active Toggle",
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
        customBodyRender: (value: any, tableMeta: any) => (
          <Text ml={9}>
            {value ? (
              <Switch
                isChecked
                colorScheme="facebook"
                onChange={() => verifyThis(tableMeta.rowData[1])}
              />
            ) : (
              <Switch
                colorScheme="facebook"
                onChange={() => verifyThis(tableMeta.rowData[1])}
              />
            )}
          </Text>
        ),
      },
    },
  ];

  // const data = [
  //   ["Jane Cooper Krisna Cahyadi", "34242", "jane.cooper@student.umn.ac.id"],
  //   [
  //     "Maximilliano Adrian Stefan Gabrielsar",
  //     "23231",
  //     "jane.cooper@student.umn.ac.id",
  //   ],
  //   ["Carlos Cooper", "12121", "jane.cooper@student.umn.ac.id"],
  //   ["Jane Dharmawan Cooper", "56565", "jane.cooper@student.umn.ac.id"],
  //   ["Jane Cooper June Caaper", "35353", "jane.cooper@student.umn.ac.id"],
  //   [
  //     "Jane Cooper Krisna Finantyo Chandra",
  //     "35353",
  //     "jane.cooper@student.umn.ac.id",
  //   ],
  //   ["Jane Dharmawan Cooper", "56565", "jane.cooper@student.umn.ac.id"],
  //   ["Jane Cooper June Caaper", "35353", "jane.cooper@student.umn.ac.id"],
  //   [
  //     "Jane Cooper Krisna Finantyo Chandra",
  //     "35353",
  //     "jane.cooper@student.umn.ac.id",
  //   ],
  //   ["William Cooper", "34242", "jane.cooper@student.umn.ac.id"],
  //   [
  //     "Jane Cooper Krisna Finantyo Chandra",
  //     "35353",
  //     "jane.cooper@student.umn.ac.id",
  //   ],
  //   ["Jane Dharmawan Cooper", "56565", "jane.cooper@student.umn.ac.id"],
  //   ["Jane Cooper June Caaper", "35353", "jane.cooper@student.umn.ac.id"],
  //   [
  //     "Jane Cooper Krisna Finantyo Chandra",
  //     "35353",
  //     "jane.cooper@student.umn.ac.id",
  //   ],
  //   ["Jane Bonifasius", "23231", "jane.cooper@student.umn.ac.id"],
  //   ["Jane Cooper", "12121", "jane.cooper@student.umn.ac.id"],
  //   ["Gabrielsar Cooper", "56565", "jane.cooper@student.umn.ac.id"],
  // ];

  return (
    <>
      <Flex
        backgroundColor="#f4f4f4"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Flex
          backgroundColor="#f4f4f4"
          direction="column"
          background="white"
          py="1.5rem"
          px="1.5rem"
          mt={{
            base: "1rem",
            md: "1rem",
          }}
          mb={{
            base: "4.5rem",
            md: "5rem",
          }}
          mx={{
            base: "0.2rem",
            md: "2rem",
          }}
          width="99vw"
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
                Daftar Akun Panitia
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
      </Flex>
    </>
  );
};

export default DaftarAkunPanitia;
