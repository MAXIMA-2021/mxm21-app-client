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
  Center,
  Select,
  Badge,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import {
  IconShowPassword,
  IconHidePassword,
} from "../../../shared/styled/buttons";
import {
  MxmFormErrorMessage,
  formHeaderStyle,
  formLabelStyle,
} from "../../../shared/styled/input";
import {
  LoginFormCard,
  MxmContainersPanitia,
} from "../../../shared/styled/containers";
import { MxmLogo } from "../../../assets";
import { motion } from "framer-motion";
import "./RegisterOrganisator.scss";
import Swal from "sweetalert2";
import authService from "../../../services/auth";
import { DataRegisterOrganisator } from "../../../types/interfaces";
import { ArrowForwardIcon } from "@chakra-ui/icons";

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

const RegisterOrganisator: React.FC = () => {
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

  const [data, setData] = useState([]);
  useEffect(() => {
    document.title = "[Organisator] Daftar - MAXIMA 2021";
    const fetchData = async () => {
      try {
        const returnedData = await authService.getPublicState();
        setData(returnedData);
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

  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: DataRegisterOrganisator) => {
    setLoading(true);

    const dataOrganisator: DataRegisterOrganisator = {
      nim: data.nim.toString(),
      name: data.name,
      email: `${data.email}@student.umn.ac.id`,
      password: data.password,
      stateID: data.stateID,
    };

    try {
      await authService.daftarOrganisator(dataOrganisator);
      reset();
      history.push("/auth/organisator/masuk", {
        status: "success",
        message:
          "Akun Organisator MAXIMA 2021 berhasil dibuat! Silakan tunggu verifikasi dari pihak Web MAXIMA 2021.",
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
    <MxmContainersPanitia style={{ minHeight: "1000px" }}>
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={cardVariants}>
          <Flex alignItems="center" justifyContent="center">
            <LoginFormCard>
              <Image src={MxmLogo} width={50} height="auto" />
              <form onSubmit={handleSubmit(onSubmit)}>
                <Text style={formHeaderStyle}>
                  Aktivasi Akun
                  <Badge colorScheme="green" ml={1.5}>
                    organisator
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

                  <FormControl id="divisiID" isInvalid={errors.stateID}>
                    <FormLabel style={formLabelStyle}>STATE</FormLabel>
                    <Select
                      placeholder="Pilih STATE"
                      {...register("stateID", {
                        required: "Isi nama kegiatan STATE",
                      })}
                    >
                      {data.map((data: any, key: number) => (
                        <option value={data.stateID} id={`${key}`}>
                          {data.stateID} - {data.name}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.stateID && errors.stateID.message}
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
                        <Button size="base" onClick={handleClick}>
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
                    <Link to="/auth/organisator/masuk">
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

export default RegisterOrganisator;
