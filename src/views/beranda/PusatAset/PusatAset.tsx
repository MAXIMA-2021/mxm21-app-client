import React, { useEffect } from "react";
import { Center, Box, Flex } from "@chakra-ui/react";
import "./PusatAset.scss";
import { motion } from "framer-motion";
import Tilt from "react-tilt";

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

const slideVariant1 = {
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

const PusatAset = () => {
  useEffect(() => {
    document.title = "Pusat Aset - MAXIMA 2021";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Flex direction="column" className="asetpage-container">
      <motion.div
        variants={headerVariants}
        initial="exit"
        animate="enter"
        exit="exit"
      >
        <Center mb="2rem" w="100%" textAlign="center">
          <div className="title" style={{ color: "#164273" }}>
            Unduh{" "}
            <span
              style={{
                backgroundColor: "#164273",
                borderRadius: "3px",
                padding: "1px 6px 1px 6px",
                color: "#FBCF10",
              }}
            >
              Virtual Background
            </span>{" "}
            Kamu!
          </div>
        </Center>
      </motion.div>
      {/* <Tilt options={{ max: 25 }} style={{ background: "white !important" }}> */}
      <div className="flex-vbg">
        <motion.div
          variants={headerVariants}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <Center>
            <div className="aset-title" style={{ color: "#41ceba" }}>
              DREAMER
            </div>
          </Center>
          <Center>
            <div
              className="aset-subtitle"
              style={{ backgroundColor: "#41ceba", color: "white" }}
            >
              Mahasiswa Baru UMN 2021
            </div>
          </Center>
        </motion.div>
        <motion.div
          variants={slideVariant1}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <div className="vgb-container">
            <a href="https://cdn.mxm.one/state/VBG_Dreamer%20(Maba).jpg">
              <img
                src="https://cdn.mxm.one/state/VBG_Dreamer%20(Maba).jpg"
                alt="VBG Dreamer"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          variants={headerVariants}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <Center>
            <div className="aset-title" style={{ color: "#164273" }}>
              MORPHEUS
            </div>
          </Center>
          <Center>
            <div
              className="aset-subtitle"
              style={{ backgroundColor: "#164273", color: "white" }}
            >
              Organisator MAXIMA 2021
            </div>
          </Center>
        </motion.div>
        <motion.div
          variants={slideVariant2}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <div className="vgb-container">
            <a href="https://cdn.mxm.one/state/VBG_Morpheus%20(Organisasi).jpg">
              <img
                src="https://cdn.mxm.one/state/VBG_Morpheus%20(Organisasi).jpg"
                alt="VBG Dreamer"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          variants={headerVariants}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <Center>
            <div className="aset-title" style={{ color: "#EB2378" }}>
              DAKOTA
            </div>
          </Center>
          <Center>
            <div
              className="aset-subtitle"
              style={{ backgroundColor: "#EB2378", color: "white" }}
            >
              Panitia MAXIMA 2021
            </div>
          </Center>
        </motion.div>
        <motion.div
          variants={slideVariant3}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <div className="vgb-container">
            <a href="https://cdn.mxm.one/state/VBG_Dakota%20(Panit).jpg">
              <img
                src="https://cdn.mxm.one/state/VBG_Dakota%20(Panit).jpg"
                alt="VBG Dreamer"
              />
            </a>
          </div>
        </motion.div>
      </div>
      {/* </Tilt> */}
    </Flex>
  );
};

export default PusatAset;
