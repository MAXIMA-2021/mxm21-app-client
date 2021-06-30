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