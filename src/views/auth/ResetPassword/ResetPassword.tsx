import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Heading } from "@chakra-ui/react";

const ResetPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.title = "Reset Password - MAXIMA 2021";
  }, []);

  return <Heading>Ini reset password</Heading>;
};

export default ResetPassword;
