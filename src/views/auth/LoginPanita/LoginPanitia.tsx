import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Flex,
  Center,
  Input,
  Button,
  InputLeftAddon,
  InputRightElement,
  FormControl,
  Image,
  Text,
  Alert,
  AlertIcon,
  Stack,
  InputGroup,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { MxmContainersPanitia} from "../../../shared/styled/containers";
import { MxmLogo } from "../../../assets";
import { motion } from "framer-motion";
import authService from "../../../services/auth";
import Swal from "sweetalert2";
import { DataLogin } from "../../../types/interfaces";

//YANG DARI OPREC
import { LoginFormCard } from "../../../shared/styled/containers";
import { formLabelStyle } from "../../../shared/styled/input";
import { formHeaderStyle } from "../../../shared/styled/input";
import { UnlockIcon } from "@chakra-ui/icons";

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

const LoginPanitia: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  useEffect(() => {
    document.title = "[Panitia] Masuk - MAXIMA 2021";
  }, []);

  const onSubmit = async (data: DataLogin) => {
    setLoading(true);
    reset();

    try {
      const returnedData = await authService.loginPanitia(data);
      window.sessionStorage.setItem("name", returnedData.nama);
      window.sessionStorage.setItem("token", returnedData.token);
      window.sessionStorage.setItem("role", returnedData.role);
      window.location.href = "/admin";
    } catch (error) {
      Swal.fire({
        title: "Perhatian!",
        text: error.response?.data.message,
        icon: "error",
        confirmButtonText: "Coba lagi",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <MxmContainersPanitia style={{ paddingBottom: "calc(20vh + 2vh)" }}>
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={cardVariants}>
          <Flex
            flexDir="column"
            height={{
              base: "100vh",
              md: "80vh",
            }}
            alignItems="center"
            justifyContent="center"
          >
            {location.state && (
              <Alert
                fontFamily="Rubik"
                fontSize="0.9rem"
                status={location.state.status}
                width={{ base: "20rem", lg: "max-content" }}
                marginBottom="1rem"
              >
                <AlertIcon />
                {location.state.message}
              </Alert>
            )}
            <LoginFormCard>
              <Image src={MxmLogo} width={50} height="auto" />
              <form onSubmit={handleSubmit(onSubmit)}>
                <Text style={formHeaderStyle}>Masuk ke akun Anda</Text>
                <Stack spacing={4}>
                  <FormControl id="nim_koor" isInvalid={errors.nim}>
                    <FormLabel style={formLabelStyle}>NIM</FormLabel>
                    <InputGroup>
                      <InputLeftAddon
                        size="base"
                        children="000000"
                        fontFamily="Rubik"
                      />
                      <Input
                        autoFocus
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

                  <FormControl
                    isInvalid={errors.password}
                    paddingBottom="0.5rem"
                  >
                    <FormLabel style={formLabelStyle}>Password</FormLabel>
                    <InputGroup size="md" addon="icon">
                      <Input
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        {...register("password", {
                          required: "Isi password kamu",
                        })}
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>
                      {errors.password && errors.password.message}
                    </FormErrorMessage>
                  </FormControl>
                  {loading ? (
                    <Button
                      isLoading
                      loadingText="Masuk"
                      spinnerPlacement="start"
                      type="submit"
                      colorScheme="teal"
                    >
                      Masuk
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      colorScheme="teal"
                      leftIcon={<UnlockIcon />}
                    >
                      Masuk
                    </Button>
                  )}
                </Stack>
              </form>
              <Center mt={8}>
                <Stack spacing={1}>
                  <Link to="/auth/panitia/daftar">
                    <Text fontSize="xs" textAlign="center" color="blue.500">
                      Belum memiliki akun? Daftar di sini
                    </Text>
                  </Link>
                  <Link to="/auth/reset">
                    <Text fontSize="xs" textAlign="center" color="blue.500">
                      Lupa password kamu? Klik di sini
                    </Text>
                  </Link>
                </Stack>
              </Center>
            </LoginFormCard>
          </Flex>
        </motion.div>
      </motion.div>
    </MxmContainersPanitia>
  );
};

export default LoginPanitia;
