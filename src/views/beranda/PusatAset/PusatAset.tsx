import React, { useEffect } from "react";
import { Center, Box, Flex } from "@chakra-ui/react";
import "./PusatAset.scss";
import { motion } from "framer-motion";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const headerVariants = {
  exit: { y: "-50%", opacity: 0, transition: { delay: 0.2, ...transition } },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

const slideVariant = {
  rest: { x: -300, opacity: 0 },
  enter: { x: 0, opacity: 1, transition: { delay: 0.15, ...transition } },
  exit: { x: -300, opacity: 0, transition: { delay: 0.15, ...transition } },
};
const slideVariant2 = {
  rest: { x: -300, opacity: 0 },
  enter: { x: 0, opacity: 1, transition: { delay: 0.3, ...transition } },
  exit: { x: -300, opacity: 0, transition: { delay: 0.3, ...transition } },
};
const slideVariant3 = {
  rest: { x: -300, opacity: 0 },
  enter: { x: 0, opacity: 1, transition: { delay: 0.45, ...transition } },
  exit: { x: -300, opacity: 0, transition: { delay: 0.45, ...transition } },
};
const slideVariant4 = {
  rest: { x: -300, opacity: 0 },
  enter: { x: 0, opacity: 1, transition: { delay: 0.6, ...transition } },
  exit: { x: -300, opacity: 0, transition: { delay: 0.6, ...transition } },
};

const footerVariants = {
  exit: { y: "50%", opacity: 0, transition: { delay: 0.2, ...transition } },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

const FAQ = () => {
  useEffect(() => {
    document.title = "Pusat Aset - MAXIMA 2021";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Flex direction="column" className="faqpage-container">
      <motion.div
        variants={headerVariants}
        initial="exit"
        animate="enter"
        exit="exit"
      ></motion.div>
    </Flex>
  );
};

export default FAQ;
