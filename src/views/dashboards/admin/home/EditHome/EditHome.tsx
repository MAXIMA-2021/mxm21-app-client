import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Flex,
  Heading,
  Spacer,
  Image,
  FormControl,
  Center,
  FormErrorIcon,
  Button,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Palette } from "../../../../../types/enums";
import "./EditHome.scss";
import { MxmLogo } from "../../../../../assets";
import {
  MxmInput,
  MxmFormLabel,
  MxmSelect,
  MxmFormErrorMessage,
  MxmTextarea,
  MxmDivider,
} from "../../../../../shared/styled/input";
import UploadFiles from "../../../../../shared/component/ImageUpload/UploadFiles";
import { DashboardFooter } from "../../../../../shared/component/DashboardFooter";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import MUIDataTable from "mui-datatables";
import DeleteIcon from "@material-ui/icons/Delete";

const EditHome: React.FC = () => {
  const [editMediaTab, setEditMediaTab] = useState(false);
  console.log(editMediaTab);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    window.confirm(JSON.stringify(data));
  };
  const handleSelectChange = (event: any) => {
    if (event.target.value !== "") {
      event.target.style.color = "black";
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
      name: "photoID",
      label: "ID photo",
      options: { display: false },
    },
    {
      name: "linkMedia",
      label: "Media",
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
          <Image src={value} width={"clamp(100px, 300px, 300px)"}></Image>
        ),
      },
    },
    {
      name: "linkMedia",
      label: "Replace Image",
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
        customBodyRender: (value: any) => <input type="file" name="" id="" />,
      },
    },
    {
      name: "Actions",
      label: "Aksi",
      options: {
        print: false,
        setCellProps: () => ({
          style: { minWidth: "100px" },
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
            <button type="button">
              <DeleteIcon style={{ marginLeft: 2, color: "red" }} />
            </button>
          </HStack>
        ),
      },
    },
  ];

  const data = [
    [
      "P0001",
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    ],
    [
      "P0002",
      "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
    ],
    [
      "P0003",
      "https://images.unsplash.com/photo-1626180874495-0fe651f60ecb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    ],
    [
      "P0004",
      "https://images.unsplash.com/photo-1625959276519-15fe73b6fe96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    ],
  ];

  return (
    <Tabs defaultIndex={0}>
      <Flex
        width={{
          base: "100vw",
          md: "79vw",
        }}
        minHeight="calc(100vh - 3.75rem)"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Flex
          direction="column"
          backgroundColor="#FFFFFF"
          py="1.5rem"
          px="1.5rem"
          width={
            editMediaTab
              ? {
                  base: "",
                  md: "",
                }
              : { base: "100%", md: "70%" }
          }
          mt={{
            base: "1rem",
            md: "1rem",
          }}
          mb={{
            base: "4.5rem",
            md: "5rem",
          }}
          rounded={25}
          // minHeight={editMediaTab ? `calc(100vh - 3.5rem)` : ``}
        >
          <Flex alignItems="center">
            <TabList>
              <Tab onClick={() => setEditMediaTab(false)}>
                <Heading
                  mb="1vh"
                  letterSpacing="0.05em"
                  fontSize={{
                    base: "1.2em",
                    lg: "1.3em",
                    xl: "1.5em",
                  }}
                >
                  Edit HoME
                </Heading>
              </Tab>
              <Tab onClick={() => setEditMediaTab(true)}>
                <Heading
                  mb="1vh"
                  letterSpacing="0.05em"
                  fontSize={{
                    base: "1.2em",
                    lg: "1.3em",
                    xl: "1.5em",
                  }}
                >
                  Edit Media
                </Heading>
              </Tab>
            </TabList>

            <Spacer />
            <Image
              src={MxmLogo}
              alt="Logo MAXIMA 2021"
              h="100%"
              w={{
                base: "4vw",
                md: "2.5vw",
                lg: "2vw",
                "2xl": "1.2vw",
              }}
              mt="0.4vh"
              mb="1vh"
            />
          </Flex>
          <MxmDivider color="black" height="3px" margin="1vh 0 2.8vh 0" />
          <TabPanels>
            <TabPanel>
              <form onSubmit={handleSubmit(onSubmit)} className="form_state">
                <Flex
                  direction={{
                    base: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  }}
                >
                  <FormControl mb={3} isInvalid={errors.name}>
                    <MxmFormLabel color="black">Nama Organisator</MxmFormLabel>
                    <MxmInput
                      value="Ultimagz"
                      {...register("name", {
                        required: "Isi Narasi Pendek",
                      })}
                    />
                    <MxmFormErrorMessage fontSize="xs" mt={1}>
                      {errors.name && (
                        <Flex flexDirection="row" alignItems="center">
                          <p>
                            <FormErrorIcon fontSize="xs" mt="-0.1em" />
                            {errors.name.message}
                          </p>
                        </Flex>
                      )}
                    </MxmFormErrorMessage>
                  </FormControl>
                </Flex>
                <Flex
                  direction={{
                    base: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  }}
                >
                  <FormControl mr="5" isInvalid={errors.kategori} mb={3}>
                    <MxmFormLabel color="black">Kategori</MxmFormLabel>
                    <MxmSelect
                      {...register("Kategori", {
                        required: "Pilih Kategori",
                      })}
                      // className="select"
                      // onChange={handleSelectChange}
                    >
                      <option value="" disabled hidden>
                        Pilih Kategori
                      </option>
                      <option value="UKM Sains dan Sosial">
                        UKM Sains dan Sosial
                      </option>
                      <option value="UKM Seni dan Budaya" selected>
                        UKM Seni dan Budaya
                      </option>
                      <option value="UKM Olahraga">UKM Olahraga</option>
                      <option value="Kegiatan Kemahasiswaan dan Lembaga Seni Otonom">
                        Kegiatan Kemahasiswaan dan Lembaga Seni Otonom
                      </option>
                      <option value="Media Kampus">Media Kampus</option>
                      <option value="Komunitas">Komunitas</option>
                      <option value="Lembaga Kampus">Lembaga Kampus</option>
                      <option value="Organisasi dan Himpunan Mahasiswa">
                        Organisasi dan Himpunan Mahasiswa
                      </option>
                    </MxmSelect>
                    <MxmFormErrorMessage fontSize="xs" mt={1}>
                      {errors.kategori && (
                        <Flex flexDirection="row" alignItems="center">
                          <p>
                            <FormErrorIcon fontSize="xs" mt="-0.1em" />
                            {errors.kategori.message}
                          </p>
                        </Flex>
                      )}
                    </MxmFormErrorMessage>
                  </FormControl>
                  <FormControl mb={3} isInvalid={errors.searchKey}>
                    <MxmFormLabel color="black">Kata Kunci</MxmFormLabel>
                    <MxmInput
                      value="ultimagz"
                      {...register("Name", {
                        required: "Isi Nama Organisator",
                      })}
                    />
                    <MxmFormErrorMessage fontSize="xs" mt={1}>
                      {errors.searchKey && (
                        <Flex flexDirection="row" alignItems="center">
                          <p>
                            <FormErrorIcon fontSize="xs" mt="-0.1em" />
                            {errors.searchKey.message}
                          </p>
                        </Flex>
                      )}
                    </MxmFormErrorMessage>
                  </FormControl>
                </Flex>
                <Flex
                  direction={{
                    base: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  }}
                >
                  <FormControl mb={3} isInvalid={errors.shortDesc}>
                    <MxmFormLabel color="black">Narasi Pendek</MxmFormLabel>
                    <MxmInput
                      value="narasi pendek"
                      {...register("ShortDesc", {
                        required: "Isi Narasi Pendek",
                      })}
                    />
                    <MxmFormErrorMessage fontSize="xs" mt={1}>
                      {errors.shortDesc && (
                        <Flex flexDirection="row" alignItems="center">
                          <p>
                            <FormErrorIcon fontSize="xs" mt="-0.1em" />
                            {errors.shortDesc.message}
                          </p>
                        </Flex>
                      )}
                    </MxmFormErrorMessage>
                  </FormControl>
                </Flex>
                <Flex
                  direction={{
                    base: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  }}
                >
                  <FormControl mb={3} isInvalid={errors.longDesc}>
                    <MxmFormLabel color="black">Narasi Panjang</MxmFormLabel>
                    <MxmTextarea
                      resize="vertical"
                      {...register("LongDesc", {
                        required: "Isi Narasi Panjang",
                      })}
                      value="narasi panjang"
                    />
                    <MxmFormErrorMessage fontSize="xs" mt={1}>
                      {errors.longDesc && (
                        <Flex flexDirection="row" alignItems="center">
                          <p>
                            <FormErrorIcon fontSize="xs" mt="-0.1em" />
                            {errors.longDesc.message}
                          </p>
                        </Flex>
                      )}
                    </MxmFormErrorMessage>
                  </FormControl>
                </Flex>

                <Flex
                  direction={{
                    base: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  }}
                >
                  <FormControl mb={3} isInvalid={errors.logo}>
                    <MxmFormLabel color="black">Logo</MxmFormLabel>
                    <UploadFiles />
                  </FormControl>
                </Flex>
                <Flex
                  direction={{
                    base: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  }}
                >
                  <FormControl mb={3} isInvalid={errors.linkYoutube}>
                    <MxmFormLabel color="black">
                      Link Video Youtube
                    </MxmFormLabel>
                    <MxmInput
                      {...register("LinkYoutube", {
                        required: "Isi Link Video",
                        pattern: {
                          value:
                            /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/g,
                          message: "Link Video Youtube tidak valid",
                        },
                      })}
                      value="https://www.youtube.com/watch?v=g6rQFP9zCAM&list=WL&index=91"
                    />
                    <MxmFormErrorMessage fontSize="xs" mt={1}>
                      {errors.linkYoutube && (
                        <Flex flexDirection="row" alignItems="center">
                          <p>
                            <FormErrorIcon fontSize="xs" mt="-0.1em" />
                            {errors.linkYoutube.message}
                          </p>
                        </Flex>
                      )}
                    </MxmFormErrorMessage>
                  </FormControl>
                </Flex>
                <Flex
                  direction={{
                    base: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  }}
                >
                  <FormControl mb={3} mr="5" isInvalid={errors.lineID}>
                    <MxmFormLabel color="black">
                      Media Sosial (LINE)
                    </MxmFormLabel>
                    <MxmInput
                      {...register("lineID", {
                        required: "Isi Nama Organisator",
                        pattern: {
                          value: /^([0-9]||[a-z]||[-_.])+$/,
                          message: "ID LINE tidak valid",
                        },
                      })}
                      value="ultimagzLine"
                    />
                    <MxmFormErrorMessage fontSize="xs" mt={1}>
                      {errors.lineID && (
                        <Flex flexDirection="row" alignItems="center">
                          <p>
                            <FormErrorIcon fontSize="xs" mt="-0.1em" />
                            {errors.lineID.message}
                          </p>
                        </Flex>
                      )}
                    </MxmFormErrorMessage>
                  </FormControl>
                  <FormControl mb={3} isInvalid={errors.instagram}>
                    <MxmFormLabel color="black">
                      Media Sosial (Instagram)
                    </MxmFormLabel>
                    <MxmInput
                      {...register("instagram", {
                        required: "Isi Akun Instagram",
                        pattern: {
                          value: /^([0-9]||[a-z]||[-_.]||[A-Z])+$/,
                          message: "Username Instagram tidak valid",
                        },
                      })}
                      placeholder="Tidak perlu menggunakan @"
                      value="ultimagz"
                    />
                    <MxmFormErrorMessage fontSize="xs" mt={1}>
                      {errors.instagram && (
                        <Flex flexDirection="row" alignItems="center">
                          <p>
                            <FormErrorIcon fontSize="xs" mt="-0.1em" />
                            {errors.instagram.message}
                          </p>
                        </Flex>
                      )}
                    </MxmFormErrorMessage>
                  </FormControl>
                </Flex>
                <Flex mt={5}>
                  <Spacer />
                  <Button
                    backgroundColor={Palette.Cyan}
                    color="white"
                    padding="1em 2em 1em 2em"
                    borderRadius="999px"
                    boxShadow="-1.2px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                    type="submit"
                    _hover={{ backgroundColor: "#2BAD96" }}
                  >
                    SUBMIT
                  </Button>
                </Flex>
              </form>
            </TabPanel>

            <TabPanel>
              <form className="form_daftar-state">
                <Center>
                  <MUIDataTable
                    data={data}
                    columns={tableColumns}
                    options={{
                      selectableRows: false,
                      download: false,
                      print: false,
                      sort: false,
                      search: false,
                      filter: false,
                      viewColumns: false,
                      title: false,
                      pagination: false,
                      elevation: 0,
                    }}
                  />
                </Center>
                <Flex mt={5}>
                  <Spacer />
                  <Button
                    backgroundColor={Palette.Cyan}
                    color="white"
                    padding="1em 2em 1em 2em"
                    borderRadius="999px"
                    boxShadow="-1.2px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                    type="submit"
                    _hover={{ backgroundColor: "#2BAD96" }}
                  >
                    SUBMIT
                  </Button>
                </Flex>
              </form>
            </TabPanel>
          </TabPanels>
        </Flex>
        <DashboardFooter />
      </Flex>
    </Tabs>
  );
};

export default EditHome;
