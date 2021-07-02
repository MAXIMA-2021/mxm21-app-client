import React from "react";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import {
  Flex,
  Heading,
  Spacer,
  Image,
  FormControl,
  FormErrorIcon,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInput,
  Button,
} from "@chakra-ui/react";
import {
  MxmContainers,
  MxmVerticalAlign,
  UploadContainer,
} from "../../../../../shared/styled/containers";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "../../../../../types/enums";
import "./TambahState.scss";
import { MxmLogo, MxmLogoText } from "../../../../../assets";
import {
  MxmInput,
  MxmInputGroup,
  MxmFormLabel,
  MxmSelect,
  MxmFormErrorMessage,
  MxmNumberInputField,
  MxmDivider,
} from "../../../../../shared/styled/input";
import UploadFiles from "./upload/UploadFiles";
import { MxmButton } from "../../../../../shared/styled/buttons";

// const UploadFiles = () => {
//   const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
//     useDropzone({
//       accept: "image/jpeg, image/png",
//       maxFiles: 1,
//     });
//   const acceptedFileItems = acceptedFiles.map((file) => {
//     console.log(file);
//     return (
//       <Flex alignItems="center" justifyContent="space-between">
//         {file.name} - {file.size} bytes
//         <Button backgroundColor={Palette.Navy} color="white">
//           Hapus
//         </Button>
//       </Flex>
//     );
//   });

//   return (
// <div>
// <UploadContainer {...getRootProps({ className: "dropzone" })}>
//   <input {...getInputProps()} />
//   <p>Drag and Drop atau Klik Disini</p>
// </UploadContainer>
// {acceptedFileItems}
// </div>
//   );
// };

const TambahState: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    window.confirm(JSON.stringify(data));
  };
  const handleSelectChange = (event: any) => {
    if (event.target.value !== "") {
      event.target.style.color = "black";
    }
  };

  return (
    <Flex
      height="100vh"
      backgroundColor="#F4F4F4"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        direction="column"
        backgroundColor="#FFFFFF"
        className="filter"
        py={{
          base: "3vh",
          sm: "3vh",
          md: "3vh",
          lg: "3vh",
          xl: "3vh",
        }}
        px={{
          base: "5vw",
          sm: "5vw",
          md: "2vw",
          lg: "2vw",
          xl: "2vw",
        }}
        my={{
          base: "1vh",
          sm: "1vh",
          md: "10vh",
          lg: "10vh",
          xl: "10vh",
        }}
        mx={{
          base: "1vw",
          sm: "1vw",
          md: "10vw",
          lg: "10vw",
          xl: "10vw",
        }}
        rounded={25}
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
              Tambah State
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
            <FormControl mb={3} mr="5" isInvalid={errors.nama}>
              <MxmFormLabel color="black">Nama STATE</MxmFormLabel>
              <MxmInput {...register("nama", { required: "Isi Nama STATE" })} />
              <MxmFormErrorMessage fontSize="xs" mt={1}>
                {errors.nama && (
                  <Flex flexDirection="row" alignItems="center">
                    <p>
                      <FormErrorIcon fontSize="xs" mt="-0.1em" />
                      {errors.nama.message}
                    </p>
                  </Flex>
                )}
              </MxmFormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.kuota} mb={3}>
              <MxmFormLabel color="black">Kuota</MxmFormLabel>
              <NumberInput allowMouseWheel defaultValue={0} min={0}>
                <MxmNumberInputField
                  type="number"
                  {...register("kuota", {
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
                {errors.kuota && (
                  <Flex flexDirection="row" alignItems="center">
                    <p>
                      <FormErrorIcon fontSize="xs" mt="-0.1em" />
                      {errors.kuota.message}
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
            <FormControl mb={3} isInvalid={errors.hari}>
              <MxmFormLabel color="black">Hari Kegiatan</MxmFormLabel>
              <MxmSelect
                {...register("hari", { required: "Isi Hari Kegiatan" })}
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
                {errors.kuota && (
                  <Flex flexDirection="row" alignItems="center">
                    <p>
                      <FormErrorIcon fontSize="xs" mt="-0.1em" />
                      {errors.kuota.message}
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
              <UploadFiles />
            </FormControl>
          </Flex>
          <Flex mt={5}>
            <Spacer />
            <Button
              backgroundColor={Palette.Cyan}
              color="white"
              padding="1em 2em 1em 2em"
              borderRadius="30px"
              boxShadow="-1.2px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              type="submit"
              _hover={{ backgroundColor: "red" }}
            >
              SUBMIT
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default TambahState;
