import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Flex,
  Input,
  FormControl,
  InputLeftAddon,
  InputRightAddon,
  Image,
  Text,
  InputRightElement,
  Button,
  Stack,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  Select,
  Center,
  Badge,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { MxmFormErrorMessage } from "../../../shared/styled/input";
import { MxmContainersPanitia } from "../../../shared/styled/containers";
import { MxmLogo } from "../../../assets";
import { motion } from "framer-motion";
import "./RegisterPanitia.scss";
import Swal from "sweetalert2";
import authService from "../../../services/auth";
import { DataRegisterPanitia } from "../../../types/interfaces";
import { LoginFormCard } from "../../../shared/styled/containers";
import { formLabelStyle } from "../../../shared/styled/input";
import { formHeaderStyle } from "../../../shared/styled/input";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  IconHidePassword,
  IconShowPassword,
} from "../../../shared/styled/buttons";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const cardVariants = {
  exit: { y: "50%", opacity: 0, transition: { delay: 0.2, ...transition } },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

const buttonVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
};

const RegisterPanitia: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  useEffect(() => {
    document.title = "[Panitia] Daftar - MAXIMA 2021";
  }, []);

  const history = useHistory();
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
      reset();
      await authService.daftarPanitia(dataPanitia);
      history.push("/auth/panitia/masuk", {
        status: "success",
        message:
          "Akun Panitia MAXIMA 2021 berhasil dibuat! Silakan tunggu verifikasi dari pihak Web MAXIMA 2021.",
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
  };

  return (
    <MxmContainersPanitia>
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={cardVariants}>
          <Flex alignItems="center" justifyContent="center">
            <LoginFormCard>
              <Link to="/" style={{ width: "max-content", display: "block" }}>
                <Image src={MxmLogo} width={50} height="auto" />
              </Link>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Text style={formHeaderStyle}>
                  Aktivasi Akun{" "}
                  <Badge colorScheme="green" ml={1.5}>
                    panitia
                  </Badge>
                </Text>
                <Stack spacing={4}>
                  <FormControl id="name" isInvalid={errors.name}>
                    <FormLabel style={formLabelStyle}>Nama Lengkap</FormLabel>
                    <Input
                      type="text"
                      autoFocus
                      {...register("name", {
                        required: "Isi nama lengkap kamu",
                      })}
                    />
                    <FormErrorMessage>
                      {errors.name && errors.name.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl id="nim_koor" isInvalid={errors.nim}>
                    <FormLabel style={formLabelStyle}>NIM</FormLabel>
                    <InputGroup>
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
                    </InputGroup>
                    <FormErrorMessage>
                      {errors.nim && errors.nim.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl id="divisiID" isInvalid={errors.divisiID}>
                    <FormLabel style={formLabelStyle}>Divisi</FormLabel>
                    <Select
                      placeholder="Pilih divisi"
                      {...register("divisiID", {
                        required: "Isi nama divisi kamu",
                      })}
                    >
                      {Divisi.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.nama}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.divisiID && errors.divisiID.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.email}>
                    <FormLabel style={formLabelStyle}>Email Student</FormLabel>
                    <InputGroup addon="right">
                      <Input
                        {...register("email", {
                          required: "Isi email student kamu",
                          pattern: {
                            value: /^[^@]+$/g,
                            message:
                              "Alamat email tidak perlu mencantumkan domain",
                          },
                        })}
                      />
                      <InputRightAddon children="@student.umn.ac.id" />
                    </InputGroup>
                    <FormErrorMessage>
                      {errors.email && errors.email.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.password}>
                    <FormLabel style={formLabelStyle}>Password</FormLabel>
                    <InputGroup addon="icon">
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
                        <Button size="base" onClick={handleClick} tabIndex={-1}>
                          {show ? <IconHidePassword /> : <IconShowPassword />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <MxmFormErrorMessage>
                      {errors.password && errors.password.message}
                    </MxmFormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={errors.konfirmasiPassword}
                    paddingBottom="0.5rem"
                  >
                    <FormLabel style={formLabelStyle}>
                      Konfirmasi Password
                    </FormLabel>
                    <InputGroup>
                      <Input
                        type="password"
                        {...register("konfirmasiPassword", {
                          required: "Masukkan ulang password kamu",
                          validate: (value) =>
                            value === password.current || "Password belum sama",
                        })}
                      />
                    </InputGroup>
                    <FormErrorMessage fontSize="xs" mt={1}>
                      {errors.konfirmasiPassword &&
                        errors.konfirmasiPassword.message}
                    </FormErrorMessage>
                  </FormControl>

                  {loading ? (
                    <Button
                      isLoading
                      loadingText="Daftarkan Akun"
                      spinnerPlacement="start"
                      type="submit"
                      colorScheme="teal"
                    >
                      Daftar
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      colorScheme="teal"
                      leftIcon={<ArrowForwardIcon />}
                    >
                      Daftar
                    </Button>
                  )}
                </Stack>
                <Center mt={8}>
                  <Stack spacing={1}>
                    <Link to="/auth/panitia/masuk">
                      <Text fontSize="xs" textAlign="center" color="blue.500">
                        Sudah memiliki akun? Masuk di sini
                      </Text>
                    </Link>
                    <Link to="/auth/reset">
                      <Text fontSize="xs" textAlign="center" color="blue.500">
                        Lupa password kamu? Klik di sini
                      </Text>
                    </Link>
                  </Stack>
                </Center>
              </form>
            </LoginFormCard>
          </Flex>
        </motion.div>
      </motion.div>
    </MxmContainersPanitia>
  );
};

export default RegisterPanitia;

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
