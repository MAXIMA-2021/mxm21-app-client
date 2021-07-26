import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Flex,
  Heading,
  Spacer,
  Image,
  FormControl,
  FormErrorIcon,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInput,
  Button,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { Palette } from "../../../../../types/enums";
import "./TambahState.scss";
import { MxmLogo } from "../../../../../assets";
import {
  MxmInput,
  MxmFormLabel,
  MxmSelect,
  MxmFormErrorMessage,
  MxmNumberInputField,
  MxmDivider,
} from "../../../../../shared/styled/input";
import UploadFiles from "../../../../../shared/component/ImageUpload/UploadFiles";
import adminService from "../../../../../services/admin";
import Swal from "sweetalert2";
import { DataState } from "../../../../../types/interfaces";

const TambahState: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<any>([]);
  const [resetUpload, setResetUpload] = useState<boolean>(false);

  useEffect(() => {
    setValue("quota", 0);
  }, [resetUpload]);

  useEffect(() => {
    document.title = "[Dashboard] - Tambah STATE";
  }, []);

  const onSubmit = async (data: DataState) => {
    // window.confirm(JSON.stringify(data));
    setLoading(true);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("zoomLink", data.zoomLink);
    formData.append("day", data.day);
    formData.append("stateLogo", files[0]);
    formData.append("quota", data.quota);
    reset();

    try {
      await adminService.tambahState(formData);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil ditambahkan!",
        showConfirmButton: false,
        timer: 2000,
      });
      setResetUpload(true);
      setFiles([]);
    } catch (error) {
      Swal.fire({
        title: "Perhatian!",
        text: error.response?.data.message,
        icon: "error",
        confirmButtonText: "Coba lagi",
      });
    }
    setLoading(false);
    setResetUpload(false);
  };

  const handleSelectChange = (event: any) => {
    if (event.target.value !== "") {
      event.target.style.color = "black";
    }
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
          md: "1rem",
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
        <form onSubmit={handleSubmit(onSubmit)} className="form_state">
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
              Tambah State
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
              mt="0.4vh"
              mb="1vh"
              marginLeft={{
                base: "5vw",
                md: "40vw",
              }}
            />
          </Flex>
          <MxmDivider color="black" height="3px" margin="1vh 0 2.8vh 0" />
          <Flex
            direction={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}
          >
            <FormControl mb={3} mr="5" isInvalid={errors.name}>
              <MxmFormLabel color="black">Nama STATE</MxmFormLabel>
              <MxmInput {...register("name", { required: "Isi Nama STATE" })} />
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
            <FormControl isInvalid={errors.quota} mb={3}>
              <MxmFormLabel color="black">Kuota</MxmFormLabel>
              <NumberInput allowMouseWheel defaultValue={0} min={0}>
                <MxmNumberInputField
                  type="number"
                  {...register("quota", {
                    required: "Isi Jumlah Kuota",
                    min: {
                      value: 1,
                      message: "Jumlah Kuota Terlalu Sedikit",
                    },
                  })}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <MxmFormErrorMessage fontSize="xs" mt={1}>
                {errors.quota && (
                  <Flex flexDirection="row" alignItems="center">
                    <p>
                      <FormErrorIcon fontSize="xs" mt="-0.1em" />
                      {errors.quota.message}
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
            <FormControl mb={3} isInvalid={errors.day}>
              <MxmFormLabel color="black">Hari Kegiatan</MxmFormLabel>
              <MxmSelect
                {...register("day", { required: "Pilih Hari Kegiatan" })}
                className="select"
                onChange={handleSelectChange}
              >
                <option value="" selected disabled hidden>
                  Pilih Hari Pelaksanaan STATE
                </option>
                <option value="1">Hari ke-1</option>
                <option value="2">Hari ke-2</option>
                <option value="3">Hari ke-3</option>
                <option value="4">Hari ke-4</option>
                <option value="5">Hari ke-5</option>
              </MxmSelect>
              <MxmFormErrorMessage fontSize="xs" mt={1}>
                {errors.day && (
                  <Flex flexDirection="row" alignItems="center">
                    <p>
                      <FormErrorIcon fontSize="xs" mt="-0.1em" />
                      {errors.day.message}
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
            <FormControl mb={3} isInvalid={errors.zoomLink}>
              <MxmFormLabel color="black">Link Zoom</MxmFormLabel>
              <MxmInput
                {...register("zoomLink", {
                  required: "Isi Link Zoom",
                  pattern: {
                    value:
                      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi,
                    message: "Link Zoom Tidak Valid",
                  },
                })}
              />
              <MxmFormErrorMessage fontSize="xs" mt={1}>
                {errors.zoomLink && (
                  <Flex flexDirection="row" alignItems="center">
                    <p>
                      <FormErrorIcon fontSize="xs" mt="-0.1em" />
                      {errors.zoomLink.message}
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
            <FormControl mb={3} isInvalid={errors.logo}>
              <MxmFormLabel color="black">Logo</MxmFormLabel>
              {!resetUpload && <UploadFiles setFiles={setFiles} />}
            </FormControl>
          </Flex>
          <Flex mt={5}>
            <Spacer />
            {loading ? (
              <Flex mr="1rem" alignItems="center">
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  w="2rem"
                  h="2rem"
                />
                <Text
                  fontFamily="Poppins"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  ml="0.5rem"
                >
                  mengunggah data...
                </Text>
              </Flex>
            ) : (
              <Button
                backgroundColor={Palette.Cyan}
                color="white"
                padding="1em 2em 1em 2em"
                borderRadius="999px"
                boxShadow="-1.2px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                type="submit"
                _hover={{ backgroundColor: "#2BAD96" }}
              >
                SUBMIT
              </Button>
            )}
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default TambahState;
