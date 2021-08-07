import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Flex,
  Heading,
  Input,
  FormControl,
  FormErrorIcon,
  InputLeftAddon,
  InputRightAddon,
  Divider,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { createIcon } from "@chakra-ui/react";
import {
  MxmInput,
  MxmInputGroup,
  MxmFormLabel,
  MxmSelect,
  MxmFormErrorMessage,
} from "../../../shared/styled/input";
import {
  MxmContainers,
  MxmVerticalAlign,
} from "../../../shared/styled/containers";
import { MxmButton } from "../../../shared/styled/buttons";
import { MxmLogo } from "../../../assets";
import { motion } from "framer-motion";
import { Palette } from "../../../types/enums";
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

    // const dataMaba: DataRegisterMaba = {
    //   nim: "42580",
    //   name: "Adrian Finantyo",
    //   email: "bonifasius.finantyo@student.umn.ac.id",
    //   tempatLahir: "Tangerang",
    //   tanggalLahir: "2002-06-05",
    //   jenisKelamin: "L",
    //   prodi: "IT",
    //   whatsApp: "082114188134",
    //   idLine: "adrianfinantyo",
    //   idInstagram: "adrianfinantyo",
    // };

    console.log(JSON.stringify(dataMaba));

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
    <MxmContainers>
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={cardVariants}>
          <Flex
            height={{
              base: "100%",
              md: "80vh",
            }}
            alignItems="center"
            justifyContent="center"
            paddingTop={{
              base: "2rem",
              md: "0",
            }}
            paddingBottom={{
              base: "5rem",
              md: "0",
            }}
          >
            <Flex
              direction="column"
              background="linear-gradient(180deg, rgba(65, 206, 186, 0.85) 44.79%, rgba(31, 44, 76, 0.85) 100%);"
              py="2vh"
              px={{
                base: "5vw",
                md: "2vw",
              }}
              my={{
                base: "1vh",
                md: "10vh",
              }}
              mx={{
                base: "1vw",
                md: "10vw",
              }}
              rounded={25}
              style={{
                WebkitBackdropFilter: "blur(4px)",
                backdropFilter: "blur(4px)",
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Flex mb={3} alignItems="center">
                  <Heading
                    color="white"
                    letterSpacing="0.05em"
                    fontSize={{
                      base: "1.5em",
                      xl: "1.7em",
                    }}
                  >
                    Daftar
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
                    // mt={2}
                  />
                </Flex>
                <Divider
                  colorScheme="whiteAlpha"
                  style={{ border: "2px solid white" }}
                  mb={3}
                />
                <Flex
                  direction={{
                    base: "column",
                    md: "row",
                  }}
                >
                  <FormControl mb={3} mr="5" isInvalid={errors.name}>
                    <MxmFormLabel>NAMA LENGKAP</MxmFormLabel>
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
                    <MxmFormLabel>NIM Anda</MxmFormLabel>
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
                    <MxmFormLabel>Tempat Lahir</MxmFormLabel>
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
                    <MxmFormLabel>Tanggal Lahir</MxmFormLabel>
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
                    <MxmFormLabel>Jenis Kelamin</MxmFormLabel>
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
                    <MxmFormLabel>Program Studi</MxmFormLabel>
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
                    <MxmFormLabel>Email Student</MxmFormLabel>
                    <MxmInputGroup addon="right">
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
                    <MxmFormLabel>Nomor HP (WhatsApp)</MxmFormLabel>
                    <MxmInput
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
                    <MxmFormLabel>ID LINE</MxmFormLabel>
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
                    <MxmFormLabel>Username Instagram</MxmFormLabel>
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
                <Flex
                  fontFamily="Rubik"
                  fontWeight="400"
                  fontSize="0.8em"
                  mt={1}
                >
                  <MxmVerticalAlign variant="">
                    <Text color="white">
                      Sudah punya akun?{" "}
                      <Link
                        to="/auth/masuk"
                        style={{ color: `${Palette.Cyan}` }}
                      >
                        Masuk
                      </Link>
                    </Text>
                  </MxmVerticalAlign>
                  <Spacer />
                  <motion.div className="back" variants={buttonVariants}>
                    {loading ? (
                      <MxmButton
                        isLoading
                        loadingText="Daftar"
                        spinnerPlacement="start"
                        type="submit"
                        variant="rounded"
                        colorScheme="cyan-white"
                      >
                        Daftar
                      </MxmButton>
                    ) : (
                      <MxmButton
                        type="submit"
                        variant="rounded"
                        colorScheme="cyan-white"
                      >
                        Daftar
                      </MxmButton>
                    )}
                  </motion.div>
                </Flex>
              </form>
            </Flex>
          </Flex>
        </motion.div>
      </motion.div>
    </MxmContainers>
  );
};

export default RegisterMhs;
