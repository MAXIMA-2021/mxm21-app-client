import styled from "styled-components";
import { bgAuth } from "../../assets";

export const MxmContainers = styled("div")`
    background-image: url(${bgAuth});
    height: 100%;
    padding: 10vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const MxmVerticalAlign = styled("div")<{
    variant: string;
}>`
    display: flex;
    place-items: ${(props) => (props.variant === "center" ? "center" : "flex-start")};
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
`