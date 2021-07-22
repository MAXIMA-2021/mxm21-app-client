import styled from "styled-components";
import { Palette } from "../../types/enums";

export const MxmButton = styled("button")<{
  variant: string;
  colorScheme: string;
  margin?: string;
}>`
  /* 
    variant: either desktop (rounded) or mobile (more squared)
    colorScheme: format1 -> frontcolor-backcolor, 
                 format2  -> frontcolor-backcolor-textcolor (only for navy-cyan-cyan)
    */

  padding: 0.8vh 1vw;
  margin: ${(props) => props.margin || "1rem"};

  border-radius: ${(props) => (props.variant === "mobile" ? "10px" : "20px")};

  transform: translate(3px, -3px);

  ${(props) =>
    props.colorScheme === "cyan-navy"
      ? `
    background: ${Palette.Cyan};
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
        box-shadow: 0 0 0 0 ${Palette.Cyan};
        transform: translate(0px, 0px);
    }
    `
      : props.colorScheme === "yellow-red"
      ? ` 
      background: ${Palette.Yellow};
    box-shadow: -3px 3px 0 0 ${Palette.Red};
    color: ${Palette.Red};

    &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
        box-shadow: -2px 2px 0 0 ${Palette.Red};
        transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 ${Palette.Red};
      transform: translate(0px, 0px);
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
      box-shadow: 0 0 0 0 ${Palette.Cyan};
      transform: translate(0px, 0px);
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
      box-shadow: 0 0 0 0 ${Palette.Cyan};
      transform: translate(0px, 0px);
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
      box-shadow: 0 0 0 0 ${Palette.Red};
      transform: translate(0px, 0px);
    }
    `
      : props.colorScheme === "white-navy"
      ? `
    background: #FFFFFF;
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
      box-shadow: 0 0 0 0 ${Palette.Cyan};
      transform: translate(0px, 0px);
    }
    `
      : `
    
    background: ${Palette.Navy};
    box-shadow: -3px 3px 0 0 ${Palette.Cyan};
    color: white;

    &:hover {
      background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
      box-shadow: -2px 2px 0 0 ${Palette.Cyan};
      transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 ${Palette.Cyan};
      transform: translate(0px, 0px);
    }`}

  font-family: Rubik, Arial,  sans-serif;
  font-size: 1rem;
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
