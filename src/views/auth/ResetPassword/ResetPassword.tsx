import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Heading,
  Flex,
  Grid,
  Box,
  Text,
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
  FormErrorIcon,
  Spacer,
  Button,
  HStack,
  InputRightElement,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import {
  MxmFormErrorMessage,
  MxmFormLabel,
} from "../../../shared/styled/input";
import {
  IconHidePassword,
  IconShowPassword,
  MxmButton,
} from "../../../shared/styled/buttons";
import { Palette } from "../../../types/enums";
import authService from "../../../services/auth";
import Swal from "sweetalert2";

const OTPComponent = (props: any) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: unknown) => {
    setLoading(true);

    try {
      const returnedData = await authService.getOTP(data);
      reset();
      alert(returnedData["otp"]);
      props.setRole(returnedData["role"]);
      props.setHasOTP(true);
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
    <>
      <Heading
        color={Palette.Navy}
        fontFamily="Rubik"
        fontWeight="500"
        fontSize={{
          base: "1.6rem",
          sm: "2.4rem",
          md: "2.1rem",
          lg: "2.5rem",
          "2xl": "4rem",
        }}
        letterSpacing="0.1rem"
      >
        Kamu lupa password?
      </Heading>
      <Text
        backgroundColor={Palette.Navy}
        color="white"
        fontFamily="Rubik"
        fontWeight="400"
        fontSize={{ base: "0.8rem", md: "1rem", "2xl": "1.5rem" }}
        mt="0.5rem"
        borderRadius="5px"
      >
        Tenang aja! Reset password kamu disini
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex mt="2rem" direction={{ base: "column", lg: "row" }}>
          <FormControl isInvalid={errors.nim}>
            <MxmFormLabel color={Palette.Navy}>NIM Kamu</MxmFormLabel>
            <InputGroup
              addon="left"
              border="1px solid #164273"
              borderRadius="7.5px"
            >
              <InputLeftAddon
                size="base"
                children="000000"
                fontFamily="Poppins"
                backgroundColor={Palette.Red}
                color="white"
              />
              <Input
                type="number"
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
            </InputGroup>
            <MxmFormErrorMessage>
              {errors.nim && (
                <p>
                  <FormErrorIcon fontSize="xs" mt="-0.1em" />
                  {errors.nim.message}
                </p>
              )}
            </MxmFormErrorMessage>
          </FormControl>
          <Flex
            display="flex"
            justifyContent="center"
            mt={{ base: "0", lg: "27px" }}
          >
            <MxmButton
              type="submit"
              variant="squared"
              margin={{ base: "1rem 0 0 0", lg: "0 0 0 1rem" }}
              colorScheme="yellow-red"
              padding={{ base: "0 1rem", lg: "0 1rem" }}
              fontSize={{ base: "0.9rem", lg: "1rem" }}
              width="100%"
            >
              Kirim OTP
            </MxmButton>
          </Flex>
        </Flex>
      </form>
    </>
  );
};

