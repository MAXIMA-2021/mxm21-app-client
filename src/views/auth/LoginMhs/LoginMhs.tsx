import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Flex,
  Input,
  Button,
  InputLeftAddon,
  InputRightElement,
  FormControl,
  FormErrorMessage,
  Divider,
  Spinner,
  Alert,
  AlertIcon,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { MxmInputGroupMhs } from "../../../shared/styled/input";
import { MxmLogoText } from "../../../assets";
import { motion } from "framer-motion";
import authService from "../../../services/auth";
import Swal from "sweetalert2";
import { DataLogin } from "../../../types/interfaces";
import "./LoginMhs.scss";
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

const LoginMhs: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [isThinnerThan620px] = useMediaQuery("(max-width: 620px)");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  useEffect(() => {
    document.title = "Masuk - MAXIMA 2021";
  }, []);

  const onSubmit = async (data: DataLogin) => {
    setLoading(true);

    try {
      const returnedData = await authService.loginMhs(data);
      reset();

      window.sessionStorage.setItem("token", returnedData.token);
      window.sessionStorage.setItem("name", returnedData.nama);
      window.location.href = "/";
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
    <Flex className="loginmhs-outer-container">
      <div className="loginmhs-side-banner"></div>
      <Flex className="loginmhs-form-outer-container">
        <Flex className="loginmhs-form-inner-container">
          {location.state && (
            <Alert
              status={location?.state?.status}
              width={isThinnerThan620px ? "90vw" : "max-content"}
              style={{ justifyContent: "center" }}
            >
              <AlertIcon />
              {location?.state?.message}
            </Alert>
          )}
          <img src={MxmLogoText} alt="" className="loginmhs-form-logo" />
          <div className="loginmhs-form-header">
            <h1>Alô, Dreamers!</h1>
          </div>
          <div className="loginmhs-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.nim}>
                <span className="loginmhs-form-span">NIM</span>
                <MxmInputGroupMhs addon="left">
                  <InputLeftAddon
                    size="base"
                    children="000000"
                    fontFamily="Poppins"
                    className="loginmhs-nim-addon"
                  />
                  <Input
                    type="number"
                    placeholder="5 angka terakhir NIM"
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
                </MxmInputGroupMhs>
                <FormErrorMessage>
                  {errors.nim && errors.nim.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.password}>
                <Flex className="loginmhs-pass-label" mt={"1.5rem"}>
                  <span className="loginmhs-form-span">PASSWORD</span>
                  <Link to="/auth/reset">Lupa Password?</Link>
                </Flex>
                <MxmInputGroupMhs addon="icon">
                  <Input
                    placeholder="Masukkan password kamu"
                    {...register("password", {
                      required: "Isi password kamu",
                    })}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    className="loginmhs-pass-input"
                  />
                  <InputRightElement>
                    <Button
                      className="show-password"
                      size="base"
                      onClick={handleClick}
                    >
                      {show ? <IconHidePassword /> : <IconShowPassword />}
                    </Button>
                  </InputRightElement>
                </MxmInputGroupMhs>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <motion.div className="back" variants={buttonVariants}>
                <button type="submit" className="loginmhs-btn-masuk">
                  {loading ? <Spinner mr={"5px"} size="sm" /> : ""}
                  Masuk
                </button>
              </motion.div>
            </form>
            <Flex className="loginmhs-links">
              <div>
                Belum punya akun? <Link to="/auth/daftar">Daftar</Link>
              </div>
              <Divider
                colorScheme="whiteAlpha"
                style={{ border: "1px solid rgba(31, 44, 76, 0.4)" }}
                mt={"45px"}
                mb={"2rem"}
              />
              <div>
                Apakah kamu panitia? <Link to="/auth/panitia/masuk">Masuk</Link>
              </div>
              <div style={{ marginTop: "0.875rem" }}>
                Apakah kamu organisator?{" "}
                <Link to="/auth/organisator/masuk">Masuk</Link>
              </div>
            </Flex>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoginMhs;
