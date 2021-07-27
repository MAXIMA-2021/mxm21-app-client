import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Flex,
  Heading,
  Spacer,
  Image,
  FormControl,
  FormErrorIcon,
  Button,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Palette } from "../../../../../types/enums";
import "./TambahHome.scss";
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
import { DataHome } from "../../../../../types/interfaces";
import adminService from "../../../../../services/admin";
import Swal from "sweetalert2";
import { HomeChapter } from "../../../../../types/enums";

const TambahHome: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<any>([]);
  const [resetUpload, setResetUpload] = useState<boolean>(false);

  useEffect(() => {
    document.title = "[Dashboard] - Tambah HoME";
  }, []);

  const getId = (url: any) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };

  const onSubmit = async (data: DataHome) => {
    setLoading(true);

    const linkYTEmbed: any = getId(data.linkYoutube);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("kategori", data.kategori);
    formData.append("shortDesc", data.shortDesc);
    formData.append("longDesc", data.longDesc);
    formData.append(
      "linkYoutube",
      `https://www.youtube.com/embed/${linkYTEmbed}`
    );
    formData.append("lineID", data.lineID);
    formData.append("instagram", data.instagram);
    formData.append("linkLogo", files[0]);
    reset();

    try {
      await adminService.tambahHome(formData);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil ditambahkan!",
        showConfirmButton: false,
        timer: 2000,
      });
      setResetUpload(true);
      setFiles([]);
    } catch (error) {
      Swal.fire({
        title: "Perhatian!",
        text: error.response?.data.message,
        icon: "error",
        confirmButtonText: "Coba lagi",
      });
    }
    setLoading(false);
    setResetUpload(false);
  };

  const handleSelectChange = (event: any) => {
    if (event.target.value !== "") {
      event.target.style.color = "black";
    }
  };

  return (
    <Flex
      width={{
        base: "calc(100vw-18rem)",
        md: "calc(100vw-18rem)",
      }}
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        mt={{
          base: "1rem",
          md: "1rem",
        }}
        mb={{
          base: "4.5rem",
          md: "5rem",
        }}
        direction="column"
        backgroundColor="#FFFFFF"
        py="1.5rem"
        px="1.5rem"
        rounded={25}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="form_state">
          <Flex alignItems="center">
            <Heading
              mb="1vh"
              letterSpacing="0.05em"
              fontSize={{
                base: "1.2em",
                lg: "1.3em",
                xl: "1.5em",
              }}
            >
              Tambah HoME
            </Heading>
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
          <Flex
            direction={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}
          >
            <FormControl mb={3} mr="5" isInvalid={errors.name}>
              <MxmFormLabel color="black">Nama Organisator</MxmFormLabel>
              <MxmInput
                {...register("name", { required: "Isi Nama Organisator" })}
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
            <FormControl isInvalid={errors.kategori} mb={3}>
              <MxmFormLabel color="black">Chapter</MxmFormLabel>
              <MxmSelect
                {...register("kategori", { required: "Pilih Chapter" })}
                className="select"
                onChange={handleSelectChange}
              >
                <option value="" selected disabled hidden>
                  Pilih Chapter
                </option>
                <option value={HomeChapter.LostTreasureIsland}>
                  LostTreasure Island
                </option>
                <option value={HomeChapter.FantasyBridge}>Fantsy Bridge</option>
                <option value={HomeChapter.MedalistPlayground}>
                  Medialist Playground
                </option>
                <option value={HomeChapter.RainbowMines}>Rainbows Mines</option>
                <option value={HomeChapter.TomorrowVille}>
                  Tomorrow Ville
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
                {...register("longDesc", {
                  required: "Isi Narasi Panjang",
                })}
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
            <FormControl mb={3} isInvalid={errors.linkLogo}>
              <MxmFormLabel color="black">Logo</MxmFormLabel>
              {!resetUpload && <UploadFiles setFiles={setFiles} />}
              <MxmFormErrorMessage fontSize="xs" mt={1}>
                {errors.linkLogo && (
                  <Flex flexDirection="row" alignItems="center">
                    <p>
                      <FormErrorIcon fontSize="xs" mt="-0.1em" />
                      {errors.linkLogo.message}
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
            <FormControl mb={3} isInvalid={errors.linkYoutube}>
              <MxmFormLabel color="black">Link Video Youtube</MxmFormLabel>
              <MxmInput
                {...register("linkYoutube", {
                  required: "Isi Link Video",
                  pattern: {
                    value:
                      /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/g,
                    message: "Link Video Youtube tidak valid",
                  },
                })}
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
              <MxmFormLabel color="black">Media Sosial (LINE)</MxmFormLabel>
              <MxmInput
                {...register("lineID", {
                  required: "Isi Nama Organisator",
                  pattern: {
                    value: /^([0-9]||[a-z]||[-_.])+$/,
                    message: "ID LINE tidak valid",
                  },
                })}
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
          <Flex mt={5} alignItems="center">
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
      </Flex>
    </Flex>
  );
};

export default TambahHome;