const PassComponent = (props: any) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [OTP, setOTP] = React.useState("");
  const password = useRef({});
  password.current = watch("password", "");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleOTP = (OTP: any) => {
    setOTP(OTP);
  };

  const onSubmit = async (data: unknown) => {
    setLoading(true);
    data["role"] = props.role;
    data["otp"] = OTP;

    try {
      await authService.verifyOTP(data);
      reset();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Password akun kamu berhasil diubah!`,
        showConfirmButton: false,
        timer: 1000,
      });
      props.setHasOTP(false);
    } catch (error) {
      Swal.fire({
        title: "Perhatian!",
        text: "Kode OTP belum tepat",
        icon: "error",
        confirmButtonText: "Coba lagi",
      });
    }
    setLoading(false);
  };

  return (
    <>
      <Heading
        color={Palette.Navy}
        fontFamily="Rubik"
        fontWeight="500"
        fontSize={{ base: "2rem", md: "2rem", "2xl": "4rem" }}
        letterSpacing="0.1rem"
      >
        <span
          style={{
            backgroundColor: `${Palette.Navy}`,
            borderRadius: "3px",
            padding: "0 6px 0 6px",
            color: `${Palette.Yellow}`,
          }}
        >
          Kode OTP
        </span>{" "}
        berhasil dikirim ke email student kamu !
      </Heading>
      <Text
        backgroundColor={Palette.Navy}
        color="white"
        fontFamily="Rubik"
        fontWeight="400"
        fontSize={{ base: "0.8rem", md: "1rem", "2xl": "1.5rem" }}
        mt="0.5rem"
        borderRadius="5px"
      >
        Tenang aja! Reset password kamu disini
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex mt="2rem" direction="column">
          <Grid gap={4} templateColumns="repeat(2, 1fr)" mb={4}>
            <FormControl isInvalid={errors.password}>
              <MxmFormLabel color={Palette.Navy}>Password Baru</MxmFormLabel>
              <InputGroup
                addon="left"
                border="1px solid #164273"
                borderRadius="7.5px"
              >
                <Input
                  placeholder="Minimal 8 karakter"
                  {...register("password", {
                    required: "Isi password baru kamu",
                    minLength: {
                      value: 8,
                      message: "Password minimal 8 karakter",
                    },
                  })}
                  type={show ? "text" : "password"}
                />
                <InputRightElement>
                  <Button size="base" onClick={handleClick}>
                    {show ? <IconHidePassword /> : <IconShowPassword />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <MxmFormErrorMessage>
                {errors.password && (
                  <p>
                    <FormErrorIcon fontSize="xs" mt="-0.1em" />
                    {errors.password.message}
                  </p>
                )}
              </MxmFormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.konfirmasiPassword}>
              <MxmFormLabel color={Palette.Navy}>
                Konfirmasi Password
              </MxmFormLabel>
              <InputGroup
                addon="left"
                border="1px solid #164273"
                borderRadius="7.5px"
              >
                <Input
                  type="password"
                  {...register("konfirmasiPassword", {
                    required: "Masukkan ulang password ",
                    validate: (value) =>
                      value === password.current || "Password belum sama",
                  })}
                />
              </InputGroup>
              <MxmFormErrorMessage>
                {errors.konfirmasiPassword && (
                  <p>
                    <FormErrorIcon fontSize="xs" mt="-0.1em" />
                    {errors.konfirmasiPassword.message}
                  </p>
                )}
              </MxmFormErrorMessage>
            </FormControl>
          </Grid>
          <Flex direction={{ base: "column", lg: "row" }}>
            <FormControl isInvalid={errors.otp}>
              <MxmFormLabel color={Palette.Navy}>Kode OTP</MxmFormLabel>
              <HStack>
                <PinInput
                  value={OTP}
                  onChange={handleOTP}
                  type="alphanumeric"
                  otp
                >
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
              <MxmFormErrorMessage>
                {errors.otp && (
                  <p>
                    <FormErrorIcon fontSize="xs" mt="-0.1em" />
                    {errors.otp.message}
                  </p>
                )}
              </MxmFormErrorMessage>
            </FormControl>
            <Spacer />
            <Flex
              display="flex"
              justifyContent="center"
              mt={{ base: "0px", lg: "24px" }}
            >
              <MxmButton
                type="submit"
                variant="squared"
                margin={{ base: "1rem 0 0 0", lg: "0 0 0 1rem" }}
                colorScheme="yellow-red"
                padding={{ base: "0 1rem", lg: "0 1rem" }}
                fontSize={{ base: "0.9rem", lg: "1rem" }}
                width="100%"
              >
                Ubah Password
              </MxmButton>
            </Flex>
          </Flex>
        </Flex>
      </form>
    </>
  );
};

const ResetPassword: React.FC = () => {
  const [hasOTP, setHasOTP] = useState(false);
  const [role, setRole] = useState();
  useEffect(() => {
    document.title = "Reset Password - MAXIMA 2021";
  }, []);

  return (
    <>
      <Flex
        minH={{
          base: "calc(100vh - 3.5rem)",
          md: "calc(100vh - 4rem)",
          xl: "calc(100vh - 5rem)",
        }}
        w="100%"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        padding="2rem"
      >
        <Flex
          alignItems={{ base: "center", md: "initial" }}
          justifyContent="space-between"
          flexDir={{ base: "column-reverse", md: "row" }}
          w={{ base: "100%", lg: "90%", xl: "70%" }}
        >
          <Box
            width={{ base: "80%", md: "50%" }}
            mt={{ base: "6rem", sm: "3rem", md: "0" }}
          >
            <ResetIlust />
          </Box>
          <Box
            w={{ base: "100%", sm: "80%", md: "50%" }}
            textAlign={{ base: "center", md: "center" }}
          >
            {hasOTP ? (
              <PassComponent setHasOTP={setHasOTP} role={role} />
            ) : (
              <OTPComponent setHasOTP={setHasOTP} setRole={setRole} />
            )}
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default ResetPassword;

const ResetIlust = (props: { width?: string; height?: string }) => {
  return (
    <svg
      width={props.width || "auto"}
      height={props.height || "auto"}
      viewBox="0 0 708 510"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M708 510C671.519 504.65 636.434 500.038 602.747 496.165L616.068 474.582C611.577 473.254 591.846 485.557 591.846 485.557L609.332 422.811C586.746 424.989 575.254 489.087 575.254 489.087L550.023 467.281L562.236 491.722C459.132 481.066 370.088 476.88 295.191 476.397L306.593 457.925C302.102 456.597 282.37 468.9 282.37 468.9L299.857 406.153C277.271 408.332 265.778 472.43 265.778 472.43L240.548 450.624L253.483 476.511C190.694 477.273 139.49 480.628 99.9679 484.541C111.501 455.735 150.67 428.47 150.67 428.47C120.759 435.788 105.068 448.211 96.8678 459.822C96.241 424.187 100.458 358.142 131.785 285.147C131.785 285.147 69.9455 397.632 77.8231 473.365L78.7646 486.811C26.3515 492.859 0 499.282 0 499.282L708 510Z"
          fill="#164273"
        />
        <path
          d="M376.468 474.97V20.4271C376.469 17.7443 375.942 15.0877 374.917 12.609C373.892 10.1303 372.389 7.87812 370.495 5.98112C368.6 4.08413 366.351 2.57951 363.875 1.55325C361.399 0.526982 358.746 -0.000820915 356.067 0H278.55H199.344H171.764C169.084 -0.000231139 166.431 0.527971 163.956 1.55445C161.481 2.58092 159.231 4.08556 157.337 5.98244C155.442 7.87932 153.94 10.1313 152.914 12.6097C151.889 15.0881 151.362 17.7445 151.362 20.4271V474.97C151.359 477.653 151.885 480.31 152.909 482.789C153.934 485.267 155.437 487.519 157.332 489.416C159.227 491.312 161.477 492.815 163.954 493.839C166.43 494.863 169.084 495.388 171.764 495.383H356.067C361.474 495.382 366.661 493.231 370.486 489.403C374.311 485.576 376.463 480.385 376.468 474.97Z"
          fill="#164273"
        />
        <path
          d="M202.706 80.6426C205.414 80.6426 207.609 78.4449 207.609 75.7339C207.609 73.0229 205.414 70.8252 202.706 70.8252C199.998 70.8252 197.803 73.0229 197.803 75.7339C197.803 78.4449 199.998 80.6426 202.706 80.6426Z"
          fill="#FBCF10"
        />
        <path
          d="M173.836 384.007C176.543 384.007 178.738 381.81 178.738 379.099C178.738 376.388 176.543 374.19 173.836 374.19C171.128 374.19 168.933 376.388 168.933 379.099C168.933 381.81 171.128 384.007 173.836 384.007Z"
          fill="#FBCF10"
        />
        <path
          d="M354.157 102.89C356.865 102.89 359.06 100.692 359.06 97.9812C359.06 95.2702 356.865 93.0725 354.157 93.0725C351.45 93.0725 349.255 95.2702 349.255 97.9812C349.255 100.692 351.45 102.89 354.157 102.89Z"
          fill="#82F1CC"
        />
        <path
          d="M319.042 25.9626C321.75 25.9626 323.945 23.7649 323.945 21.0539C323.945 18.343 321.75 16.1453 319.042 16.1453C316.334 16.1453 314.139 18.343 314.139 21.0539C314.139 23.7649 316.334 25.9626 319.042 25.9626Z"
          fill="#82F1CC"
        />
        <path
          d="M312.282 -4.74854C311.674 -4.17074 311.026 -3.63509 310.343 -3.14545C317.387 9.0694 326.93 19.7086 338.366 28.0976C349.802 36.4865 362.882 42.4421 376.778 45.5867V43.0606C363.258 39.9177 350.546 34.0464 339.445 25.8175C328.344 17.5886 319.095 7.18084 312.282 -4.74854Z"
          fill="#82F1CC"
        />
        <path
          d="M263.674 0.949707H260.992C270.514 25.0589 286.219 46.2557 306.537 62.4217C326.856 78.5877 351.076 89.1567 376.777 93.0726V90.5465C351.745 86.6726 328.155 76.3754 308.325 60.6666C288.494 44.9578 273.107 24.3781 263.674 0.949707Z"
          fill="#82F1CC"
        />
        <path
          d="M214.225 0.949707H211.641C233.259 75.7962 298.491 131.511 376.777 140.559V138.07C299.849 129.063 235.738 74.4092 214.225 0.949707Z"
          fill="#82F1CC"
        />
        <path
          d="M186.597 112.074H185.321V110.796H185.072V112.074H183.796V112.323H185.072V113.601H185.321V112.323H186.597V112.074Z"
          fill="#FBCF10"
        />
        <path
          d="M272.743 48.2606H271.467V46.9829H271.218V48.2606H269.941V48.5102H271.218V49.7879H271.467V48.5102H272.743V48.2606Z"
          fill="#FBCF10"
        />
        <path
          d="M199.204 162.563H197.928V161.285H197.679V162.563H196.402V162.812H197.679V164.09H197.928V162.812H199.204V162.563Z"
          fill="#FBCF10"
        />
        <path
          d="M258.035 125.397H256.759V124.119H256.51V125.397H255.234V125.647H256.51V126.924H256.759V125.647H258.035V125.397Z"
          fill="#FBCF10"
        />
        <path
          d="M342.08 148.538H340.804V147.26H340.555V148.538H339.278V148.788H340.555V150.065H340.804V148.788H342.08V148.538Z"
          fill="#FBCF10"
        />
        <path
          d="M227.009 153.431L225.419 153.677C225.916 156.86 226.309 160.114 226.596 163.333L228.2 163.192C227.913 159.932 227.513 156.65 227.009 153.431Z"
          fill="#FBCF10"
        />
        <path
          d="M222.66 134.259L221.119 134.729C222.05 137.815 222.884 140.977 223.591 144.126L225.167 143.768C224.446 140.584 223.598 137.387 222.66 134.259Z"
          fill="#FBCF10"
        />
        <path
          d="M215.719 115.873L214.255 116.546C215.6 119.484 216.861 122.5 218.002 125.515L219.508 124.947C218.353 121.896 217.085 118.839 215.719 115.873Z"
          fill="#FBCF10"
        />
        <path
          d="M206.334 98.6362L204.975 99.4988C206.705 102.22 208.365 105.039 209.906 107.865L211.321 107.093C209.766 104.232 208.085 101.385 206.334 98.6362Z"
          fill="#FBCF10"
        />
        <path
          d="M194.666 82.8374L193.44 83.8822C195.527 86.3366 197.558 88.9031 199.477 91.4977L200.766 90.537C198.833 87.9143 196.781 85.3197 194.666 82.8374Z"
          fill="#FBCF10"
        />
        <path
          d="M180.953 68.7705L179.881 69.9696C182.29 72.1224 184.651 74.3874 186.899 76.6945L188.054 75.5655C185.778 73.2303 183.39 70.9443 180.953 68.7705Z"
          fill="#FBCF10"
        />
        <path
          d="M165.46 56.6951L164.557 58.0274C167.232 59.8296 169.88 61.751 172.422 63.7355L173.417 62.4662C170.839 60.4607 168.164 58.5183 165.46 56.6951Z"
          fill="#FBCF10"
        />
        <path
          d="M151.362 48.3083V50.1316C153.036 51.0081 154.696 51.9267 156.32 52.8664L157.126 51.4709C155.235 50.377 153.314 49.3228 151.362 48.3083Z"
          fill="#FBCF10"
        />
        <path
          d="M226.645 304.901C226.906 303.333 227.145 301.732 227.356 300.143L228.952 300.355C228.739 301.962 228.498 303.58 228.234 305.166L226.645 304.901Z"
          fill="#FBCF10"
        />
        <path
          d="M222.156 323.82L223.695 324.3C224.661 321.183 225.535 317.991 226.292 314.811L224.723 314.439C223.973 317.585 223.115 320.738 222.156 323.82Z"
          fill="#FBCF10"
        />
        <path
          d="M215.124 341.934L216.585 342.62C217.974 339.669 219.274 336.629 220.454 333.585L218.951 332.998C217.785 336.009 216.499 339.016 215.124 341.934Z"
          fill="#FBCF10"
        />
        <path
          d="M205.661 358.927L207.011 359.805C208.792 357.071 210.501 354.236 212.092 351.384L210.687 350.595C209.117 353.416 207.422 356.218 205.661 358.927Z"
          fill="#FBCF10"
        />
        <path
          d="M193.953 374.451L195.173 375.51C197.316 373.036 199.393 370.463 201.362 367.86L200.072 366.894C198.131 369.467 196.075 372.009 193.953 374.451Z"
          fill="#FBCF10"
        />
        <path
          d="M180.243 388.228L181.303 389.44C183.766 387.289 186.174 385.019 188.476 382.714L187.336 381.571C185.061 383.854 182.674 386.092 180.243 388.228Z"
          fill="#FBCF10"
        />
        <path
          d="M164.798 400.002L165.687 401.351C168.407 399.553 171.107 397.637 173.698 395.662L172.725 394.375C170.159 396.333 167.491 398.227 164.798 400.002Z"
          fill="#FBCF10"
        />
        <path
          d="M157.308 406.473C155.361 407.574 153.372 408.64 151.362 409.65V407.841C153.099 406.957 154.822 406.024 156.51 405.078L157.308 406.473Z"
          fill="#FBCF10"
        />
        <path
          d="M227.117 173.28L228.727 173.251C228.757 174.879 228.759 176.515 228.734 178.115L227.124 178.09C227.149 176.508 227.147 174.89 227.117 173.28Z"
          fill="#FBCF10"
        />
        <path
          d="M158.436 211.516H323.17C335.43 211.516 347.187 216.392 355.856 225.072C364.524 233.751 369.395 245.523 369.395 257.798V263.924H204.66C192.401 263.924 180.643 259.048 171.974 250.369C163.306 241.689 158.436 229.917 158.436 217.642V211.516Z"
          fill="white"
        />
        <path
          d="M267.764 494.739C267.603 494.476 263.813 488.14 262.499 474.984C261.294 462.913 262.069 442.568 272.607 414.188C292.572 360.423 268.006 317.043 267.755 316.611L268.967 315.907C269.031 316.016 275.37 327.077 279.114 344.688C284.062 368.038 282.261 392.316 273.92 414.677C253.99 468.349 268.807 493.758 268.959 494.008L267.764 494.739Z"
          fill="#FBCF10"
        />
        <path
          d="M259.957 313.454C264.985 313.454 269.062 309.372 269.062 304.338C269.062 299.303 264.985 295.222 259.957 295.222C254.928 295.222 250.852 299.303 250.852 304.338C250.852 309.372 254.928 313.454 259.957 313.454Z"
          fill="#82F1CC"
        />
        <path
          d="M288.672 347.113C293.7 347.113 297.777 343.032 297.777 337.997C297.777 332.963 293.7 328.881 288.672 328.881C283.644 328.881 279.567 332.963 279.567 337.997C279.567 343.032 283.644 347.113 288.672 347.113Z"
          fill="#FBCF10"
        />
        <path
          d="M269.062 369.553C274.09 369.553 278.166 365.472 278.166 360.437C278.166 355.402 274.09 351.321 269.062 351.321C264.033 351.321 259.957 355.402 259.957 360.437C259.957 365.472 264.033 369.553 269.062 369.553Z"
          fill="#EB2378"
        />
        <path
          d="M292.874 388.487C297.903 388.487 301.979 384.405 301.979 379.37C301.979 374.336 297.903 370.254 292.874 370.254C287.846 370.254 283.77 374.336 283.77 379.37C283.77 384.405 287.846 388.487 292.874 388.487Z"
          fill="white"
        />
        <path
          d="M262.058 417.938C267.086 417.938 271.163 413.857 271.163 408.822C271.163 403.787 267.086 399.706 262.058 399.706C257.03 399.706 252.953 403.787 252.953 408.822C252.953 413.857 257.03 417.938 262.058 417.938Z"
          fill="#FBCF10"
        />
        <path
          d="M273.264 495.075C273.264 495.075 264.159 472.635 291.474 455.805L273.264 495.075Z"
          fill="#FBCF10"
        />
        <path
          d="M262.066 494.668C262.066 494.668 257.923 470.805 225.851 471.01L262.066 494.668Z"
          fill="#FBCF10"
        />
        <path
          opacity="0.2"
          d="M225.818 293.819C256.763 293.819 281.848 268.703 281.848 237.72C281.848 206.737 256.763 181.621 225.818 181.621C194.874 181.621 169.789 206.737 169.789 237.72C169.789 268.703 194.874 293.819 225.818 293.819Z"
          fill="#82F1CC"
        />
        <path
          opacity="0.2"
          d="M225.818 277.227C247.61 277.227 265.276 259.539 265.276 237.72C265.276 215.901 247.61 198.214 225.818 198.214C204.027 198.214 186.361 215.901 186.361 237.72C186.361 259.539 204.027 277.227 225.818 277.227Z"
          fill="#82F1CC"
        />
        <path
          d="M225.818 263.794C240.201 263.794 251.86 252.12 251.86 237.72C251.86 223.32 240.201 211.646 225.818 211.646C211.436 211.646 199.776 223.32 199.776 237.72C199.776 252.12 211.436 263.794 225.818 263.794Z"
          fill="#82F1CC"
        />
        <path
          d="M230.553 232.096C230.554 231.296 230.352 230.509 229.966 229.808C229.581 229.107 229.024 228.515 228.349 228.088C227.674 227.66 226.901 227.411 226.103 227.363C225.306 227.314 224.509 227.469 223.787 227.812C223.065 228.156 222.442 228.676 221.975 229.326C221.508 229.975 221.213 230.732 221.118 231.526C221.022 232.321 221.128 233.126 221.427 233.868C221.726 234.61 222.208 235.264 222.827 235.77L221.084 247.992H230.553L228.81 235.77C229.355 235.326 229.794 234.766 230.096 234.13C230.398 233.495 230.554 232.8 230.553 232.096Z"
          fill="white"
        />
        <path
          d="M401.772 324.703C405.467 327.457 410.04 328.768 414.631 328.389C419.223 328.009 423.519 325.966 426.714 322.643C429.908 319.319 431.783 314.943 431.986 310.334C432.188 305.726 430.706 301.202 427.815 297.609C424.925 294.017 420.825 291.604 416.284 290.822C411.744 290.04 407.074 290.942 403.151 293.361C399.228 295.779 396.32 299.547 394.973 303.959C393.626 308.37 393.932 313.122 395.833 317.323L346.312 358.607L339.719 350.771L336.756 352.755L333.459 348.838L336.168 346.552L332.872 342.635L328.658 346.189L330.687 348.6L326.172 352.409L324.143 349.998L317.521 355.584L320.564 359.201L322.972 357.169L326.269 361.087L323.259 363.626L329.346 370.859L322.122 376.953L329.477 385.692L401.772 324.703ZM414.136 297.01C416.604 297.221 418.954 298.16 420.889 299.708C422.824 301.257 424.257 303.345 425.006 305.708C425.756 308.072 425.789 310.605 425.1 312.988C424.412 315.37 423.034 317.495 421.14 319.093C419.245 320.691 416.92 321.69 414.459 321.965C411.997 322.24 409.509 321.778 407.31 320.637C405.11 319.497 403.298 317.729 402.102 315.557C400.907 313.385 400.381 310.907 400.592 308.436C400.875 305.122 402.46 302.057 405 299.914C407.541 297.771 410.827 296.726 414.136 297.01V297.01Z"
          fill="#82F1CC"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="708" height="510" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
