import styled from "styled-components";
import { Palette } from "../../types/enums";
import { Button } from "@chakra-ui/react";

export const MxmButton = styled(Button)<{
  variant: string;
  colorScheme: string;
  margin?: string;
  isDisabled?: boolean;
  fontSize?: string;
  padding?: string;
}>`
  /* 
    variant: either desktop (rounded) or mobile (more squared)
    colorScheme: format1 -> frontcolor-backcolor, 
    format2  -> frontcolor-backcolor-textcolor (only for navy-cyan-cyan)
    */

  padding: ${(props) => props.padding || "0.5rem 1rem"};
  margin: ${(props) => props.margin || "1rem"};

  border-radius: ${(props) => (props.variant === "squared" ? "10px" : "20px")};

  transform: translate(3px, -3px);

  ${(props) =>
    props.isDisabled === true && props.colorScheme === "cyan-navy"
      ? `&:hover {
    background: ${Palette.Cyan} !important;
  }`
      : props.colorScheme === "yellow-red" &&
        `&:hover {
    background: ${Palette.Yellow} !important;
  }`}

  ${(props) =>
    props.colorScheme === "cyan-navy"
      ? `
    background: ${Palette.Cyan};
    box-shadow: -3px 3px 0 0 ${Palette.Navy} !important;
    color: white;

    &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
        box-shadow: -2px 2px 0 0 ${Palette.Navy} !important;
        transform: translate(2px, -2px) !important;
    }

    &:active {
      box-shadow: 0 0 0 0 ${Palette.Navy} !important;
      transform: translate(0px, 0px) !important;
    }
    
    &:focus {
      box-shadow: -3px 3px 0 0 ${Palette.Navy};
    }
    `
      : props.colorScheme === "cyan-white"
      ? `
    background: ${Palette.Cyan};
    box-shadow: -3px 3px 0 0 #ffffff;
    color: white;

    &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
        box-shadow: -2px 2px 0 0 #ffffff;
        transform: translate(2px, -2px);
    }

    &:active {
        box-shadow: 0 0 0 0 #ffffff;
        transform: translate(0px, 0px);
    }
    `
      : props.colorScheme === "navy-cyan"
      ? `
    background: ${Palette.Navy};
    box-shadow: -3px 3px 0 0 ${Palette.Cyan};
    color: white;

    &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
        box-shadow: -2px 2px 0 0 ${Palette.Cyan};
        transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 ${Palette.Cyan} !important;
      transform: translate(0px, 0px) !important;
    }
    
    &:focus {
      box-shadow: -3px 3px 0 0 ${Palette.Cyan};
    }
    `
      : props.colorScheme === "yellow-red"
      ? ` 
      background: ${Palette.Yellow};
    box-shadow: -3px 3px 0 0 ${Palette.Red} !important;
    color: ${Palette.Red};

    &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
        box-shadow: -2px 2px 0 0 ${Palette.Red} !important;
        transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 ${Palette.Red} !important;
      transform: translate(0px, 0px) !important;
    }
    
    &:focus {
      box-shadow: -3px 3px 0 0 ${Palette.Red};
    }
    `
      : props.colorScheme === "red-yellow"
      ? ` 
      background: ${Palette.Red};
    box-shadow: -3px 3px 0 0 ${Palette.Yellow};
    color: ${Palette.Yellow};

    &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
        box-shadow: -2px 2px 0 0 ${Palette.Yellow};
        transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 ${Palette.Yellow} !important;
      transform: translate(0px, 0px) !important;
    }
    
    &:focus {
      box-shadow: -3px 3px 0 0 ${Palette.Yellow};
    }
    `
      : props.colorScheme === "navy-cyan-cyan"
      ? `
    background: ${Palette.Navy};
    box-shadow: -3px 3px 0 0 ${Palette.Cyan};
    color: ${Palette.Cyan};

    &:hover {
      background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
      box-shadow: -2px 2px 0 0 ${Palette.Cyan};
      transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 ${Palette.Cyan} !important;
      transform: translate(0px, 0px) !important;
    }
    
    &:focus {
      box-shadow: -3px 3px 0 0 ${Palette.Cyan};
    }
    `
      : props.colorScheme === "navy-white"
      ? `
    background: ${Palette.Navy};
    box-shadow: -3px 3px 0 0 #FFFFFF;
    color: #ffffff;

    &:hover {
      background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
      box-shadow: -2px 2px 0 0 #FFFFFF;
      transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 ${Palette.Cyan} !important;
      transform: translate(0px, 0px) !important;
    }
    
    &:focus {
      box-shadow: -3px 3px 0 0 ${Palette.Cyan};
    }
    `
      : props.colorScheme === "white-red"
      ? `
    background: #FFFFFF;
    box-shadow: -3px 3px 0 0 ${Palette.Red};
    color: ${Palette.Red};

    &:hover {
      background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
      box-shadow: -2px 2px 0 0 ${Palette.Red};
      transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 ${Palette.Red} !important;
      transform: translate(0px, 0px) !important;
    }
    
    &:focus {
      box-shadow: -3px 3px 0 0 ${Palette.Red};
    }
    `
      : props.colorScheme === "white-navy"
      ? `
      border: 1px solid ${Palette.Navy};
    background: #FFFFFF;
    box-shadow: -3px 3px 0 0 ${Palette.Navy};
    color: ${Palette.Navy};

    &:hover {
      background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
      box-shadow: -2px 2px 0 0 ${Palette.Navy};
      transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 ${Palette.Navy} !important;
      transform: translate(0px, 0px) !important;
    }
    
    &:focus {
      box-shadow: -3px 3px 0 0 ${Palette.Navy};
    }
    `
      : props.colorScheme === "cyan-white"
      ? `
    background: ${Palette.Cyan};
    box-shadow: -3px 3px 0 0 #FFFFFF;
    color: #FFFFFF;

    &:hover {
      background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
      box-shadow: -2px 2px 0 0 #FFFFFF;
      transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 #FFFFFF;
      transform: translate(0px, 0px);
    }
    `
      : props.colorScheme === "white-cyan"
      ? `
    background: #FFFFFF;
    box-shadow: -3px 3px 0 0 ${Palette.Cyan};
    color: ${Palette.Cyan};

    &:hover {
      background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
      box-shadow: -2px 2px 0 0 ${Palette.Cyan};
      transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 ${Palette.Cyan} !important;
      transform: translate(0px, 0px) !important;
    }
    
    &:focus {
      box-shadow: -3px 3px 0 0 ${Palette.Cyan};
    }
    `
      : props.colorScheme === "yellow-navy"
      ? ` 
    background: ${Palette.Yellow};
    box-shadow: -3px 3px 0 0 ${Palette.Navy};
    color: ${Palette.Navy};

    &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
        box-shadow: -2px 2px 0 0 ${Palette.Navy};
        transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 ${Palette.Navy};
      transform: translate(0px, 0px);
    }
    `
      : props.colorScheme === "red-yellow"
      ? ` 
    background: ${Palette.Red};
    box-shadow: -3px 3px 0 0 ${Palette.Yellow};
    color: ${Palette.Yellow};
    
    &:hover {
      background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
      box-shadow: -2px 2px 0 0 ${Palette.Yellow};
      transform: translate(2px, -2px);
    }
    
    &:active {
    box-shadow: 0 0 0 0 ${Palette.Yellow};
    transform: translate(0px, 0px);
    }
    `
      : props.colorScheme === "red-navy"
      ? ` 
    background: ${Palette.Red};
    box-shadow: -3px 3px 0 0 ${Palette.Navy};
    color: white;
    
    &:hover {
      background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
      box-shadow: -2px 2px 0 0 ${Palette.Navy};
      transform: translate(2px, -2px);
    }
    
    &:active {
    box-shadow: 0 0 0 0 ${Palette.Navy};
    transform: translate(0px, 0px);
    }
    `
      : `
    
    background: ${Palette.Navy};
    box-shadow: -3px 3px 0 0 ${Palette.Cyan};
    color: white;

    &:hover {
      background: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
      box-shadow: -2px 2px 0 0 ${Palette.Cyan};
      transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 ${Palette.Cyan} !important;
      transform: translate(0px, 0px) !important;
    }
    
    &:focus {
      box-shadow: -3px 3px 0 0 ${Palette.Cyan};
    }
   
    `}

  font-family: Rubik, Arial,  sans-serif;
  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: 500;
  transition: all 0.2s;
`;

export const Container = styled.div`
  display: flex;
  place-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
