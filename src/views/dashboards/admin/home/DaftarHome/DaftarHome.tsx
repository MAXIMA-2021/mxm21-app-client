import React, { useEffect, useState } from "react";
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
import { EditIcon } from "@chakra-ui/icons";
import { Palette } from "../../../../../types/enums";
import { MxmLogo } from "../../../../../assets";
import MUIDataTable from "mui-datatables";
import { MxmDivider } from "../../../../../shared/styled/input";
import adminService from "../../../../../services/admin";
import Swal from "sweetalert2";

const DaftarHome: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = "Daftar Organisator HoME - MAXIMA 2021";
    const fetchData = async () => {
      try {
        const returnedData = await adminService.getAllHome();
        setData(returnedData.data);
      } catch (error) {
        Swal.fire({
          title: "Perhatian!",
          text: error.response.data.message,
          icon: "error",
          confirmButtonText: "Coba lagi",
        });
      }
    };

    fetchData();
  }, []);

  const findSearchKey = (IDhome: any) => {
    for (let homeDataX in data) {
      if (data[homeDataX]["homeID"] == IDhome) {
        return data[homeDataX]["search_key"];
      }
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
      name: "homeID",
      label: "ID HoME",
      options: { display: false },
    },
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
        setCellProps: () => ({
          style: { minWidth: "350px" },
        }),
        customBodyRender: (value: any) => (
          <Text fontSize={responsiveData}>{value}</Text>
        ),
      },
    },
    {
      name: "kategori",
      label: "Kategori",
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
      name: "Actions",
      label: "Aksi",
      options: {
        print: false,
        setCellProps: () => ({
          style: { minWidth: "200px" },
        }),
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
              to={`/admin/edit-home/${findSearchKey(tableMeta.rowData[0])}`}
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
                onClick={() => console.log(tableMeta.rowData)}
              >
                Edit
              </Button>
            </Link>
            <CloseButton
              size="sm"
              color={Palette.Red}
              style={{ marginLeft: 2 }}
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
                Daftar Organisator HoME
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

export default DaftarHome;
