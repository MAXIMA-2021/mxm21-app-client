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
import UploadFiles from "../../../../../shared/component/ImageUpload/UploadFiles";
import { DashboardFooter } from "../../../../../shared/component/DashboardFooter";

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
    <div className="content">
      <Flex
        width={{
          base: "100vw",
          md: "79vw",
        }}
        height="calc(100vh - 3.75rem - 3.5rem)"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          width={{
            base: "100%",
            md: "70%",
          }}
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
            <Flex>
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
              <FormControl mb={3} mr="5" isInvalid={errors.nama}>
                <MxmFormLabel color="black">Nama STATE</MxmFormLabel>
                <MxmInput
                  {...register("nama", { required: "Isi Nama STATE" })}
                />
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
                  {...register("hari", { required: "Pilih Hari Kegiatan" })}
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
                  {errors.hari && (
                    <Flex flexDirection="row" alignItems="center">
                      <p>
                        <FormErrorIcon fontSize="xs" mt="-0.1em" />
                        {errors.hari.message}
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
                borderRadius="999px"
                boxShadow="-1.2px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                type="submit"
                _hover={{ backgroundColor: "#2BAD96" }}
              >
                SUBMIT
              </Button>
            </Flex>
          </form>
        </Flex>
        <DashboardFooter />
      </Flex>
    </div>
  );
};

export default TambahState;
