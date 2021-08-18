import styled from "styled-components";
import {
  Input,
  InputGroup,
  FormLabel,
  Select,
  FormErrorMessage,
  NumberInputField,
  Textarea,
} from "@chakra-ui/react";

export const formLabelStyle: React.CSSProperties = {
  fontFamily: "Poppins",
  textTransform: "uppercase",
  textAlign: "justify",
  textJustify: "inter-word",
  fontSize: "0.85em",
  color: "#616161",
  letterSpacing: "1.5px",
};

export const formHeaderStyle: React.CSSProperties = {
  paddingTop: "0.5em",
  paddingBottom: "1em",
  fontFamily: "Rubik",
  fontWeight: 500,
  color: "#3C4257",
  fontSize: "1.65em",
  letterSpacing: "-0.75px",
};

export const MxmDivider = styled.div<{
  color: string;
  height: string;
  margin: string;
}>`
  margin: ${(props) => props.margin || "0"};
  width: 100%;
  background-color: ${(props) => props.color || "black"};
  height: ${(props) => props.height || "4px"};
`;

export const MxmFormErrorMessage = styled(FormErrorMessage)`
  & svg {
    color: white;
  }
  & p {
    background-color: #e8413c;
    color: white;
    padding: 0em 0.4em 0.2em 0.4em;
    border-radius: 5px;
  }
`;

export const MxmSelect = styled(Select)`
  background-color: white !important;
  border-radius: ${(props) => (props.border === "rounded" ? "30px" : "4px")};
  border: 1px solid #e2e8f0;
  box-shadow: -1.2px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: "Poppins", sans-serif;
  font-size: 0.9em !important;
`;

export const MxmSelectMhs = styled(Select)`
  background-color: white !important;
  border-radius: ${(props) => (props.border === "rounded" ? "30px" : "4px")};
  border-width: 0.75px 0.75px 0.75px 0.75px;
  border-color: #7e879fab !important;
  font-family: "Poppins", sans-serif;
  font-size: 0.9em !important;
`;

export const MxmFormLabel = styled(FormLabel)<{ color: string }>`
  color: ${(props) => props.color || "white"};
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  font-size: 0.8em !important;
`;

export const MxmInput = styled(Input)<{ border: string }>`
  background-color: white !important;
  border-radius: ${(props) => (props.border === "rounded" ? "30px" : "4px")};
  border: 1px solid #e2e8f0;
  box-shadow: -1.2px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: "Poppins", sans-serif;
  font-size: 0.9em !important;
  & ::placeholder {
    color: #cbd5e0;
  }
`;
export const MxmInputMhs = styled(Input)<{ border: string }>`
  background-color: white !important;
  border-radius: ${(props) => (props.border === "rounded" ? "30px" : "4px")};
  border-width: 0.75px 0.75px 0.75px 0.75px;
  border-color: #7e879fab !important;
  font-family: "Poppins", sans-serif;
  font-size: 0.9em !important;
  & ::placeholder {
    color: #cbd5e0;
  }
`;

export const MxmNumberInputField = styled(NumberInputField)<{ border: string }>`
  background-color: white !important;
  border-radius: ${(props) => (props.border === "rounded" ? "30px" : "4px")};
  border: 1px solid #e2e8f0;
  box-shadow: -1.2px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: "Poppins", sans-serif;
  font-size: 0.9em !important;
  & ::placeholder {
    color: #cbd5e0;
  }
`;

export const MxmInputGroup = styled(InputGroup)<{ border: string }>`
  border-radius: ${(props) => (props.border === "rounded" ? "30px" : "4px")};
  box-shadow: -1.2px 4px 4px 0px rgba(0, 0, 0, 0.1);
  /* width: 100%; */
  box-sizing: border-box;
  & Input {
    /* height: 5vh !important; */
    font-size: 0.9em !important;
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
  & Input::-ms-reveal {
    display: none !important;
  }
  & div {
    font-size: 0.9em !important;
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

export const MxmInputGroupMhs = styled(InputGroup)<{ border: string }>`
  border-radius: ${(props) => (props.border === "rounded" ? "30px" : "4px")};
  & Input {
    display: block;
    font-size: 0.9em !important;
    font-family: "Poppins", sans-serif;
    border-width: 0.75px 0.75px 0.75px 0.75px;
    border-color: #7e879fab !important;
    background-color: white;
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
  & Input::-ms-reveal {
    display: none !important;
  }
  & div {
    font-size: 0.9em !important;
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

export const MxmTextarea = styled(Textarea)<{ border: string }>`
  background-color: white !important;
  border-radius: ${(props) => (props.border === "rounded" ? "30px" : "4px")};
  border: 1px solid #e2e8f0;
  box-shadow: -1.2px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: "Poppins", sans-serif;
  font-size: 0.9em !important;
  & ::placeholder {
    color: #cbd5e0;
  }
`;
