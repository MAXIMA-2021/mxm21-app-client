import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Flex,
  Heading,
  Spacer,
  Image,
  FormControl,
  FormErrorIcon,
  Button,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Palette } from "../../../../types/enums";
import { MxmLogo } from "../../../../assets";
import {
  MxmDivider,
  MxmFormErrorMessage,
  MxmFormLabel,
  MxmInput,
} from "../../../../shared/styled/input";
import authService from "../../../../services/auth";
import adminService from "../../../../services/admin";
import Swal from "sweetalert2";

const EditAkun: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [isLargerThan3000px] = useMediaQuery("(min-width:3000px)");
  const [data, setData] = useState<any>("");

  useEffect(() => {
    document.title = "Edit Akun Kamu - MAXIMA 2021";
    const fetchData = async () => {
      try {
        const user = await authService.checkToken();
        setData(user.name);
        setValue("name", user.name);
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
    const user = await authService.checkToken();
    try {
      if (user.role === "panitia") {
        await adminService.updatePanitia(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Akun kamu berhasil diperbaharui!",
          showConfirmButton: false,
          timer: 2000,
        });
      } else if (user.role === "organisator") {
        await adminService.updateOrganisator(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Akun kamu berhasil diperbaharui!",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      window.sessionStorage.setItem("name", data.name);
      window.location.href = "/admin/dashboard";
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
        base: "calc(100vw-18rem)",
        md: "calc(100vw-18rem)",
      }}
      height="calc(100vh - 3.75rem - 3.5rem)"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        mt={{
          base: "1rem",
          md: "0rem",
        }}
        mb={{
          base: "1rem",
          md: "3rem",
        }}
        direction="column"
        backgroundColor="#FFFFFF"
        py="1.5rem"
        px="1.5rem"
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
          <FormControl mb={3} isInvalid={errors.password}>
            <MxmFormLabel color="black">Password Akun</MxmFormLabel>
            <MxmInput {...register("password")} />
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

const stateList = [
  { name: "Ultimagz", day: "1" },
  { name: "Ultima Sonora", day: "2" },
  { name: "Teater Katak", day: "3" },
  { name: "UMN Radion", day: "4" },
];

const organisatorList = [
  { name: "Bonifasius Ariesto Adrian Finantyo", nim: "42580" },
  { name: "Bapak Budi", nim: "32580" },
  { name: "Ibu Budi", nim: "22580" },
  { name: "Ini Budi", nim: "12580" },
  { name: "Bukan Tiara Andini", nim: "52580" },
];
