import {
  Flex,
  Heading,
  Spacer,
  FormControl,
  FormErrorIcon,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { MxmLogo } from "../../../../../assets";
import { DashboardFooter } from "../../../../../shared/component/DashboardFooter";
import {
  MxmDivider,
  MxmFormLabel,
  MxmFormErrorMessage,
  MxmSelect,
} from "../../../../../shared/styled/input";
import { Palette } from "../../../../../types/enums";
import UploadFiles from "../../../../../shared/component/ImageUpload/UploadFiles";

const TambahMedia: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    window.confirm(JSON.stringify(data));
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
          <FormControl mb={3} isInvalid={errors.akunOrganisator}>
            <MxmFormLabel color="black">Akun Organisator</MxmFormLabel>
            <MxmSelect
              {...register("akunOrganisator", {
                required: "Pilih Akun Organisator",
              })}
            >
              <option value="" selected disabled hidden></option>
              {organisatorList.map((data) => (
                <option value={data.name}>
                  {data.name} ({data.nim})
                </option>
              ))}
            </MxmSelect>
            <MxmFormErrorMessage fontSize="xs" mt={1}>
              {errors.akunOrganisator && (
                <Flex flexDirection="row" alignItems="center">
                  <p>
                    <FormErrorIcon fontSize="xs" mt="-0.1em" />
                    {errors.akunOrganisator.message}
                  </p>
                </Flex>
              )}
            </MxmFormErrorMessage>
          </FormControl>
          <FormControl mb={3} isInvalid={errors.linkMedia}>
            <MxmFormLabel color="black">File Media</MxmFormLabel>
            <UploadFiles
              maxfiles={5}
              keterangan={true}
              isiKeterangan={"5 file"}
            />
          </FormControl>
          <Flex mt={10}>
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
  );
};

export default TambahMedia;

const organisatorList = [
  { name: "Bonifasius Ariesto Adrian Finantyo", nim: "42580" },
  { name: "Bapak Budi", nim: "32580" },
  { name: "Ibu Budi", nim: "22580" },
  { name: "Ini Budi", nim: "12580" },
  { name: "Bukan Tiara Andini", nim: "52580" },
];
