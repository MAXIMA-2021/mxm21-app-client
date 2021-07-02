import React from "react";
import { Flex } from "@chakra-ui/react";
import "./DashboardFooter.scss";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";

const DashboardFooter = () => {
  return (
    <footer className="footer">
      <Flex className="footer-flexbox">
        <h4>
          Created with <FavoriteOutlinedIcon /> by WEB MAXIMA 2021 Team
        </h4>
      </Flex>
    </footer>
  );
};

export default DashboardFooter;
