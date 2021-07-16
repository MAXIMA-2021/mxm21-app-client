import styled from "styled-components";
import { bgAuth } from "../../assets";

export const MxmContainers = styled("div")`
  background-image: url(${bgAuth});
  height: 100%;
  padding-top: 10vh;
  padding-bottom: 10vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 767px) {
    padding-top: 0vh;
    padding-bottom: 0vh;
  }
`;

export const MxmContainersPanitia = styled("div")`
  background-color: #1f2c4c;
  height: 100%;
  padding-top: 10vh;
  padding-bottom: 10vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 767px) {
    padding-top: 0vh;
    padding-bottom: 0vh;
  }
`;

export const MxmContainersOrganisator = styled("div")`
  background-color: #41ceba;
  height: 100%;
  padding-top: 10vh;
  padding-bottom: 10vh;
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
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
  margin-bottom: 1vh;
`;
