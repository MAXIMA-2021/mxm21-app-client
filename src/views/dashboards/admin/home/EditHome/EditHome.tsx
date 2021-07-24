import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
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
  Box,
  Spinner,
} from "@chakra-ui/react";
import { Palette, HomeChapter } from "../../../../../types/enums";
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
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import MUIDataTable from "mui-datatables";
import DeleteIcon from "@material-ui/icons/Delete";
import adminService from "../../../../../services/admin";
import Swal from "sweetalert2";
import { DataHomeBySearchKey } from "../../../../../types/interfaces";

const EditHome: React.FC = () => {
  const [editMediaTab, setEditMediaTab] = useState(false);
  const handleSelectChange = (event: any) => {
    if (event.target.value !== "") {
      event.target.style.color = "black";
    }
  };

  const history = useHistory();
  const [homeDatabySearchKey, sethomeDatabySearchKey] = useState<any>({});
  const { search_key }: any = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<any>([]);
  const [resetUpload, setResetUpload] = useState<boolean>(false);

  const onSubmit = async (data: any) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("kategori", data.kategori);
    formData.append("shortDesc", data.shortDesc);
    formData.append("longDesc", data.longDesc);
    formData.append("linkYoutube", data.linkYoutube);
    formData.append("lineID", data.lineID);
    formData.append("instagram", data.instagram);
    formData.append("linkLogo", files[0]);
    reset();

    try {
      await adminService.updateHome(homeDatabySearchKey.homeID, formData);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil diperbaharui!",
        showConfirmButton: false,
        timer: 2000,
      });
      setResetUpload(true);
      history.push("/admin/daftar-home", {
        status: "success",
        message: "Kamu berhasil mengedit",
      });
    } catch (error) {
      Swal.fire({
        title: "Perhatian!",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "Coba lagi",
      });
    }
    setLoading(false);
    setResetUpload(false);
  };

  useEffect(() => {
    document.title = "Edit Organisator HoME - MAXIMA 2021";
    const fetchData = async () => {
      try {
        let returnedData = await adminService.getHomeBySearchKey(search_key);

        sethomeDatabySearchKey(returnedData[0]);
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
          style: { minWidth: "400px" },
        }),
        customBodyRender: (value: any, tableMeta: any) => (
          <>
            <input
              name={`linkMedia`}
              id={`linkMedia${tableMeta.rowIndex}`}
              type="file"
              style={{ display: "none" }}
            ></input>
            <label htmlFor={`linkMedia${tableMeta.rowIndex}`}>
              <Image
                className="media-img"
                src={value}
                width={"clamp(100px, 300px, 300px)"}
              ></Image>
            </label>
          </>
        ),
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
            <button type="button" className="delete-icon">
              <DeleteIcon style={{ color: "red" }} />
            </button>
          </HStack>
        ),
      },
    },
  ];

  // const data = [
  //   [
  //     "P0001",
  //     "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  //   ],
  //   [
  //     "P0002",
  //     "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
  //   ],
  //   [
  //     "P0003",
  //     "https://images.unsplash.com/photo-1626180874495-0fe651f60ecb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
  //   ],
  //   [
  //     "P0004",
  //     "https://images.unsplash.com/photo-1625959276519-15fe73b6fe96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
  //   ],
  // ];

  console.log(files);

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
          className="edit-home-card"
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
                    md: "row",
                  }}
                >
                  <FormControl mb={3} isInvalid={errors.name}>
                    <MxmFormLabel color="black">Nama Organisator</MxmFormLabel>
                    <MxmInput
                      defaultValue={homeDatabySearchKey.name}
                      {...register("name", {
                        required: "Isi Nama Organisator",
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
                    md: "row",
                  }}
                >
                  <FormControl mr="5" isInvalid={errors.kategori} mb={3}>
                    <MxmFormLabel color="black">Chapter</MxmFormLabel>
                    <MxmSelect
                      {...register("kategori", {
                        required: "Pilih Chapter",
                      })}
                      // className="select"
                      // onChange={handleSelectChange}
                      value={homeDatabySearchKey["kategori"]}
                    >
                      <option value="" selected disabled hidden>
                        Pilih Chapter
                      </option>
                      <option value={HomeChapter.LostTreasureIsland}>
                        Lost Treasure Island
                      </option>
                      <option value={HomeChapter.FantasyBridge}>
                        Fantasy Bridge
                      </option>
                      <option value={HomeChapter.MedalistPlayground}>
                        Medalist Playground
                      </option>
                      <option value={HomeChapter.RainbowMines}>
                        Rainbow Mines
                      </option>
                      <option value={HomeChapter.TomorrowVille}>
                        Tomorrowville
                      </option>
                      <option value={HomeChapter.AdventureLand}>
                        Adventure Land
                      </option>
                      <option value={HomeChapter.TownArea}>Town Area</option>
                      <option value={HomeChapter.WonderousCampground}>
                        Wonderous Campground
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
                      defaultValue={homeDatabySearchKey["search_key"]}
                      {...register("searchKey", {
                        required: "Isi Search Key",
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
                    md: "row",
                  }}
                >
                  <FormControl mb={3} isInvalid={errors.shortDesc}>
                    <MxmFormLabel color="black">Narasi Pendek</MxmFormLabel>
                    <MxmInput
                      defaultValue={homeDatabySearchKey["shortDesc"]}
                      {...register("shortDesc", {
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
                    md: "row",
                  }}
                >
                  <FormControl mb={3} isInvalid={errors.longDesc}>
                    <MxmFormLabel color="black">Narasi Panjang</MxmFormLabel>
                    <MxmTextarea
                      resize="vertical"
                      {...register("longDesc", {
                        required: "Isi Narasi Panjang",
                      })}
                      defaultValue={homeDatabySearchKey["longDesc"]}
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
                    md: "row",
                  }}
                >
                  <FormControl mb={3}>
                    <MxmFormLabel color="black">Logo</MxmFormLabel>
                    <Flex alignItems={files[0] ? "flex-start" : "center"}>
                      <Image
                        mr="1rem"
                        w="15%"
                        src={
                          files[0]
                            ? URL.createObjectURL(files[0])
                            : homeDatabySearchKey?.linkLogo
                        }
                      />
                      <Box w="85%">
                        {!resetUpload && <UploadFiles setFiles={setFiles} />}
                      </Box>
                    </Flex>
                  </FormControl>
                </Flex>
                <Flex
                  direction={{
                    base: "column",
                    md: "row",
                  }}
                >
                  <FormControl mb={3} isInvalid={errors.linkYoutube}>
                    <MxmFormLabel color="black">
                      Link Video Youtube
                    </MxmFormLabel>
                    <MxmInput
                      {...register("linkYoutube", {
                        required: "Isi Link Video",
                        pattern: {
                          value:
                            /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/g,
                          message: "Link Video Youtube tidak valid",
                        },
                      })}
                      defaultValue={homeDatabySearchKey["linkYoutube"]}
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
                    md: "row",
                  }}
                >
                  <FormControl mb={3} mr="5" isInvalid={errors.lineID}>
                    <MxmFormLabel color="black">
                      Media Sosial (LINE)
                    </MxmFormLabel>
                    <MxmInput
                      {...register("lineID", {
                        required: "Isi Line Id",
                        pattern: {
                          value: /^([0-9]||[a-z]||[-_.])+$/,
                          message: "ID LINE tidak valid",
                        },
                      })}
                      defaultValue={homeDatabySearchKey["lineID"]}
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
                      defaultValue={homeDatabySearchKey["instagram"]}
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
                    data={homeDatabySearchKey?.home_media}
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
                  {loading ? (
                    <Flex mr="1rem" alignItems="center">
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        w="2rem"
                        h="2rem"
                      />
                      <Text
                        fontFamily="Poppins"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                        ml="0.5rem"
                      >
                        mengunggah data...
                      </Text>
                    </Flex>
                  ) : (
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
                  )}
                </Flex>
              </form>
            </TabPanel>
          </TabPanels>
        </Flex>
      </Flex>
    </Tabs>
  );
};

export default EditHome;
