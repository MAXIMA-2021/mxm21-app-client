import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Flex,
  Heading,
  Spacer,
  Image,
  FormControl,
  FormErrorIcon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputStepper,
  Button,
  Box,
} from "@chakra-ui/react";
import { Palette } from "../../../../../types/enums";
import { MxmLogo } from "../../../../../assets";
import {
  MxmDivider,
  MxmFormErrorMessage,
  MxmFormLabel,
  MxmInput,
  MxmNumberInputField,
  MxmSelect,
} from "../../../../../shared/styled/input";
import adminService from "../../../../../services/admin";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import UploadFiles from "../../../../../shared/component/ImageUpload/UploadFiles";

const EditState: React.FC = () => {
  const { stateID }: any = useParams();
  const [state, setState] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<any>([]);
  const [resetUpload, setResetUpload] = useState<boolean>(false);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const returnedData = await adminService.getSpecificState(stateID);
        setState(returnedData[0]);
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

  useEffect(() => {
    setValue("name", state?.name);
    setValue("quota", state?.quota);
    setValue("day", state?.day);
    setValue("stateLogo", state?.stateLogo);
    setValue("zoomLink", state?.zoomLink);
  }, [state]);

  const onSubmit = async (data: any) => {
    // window.confirm(JSON.stringify(data));
    setLoading(true);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("zoomLink", data.zoomLink);
    formData.append("day", data.day);
    formData.append("stateLogo", files[0]);
    formData.append("quota", data.quota);

    try {
      await adminService.updateState(state.stateID, formData);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil diperbaharui!",
        showConfirmButton: false,
        timer: 2000,
      });
      setResetUpload(true);
      setFiles([]);
      history.push("/admin/daftar-state", {
        status: "success",
        message: "Kamu berhasil mengedit",
      });
    } catch (error) {
      Swal.fire({
        title: "Perhatian!",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "Coba lagi",
      });
    }
  };

  console.log(files);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      backgroundColor="#f4f4f4"
      width="79vw"
      height="calc(100vh - 3.75rem - 3.5rem)"
    >
      <Flex
        width={{
          base: "100%",
          md: "70%",
        }}
        direction="column"
        background="white"
        py="1.5rem"
        px="1.5rem"
        mt={{
          base: "1rem",
          md: "2.5rem",
        }}
        mb={{
          base: "1rem",
          md: "3rem",
        }}
        mx={{
          base: "0.2rem",
          md: "2rem",
        }}
        rounded={20}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex>
            <Heading
              mb={3}
              letterSpacing="0.05em"
              fontSize={{
                base: "1.5em",
                sm: "1.5em",
                md: "1.5em",
                lg: "1.5em",
                xl: "1.7em",
                "2xl": "1.7em",
              }}
            >
              Edit STATE
            </Heading>
            <Spacer />
            <Image
              src={MxmLogo}
              alt="Logo MAXIMA 2021"
              h="100%"
              w={{
                base: "4vw",
                sm: "4vw",
                md: "2.5vw",
                lg: "2vw",
                xl: "2vw",
                "2xl": "1.2vw",
              }}
              mt={2}
            />
          </Flex>
          <MxmDivider color="black" height="3px" margin="0 0 1.5em 0" />
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
              <MxmFormLabel color="black">Nama State</MxmFormLabel>
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
            <FormControl mb={3} isInvalid={errors.quota}>
              <MxmFormLabel color="black">Kuota</MxmFormLabel>
              <NumberInput allowMouseWheel min={0}>
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
                      {errors.kuotaState.message}
                    </p>
                  </Flex>
                )}
              </MxmFormErrorMessage>
            </FormControl>
          </Flex>
          <FormControl mb={3} isInvalid={errors.day}>
            <MxmFormLabel color="black">Hari Kegiatan</MxmFormLabel>
            <MxmSelect
              {...register("day", {
                required: "Pilih Hari Kegiatan STATE",
              })}
            >
              <option value="1">Hari-ke 1 (Rabu, 6 Agustus 2021)</option>
              <option value="2">Hari-ke 2 (Kamis, 7 Agustus 2021)</option>
              <option value="3">Hari-ke 3 (Jumat, 8 Agustus 2021)</option>
              <option value="4">Hari-ke 4 (Sabtu, 9 Agustus 2021)</option>
              <option value="5">Hari-ke 5 (Minggu, 10 Agustus 2021)</option>
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
          <Flex>
            <FormControl mb={3}>
              <MxmFormLabel color="black">Logo</MxmFormLabel>
              <Flex alignItems={files[0] ? "flex-start" : "center"}>
                <Image
                  mr="1rem"
                  w="15%"
                  src={
                    files[0] ? URL.createObjectURL(files[0]) : state?.stateLogo
                  }
                />
                <Box w="85%">
                  {!resetUpload && <UploadFiles setFiles={setFiles} />}
                </Box>
              </Flex>
            </FormControl>
          </Flex>
          <FormControl mb={3} isInvalid={errors.zoomLink}>
            <MxmFormLabel color="black">Link Zoom</MxmFormLabel>
            <MxmInput
              {...register("zoomLink", { required: "Isi Link ZOOM" })}
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
          <Flex mt={5}>
            <Spacer />
            {loading ? (
              <Button
                isLoading
                loadingText="Update STATE"
                spinnerPlacement="start"
                backgroundColor="#41ceba"
                color="white"
                padding="1em 2em 1em 2em"
                borderRadius="999px"
                boxShadow="-1.2px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                type="submit"
                _hover={{ backgroundColor: "#2BAD96" }}
              >
                Update STATE
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
                Update STATE
              </Button>
            )}
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default EditState;
