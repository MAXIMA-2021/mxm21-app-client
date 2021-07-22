import React, { useEffect } from "react";
import "./HomeZeppelin.scss";
import { MxmButton } from "../../../shared/styled/buttons";
import { Flex, Grid } from "@chakra-ui/react";
import { Palette } from "../../../types/enums";
import { useHistory } from "react-router-dom";

const HomeZeppelin = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/home/home-finish", {
      status: true,
      message: "go to next page: home-finish",
    });
  };

  useEffect(() => {
    document.title = "Home Zeppelin Page";
  }, []);

  return (
    <Flex className="home-zep-outer-container">
      <Flex className="home-zep-inner-container">
        <Flex className="home-zep-header" color={Palette.Red}>
          <h1>Zeppelin</h1>
        </Flex>
        <Flex className="home-zep-desc" color={Palette.Navy}>
          <p>
            Zeppelin adalah peta konsep mimpi yang dibuat berdasarkan beberapa
            pertanyaan. Zeppelin terinspirasi dari nama sebuah balon udara
            berbentuk cerutu raksasa yang dapat terbang terarah karena mempunyai
            mesin dan kemudi. Harapannya adalah Maximers dapat mengetahui apa
            yang harus dilakukan dalam menggapai mimpi dan juga memiliki kemudi
            atas mimpi tersebut.
          </p>
        </Flex>
        <Grid
          className="home-zep-content-grid"
          backgroundColor={Palette.Yellow}
        >
          <div
            className="home-zep-content-header"
            style={{ color: Palette.Red }}
          >
            <h2>Zeppelin HoME Competition</h2>
          </div>
          <div className="home-zep-regulasi-btn">
            <button>
              Download Regulasi <span>(pdf)</span>
            </button>
          </div>
          <div className="home-zep-bukti-btn">
            <button>
              Download Form Bukti <span>(pdf)</span>
            </button>
          </div>
        </Grid>

        <MxmButton
          variant="desktop"
          colorScheme="cyan-navy"
          className="home-zep-next-btn"
          onClick={handleClick}
        >
          <span>NEXT</span>
        </MxmButton>
      </Flex>
    </Flex>
  );
};

export default HomeZeppelin;
