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
import { url } from "inspector";

const EditHome: React.FC = () => {
  const [editMediaTab, setEditMediaTab] = useState(false);

  const history = useHistory();
  const [homeDatabySearchKey, sethomeDatabySearchKey] = useState<any>({});
  const [submitEditBtn, setSubmitEditBtn] = useState<boolean>(false);

  const { search_key }: any = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<any>([]);
  const [mediaFiles, setMediaFiles] = useState<any>([]);
  const [resetUpload, setResetUpload] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState(true);
  const [mediaFiles, setMediaFiles] = useState<any>([]);

  const getId = (url: any) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };

  const onSubmit = async (data: any) => {
    console.log(data);
    setLoading(true);

    const linkYTEmbed: any = getId(data.linkYoutube);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("kategori", data.kategori);
    formData.append("searchKey", data.searh_key);
    formData.append("shortDesc", data.shortDesc);
    formData.append("longDesc", data.longDesc);
    formData.append(
      "linkYoutube",
      `https://www.youtube.com/embed/${linkYTEmbed}`
    );
    formData.append("lineID", data.lineID);
    formData.append("instagram", data.instagram);
    formData.append("linkLogo", files[0]);

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
      setFiles([]);
      history.push("/admin/daftar-home");
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

  useEffect(() => {
    setValue("name", homeDatabySearchKey?.name);
    setValue("kategori", homeDatabySearchKey?.kategori);
    setValue("searchKey", homeDatabySearchKey?.search_key);
    setValue("shortDesc", homeDatabySearchKey?.shortDesc);
    setValue("longDesc", homeDatabySearchKey?.longDesc);
    setValue("linkYoutube", homeDatabySearchKey?.linkYoutube);
    setValue("lineID", homeDatabySearchKey?.lineID);
    setValue("instagram", homeDatabySearchKey?.instagram);
  }, [homeDatabySearchKey]);

  const onMediaSubmit = async () => {
    const loopData = () => {
      mediaFiles.forEach(async (data: any) => {
        const formData = new FormData();
        formData.append("linkMedia", data.files);
        console.log(data);
        try {
          await adminService.updateHomeMedia(data.id, formData);
        } catch (error) {
          Swal.fire({
            title: "Perhatian!",
            text: error.response.data.message,
            icon: "error",
            confirmButtonText: "Coba lagi",
          });
          setSubmitStatus(false);
        }
      });
      setLoading(true);
    };
    await loopData();
    setLoading(false);
    if (submitStatus) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil diperbaharui!",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const handleChangeMedia = (item: unknown, id: number) => {
    const data = { id: id, files: item };
    const tempMediaFiles = mediaFiles;
    if (tempMediaFiles.length === 0) {
      tempMediaFiles.push(data);
    } else {
      for (let i = 0; i < tempMediaFiles.length; i++) {
        if (tempMediaFiles[i].id === id) tempMediaFiles[i] = data;
        else tempMediaFiles.push(data);
        break;
      }
    }
    setMediaFiles(tempMediaFiles);
    const tempMedia = homeDatabySearchKey.home_media;
    for (let i = 0; i < tempMedia.length; i++) {
      if (tempMedia[i].photoID === id) {
        tempMedia[i].linkMedia = URL.createObjectURL(data.files);
        sethomeDatabySearchKey({
          ...homeDatabySearchKey,
          home_media: tempMedia,
        });
        break;
      }
    }
    console.log(mediaFiles);
  };

  const deleteHomeMedia = (photoId: any) => {
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
          await adminService.deleteHomeMedia(photoId);

          const newHomeObject = homeDatabySearchKey;
          const deletedMediaIndex = homeDatabySearchKey?.home_media.findIndex(
            (item: any, index: any) => item.photoID === photoId
          );

          for (const key in newHomeObject) {
            if (key === "home_media") {
              newHomeObject[key].splice(deletedMediaIndex, 1);
            }
          }

          sethomeDatabySearchKey({
            ...homeDatabySearchKey,
            home_media: newHomeObject?.home_media,
          });

          Swal.fire("Media telah dihapus!", "", "success");
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
              name={`linkMedia${tableMeta.rowData[0]}`}
              id={`linkMedia${tableMeta.rowData[0]}`}
              type="file"
              style={{ display: "none" }}
              onChange={(event) =>
                handleChangeMedia(event?.target?.files[0], tableMeta.rowData[0])
              }
            />
            <label htmlFor={`linkMedia${tableMeta.rowData[0]}`}>
              <Image
                className="media-img"
                src={value}
                width={"clamp(100px, 300px, 300px)"}
              ></Image>
            </label>

            <Flex mt={5} justifyContent="center">
              {/* <Spacer /> */}
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
            <button
              type="button"
              className="delete-icon"
              onClick={() => deleteHomeMedia(tableMeta.rowData[0])}
            >
              <DeleteIcon style={{ color: "red" }} />
            </button>
          </HStack>
        ),
      },
    },
  ];

  console.log(editMediaTab);

  return (
    <Tabs
      defaultIndex={0}
      onChange={(index) =>
        index === 0 ? setEditMediaTab(false) : setEditMediaTab(true)
      }
    >
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
              <Tab>
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
              <Tab>
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <Flex
                  direction={{
                    base: "column",
                    md: "row",
                  }}
                >
                  <FormControl mb={3} isInvalid={errors.name}>
                    <MxmFormLabel color="black">Nama Organisator</MxmFormLabel>
                    <MxmInput
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

                <FormControl mr="5" isInvalid={errors.kategori} mb={3}>
                  <MxmFormLabel color="black">Chapter</MxmFormLabel>
                  <MxmSelect
                    {...register("kategori", {
                      required: "Pilih Chapter",
                    })}
                  >
                    <FormControl mb={3} isInvalid={errors.name}>
                      <MxmFormLabel color="black">
                        Nama Organisator
                      </MxmFormLabel>
                      <MxmInput
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

                  <FormControl mr="5" isInvalid={errors.kategori} mb={3}>
                    <MxmFormLabel color="black">Chapter</MxmFormLabel>
                    <MxmSelect
                      {...register("kategori", {
                        required: "Pilih Chapter",
                      })}
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
                </Flex>
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

            <TabPanel>
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
                    onClick={onMediaSubmit}
                  >
                    SUBMIT
                  </Button>
                )}
              </Flex>
            </TabPanel>
          </TabPanels>
        </Flex>
      </Flex>
    </Tabs>
  );
};

export default EditHome;
