import React from "react";
import { Heading } from "@chakra-ui/react";
import { DashboardNavigation } from "../shared/component/DashboardNavigation";
import { DashboardFooter } from "../shared/component/DashboardFooter";

export default function Home() {
  return (
    <div>
      {/* <Heading textAlign="center" size="xl">
        MAXIMA 2021 
      </Heading> */}
      <DashboardNavigation />
      <div style={{ height: "100vh" }}></div>
      <DashboardFooter />
    </div>
  );
}
