import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Heading,
  Spacer,
  Image,
  Center,
  Button,
  HStack,
  CloseButton,
  Text,
} from "@chakra-ui/react";
import { InfoOutlineIcon, EditIcon } from "@chakra-ui/icons";
import { Palette } from "../../../../../types/enums";
import { MxmLogo } from "../../../../../assets";
import MUIDataTable from "mui-datatables";
import { MxmDivider } from "../../../../../shared/styled/input";
import adminService from "../../../../../services/admin";
import Swal from "sweetalert2";

const DaftarState: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = "Daftar STATE - MAXIMA 2021";
    const fetchData = async () => {
      try {
        const returnedData = await adminService.getAllState();
        setData(returnedData);
        console.log(returnedData);
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
  }, []);

  const deleteState = (stateID: any) => {
    try {
      Swal.fire({
        title:
          '<span style="font-family: Rubik, sans-serif;">Apakah Anda yakin?</sp>',
        cancelButtonText: `<span style=\"font-family: Poppins, sans-serif;\">Batalkan</span>`,
        confirmButtonText: `<span style=\"font-family: Poppins, sans-serif;\">Hapus</span>`,
        confirmButtonColor: "#e40000",
        denyButtonColor: "#fff",
        showCancelButton: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await adminService.deleteState(stateID);
          const stateData = data.filter(
            (item: any) => item.stateID !== stateID
          );
          setData(stateData);
          Swal.fire("Data telah dihapus!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Perubahan belum tersimpan", "", "info");
        }
      });
    } catch (error) {
      Swal.fire({
        title: "Perhatian!",
        text: error.response?.data.message,
        icon: "error",
        confirmButtonText: "Coba lagi",
      });
    }
  };

  const responsiveData = {
    base: "1em",
    sm: "1em",
    md: "1em",
    lg: "1em",
    "2xl": "1.2em",
  };

  const tableColumns = [
    {
      name: "stateID",
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
          style: { minWidth: "300px" },
        }),
        customBodyRender: (value: any) => (
          <Text fontSize={responsiveData}>{value}</Text>
        ),
      },
    },
    {
      name: "quota",
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
          style: { minWidth: "195px" },
        }),
        customBodyRender: (value: any) => (
          <Text fontSize={responsiveData}>{value}/100</Text>
        ),
      },
    },
    {
      name: "attendanceCode",
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
          style: { minWidth: "195px" },
        }),
        customBodyRender: (value: any) => (
          <Text fontSize={responsiveData}>{value}</Text>
        ),
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
                fontSize={responsiveData}
                size="xs"
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
                fontSize={responsiveData}
                size="xs"
                leftIcon={<EditIcon />}
                bgColor="white"
                color={Palette.Navy}
                border="1px"
                borderColor={Palette.Navy}
              >
                Edit
              </Button>
            </Link>
            <CloseButton
              size="sm"
              color={Palette.Red}
              style={{ marginLeft: 2 }}
              onClick={() => deleteState(tableMeta.rowData[0])}
            />
          </HStack>
        ),
      },
    },
  ];

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        backgroundColor="#f4f4f4"
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
            base: "4.5rem",
            md: "5rem",
          }}
          mx={{
            base: "0.2rem",
            md: "2rem",
          }}
          rounded={20}
        >
          <form className="form_daftar-state">
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
                Daftar State
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

export default DaftarState;
