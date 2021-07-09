import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Flex,
  Heading,
  Spacer,
  Image,
  FormControl,
  FormErrorIcon,
  Button,
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
import { DashboardFooter } from "../../../../../shared/component/DashboardFooter";

const TambahHome: React.FC = () => {
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

  return (
    <div className="content">
      <Flex
        width={{
          base: "100vw",
          md: "79vw",
        }}
        height="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          width={{
            base: "100%",
            md: "70%",
          }}
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
            <Flex>
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
                <MxmFormLabel color="black">Kategori</MxmFormLabel>
                <MxmSelect
                  {...register("kategori", { required: "Pilih Kategori" })}
                  className="select"
                  onChange={handleSelectChange}
                >
                  <option value="" selected disabled hidden>
                    Pilih Kategori
                  </option>
                  <option value="UKM Sains dan Sosial">
                    UKM Sains dan Sosial
                  </option>
                  <option value="UKM Seni dan Budaya">
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
        </Flex>
        <DashboardFooter />
      </Flex>
    </div>
  );
};

export default TambahHome;
