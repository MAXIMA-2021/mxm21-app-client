import React, { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Spacer,
  FormControl,
  FormErrorIcon,
  Button,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { MxmLogo } from "../../../../../assets";
import {
  MxmDivider,
  MxmFormLabel,
  MxmFormErrorMessage,
  MxmSelect,
} from "../../../../../shared/styled/input";
import UploadFiles from "../../../../../shared/component/ImageUpload/UploadFiles";
import Swal from "sweetalert2";
import adminService from "../../../../../services/admin";

const TambahMedia: React.FC = () => {
  const [homeData, setHomeData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [files, setFiles] = useState<any>([]);
  const [resetUpload, setResetUpload] = useState<boolean>(false);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.title = "[Dashboard] - Tambah Media HoME";
    const fetchData = async () => {
      try {
        const data = await adminService.getAllHome();
        setHomeData(data);
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

  const onSubmit = async (data: { homeID: number }) => {
    setLoading(true);
    const formData = new FormData();
    files.map((data: File) => formData.append("linkMedia", data));

    try {
      await adminService.tambahMedia(formData, data.homeID);
      reset();
      toast({
        title: "Data berhasil ditambahkan!",
        position: "bottom-right",
        status: "success",
        duration: 4000,
        isClosable: true,
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
    setValue("homeID", "");
    setFocus("homeID");
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
          md: "0rem",
        }}
        mb={{
          base: "1rem",
          md: "3rem",
        }}
        direction="column"
        backgroundColor="#FFFFFF"
        width={{ base: "95vw", md: "initial" }}
        py="1.5rem"
        px="1.5rem"
        rounded={25}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
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
              Tambah Media
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
                md: "40vw",
              }}
            />
          </Flex>
          <MxmDivider color="black" height="3px" margin="1vh 0 2.8vh 0" />
          <FormControl mb={3} isInvalid={errors.homeID}>
            <MxmFormLabel color="black">Nama Organisator</MxmFormLabel>
            <MxmSelect
              {...register("homeID", {
                required: "Pilih Nama Organisator",
              })}
            >
              <option value="" selected disabled hidden></option>
              {homeData.map((data) => (
                <option value={data.homeID}>{data.name}</option>
              ))}
            </MxmSelect>
            <MxmFormErrorMessage fontSize="xs" mt={1}>
              {errors.homeID && (
                <Flex flexDirection="row" alignItems="center">
                  <p>
                    <FormErrorIcon fontSize="xs" mt="-0.1em" />
                    {errors.homeID.message}
                  </p>
                </Flex>
              )}
            </MxmFormErrorMessage>
          </FormControl>
          <FormControl mb={3} isInvalid={errors.linkMedia}>
            <MxmFormLabel color="black">File Media</MxmFormLabel>
            {!resetUpload && (
              <UploadFiles
                maxfiles={5}
                keterangan={true}
                isiKeterangan={"5 file"}
                setFiles={setFiles}
              />
            )}
          </FormControl>
          <Flex mt={10}>
            <Spacer />
            {loading ? (
              <Button
                isLoading
                loadingText="Tambah Media"
                spinnerPlacement="start"
                backgroundColor="#41ceba"
                color="white"
                padding="1em 2em 1em 2em"
                borderRadius="999px"
                boxShadow="-1.2px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                type="submit"
                _hover={{ backgroundColor: "#2BAD96" }}
              >
                Tambah Media
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
                Tambah Media
              </Button>
            )}
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default TambahMedia;
