import React, { useState, useRef, useEffect } from "react";
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
  InputRightElement,
  useToast,
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
import { DataRegisterPanitia } from "../../../../../types/interfaces";
import Swal from "sweetalert2";
import authService from "../../../../../services/auth";
import "./TambahAkunPanitia.scss";
import { useHistory } from "react-router-dom";
import {
  IconHidePassword,
  IconShowPassword,
} from "../../../../../shared/styled/buttons";

const TambahPanitia: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm();
  const toast = useToast();
  const history = useHistory();
  const handleSelectChange = (event: any) => {
    if (event.target.value !== "") {
      event.target.style.color = "black";
    }
  };

  useEffect(() => {
    document.title = "[Dashboard] - Tambah Akun Panitia";
  }, []);

  const password = useRef({});
  password.current = watch("password", "");

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [loading, setLoading] = useState(false);
  const onSubmit = async (data: DataRegisterPanitia) => {
    setLoading(true);

    const dataPanitia: DataRegisterPanitia = {
      nim: data.nim.toString(),
      name: data.name,
      email: `${data.email}@student.umn.ac.id`,
      password: data.password,
      divisiID: data.divisiID,
    };

    try {
      await authService.daftarPanitia(dataPanitia);
      reset();
      toast({
        title: "Akun Panitia MAXIMA 2021 berhasil dibuat!",
        position: "bottom-right",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      history.push("/admin/daftar-panitia");
    } catch (error) {
      Swal.fire({
        title: "Perhatian!",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "Coba lagi",
      });
    }
    setLoading(false);

    setValue("divisiID", "");
    setFocus("name");
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      backgroundColor="#f4f4f4"
      height={{ base: "100%", md: "calc(100vh - 3.75rem - 3.5rem)" }}
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
        width={{ base: "95vw", md: "initial" }}
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
              Tambah Akun Panitia
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
                md: "60%",
                xl: "50%",
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
            <FormControl
              w={{
                base: "100%",
                md: "40%",
              }}
              mb={3}
              mr="5"
              isInvalid={errors.divisiID}
            >
              <MxmFormLabel color="black">Divisi</MxmFormLabel>
              <MxmSelect
                className="select"
                {...register("divisiID", {
                  required: "Isi nama divisi kamu",
                })}
                onChange={handleSelectChange}
              >
                <option value="" selected disabled hidden>
                  Pilih Divisi
                </option>
                {Divisi.map((divisi) => (
                  <option value={divisi.id}>{divisi.nama}</option>
                ))}
              </MxmSelect>
              <MxmFormErrorMessage fontSize="xs" mt={1}>
                {errors.divisiID && (
                  <Flex flexDirection="row" alignItems="center">
                    <p>
                      <FormErrorIcon fontSize="xs" mt="-0.1em" />
                      {errors.divisiID.message}
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
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}
          >
            <FormControl isInvalid={errors.password} mb={3} mr="5">
              <MxmFormLabel color="black">Password</MxmFormLabel>
              <MxmInputGroup addon="icon">
                <Input
                  placeholder="Password minimal 8 karakter"
                  {...register("password", {
                    required: "Isi password kamu",
                    minLength: {
                      value: 8,
                      message: "Password minimal 8 karakter",
                    },
                  })}
                  type={show ? "text" : "password"}
                />
                <InputRightElement>
                  <Button size="base" onClick={handleClick}>
                    {show ? <IconHidePassword /> : <IconShowPassword />}
                  </Button>
                </InputRightElement>
              </MxmInputGroup>
              <MxmFormErrorMessage fontSize="xs" mt={1}>
                {errors.password && (
                  <p>
                    <FormErrorIcon fontSize="xs" mt="-0.1em" />
                    {errors.password.message}
                  </p>
                )}
              </MxmFormErrorMessage>
            </FormControl>
            <FormControl mb={3} isInvalid={errors.konfirmasiPassword}>
              <MxmFormLabel color="black">Konfirmasi Password</MxmFormLabel>
              <MxmInputGroup>
                <Input
                  type="password"
                  {...register("konfirmasiPassword", {
                    required: "Masukkan ulang password kamu",
                    validate: (value) =>
                      value === password.current || "Password belum sama",
                  })}
                />
              </MxmInputGroup>
              <MxmFormErrorMessage fontSize="xs" mt={1}>
                {errors.konfirmasiPassword && (
                  <p>
                    <FormErrorIcon fontSize="xs" mt="-0.1em" />
                    {errors.konfirmasiPassword.message}
                  </p>
                )}
              </MxmFormErrorMessage>
            </FormControl>
          </Flex>
          <Flex mt={2}>
            <Spacer />
            {loading ? (
              <Button
                isLoading
                loadingText="Tambah Akun"
                spinnerPlacement="start"
                backgroundColor="#41ceba"
                color="white"
                padding="1em 2em 1em 2em"
                borderRadius="999px"
                boxShadow="-1.2px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                type="submit"
                _hover={{ backgroundColor: "#2BAD96" }}
              >
                Tambah Akun
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
                Tambah Akun
              </Button>
            )}
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default TambahPanitia;

const Divisi = [
  { nama: "Website", id: "D02" },
  { nama: "Acara", id: "D03" },
  { nama: "BPH", id: "D04" },
  { nama: "Bazaar", id: "D05" },
  { nama: "Dekorasi", id: "D06" },
  { nama: "Dokumentasi", id: "D07" },
  { nama: "Fresh Money", id: "D08" },
  { nama: "Media Relations", id: "D09" },
  { nama: "Merchandise", id: "D10" },
  { nama: "Perlengkapan", id: "D11" },
  { nama: "Publikasi", id: "D12" },
  { nama: "Seccom", id: "D13" },
  { nama: "Sponsor", id: "D14" },
  { nama: "Visual", id: "D15" },
];
