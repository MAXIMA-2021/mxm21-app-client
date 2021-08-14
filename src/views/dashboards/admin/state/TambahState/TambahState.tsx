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
  useToast,
} from "@chakra-ui/react";
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
    setFocus,
    formState: { errors },
  } = useForm();
  const toast = useToast();

  const [loading, setLoading] = useState(false);
  const [logo, setLogo] = useState<any>([]);
  const [cover, setCover] = useState<any>([]);
  const [resetUpload, setResetUpload] = useState<boolean>(false);

  useEffect(() => {
    document.title = "[Dashboard] - Tambah STATE";
  }, []);

  const onSubmit = async (data: DataState) => {
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
      await adminService.tambahState(formData);
      reset();
      toast({
        title: "Data berhasil ditambahkan!",
        position: "bottom-right",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      setResetUpload(true);
      setLogo([]);
      setCover([]);
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

    setValue("quota", 0);
    setValue("day", "");
    setValue("category", "");
    setFocus("name");
  };

  const handleSelectChange = (event: any) => {
    if (event.target.value !== "") {
      event.target.style.color = "black";
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
        width={{ base: "95vw", md: "initial" }}
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
            <FormControl mb={3} mr={5} isInvalid={errors.day}>
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
            <FormControl mb={3} isInvalid={errors.day}>
              <MxmFormLabel color="black">Kategori</MxmFormLabel>
              <MxmSelect
                {...register("category", { required: "Pilih Kategori STATE" })}
                className="select"
                onChange={handleSelectChange}
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
              {!resetUpload && <UploadFiles setFiles={setLogo} />}
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
              <MxmFormLabel color="black">Foto Kegiatan (cover)</MxmFormLabel>
              {!resetUpload && <UploadFiles setFiles={setCover} />}
            </FormControl>
          </Flex>
          <Flex mt={5}>
            <Spacer />
            {loading ? (
              <Button
                isLoading
                loadingText="Menambahkan..."
                spinnerPlacement="start"
                backgroundColor="#41ceba"
                color="white"
                padding="1em 2em 1em 2em"
                borderRadius="999px"
                boxShadow="-1.2px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                type="submit"
                _hover={{ backgroundColor: "#2BAD96" }}
              >
                Menambahkan...
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
                Tambah STATE
              </Button>
            )}
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default TambahState;
