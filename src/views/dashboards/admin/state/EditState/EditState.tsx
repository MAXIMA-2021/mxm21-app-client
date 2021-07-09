import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
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
  Input,
} from "@chakra-ui/react";
import {
  MxmContainers,
  MxmVerticalAlign,
} from "../../../../../shared/styled/containers";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "../../../../../types/enums";
import "./EditState.scss";
import { MxmLogo } from "../../../../../assets";
import {
  MxmDivider,
  MxmFormErrorMessage,
  MxmFormLabel,
  MxmInput,
  MxmNumberInputField,
  MxmSelect,
} from "../../../../../shared/styled/input";
import { DashboardFooter } from "../../../../../shared/component/DashboardFooter";

const EditState: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    window.confirm(JSON.stringify(data));
  };
  const [myUpload, setMyUpload] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      backgroundColor="#f4f4f4"
      width="79vw"
      height="100%"
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
            <FormControl mb={3} mr="5" isInvalid={errors.namaState}>
              <MxmFormLabel color="black">Nama State</MxmFormLabel>
              <MxmInput
                value="Ultimagz"
                {...register("namaState", { required: "Isi Nama STATE" })}
              />
              <MxmFormErrorMessage fontSize="xs" mt={1}>
                {errors.namaState && (
                  <Flex flexDirection="row" alignItems="center">
                    <p>
                      <FormErrorIcon fontSize="xs" mt="-0.1em" />
                      {errors.namaState.message}
                    </p>
                  </Flex>
                )}
              </MxmFormErrorMessage>
            </FormControl>
            <FormControl mb={3} isInvalid={errors.kuotaState}>
              <MxmFormLabel color="black">Kuota</MxmFormLabel>
              <NumberInput allowMouseWheel defaultValue={100} min={0}>
                <MxmNumberInputField
                  type="number"
                  {...register("kuotaState", {
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
                {errors.kuotaState && (
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
          <FormControl mb={3} isInvalid={errors.hariKegiatan}>
            <MxmFormLabel color="black">Hari Kegiatan</MxmFormLabel>
            <MxmSelect
              {...register("hariKegiatan", {
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
              {errors.hariKegiatan && (
                <Flex flexDirection="row" alignItems="center">
                  <p>
                    <FormErrorIcon fontSize="xs" mt="-0.1em" />
                    {errors.hariKegiatan.message}
                  </p>
                </Flex>
              )}
            </MxmFormErrorMessage>
          </FormControl>
          <Flex>
            <FormControl mb={3} isInvalid={errors.logo}>
              <MxmFormLabel color="black">Logo</MxmFormLabel>
              <input
                {...register("logo", { required: "Pilih Logo STATE" })}
                type="file"
                name="image"
                ref={fileInput}
                onChange={(event) => setMyUpload(event.target.value)}
                style={{ display: "none" }}
              />
              <Button
                onClick={() => fileInput?.current?.click()}
                backgroundColor={Palette.Cyan}
                color="white"
                padding="1em"
                boxShadow="-1.2px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                _hover={{ backgroundColor: "#2BAD96" }}
              >
                Choose File Upload
              </Button>
              <span
                style={{
                  fontFamily: "Poppins",
                  fontSize: "0.8em",
                  marginLeft: "1em",
                }}
              >
                {myUpload}
              </span>
              <MxmFormErrorMessage fontSize="xs" mt={1.5}>
                {errors.logo && (
                  <Flex flexDirection="row" alignItems="center">
                    <p>
                      <FormErrorIcon fontSize="xs" mt="-0.1em" />
                      {errors.logo.message}
                    </p>
                  </Flex>
                )}
              </MxmFormErrorMessage>
            </FormControl>
          </Flex>
          <FormControl mb={3} isInvalid={errors.linkZoom}>
            <MxmFormLabel color="black">Link Zoom</MxmFormLabel>
            <MxmInput
              value="https://mxm-one.zoom.us/j/4662717372?pwd=dTlPQSt1UHBHM1U3cDlYajZLTEJtdz09"
              {...register("linkZoom", { required: "Isi Link ZOOM" })}
            />
            <MxmFormErrorMessage fontSize="xs" mt={1}>
              {errors.linkZoom && (
                <Flex flexDirection="row" alignItems="center">
                  <p>
                    <FormErrorIcon fontSize="xs" mt="-0.1em" />
                    {errors.linkZoom.message}
                  </p>
                </Flex>
              )}
            </MxmFormErrorMessage>
          </FormControl>
          <Flex mt={5}>
            <Spacer />
            <Button
              backgroundColor={Palette.Cyan}
              color="white"
              padding="1em 2em 1em 2em"
              borderRadius="30px"
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
  );
};

export default EditState;
