import styled, { keyframes } from "styled-components";
import { bgAuth } from "../../assets";
import { Heading } from "@chakra-ui/react";
import { Palette } from "../../types/enums";

export const LoginFormCard = styled.div`
  background-color: #fafafa;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  transition: 0.3s;
  padding: 2.5em 3em 2.5em 3em;
  border-radius: 7px;

  @media (max-width: 520px) {
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: center;
    /* height: 100vh;
    width: 100vw; */

    /* margin: 5rem 0; */
  }

  @media (max-width: 450px) {
    padding: 1.5em;
  }
`;

export const MxmContainers = styled("div")`
  background-image: url(${bgAuth});
  height: 100%;
  padding-top: 5vh;
  padding-bottom: 20vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 767px) {
    padding-top: 0vh;
    padding-bottom: 0vh;
  }
`;

export const MxmContainersPanitia = styled("div")`
  /* background-color: #164273; */
  height: 100%;
  padding-top: 5vh;
  padding-bottom: 20vh;
  /* background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */

  /* background-color: rgba(229, 229, 247, 0.2); */
  /* background-color: rgba(22, 66, 115, 0.5); */

  /* @media screen and (max-width: 520px) {
    padding-top: 7vh;
  } */

  background-color: #000000;
  background-image: linear-gradient(
      30deg,
      #164273 12%,
      transparent 12.5%,
      transparent 87%,
      #164273 87.5%,
      #164273
    ),
    linear-gradient(
      150deg,
      #164273 12%,
      transparent 12.5%,
      transparent 87%,
      #164273 87.5%,
      #164273
    ),
    linear-gradient(
      30deg,
      #164273 12%,
      transparent 12.5%,
      transparent 87%,
      #164273 87.5%,
      #164273
    ),
    linear-gradient(
      150deg,
      #164273 12%,
      transparent 12.5%,
      transparent 87%,
      #164273 87.5%,
      #164273
    ),
    linear-gradient(
      60deg,
      #16427377 25%,
      transparent 25.5%,
      transparent 75%,
      #16427377 75%,
      #16427377
    ),
    linear-gradient(
      60deg,
      #16427377 25%,
      transparent 25.5%,
      transparent 75%,
      #16427377 75%,
      #16427377
    );
  background-size: 40px 70px;
  background-position: 0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px;

  @media only screen and (max-width: 767px) {
    padding-top: 0vh;
    padding-bottom: 0vh;
  }
`;

export const MxmVerticalAlign = styled("div")<{
  variant: string;
}>`
  display: flex;
  place-items: ${(props) =>
    props.variant === "center" ? "center" : "flex-start"};
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const getColor = (props: any) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isDragActive) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const svgOnDragEnter = keyframes`
  0%{
    transform: translateY(0px);
  }

  50%{
    transform: translateY(-3px);
  }

  100%{
    transform: translateY(0px);
  }
`;

const rejectFileAnimation = keyframes`
 0%{
   transform: translateX(1px);
 }
 25%{
   transform: translateX(-1px);
 }
 50%{
   transform: translateX(1px);
 }
 75%{
   transform: translateX(-1px);
 }
 100%{
   transform: translateX(0px);
 }

`;

export const UploadContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa57;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
  margin-bottom: 1vh;

  &.file-enters {
    border-style: solid;
    background: rgba(0, 167, 218, 0.05);

    & svg {
      animation: ${svgOnDragEnter} 0.8s infinite;
    }
  }

  &.file-rejected {
    border-style: dashed;
    background: rgba(255, 27, 27, 0.021);

    animation: ${rejectFileAnimation} 0.2s;
  }
`;

export const MxmHeading = styled(Heading)`
  font-size: 1.8rem;
  background-color: ${Palette.Navy};
  padding: 0.8rem 2rem;
  width: 100%;
  border-radius: 15px;
  font-family: "Rubik";
  text-align: center;
  color: white;
`;
