import styled from "styled-components";
import { Input, InputGroup, FormLabel, Select } from "@chakra-ui/react";

export const MxmSelect = styled(Select)`
  background-color: white !important;
  border-radius: ${(props) => (props.border === "rounded" ? "30px" : "4px")};
  border: 1px solid #e2e8f0;
  box-shadow: -1.2px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: "Poppins", sans-serif;
  height: 45px !important;
`;

export const MxmFormLabel = styled(FormLabel)`
  color: white;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
`;

export const MxmInput = styled(Input)<{ border: string }>`
  background-color: white !important;
  border-radius: ${(props) => (props.border === "rounded" ? "30px" : "4px")};
  border: 1px solid #e2e8f0;
  box-shadow: -1.2px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: "Poppins", sans-serif;
  height: 45px !important;
  & ::placeholder {
    color: #cbd5e0;
  }
`;

export const MxmInputGroup = styled(InputGroup)<{ border: string }>`
  border-radius: ${(props) => (props.border === "rounded" ? "30px" : "4px")};
  box-shadow: -1.2px 4px 4px 0px rgba(0, 0, 0, 0.25);
  & Input {
    height: 45px !important;
    background-color: white;
    font-family: "Poppins", sans-serif;
    border-radius: ${(props) => {
      let radius: string;
      props.border === "rounded" ? (radius = "30px") : (radius = "4px");
      if (props.addon === "left") {
        return `0 ${radius} ${radius} 0`;
      } else if (props.addon === "right") {
        return `${radius} 0 0 ${radius}`;
      } else {
        return `${radius}`;
      }
    }};
    & ::placeholder {
      color: #cbd5e0;
    }
  }
  & div {
    height: 45px !important;
    background-color: ${(props) =>
      props.addon === "icon" ? "transparant" : "#deefec"};
    border-radius: ${(props) => {
      let radius: string;
      props.border === "rounded" ? (radius = "30px") : (radius = "4px");
      if (props.addon === "left") {
        return `${radius} 0 0 ${radius}`;
      } else if (props.addon === "right") {
        return `0 ${radius} ${radius} 0`;
      } else {
        return `${radius}`;
      }
    }};
  }
`;
