import styled, { keyframes } from "styled-components";
import { bgAuth } from "../../assets";

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
  background-color: #164273;
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
