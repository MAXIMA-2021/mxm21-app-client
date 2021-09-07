import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Flex,
  Image,
  Text,
  createIcon,
  useMediaQuery,
  FormControl,
  InputLeftAddon,
  Input,
  FormErrorMessage,
  Spinner,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Malpun, MxmLogoText } from "../../../assets";
import { dermaExpress } from "../../../assets/beranda";
import { MxmButton } from "../../../shared/styled/buttons";
import "./MalpunForm.scss";
import { Palette } from "../../../types/enums";
import { useForm } from "react-hook-form";
import { MxmInputGroupMhs } from "../../../shared/styled/input";
import { DataMalpun } from "../../../types/interfaces";

import malpunServices from "../../../services/malpun";
import Swal from "sweetalert2";

const MalpunForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  useEffect(() => {
    document.title = "Malam Puncak 2021";
  }, []);

  const onSubmit = async (data: DataMalpun) => {
    setLoading(true);

    try {
      const res = await malpunServices.daftarMalpun(data);
      history.push("/malpun/number", res.lucky_number);
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
      flexDir="column"
      minH={{
        base: "calc(100vh - 3.5rem)",
        md: "calc(100vh - 4rem)",
        xl: "calc(100vh - 5rem)",
      }}
      overflow="hidden"
      bgColor="#1C3261"
      alignItems="center"
      justifyContent="center"
    >
      <Flex className="mp-form-card">
        <Flex className="mp-form-inner-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb={4} isInvalid={errors.nama}>
              <span className="mp-form-span">NAMA</span>
              <Input
                className="mp-form-input"
                {...register("nama", {
                  required: "Isi nama lengkap kamu",
                })}
              />
              <FormErrorMessage className="mp-form-errmsg">
                {errors.nama && errors.nama.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mb={4} isInvalid={errors.nim}>
              <span className="mp-form-span">NIM</span>
              <MxmInputGroupMhs addon="left">
                <InputLeftAddon
                  size="base"
                  children="000000"
                  fontFamily="Poppins"
                  className="mp-nim-addon"
                />
                <Input
                  type="number"
                  placeholder="5 angka terakhir NIM"
                  {...register("nim", {
                    required: "Isi NIM kamu",
                    minLength: {
                      value: 5,
                      message: "Masukkan 5 angka terakhir dari NIM kamu",
                    },
                    maxLength: {
                      value: 5,
                      message: "Masukkan 5 angka terakhir dari NIM kamu",
                    },
                  })}
                />
              </MxmInputGroupMhs>
              <FormErrorMessage className="mp-form-errmsg">
                {errors.nim && errors.nim.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mb={3} isInvalid={errors.idLine}>
              <span className="mp-form-span">ID LINE</span>
              <Input
                className="mp-form-input"
                {...register("idLine", {
                  required: "Isi ID LINE kamu",
                  pattern: {
                    value: /^([0-9]||[a-z]||[-_.])+$/,
                    message: "ID LINE tidak valid",
                  },
                })}
              />
              <FormErrorMessage className="mp-form-errmsg">
                {errors.idLine && errors.idLine.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.noTelp}>
              <span className="mp-form-span">No. Telepon</span>
              <Input
                className="mp-form-input"
                placeholder="08XXXXXXXXXX"
                {...register("noTelp", {
                  required: "Isi nomor telepon kamu",
                  minLength: {
                    value: 10,
                    message: "Nomor telepon tidak dapat dibawah 10 digit",
                  },
                  maxLength: {
                    value: 13,
                    message: "Nomor telepon tidak dapat lebih dari 13 digit",
                  },
                  pattern: {
                    value: /^\d+$/g,
                    message: "Nomor telepon harus berupa angka",
                  },
                })}
              />
              <FormErrorMessage className="mp-form-errmsg">
                {errors.noTelp && errors.noTelp.message}
              </FormErrorMessage>
            </FormControl>
            <MxmButton className="mp-form-submit-btn" type="submit">
              {loading ? <Spinner mr={"5px"} size="sm" /> : ""}
              submit
            </MxmButton>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MalpunForm;
