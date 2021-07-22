import React from "react";
import "./HomeOrganisatorList.scss";
import { Palette } from "../../../types/enums";
import { Flex, Image, Grid } from "@chakra-ui/react";
import { Home } from "../../../assets";
import { MxmDivider } from "../../../shared/styled/input";
import { useMediaQuery } from "@chakra-ui/media-query";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const HomeOrganisatorList = () => {
  return (
    <Flex
      backgroundColor={Palette.Red}
      className="home-orglist-outer_container"
      justifyContent="center"
    >
      <Flex className="home-orglist-inner_container">
        <Grid className="home-orglist-grid-header">
          <div className="home-orglist-chap-logo">
            <Image src={Home.homeChapter1logo} alt="chapter logo" />
          </div>
          <div
            className="home-orglist-chap-desc"
            style={{ backgroundColor: Palette.Navy }}
          >
            <div
              className="chap-desc-image"
              style={{ backgroundColor: Palette.Yellow }}
            >
              <Image src={Home.homeMaxiTalk} alt="maxi" width="100px" />
            </div>
            <div className="chap-desc-text">
              <p style={{ color: Palette.Yellow }}>
                Tadaa, selamat datang di Zona pertama! Lost Treasure Island
                sendiri adalah Zona Lembaga Kampus yang saat ini terbagi menjadi
                Campus Visit dan UMN Documentation untuk memperkenalkan
                lingkungan UMN melalui sudut pandang yang menarik.
              </p>
            </div>
          </div>
          <MxmDivider
            color={Palette.Yellow}
            margin={"2rem 0 1rem 0"}
            height={"5px"}
            className="home-orglist-divider"
          />
        </Grid>
        <Flex className="home-orglist-content_container">
          <Grid className="home-orglist-content-grid">
            <div className="content-org-logo">
              <Image src={Home.campusVisitLogo} alt="logo organisator" />
            </div>
            <div
              className="content-org-desc"
              style={{ backgroundColor: Palette.Yellow, color: Palette.Navy }}
            >
              <h3>Campus Visit</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos cum consequuntur blanditiis obcaecati? Asperiores
                aspernatur officia, cupiditate saepe at soluta.
              </p>
            </div>
            <div className="home-orglist-arrow_icon">
              <button>
                <PlayArrowIcon />
              </button>
            </div>
          </Grid>
          <Grid className="home-orglist-content-grid">
            <div className="content-org-logo">
              <Image src={Home.umnDocumLogo} alt="logo organisator" />
            </div>
            <div
              className="content-org-desc"
              style={{ backgroundColor: Palette.Yellow, color: Palette.Navy }}
            >
              <h3>UMN Documentation</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos cum consequuntur blanditiis obcaecati? Asperiores
                aspernatur officia, cupiditate saepe at soluta.
              </p>
            </div>
            <div className="home-orglist-arrow_icon">
              <button>
                <PlayArrowIcon />
              </button>
            </div>
          </Grid>

          <Grid className="home-orglist-content-grid">
            <div className="content-org-logo">
              <Image src={Home.umnDocumLogo} alt="logo organisator" />
            </div>
            <div
              className="content-org-desc"
              style={{ backgroundColor: Palette.Yellow, color: Palette.Navy }}
            >
              <h3>UMN Documentation</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos cum consequuntur blanditiis obcaecati? Asperiores
                aspernatur officia, cupiditate saepe at soluta.
              </p>
            </div>
            <div className="home-orglist-arrow_icon">
              <button>
                <PlayArrowIcon />
              </button>
            </div>
          </Grid>

          <Grid className="home-orglist-content-grid">
            <div className="content-org-logo">
              <Image src={Home.umnDocumLogo} alt="logo organisator" />
            </div>
            <div
              className="content-org-desc"
              style={{ backgroundColor: Palette.Yellow, color: Palette.Navy }}
            >
              <h3>UMN Documentation</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos cum consequuntur blanditiis obcaecati? Asperiores
                aspernatur officia, cupiditate saepe at soluta.
              </p>
            </div>
            <div className="home-orglist-arrow_icon">
              <button>
                <PlayArrowIcon />
              </button>
            </div>
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomeOrganisatorList;
