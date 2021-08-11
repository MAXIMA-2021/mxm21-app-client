import React, { useEffect } from "react";
import "./HomeZeppelin.scss";
import { MxmButton } from "../../../shared/styled/buttons";
import { Box, Flex, Grid } from "@chakra-ui/react";
import { Palette } from "../../../types/enums";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const cardVariants = {
  exit: { y: "-50%", opacity: 0, transition: { delay: 0.2, ...transition } },
  rest: { y: "50%", opacity: 0, transition: { delay: 0.2, ...transition } },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

const buttonVariants = {
  rest: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
  exit: { x: -100, opacity: 1, transition: { delay: 0.2, ...transition } },
};

const buttonVariantsTwo = {
  rest: { y: 100, opacity: 0, transition },
  enter: { y: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
  exit: { y: 100, opacity: 1, transition: { delay: 0.2, ...transition } },
};

const HomeZeppelin = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/home/finish", {
      status: true,
      message: "go to next page: finish",
    });
  };

  useEffect(() => {
    document.title = "Home Zeppelin Page";
  }, []);

  return (
    <Box overflow="hidden">
      <motion.div
        variants={cardVariants}
        initial="rest"
        animate="enter"
        exit="exit"
        style={{ overflow: "hidden" }}
      >
        <Flex
          className="home-zep-outer-container"
          h={{
            base: "calc(100vh - 3.5rem)",
            md: "calc(100vh - 4rem)",
            xl: "calc(100vh - 5rem)",
          }}
        >
          <Flex className="home-zep-inner-container">
            <Flex className="home-zep-header" color={Palette.Red}>
              <h1>Zeppelin</h1>
            </Flex>
            <Flex className="home-zep-desc" color={Palette.Navy}>
              <p>
                Zeppelin adalah peta konsep mimpi yang dibuat berdasarkan
                beberapa pertanyaan. Zeppelin terinspirasi dari nama sebuah
                balon udara berbentuk cerutu raksasa yang dapat terbang terarah
                karena mempunyai mesin dan kemudi. Harapannya adalah Maximers
                dapat mengetahui apa yang harus dilakukan dalam menggapai mimpi
                dan juga memiliki kemudi atas mimpi tersebut.
              </p>
            </Flex>
            <Grid
              className="home-zep-content-grid"
              backgroundColor={Palette.Yellow}
              overflow="hidden"
            >
              <div
                className="home-zep-content-header"
                style={{ color: Palette.Red }}
              >
                <h2>Zeppelin HoME Competition</h2>
              </div>
              <motion.div
                className="home-zep-regulasi-btn"
                variants={buttonVariantsTwo}
                initial="rest"
                animate="enter"
                exit="exit"
              >
                <button
                  onClick={() =>
                    window.open(
                      "https://maxima2021-assets.s3.ap-southeast-1.amazonaws.com/Zeppelin+Home+Competition.pdf"
                    )
                  }
                >
                  Download Regulasi <span>(pdf)</span>
                </button>
              </motion.div>
              <motion.div
                className="home-zep-bukti-btn"
                variants={buttonVariantsTwo}
                initial="rest"
                animate="enter"
                exit="exit"
              >
                <button
                  onClick={() => window.open("http://bit.ly/FormZeppelin")}
                >
                  Form Bukti Zeppelin HoME Competition{" "}
                  <span>(Google Form)</span>
                </button>
              </motion.div>
            </Grid>
            <motion.div
              variants={buttonVariants}
              initial="rest"
              animate="enter"
              exit="exit"
            >
              <MxmButton
                variant="rounded"
                colorScheme="cyan-navy"
                className="home-zep-next-btn"
                onClick={handleClick}
              >
                <span>NEXT</span>
              </MxmButton>
            </motion.div>
          </Flex>
        </Flex>
      </motion.div>
    </Box>
  );
};

export default HomeZeppelin;
