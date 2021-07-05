import React from "react";
import { Flex } from "@chakra-ui/react";
import "./DashboardFooter.scss";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import { useMediaQuery } from "@chakra-ui/media-query";

const DashboardFooter = (show: boolean) => {
  const [isSmallerThan450px] = useMediaQuery("(max-width: 28.125em)");

  return (
    <footer
      className={`footer ${
        isSmallerThan450px ? (show ? "open" : "close") : show ? "open" : "close"
      }`}
    >
      <Flex className="footer-flexbox">
        <h4>
          Created with <FavoriteOutlinedIcon /> by WEB MAXIMA 2021 Team
        </h4>
      </Flex>
    </footer>
  );
};

export default DashboardFooter;
