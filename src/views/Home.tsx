import React from "react";
import { Heading } from "@chakra-ui/react";
import { DashboardNavigation } from "../shared/component/DashboardNavigation";
import { DashboardFooter } from "../shared/component/DashboardFooter";

export default function Home() {
  return (
    <div style={{ height: "200vh" }}>
      {/* <Heading textAlign="center" size="xl">
        MAXIMA 2021 
      </Heading> */}
      <DashboardNavigation />
      {/* <div
        style={{
          width: "80vw",
          height: "200px",
          backgroundColor: "red",
          marginLeft: "18em",
        }}
      ></div> */}
      <DashboardFooter />
    </div>
  );
}
