import styled from "styled-components";
import { Palette } from "../../types/enums";
import { Button, createIcon } from "@chakra-ui/react";

export const IconShowPassword = createIcon({
  displayName: "ShowPassword",
  viewBox: "0 0 24 24",
  d: "M12 19C10.3599 19.0204 8.7367 18.6664 7.254 17.965C6.10469 17.4042 5.07265 16.6297 4.213 15.683C3.30243 14.7041 2.58547 13.5616 2.1 12.316L2 12L2.105 11.684C2.59082 10.4394 3.30624 9.29725 4.214 8.31698C5.07334 7.37029 6.10504 6.59584 7.254 6.03498C8.73671 5.33357 10.3599 4.97959 12 4.99998C13.6401 4.97963 15.2633 5.3336 16.746 6.03498C17.8953 6.59571 18.9274 7.37017 19.787 8.31698C20.6993 9.29453 21.4165 10.4373 21.9 11.684L22 12L21.895 12.316C20.3262 16.3998 16.3742 19.0693 12 19ZM12 6.99998C8.59587 6.89331 5.47142 8.87507 4.117 12C5.4712 15.1251 8.59579 17.1069 12 17C15.4041 17.1064 18.5284 15.1247 19.883 12C18.5304 8.87356 15.4047 6.89106 12 6.99998ZM12 15C10.5573 15.0095 9.30937 13.9973 9.02097 12.5838C8.73256 11.1702 9.48427 9.75 10.8154 9.19364C12.1465 8.63728 13.6852 9.10011 14.4885 10.2985C15.2919 11.4969 15.1354 13.0961 14.115 14.116C13.5563 14.6812 12.7948 14.9995 12 15Z",
});

export const IconHidePassword = createIcon({
  displayName: "HidePassword",
  viewBox: "0 0 24 24",
  d: "M19.97 21.385L16.614 18.029C15.1661 18.6882 13.5908 19.0204 12 19.002C10.3599 19.0224 8.73671 18.6684 7.254 17.967C6.10468 17.4063 5.07264 16.6318 4.213 15.685C3.30049 14.7069 2.5833 13.5634 2.1 12.316L2 12.002L2.105 11.686C2.82781 9.84231 4.04426 8.23318 5.621 7.03501L3 4.41401L4.413 3.00201L21.382 19.971L19.972 21.385H19.97ZM7.036 8.45101C5.75792 9.34693 4.74865 10.5747 4.117 12.002C5.47142 15.1269 8.59587 17.1087 12 17.002C13.0498 17.0106 14.0936 16.8416 15.087 16.502L13.287 14.702C12.8863 14.8984 12.4462 15.001 12 15.002C10.3475 14.9916 9.01037 13.6546 9 12.002C9.00048 11.5548 9.10309 11.1136 9.3 10.712L7.036 8.45101ZM19.852 15.612L18.46 14.221C19.0456 13.5589 19.5256 12.8105 19.883 12.002C18.5304 8.87559 15.4047 6.89309 12 7.00201C11.753 7.00201 11.505 7.01101 11.265 7.02801L9.5 5.26101C10.3216 5.08525 11.1598 4.99841 12 5.00201C13.6401 4.98166 15.2633 5.33564 16.746 6.03701C17.8953 6.59775 18.9274 7.37221 19.787 8.31901C20.6991 9.29598 21.4163 10.4381 21.9 11.684L22 12.002L21.895 12.318C21.4268 13.5361 20.7342 14.6555 19.853 15.618L19.852 15.612Z",
});

export const MxmButton = styled(Button)<{
  variant: string;
  colorScheme: string;
  margin?: string;
  isDisabled?: boolean;
  fontSize?: string;
  padding?: string;
}>`
  /* 
    variant: either rounded or squared
    colorScheme: format1 -> frontcolor-backcolor, 
    format2  -> frontcolor-backcolor-textcolor (only for navy-cyan-cyan)
    */

  padding: ${(props) => props.padding || "0.5rem 1rem"};
  margin: ${(props) => props.margin || "1rem"};

  border-radius: ${(props) =>
    props.variant === "squared"
      ? "10px"
      : props.variant === "rounded"
      ? "20px"
      : "20px"};

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
