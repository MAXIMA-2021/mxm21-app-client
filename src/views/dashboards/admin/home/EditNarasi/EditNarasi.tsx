import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
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
  MxmInput,
  MxmTextarea,
} from "../../../../../shared/styled/input";
import Swal from "sweetalert2";
import adminService from "../../../../../services/admin";

const EditNarasi: React.FC = () => {
  const { homeChapterID }: any = useParams();
  const [dialogue, setDialogue] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [files, setFiles] = useState<any>([]);
  const history = useHistory();
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
    document.title = "[Dashboard] - Edit Narasi HoME";
    const fetchData = async () => {
      try {
        const data = await adminService.getChapterById(homeChapterID);
        setDialogue(data[0]);
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
    setValue("title", dialogue?.title);
    setValue("message", dialogue?.message);
  }, [dialogue]);

  const onSubmit = async (data: any) => {
    setLoading(true);
    const formData = new FormData();

    try {
      await adminService.updateChapterById(homeChapterID, data);
      reset();
      toast({
        title: "Data berhasil ditambahkan!",
        position: "bottom-right",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      history.push("/admin/daftar-narasi");
    } catch (error) {
      Swal.fire({
        title: "Perhatian!",
        text: error.response.data.message,
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
        width={{ base: "95vw", md: "initial" }}
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
          <FormControl mb={3} mr="5" isInvalid={errors.title}>
            <MxmFormLabel color="black">Chapter</MxmFormLabel>
            <MxmInput
              {...register("title", { required: "Isi judul Chapter" })}
            />
            <MxmFormErrorMessage fontSize="xs" mt={1}>
              {errors.title && (
                <Flex flexDirection="row" alignItems="center">
                  <p>
                    <FormErrorIcon fontSize="xs" mt="-0.1em" />
                    {errors.title.message}
                  </p>
                </Flex>
              )}
            </MxmFormErrorMessage>
          </FormControl>
          <FormControl mb={3} mr="5" isInvalid={errors.message}>
            <MxmFormLabel color="black">Narasi</MxmFormLabel>
            <MxmTextarea
              height={{ base: "16rem", md: "8.5rem" }}
              {...register("message", { required: "Isi narasi Chapter" })}
            />
            <MxmFormErrorMessage fontSize="xs" mt={1}>
              {errors.message && (
                <Flex flexDirection="row" alignItems="center">
                  <p>
                    <FormErrorIcon fontSize="xs" mt="-0.1em" />
                    {errors.message.message}
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
                Update Narasi
              </Button>
            )}
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default EditNarasi;
