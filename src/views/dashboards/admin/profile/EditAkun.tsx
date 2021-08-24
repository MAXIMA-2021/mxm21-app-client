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
  InputRightElement,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import { MxmLogo } from "../../../../assets";
import {
  MxmDivider,
  MxmFormErrorMessage,
  MxmFormLabel,
  MxmInput,
} from "../../../../shared/styled/input";
import adminService from "../../../../services/admin";
import Swal from "sweetalert2";
import jwtDecode from "jwt-decode";
import { Palette } from "../../../../types/enums";
import {
  IconHidePassword,
  IconShowPassword,
} from "../../../../shared/styled/buttons";

const EditAkun: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [showNew, setShowNew] = useState(false);
  const handleClickNew = () => setShowNew(!showNew);

  const toast = useToast();

  const password = useRef({});
  password.current = watch("password", "");

  useEffect(() => {
    document.title = "[Dashboard] - Edit Akun Kamu";
    const fetchData = async () => {
      try {
        const decoded: any = jwtDecode(
          window.sessionStorage.getItem("token") || ""
        );
        setData(window.sessionStorage.getItem("name") || "");
        setValue("name", window.sessionStorage.getItem("name") || "");
      } catch (error) {
        Swal.fire({
          title: "Perhatian!",
          text: error.response.data.message,
          icon: "error",
          confirmButtonText: "Coba lagi",
        });
      }
    };

    fetchData();
  }, []);

  const onSubmit = async (data: any) => {
    setLoading(true);
    const user: any = jwtDecode(window.sessionStorage.getItem("token") || "");
    try {
      if (user?.division) {
        await adminService.updatePanitia(data);
        toast({
          title: "Akun kamu berhasil diperbaharui!",
          position: "bottom-right",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      } else if (user?.stateID) {
        await adminService.updateOrganisator(data);
        toast({
          title: "Akun kamu berhasil diperbaharui!",
          position: "bottom-right",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      }
      window.sessionStorage.setItem("name", data.name);
      window.location.href = "/admin";
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
      width={{
        base: "100%",
        md: "calc(100vw - 18rem)",
      }}
      height="calc(100vh - 3.75rem - 3.5rem)"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        mt={{
          base: "1rem",
          md: "3rem",
        }}
        mb={{
          base: "1rem",
          md: "3rem",
        }}
        direction="column"
        backgroundColor="#FFFFFF"
        py="1.5rem"
        px="1.5rem"
        width={{ base: "95vw", md: "initial" }}
        rounded={25}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="form_PIC">
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
              Edit Akun Kamu
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
          <FormControl mb={3} isInvalid={errors.name}>
            <MxmFormLabel color="black">Nama Akun</MxmFormLabel>
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
          <FormControl mb={3} isInvalid={errors.oldPassword}>
            <MxmFormLabel color="black">Password Saat Ini</MxmFormLabel>
            <InputGroup addon="icon">
              <MxmInput
                {...register("oldPassword")}
                type={show ? "text" : "password"}
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
            </InputGroup>
            <MxmFormErrorMessage fontSize="xs" mt={1}>
              {errors.oldPassword && (
                <Flex flexDirection="row" alignItems="center">
                  <p>
                    <FormErrorIcon fontSize="xs" mt="-0.1em" />
                    {errors.oldPassword.message}
                  </p>
                </Flex>
              )}
            </MxmFormErrorMessage>
          </FormControl>
          <FormControl mb={3} isInvalid={errors.password}>
            <MxmFormLabel color="black">Password Baru</MxmFormLabel>
            <InputGroup addon="icon">
              <MxmInput
                type={showNew ? "text" : "password"}
                {...register("password", {
                  minLength: {
                    value: 8,
                    message: "Password minimal 8 karakter",
                  },
                })}
              />
              <InputRightElement>
                <Button
                  className="show-password"
                  size="base"
                  onClick={handleClickNew}
                >
                  {showNew ? <IconHidePassword /> : <IconShowPassword />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <MxmFormErrorMessage fontSize="xs" mt={1}>
              {errors.password && (
                <Flex flexDirection="row" alignItems="center">
                  <p>
                    <FormErrorIcon fontSize="xs" mt="-0.1em" />
                    {errors.password.message}
                  </p>
                </Flex>
              )}
            </MxmFormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.konfirmasiPassword}>
            <MxmFormLabel color={Palette.Navy}>
              Konfirmasi Password Baru
            </MxmFormLabel>
            <InputGroup addon="left" borderRadius="7.5px">
              <MxmInput
                type="password"
                {...register("konfirmasiPassword", {
                  validate: (value) =>
                    value === password.current || "Password belum sama",
                })}
              />
            </InputGroup>
            <MxmFormErrorMessage>
              {errors.konfirmasiPassword && (
                <p>
                  <FormErrorIcon fontSize="xs" mt="-0.1em" />
                  {errors.konfirmasiPassword.message}
                </p>
              )}
            </MxmFormErrorMessage>
          </FormControl>
          <Flex mt={10}>
            <Spacer />
            {loading ? (
              <Button
                isLoading
                loadingText="Update Akun"
                spinnerPlacement="start"
                backgroundColor="#41ceba"
                color="white"
                padding="1em 2em 1em 2em"
                borderRadius="999px"
                boxShadow="-1.2px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                type="submit"
                _hover={{ backgroundColor: "#2BAD96" }}
              >
                Update Akun
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
                Update Akun
              </Button>
            )}
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default EditAkun;
