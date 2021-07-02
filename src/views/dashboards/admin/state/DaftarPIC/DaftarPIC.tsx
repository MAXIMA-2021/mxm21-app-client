import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Flex } from "@chakra-ui/react";
import {
  MxmContainers,
  MxmVerticalAlign,
} from "../../../../../shared/styled/containers";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "../../../../../types/enums";
import "./DaftarPIC.scss";
import { DashboardNavigation } from "../../../../../shared/component/DashboardNavigation";

const DaftarPIC: React.FC = () => {
  return (
    <>
      <DashboardNavigation />
    </>
  );
};

export default DaftarPIC;
