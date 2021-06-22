import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  Flex,
  Box,
  Center,
  VStack,
  HStack,
  Heading,
  Input,
  Button,
  FormLabel,
  NumberInput,
  NumberInputField,
  FormControl,
  FormErrorMessage,
  FormErrorIcon,
  InputLeftAddon,
  InputRightAddon,
  InputRightElement,
  Divider,
  Image,
  Spacer,
  Select,
  Grid,
} from "@chakra-ui/react";
import { createIcon } from "@chakra-ui/react";
import {
  MxmInput,
  MxmInputGroup,
  MxmFormLabel,
  MxmSelect,
} from "../../../shared/styled/input";
import { MxmContainers } from "../../../shared/styled/containers";
import { MxmButton } from "../../../shared/styled/buttons";
import { MxmLogo, MxmLogoText } from "../../../assets";
import { kMaxLength } from "buffer";

const IconShowPassword = createIcon({
  displayName: "ShowPassword",
  viewBox: "0 0 24 24",
  d: "M12 19C10.3599 19.0204 8.7367 18.6664 7.254 17.965C6.10469 17.4042 5.07265 16.6297 4.213 15.683C3.30243 14.7041 2.58547 13.5616 2.1 12.316L2 12L2.105 11.684C2.59082 10.4394 3.30624 9.29725 4.214 8.31698C5.07334 7.37029 6.10504 6.59584 7.254 6.03498C8.73671 5.33357 10.3599 4.97959 12 4.99998C13.6401 4.97963 15.2633 5.3336 16.746 6.03498C17.8953 6.59571 18.9274 7.37017 19.787 8.31698C20.6993 9.29453 21.4165 10.4373 21.9 11.684L22 12L21.895 12.316C20.3262 16.3998 16.3742 19.0693 12 19ZM12 6.99998C8.59587 6.89331 5.47142 8.87507 4.117 12C5.4712 15.1251 8.59579 17.1069 12 17C15.4041 17.1064 18.5284 15.1247 19.883 12C18.5304 8.87356 15.4047 6.89106 12 6.99998ZM12 15C10.5573 15.0095 9.30937 13.9973 9.02097 12.5838C8.73256 11.1702 9.48427 9.75 10.8154 9.19364C12.1465 8.63728 13.6852 9.10011 14.4885 10.2985C15.2919 11.4969 15.1354 13.0961 14.115 14.116C13.5563 14.6812 12.7948 14.9995 12 15Z",
});

const IconHidePassword = createIcon({
  displayName: "HidePassword",
  viewBox: "0 0 24 24",
  d: "M19.97 21.385L16.614 18.029C15.1661 18.6882 13.5908 19.0204 12 19.002C10.3599 19.0224 8.73671 18.6684 7.254 17.967C6.10468 17.4063 5.07264 16.6318 4.213 15.685C3.30049 14.7069 2.5833 13.5634 2.1 12.316L2 12.002L2.105 11.686C2.82781 9.84231 4.04426 8.23318 5.621 7.03501L3 4.41401L4.413 3.00201L21.382 19.971L19.972 21.385H19.97ZM7.036 8.45101C5.75792 9.34693 4.74865 10.5747 4.117 12.002C5.47142 15.1269 8.59587 17.1087 12 17.002C13.0498 17.0106 14.0936 16.8416 15.087 16.502L13.287 14.702C12.8863 14.8984 12.4462 15.001 12 15.002C10.3475 14.9916 9.01037 13.6546 9 12.002C9.00048 11.5548 9.10309 11.1136 9.3 10.712L7.036 8.45101ZM19.852 15.612L18.46 14.221C19.0456 13.5589 19.5256 12.8105 19.883 12.002C18.5304 8.87559 15.4047 6.89309 12 7.00201C11.753 7.00201 11.505 7.01101 11.265 7.02801L9.5 5.26101C10.3216 5.08525 11.1598 4.99841 12 5.00201C13.6401 4.98166 15.2633 5.33564 16.746 6.03701C17.8953 6.59775 18.9274 7.37221 19.787 8.31901C20.6991 9.29598 21.4163 10.4381 21.9 11.684L22 12.002L21.895 12.318C21.4268 13.5361 20.7342 14.6555 19.853 15.618L19.852 15.612Z",
});

