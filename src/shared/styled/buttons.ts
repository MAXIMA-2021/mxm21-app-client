import styled from "styled-components";

export const MxmButton = styled("button")<{
  variant: string;
  colorScheme: string;
}>`
  /* 
    variant: either desktop (rounded) or mobile (more squared)
    colorScheme: format1 -> frontcolor-backcolor, 
                 format2  -> frontcolor-backcolor-textcolor (only for navy-cyan-cyan)
    */

  /* min-width: 105px;
  height: 43px; */
  padding: 0.5em 1.6em;
  margin: 1rem;

  border-radius: ${(props) => (props.variant === "mobile" ? "10px" : "20px")};

  transform: translate(3px, -3px);

  ${(props) =>
    props.colorScheme === "cyan-navy"
      ? `
    background: #41CEBA;
    box-shadow: -3px 3px 0 0 #1f2c4c;
    color: white;

    &:hover {
        box-shadow: -2px 2px 0 0 #1f2c4c;
        transform: translate(2px, -2px);
    }

    &:active {
        box-shadow: 0 0 0 0 #1f2c4c;
        transform: translate(0px, 0px);
    }
    `
      : props.colorScheme === "navy-cyan"
      ? `
    background: #1F2C4C;
    box-shadow: -3px 3px 0 0 #41CEBA;
    color: white;

    &:hover {
        box-shadow: -2px 2px 0 0 #41CEBA;
        transform: translate(2px, -2px);
    }

    &:active {
        box-shadow: 0 0 0 0 #41CEBA;
        transform: translate(0px, 0px);
    }
    `
      : props.colorScheme === "yellow-red"
      ? ` 
      background: #FFD008;
    box-shadow: -3px 3px 0 0 #F4224B;
    color: #F4224B;

    &:hover {
        box-shadow: -2px 2px 0 0 #F4224B;
        transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 #F4224B;
      transform: translate(0px, 0px);
    }
    `
      : props.colorScheme === "navy-cyan"
      ? `
    background: #1F2C4C;
    box-shadow: -3px 3px 0 0 #41CEBA;
    color: #FFFFFF;

    &:hover {
      box-shadow: -2px 2px 0 0 #41CEBA;
      transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 #41CEBA;
      transform: translate(0px, 0px);
    }
    `
      : props.colorScheme === "navy-cyan-cyan"
      ? `
    background: #1F2C4C;
    box-shadow: -3px 3px 0 0 #41CEBA;
    color: #41CEBA;

    &:hover {
      box-shadow: -2px 2px 0 0 #41CEBA;
      transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 #41CEBA;
      transform: translate(0px, 0px);
    }
    `
      : props.colorScheme === "navy-white"
      ? `
    background: #1F2C4C;
    box-shadow: -3px 3px 0 0 #FFFFFF;
    color: #ffffff;

    &:hover {
      box-shadow: -2px 2px 0 0 #FFFFFF;
      transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 #41CEBA;
      transform: translate(0px, 0px);
    }
    `
      : props.colorScheme === "white-red"
      ? `
    background: #FFFFFF;
    box-shadow: -3px 3px 0 0 #F4224B;
    color: #F4224B;

    &:hover {
      box-shadow: -2px 2px 0 0 #F4224B;
      transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 #F4224B;
      transform: translate(0px, 0px);
    }
    `
      : props.colorScheme === "white-navy"
      ? `
    background: #FFFFFF;
    box-shadow: -3px 3px 0 0 #1F2C4C;
    color: #1F2C4C;

    &:hover {
      box-shadow: -2px 2px 0 0 #1F2C4C;
      transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 #1F2C4C;
      transform: translate(0px, 0px);
    }
    `
      : props.colorScheme === "white-cyan"
      ? `
    background: #FFFFFF;
    box-shadow: -3px 3px 0 0 #41CEBA;
    color: #41CEBA;

    &:hover {
      box-shadow: -2px 2px 0 0 #41CEBA;
      transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 #41CEBA;
      transform: translate(0px, 0px);
    }
    `
      : `
    
    background: #1F2C4C;
    box-shadow: -3px 3px 0 0 #41CEBA;
    color: white;

    &:hover {
      box-shadow: -2px 2px 0 0 #41CEBA;
      transform: translate(2px, -2px);
    }

    &:active {
      box-shadow: 0 0 0 0 #41CEBA;
      transform: translate(0px, 0px);
    }`}

  font-size: 1rem;
  font-weight: bold;
  transition: all 0.2s;
`;

export const Container = styled.div`
  height: 25vh;
  width: 50vw;

  margin: 25vh auto;

  background: #d1d1d1;

  display: flex;
  place-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
