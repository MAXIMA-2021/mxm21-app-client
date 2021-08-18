import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Flex,
  Input,
  FormControl,
  FormErrorIcon,
  InputLeftAddon,
  InputRightAddon,
  Image,
  Spacer,
  Text,
  useMediaQuery,
  Button,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import {
  MxmInputGroupMhs,
  MxmFormLabel,
  MxmSelectMhs,
  MxmFormErrorMessage,
  formHeaderStyle,
  MxmInputMhs,
  formLabelStyle,
} from "../../../shared/styled/input";
import {
  MxmContainersPanitia,
  MxmVerticalAlign,
} from "../../../shared/styled/containers";
import {
  IconHidePassword,
  IconShowPassword,
  MxmButton,
} from "../../../shared/styled/buttons";
import { MxmLogo } from "../../../assets";
import { motion } from "framer-motion";
import "./RegisterMhs.scss";
import Swal from "sweetalert2";
import authService from "../../../services/auth";
import { DataRegisterMaba } from "../../../types/interfaces";

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

const RegisterMhs: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [isSmallerThan450px] = useMediaQuery("(max-width: 450px)");

  const password = useRef({});
  password.current = watch("password", "");

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleSelectChange = (event: any) => {
    if (event.target.value !== "") {
      event.target.style.color = "black";
    }
  };

  useEffect(() => {
    document.title = "Pendaftaran Akun Mahasiswa Baru - MAXIMA 2021";
  }, []);

  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: DataRegisterMaba) => {
    setLoading(true);

    const dataMaba: DataRegisterMaba = {
      nim: data.nim.toString(),
      name: data.name,
      email: `${data.email}@student.umn.ac.id`,
      password: data.password,
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

    try {
      await authService.daftarMhs(dataMaba);
      reset();
      history.push("/auth/masuk", {
        status: "success",
        message: "Kamu berhasil mendaftarkan akun MAXIMA 2021. Silakan masuk.",
      });
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
    <MxmContainersPanitia className="regMhs-bg-pattern">
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={cardVariants}>
          <Flex alignItems="center" justifyContent="center">
            <Flex
              direction="column"
              background="white"
              padding="2.5em 3em 2.5em 3em"
              rounded={7}
              boxShadow="0 15px 35px 0 rgba(60,66,87,.08),0 5px 15px 0 rgba(0,0,0,.12)"
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Link to="/" style={{ width: "max-content", display: "block" }}>
                  <Image src={MxmLogo} width={50} height="auto" />
                </Link>
                <Text style={formHeaderStyle}>Daftarkan Akunmu di sini </Text>
                <Flex
                  direction={{
                    base: "column",
                    md: "row",
                  }}
                >
                  <FormControl mb={3} mr="5" isInvalid={errors.name}>
                    <MxmFormLabel style={formLabelStyle}>
                      NAMA LENGKAP
                    </MxmFormLabel>
                    <MxmInputMhs
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
                    <MxmFormLabel style={formLabelStyle}>NIM Anda</MxmFormLabel>
                    <MxmInputGroupMhs addon="left">
                      <InputLeftAddon
                        children="000000"
                        fontFamily="Poppins"
                        className="loginmhs-nim-addon"
                      />
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
                    </MxmInputGroupMhs>
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
                    <MxmFormLabel style={formLabelStyle}>
                      Tempat Lahir
                    </MxmFormLabel>
                    <MxmInputMhs
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
                    <MxmFormLabel style={formLabelStyle}>
                      Tanggal Lahir
                    </MxmFormLabel>
                    <MxmInputMhs
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
                    <MxmFormLabel style={formLabelStyle}>
                      Jenis Kelamin
                    </MxmFormLabel>
                    <MxmSelectMhs
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
                    </MxmSelectMhs>
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
                    <MxmFormLabel style={formLabelStyle}>
                      Program Studi
                    </MxmFormLabel>
                    <MxmSelectMhs
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
                    </MxmSelectMhs>
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
                    <MxmFormLabel style={formLabelStyle}>
                      Email Student
                    </MxmFormLabel>
                    <MxmInputGroupMhs addon="right">
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
                    </MxmInputGroupMhs>
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
                    <MxmFormLabel style={formLabelStyle}>
                      Nomor HP (WhatsApp)
                    </MxmFormLabel>
                    <MxmInputMhs
                      placeholder="08XXXXXXXXXX"
                      {...register("whatsapp", {
                        required: "Isi nomor whatsapp kamu",
                        minLength: {
                          value: 10,
                          message:
                            "Nomor whatsapp tidak dapat dibawah 10 digit",
                        },
                        maxLength: {
                          value: 13,
                          message:
                            "Nomor whatsapp tidak dapat lebih dari 13 digit",
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
                    <MxmFormLabel style={formLabelStyle}>ID LINE</MxmFormLabel>
                    <MxmInputMhs
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
                    <MxmFormLabel style={formLabelStyle}>
                      Username Instagram
                    </MxmFormLabel>
                    <MxmInputMhs
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
                <Flex
                  direction={{
                    base: "column",
                    md: "row",
                  }}
                >
                  <FormControl isInvalid={errors.password} mb={3} mr="5">
                    <MxmFormLabel style={formLabelStyle}>Password</MxmFormLabel>
                    <MxmInputGroupMhs addon="icon">
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
                    </MxmInputGroupMhs>
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
                    <MxmFormLabel style={formLabelStyle}>
                      Konfirmasi Password
                    </MxmFormLabel>
                    <MxmInputGroupMhs>
                      <Input
                        type="password"
                        {...register("konfirmasiPassword", {
                          required: "Masukkan ulang password kamu",
                          validate: (value) =>
                            value === password.current || "Password belum sama",
                        })}
                      />
                    </MxmInputGroupMhs>
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
                <Flex
                  fontFamily="Rubik"
                  fontWeight="400"
                  fontSize="0.8em"
                  mt={1}
                  direction={isSmallerThan450px ? "column-reverse" : "row"}
                >
                  <MxmVerticalAlign variant="">
                    <Text color="#000">
                      Sudah punya akun?{" "}
                      <Link to="/auth/masuk" style={{ color: `#0645ad` }}>
                        Masuk
                      </Link>
                    </Text>
                  </MxmVerticalAlign>
                  <Spacer />
                  <motion.div className="back" variants={buttonVariants}>
                    <button type="submit" className="regmhs-btn-masuk">
                      {loading ? <Spinner mr={"5px"} size="sm" /> : ""}
                      Daftar
                    </button>
                  </motion.div>
                </Flex>
              </form>
            </Flex>
          </Flex>
        </motion.div>
      </motion.div>
    </MxmContainersPanitia>
  );
};

export default RegisterMhs;