const RegisterMaba: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data: any) => {
    window.confirm(JSON.stringify(data));
  };
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <MxmContainers>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex
          direction="column"
          background="linear-gradient(180deg, rgba(65, 206, 186, 0.85) 44.79%, rgba(31, 44, 76, 0.85) 100%);"
          py={5}
          px={10}
          m={20}
          rounded={25}
          style={{
            WebkitBackdropFilter: "blur(4px)",
            backdropFilter: "blur(4px)",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex>
              <Heading mb={3} color="white">
                Daftar
              </Heading>
              <Spacer />
              <Image
                src={MxmLogo}
                alt="Logo MAXIMA 2021"
                height={8}
                width={8}
                mt={2}
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
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              }}
            >
              <FormControl mb={3} mr="5" isInvalid={errors.nama}>
                <MxmFormLabel>NAMA LENGKAP</MxmFormLabel>
                <MxmInput
                  placeholder="Nama"
                  {...register("nama", { required: "Tidak boleh kosong" })}
                />
                <FormErrorMessage>
                  {errors.nama && (
                    <p>
                      <FormErrorIcon />
                      {errors.nama.message}
                    </p>
                  )}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.nimMahasiswa} mb={3} w="30%">
                <MxmFormLabel>NIM Anda</MxmFormLabel>
                <MxmInputGroup addon="left">
                  <InputLeftAddon children="000000" />
                  <Input
                    type="number"
                    {...register("nimMahasiswa", {
                      required: "Tidak boleh kosong",
                      minLength: {
                        value: 5,
                        message: "Input harus 5 angka",
                      },
                      maxLength: {
                        value: 5,
                        message: "Input harus 5 angka",
                      },
                    })}
                  />
                </MxmInputGroup>
                <FormErrorMessage>
                  {errors.nimMahasiswa && (
                    <p>
                      <FormErrorIcon />
                      {errors.nimMahasiswa.message}
                    </p>
                  )}
                </FormErrorMessage>
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
              <FormControl mb={3} mr="5" isInvalid={errors.tempatLahir}>
                <MxmFormLabel>Tempat Lahir</MxmFormLabel>
                <MxmInput
                  placeholder="Tempat Lahir"
                  {...register("tempatLahir", {
                    required: "Tidak boleh kosong",
                  })}
                />
                <FormErrorMessage>
                  {errors.tempatLahir && (
                    <p>
                      <FormErrorIcon />
                      {errors.tempatLahir.message}
                    </p>
                  )}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                mb={3}
                mr="5"
                w="60%"
                isInvalid={errors.tanggalLahir}
              >
                <MxmFormLabel>Tanggal Lahir</MxmFormLabel>
                <MxmInput
                  type="date"
                  {...register("tanggalLahir", {
                    required: "Tidak boleh kosong",
                  })}
                />
                <FormErrorMessage>
                  {errors.tanggalLahir && (
                    <p>
                      <FormErrorIcon />
                      {errors.tanggalLahir.message}
                    </p>
                  )}
                </FormErrorMessage>
              </FormControl>
              <FormControl mb={3} w="50%" isInvalid={errors.jenisKelamin}>
                <MxmFormLabel>Jenis Kelamin</MxmFormLabel>
                <MxmSelect
                  {...register("jenisKelamin", {
                    required: "Pilih jenis kelamin kamu",
                  })}
                >
                  <option value="" selected disabled hidden>
                    Pilih Jenis Kelamin
                  </option>
                  <option value="laki-laki">Laki-laki</option>
                  <option value="perempuan">Perempuan</option>
                </MxmSelect>
                <FormErrorMessage>
                  {errors.jenisKelamin && (
                    <p>
                      <FormErrorIcon />
                      {errors.jenisKelamin.message}
                    </p>
                  )}
                </FormErrorMessage>
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
              <FormControl mb={3} mr="5" w="60%" isInvalid={errors.prodi}>
                <MxmFormLabel>Program Studi</MxmFormLabel>
                <MxmSelect
                  backgroundColor="white"
                  {...register("prodi", {
                    required: "Pilih program studi",
                  })}
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
                <FormErrorMessage>
                  {errors.prodi && (
                    <p>
                      <FormErrorIcon />
                      {errors.prodi.message}
                    </p>
                  )}
                </FormErrorMessage>
              </FormControl>
              <FormControl mb={3} mr="5" w="40%" isInvalid={errors.angkatan}>
                <MxmFormLabel>Angkatan</MxmFormLabel>
                <MxmSelect
                  backgroundColor="white"
                  {...register("angkatan", {
                    required: "Pilih angkatan kamu",
                  })}
                >
                  <option value="" selected disabled hidden>
                    Pilih Angkatan
                  </option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                </MxmSelect>
                <FormErrorMessage>
                  {errors.angkatan && (
                    <p>
                      <FormErrorIcon />
                      {errors.angkatan.message}
                    </p>
                  )}
                </FormErrorMessage>
              </FormControl>
              <FormControl mb={3} isInvalid={errors.email}>
                <MxmFormLabel>Email Student</MxmFormLabel>
                <MxmInputGroup addon="right">
                  <Input
                    placeholder="Masukkan email kamu"
                    {...register("email", {
                      required: "Tidak boleh kosong",
                      pattern: {
                        value: /^[^@]+$/g,
                        message: "Alamat email tidak perlu mencantumkan domain",
                      },
                    })}
                  />
                  <InputRightAddon children="@student.umn.ac.id" />
                </MxmInputGroup>
                <FormErrorMessage>
                  {errors.email && (
                    <p>
                      <FormErrorIcon />
                      {errors.email.message}
                    </p>
                  )}
                </FormErrorMessage>
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
              <FormControl mb={3} mr="5" isInvalid={errors.whatsApp}>
                <MxmFormLabel>Nomor WhatsApp</MxmFormLabel>
                <MxmInput
                  placeholder="Nomor WhatsApp"
                  {...register("whatsApp", {
                    required: "Tidak boleh kosong",
                    minLength: {
                      value: 10,
                      message: "Nomor telepon tidak dapat dibawah 10 digit",
                    },
                    maxLength: {
                      value: 13,
                      message: "Nomor telepon tidak dapat lebih dari 13 digit",
                    },
                    pattern: {
                      value: /^\d+$/g,
                      message: "Nomor telepon harus berupa angka",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.whatsApp && (
                    <p>
                      <FormErrorIcon />
                      {errors.whatsApp.message}
                    </p>
                  )}
                </FormErrorMessage>
              </FormControl>
              <FormControl mb={3} mr="5" isInvalid={errors.idLine}>
                <MxmFormLabel>ID LINE</MxmFormLabel>
                <MxmInput
                  placeholder="Id LINE"
                  {...register("idLine", {
                    required: "Tidak boleh kosong",
                    pattern: {
                      value: /^([0-9]||[a-z]||[-_.])+$/,
                      message: "ID LINE tidak valid",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.idLine && (
                    <p>
                      <FormErrorIcon />
                      {errors.idLine.message}
                    </p>
                  )}
                </FormErrorMessage>
              </FormControl>
              <FormControl mb={3} isInvalid={errors.usernameIG}>
                <MxmFormLabel>Username Instagram</MxmFormLabel>
                <MxmInput
                  placeholder="Username Instagram"
                  {...register("usernameIG", {
                    required: "Tidak boleh kosong",
                    pattern: {
                      value: /^([0-9]||[a-z]||[-_.]||[A-Z])+$/,
                      message: "Username Instagram tidak valid",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.usernameIG && (
                    <p>
                      <FormErrorIcon />
                      {errors.usernameIG.message}
                    </p>
                  )}
                </FormErrorMessage>
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
                <MxmFormLabel>Masukkan Kata Sandi</MxmFormLabel>
                <MxmInputGroup>
                  <Input
                    placeholder="Masukkan kata sandi kamu"
                    {...register("password", {
                      required: "Tidak boleh kosong",
                      minLength: {
                        value: 8,
                        message: "Kata sandi minimal 8 karakter",
                      },
                    })}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                  />
                  <InputRightElement>
                    <Button size="sm" onClick={handleClick}>
                      {show ? <IconHidePassword /> : <IconShowPassword />}
                    </Button>
                  </InputRightElement>
                </MxmInputGroup>
                <FormErrorMessage>
                  {errors.password && (
                    <p>
                      <FormErrorIcon />
                      {errors.password.message}
                    </p>
                  )}
                </FormErrorMessage>
              </FormControl>
              <FormControl mb={3} isInvalid={errors.konfirmasiPassword}>
                <MxmFormLabel>Konfirmasi Kata Sandi</MxmFormLabel>
                <MxmInputGroup>
                  <Input
                    type="password"
                    placeholder="Masukkan kata sandi Anda"
                    {...register("konfirmasiPassword", {
                      required: "Tidak boleh kosong",
                      validate: (value) =>
                        value === password.current || "Kata sandi tidak sama",
                    })}
                  />
                </MxmInputGroup>
                <FormErrorMessage>
                  {errors.konfirmasiPassword && (
                    <p>
                      <FormErrorIcon />
                      {errors.konfirmasiPassword.message}
                    </p>
                  )}
                </FormErrorMessage>
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
              <MxmButton variant="desktop" colorScheme="cyan-navy">
                Daftar
              </MxmButton>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </MxmContainers>
  );
};

export default RegisterMaba;
