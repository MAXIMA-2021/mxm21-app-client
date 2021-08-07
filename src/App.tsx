import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import "./GlobalStyling.scss";
import AppRouter from "./AppRouter";
require("dotenv").config();

export const App = () => (
  <AnimatePresence>
    <ChakraProvider theme={theme} resetCSS>
      {/* <ColorModeSwitcher /> */}
      <AppRouter />
    </ChakraProvider>
  </AnimatePresence>
);
