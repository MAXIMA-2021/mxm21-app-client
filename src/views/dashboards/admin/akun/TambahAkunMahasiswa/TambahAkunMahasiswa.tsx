import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Flex,
  Heading,
  Spacer,
  Image,
  FormControl,
  FormErrorIcon,
  Button,
  Input,
  InputLeftAddon,
  InputRightAddon,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { MxmLogo } from "../../../../../assets";
import {
  MxmDivider,
  MxmFormErrorMessage,
  MxmFormLabel,
  MxmInput,
  MxmInputGroup,
  MxmSelect,
} from "../../../../../shared/styled/input";
import { DataRegisterMaba } from "../../../../../types/interfaces";
import Swal from "sweetalert2";
import authService from "../../../../../services/auth";
import "./TambahAkunMahasiswa.scss";

const TambahMahasiswa: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const handleSelectChange = (event: any) => {
    if (event.target.value !== "") {
      event.target.style.color = "black";
    }
  };

  useEffect(() => {
    document.title = "Pendaftaran Akun Mahasiswa Baru - MAXIMA 2021";
  }, []);

  const password = useRef({});
  password.current = watch("password", "");

  const location = useLocation();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data: DataRegisterMaba) => {
    setLoading(true);

    const dataMaba: DataRegisterMaba = {
      nim: data.nim.toString(),
      name: data.name,
      email: `${data.email}@student.umn.ac.id`,
      tempatLahir: data.tempatLahir,
      tanggalLahir: data.tanggalLahir
        .toString()
        .replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2"),
      jenisKelamin: data.jenisKelamin,
      prodi: data.prodi,
      whatsapp: data.whatsapp,
      idLine: data.idLine,
      idInstagram: data.idInstagram,
    };

    console.log(JSON.stringify(dataMaba));

    try {
      await authService.daftarMhs(dataMaba);
      reset();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Akun Mahasiswa MAXIMA 2021 berhasil dibuat!",
        showConfirmButton: false,
        timer: 2000,
      });
      history.push("/admin/daftar-mahasiswa");
    } catch (error) {
      Swal.fire({
        title: "Perhatian!",
        text: error.response?.data.message,
        icon: "error",
        confirmButtonText: "Coba lagi",
      });
    }
    setLoading(false);
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      backgroundColor="#f4f4f4"
      height="100%"
      direction="column"
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
              Tambah Akun Mahasiswa
            </Heading>
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
              marginLeft={{
                base: "5vw",
                md: "30vw",
              }}
            />
          </Flex>
          <MxmDivider color="black" height="3px" margin="1vh 0 2.8vh 0" />
          <Flex
            direction={{
              base: "column",
              md: "row",
            }}
          >
            <FormControl mb={3} mr="5" isInvalid={errors.name}>
              <MxmFormLabel color="black">NAMA LENGKAP</MxmFormLabel>
              <MxmInput
                {...register("name", {
                  required: "Isi nama lengkap kamu",
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
            <FormControl
              isInvalid={errors.nim}
              mb={3}
              w={{
                base: "100%",
                md: "50%",
                xl: "40%",
              }}
            >
              <MxmFormLabel color="black">NIM Anda</MxmFormLabel>
              <MxmInputGroup addon="left">
                <InputLeftAddon children="000000" fontFamily="Poppins" />
                <Input
                  type="number"
                  {...register("nim", {
                    required: "Isi NIM kamu",
                    minLength: {
                      value: 5,
                      message: "Masukkan 5 angka terakhir dari NIM kamu",
                    },
                    maxLength: {
                      value: 5,
                      message: "Masukkan 5 angka terakhir dari NIM kamu",
                    },
                  })}
                />
              </MxmInputGroup>
              <MxmFormErrorMessage fontSize="xs" mt={1}>
                {errors.nim && (
                  <Flex flexDirection="row" alignItems="center">
                    <p>
                      <FormErrorIcon fontSize="xs" mt="-0.1em" />
                      {errors.nim.message}
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
            <FormControl mb={3} mr="5" isInvalid={errors.tempatLahir}>
              <MxmFormLabel color="black">Tempat Lahir</MxmFormLabel>
              <MxmInput
                {...register("tempatLahir", {
                  required: "Isi tempat lahir kamu",
                })}
              />
              <MxmFormErrorMessage fontSize="xs" mt={1}>
                {errors.tempatLahir && (
                  <Flex flexDirection="row" alignItems="center">
                    <p>
                      <FormErrorIcon fontSize="xs" mt="-0.1em" />
                      {errors.tempatLahir.message}
                    </p>
                  </Flex>
                )}
              </MxmFormErrorMessage>
            </FormControl>
            <FormControl
              mb={3}
              mr="5"
              w={{
                base: "100%",
                md: "60%",
              }}
              isInvalid={errors.tanggalLahir}
            >
              <MxmFormLabel color="black">Tanggal Lahir</MxmFormLabel>
              <MxmInput
                type="date"
                {...register("tanggalLahir", {
                  required: "Isi tanggal lahir kamu",
                })}
                className="select"
                onChange={handleSelectChange}
              />
              <MxmFormErrorMessage fontSize="xs" mt={1}>
                {errors.tanggalLahir && (
                  <Flex flexDirection="row" alignItems="center">
                    <p>
                      <FormErrorIcon fontSize="xs" mt="-0.1em" />
                      {errors.tanggalLahir.message}
                    </p>
                  </Flex>
                )}
              </MxmFormErrorMessage>
            </FormControl>
            <FormControl
              mb={3}
              w={{
                base: "100%",
                md: "50%",
              }}
              isInvalid={errors.jenisKelamin}
            >
              <MxmFormLabel color="black">Jenis Kelamin</MxmFormLabel>
              <MxmSelect
                {...register("jenisKelamin", {
                  required: "Pilih jenis kelamin kamu",
                })}
                className="select"
                onChange={handleSelectChange}
              >
                <option value="" selected disabled hidden>
                  L/P
                </option>
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
              </MxmSelect>
              <MxmFormErrorMessage fontSize="xs" mt={1}>
                {errors.jenisKelamin && (
                  <Flex flexDirection="row" alignItems="center">
                    <p>
                      <FormErrorIcon fontSize="xs" mt="-0.1em" />
                      {errors.jenisKelamin.message}
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
            <FormControl
              mb={3}
              mr="5"
              w={{
                base: "100%",
                md: "60%",
              }}
              isInvalid={errors.prodi}
            >
              <MxmFormLabel color="black">Program Studi</MxmFormLabel>
              <MxmSelect
                backgroundColor="white"
                {...register("prodi", {
                  required: "Pilih program studi kamu",
                })}
                className="select"
                onChange={handleSelectChange}
              >
                <option value="" selected disabled hidden>
                  Pilih Program Studi
                </option>
                <option value="Desain Komunikasi Visual">
                  Desain Komunikasi Visual
                </option>
                <option value="Film">Film</option>
                <option value="Arsitektur">Arsitektur</option>
                <option value="Komunikasi Strategis">
                  Komunikasi Strategis
                </option>
                <option value="Jurnalistik">Jurnalistik</option>
                <option value="Informatika">Informatika</option>
                <option value="Sistem Informasi">Sistem Informasi</option>
                <option value="Teknik Komputer">Teknik Komputer</option>
                <option value="Teknik Elektro">Teknik Elektro</option>
                <option value="Teknik Fisika">Teknik Fisika</option>
                <option value="Manajemen">Manajemen</option>
                <option value="Akuntansi">Akuntansi</option>
                <option value="Perhotelan">Perhotelan</option>
              </MxmSelect>
              <MxmFormErrorMessage fontSize="xs" mt={1}>
                {errors.prodi && (
                  <Flex flexDirection="row" alignItems="center">
                    <p>
                      <FormErrorIcon fontSize="xs" mt="-0.1em" />
                      {errors.prodi.message}
                    </p>
                  </Flex>
                )}
              </MxmFormErrorMessage>
            </FormControl>
            <FormControl mb={3} isInvalid={errors.email}>
              <MxmFormLabel color="black">Email Student</MxmFormLabel>
              <MxmInputGroup addon="right">
                <Input
                  {...register("email", {
                    required: "Isi email student kamu",
                    pattern: {
                      value: /^[^@]+$/g,
                      message: "Alamat email tidak perlu mencantumkan domain",
                    },
                  })}
                />
                <InputRightAddon children="@student.umn.ac.id" />
              </MxmInputGroup>
              <MxmFormErrorMessage fontSize="xs" mt={1}>
                {errors.email && (
                  <Flex flexDirection="row" alignItems="center">
                    <p>
                      <FormErrorIcon fontSize="xs" mt="-0.1em" />
                      {errors.email.message}
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
            <FormControl mb={3} mr="5" isInvalid={errors.whatsapp}>
              <MxmFormLabel color="black">Nomor HP (WhatsApp)</MxmFormLabel>
              <MxmInput
                placeholder="08XXXXXXXXXX"
                {...register("whatsapp", {
                  required: "Isi nomor whatsapp kamu",
                  minLength: {
                    value: 10,
                    message: "Nomor whatsapp tidak dapat dibawah 10 digit",
                  },
                  maxLength: {
                    value: 13,
                    message: "Nomor whatsapp tidak dapat lebih dari 13 digit",
                  },
                  pattern: {
                    value: /^\d+$/g,
                    message: "Nomor whatsapp harus berupa angka",
                  },
                })}
              />
              <MxmFormErrorMessage fontSize="xs" mt={1}>
                {errors.whatsapp && (
                  <Flex flexDirection="row" alignItems="center">
                    <p>
                      <FormErrorIcon fontSize="xs" mt="-0.1em" />
                      {errors.whatsapp.message}
                    </p>
                  </Flex>
                )}
              </MxmFormErrorMessage>
            </FormControl>
            <FormControl mb={3} mr="5" isInvalid={errors.idLine}>
              <MxmFormLabel color="black">ID LINE</MxmFormLabel>
              <MxmInput
                {...register("idLine", {
                  required: "Isi ID LINE kamu",
                  pattern: {
                    value: /^([0-9]||[a-z]||[-_.])+$/,
                    message: "ID LINE tidak valid",
                  },
                })}
              />
              <MxmFormErrorMessage fontSize="xs" mt={1}>
                {errors.idLine && (
                  <Flex flexDirection="row" alignItems="center">
                    <p>
                      <FormErrorIcon fontSize="xs" mt="-0.1em" />
                      {errors.idLine.message}
                    </p>
                  </Flex>
                )}
              </MxmFormErrorMessage>
            </FormControl>
            <FormControl mb={3} isInvalid={errors.idInstagram}>
              <MxmFormLabel color="black">Username Instagram</MxmFormLabel>
              <MxmInput
                placeholder="Isi tanpa @"
                {...register("idInstagram", {
                  required: "Isi username instagram kamu",
                  pattern: {
                    value: /^([0-9]||[a-z]||[-_.]||[A-Z])+$/,
                    message: "Username Instagram tidak valid",
                  },
                })}
              />
              <MxmFormErrorMessage fontSize="xs" mt={1}>
                {errors.idInstagram && (
                  <Flex flexDirection="row" alignItems="center">
                    <p>
                      <FormErrorIcon fontSize="xs" mt="-0.1em" />
                      {errors.idInstagram.message}
                    </p>
                  </Flex>
                )}
              </MxmFormErrorMessage>
            </FormControl>
          </Flex>
          <Flex mt={2}>
            <Spacer />
            {loading ? (
              <Button
                isLoading
                loadingText="Submitting"
                spinnerPlacement="start"
                backgroundColor="#41ceba"
                color="white"
                padding="1em 2em 1em 2em"
                borderRadius="999px"
                boxShadow="-1.2px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                type="submit"
                _hover={{ backgroundColor: "#2BAD96" }}
              >
                SUBMIT
              </Button>
            ) : (
              <Button
                backgroundColor="#41ceba"
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

export default TambahMahasiswa;
