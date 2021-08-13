import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
  useToast,
} from "@chakra-ui/react";
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
  const [logo, setLogo] = useState<any>([]);
  const [cover, setCover] = useState<any>([]);
  const [resetUpload, setResetUpload] = useState<boolean>(false);
  const history = useHistory();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.title = "[Dashboard] - Edit STATE";
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
    setValue("day", state?.day?.substr(1, 1));
    setValue("category", state?.category);
    setValue("shortDesc", state?.shortDesc);
    setValue("zoomLink", state?.zoomLink);
    setValue("stateLogo", state?.stateLogo);
    setValue("coverPhoto", state?.coverPhoto);
  }, [state]);

  const onSubmit = async (data: any) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("zoomLink", data.zoomLink);
    formData.append("day", data.day);
    formData.append("quota", data.quota);
    formData.append("category", data.category);
    formData.append("shortDesc", data.shortDesc);
    formData.append("stateLogo", logo[0]);
    formData.append("coverPhoto", cover[0]);

    try {
      await adminService.updateState(state.stateID, formData);
      toast({
        title: "Data berhasil diperbaharui!",
        position: "bottom-right",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      setResetUpload(true);
      setLogo([]);
      history.push("/admin/daftar-state");
    } catch (error) {
      Swal.fire({
        title: "Perhatian!",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "Coba lagi",
      });
    }
  };

  return (
    <Flex
      width={{
        base: "100%",
        md: "calc(100vw - 18rem)",
      }}
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        width={{
          base: "95vw",
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
          <Flex
            direction={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}
          >
            <FormControl mb={3} mr={5} isInvalid={errors.day}>
              <MxmFormLabel color="black">Hari Kegiatan</MxmFormLabel>
              <MxmSelect
                {...register("day", {
                  required: "Pilih Hari Kegiatan STATE",
                })}
              >
                <option value="1">Hari-ke 1</option>
                <option value="2">Hari-ke 2</option>
                <option value="3">Hari-ke 3</option>
                <option value="4">Hari-ke 4</option>
                <option value="5">Hari-ke 5</option>
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
            <FormControl mb={3} isInvalid={errors.day}>
              <MxmFormLabel color="black">Kategori</MxmFormLabel>
              <MxmSelect
                {...register("category", { required: "Pilih Kategori STATE" })}
              >
                <option value="" selected disabled hidden>
                  Pilih Kategori STATE
                </option>
                <option value="Lembaga Kampus">Lembaga Kampus</option>
                <option value="Organisasi dan Himpunan">
                  Organisasi dan Himpunan
                </option>
                <option value="Media Kampus">Media Kampus</option>
                <option value="Kegiatan Kemahasiswaan">
                  Kegiatan Kemahasiswaan & LSO
                </option>
                <option value="UKM Olahraga">UKM Olahraga</option>
                <option value="UKM Sains dan Sosial">
                  UKM Sains dan Sosial
                </option>
                <option value="UKM Seni dan Budaya">UKM Seni dan Budaya</option>
                <option value="Komunitas">Komunitas</option>
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
          <Flex>
            <FormControl mb={3}>
              <MxmFormLabel color="black">Logo</MxmFormLabel>
              <Flex alignItems={logo[0] ? "flex-start" : "center"}>
                <Image
                  mr="1rem"
                  w="15%"
                  src={
                    logo[0] ? URL.createObjectURL(logo[0]) : state?.stateLogo
                  }
                />
                <Box w="85%">
                  {!resetUpload && <UploadFiles setFiles={setLogo} />}
                </Box>
              </Flex>
            </FormControl>
          </Flex>
          <Flex>
            <FormControl mb={3}>
              <MxmFormLabel color="black">foto kegiatan</MxmFormLabel>
              <Flex alignItems={cover[0] ? "flex-start" : "center"}>
                <Image
                  mr="1rem"
                  w="15%"
                  src={
                    cover[0] ? URL.createObjectURL(cover[0]) : state?.coverPhoto
                  }
                />
                <Box w="85%">
                  {!resetUpload && <UploadFiles setFiles={setCover} />}
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
          <Flex
            direction={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}
          >
            <FormControl mb={3} isInvalid={errors.shortDesc}>
              <MxmFormLabel color="black">Deskripsi</MxmFormLabel>
              <MxmInput
                {...register("shortDesc", {
                  required: "Isi Deskripsi",
                })}
              />
              <MxmFormErrorMessage fontSize="xs" mt={1}>
                {errors.shortDesc && (
                  <Flex flexDirection="row" alignItems="center">
                    <p>
                      <FormErrorIcon fontSize="xs" mt="-0.1em" />
                      {errors.shortDesc.message}
                    </p>
                  </Flex>
                )}
              </MxmFormErrorMessage>
            </FormControl>
          </Flex>
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
