import React from "react";
import { Container, MxmButton } from "../shared/styled/buttons";

export default function Home() {
  return (
    <Container>
      <MxmButton variant="mobile" colorScheme="cyan-navy">
        Button
      </MxmButton>
      <MxmButton variant="mobile" colorScheme="navy-cyan">
        Button
      </MxmButton>
      <MxmButton variant="mobile" colorScheme="yellow-red">
        Button
      </MxmButton>
      <MxmButton variant="mobile" colorScheme="navy-cyan-cyan">
        Button
      </MxmButton>
      <MxmButton variant="mobile" colorScheme="navy-white">
        Button
      </MxmButton>
      <MxmButton variant="desktop" colorScheme="white-red">
        Button
      </MxmButton>
      <MxmButton variant="desktop" colorScheme="white-navy">
        Button
      </MxmButton>
      <MxmButton variant="desktop" colorScheme="white-cyan">
        Button
      </MxmButton>
      <MxmButton variant="desktop" colorScheme="white-red">
        Button
      </MxmButton>
      <MxmButton variant="desktop" colorScheme="yellow-red">
        Button
      </MxmButton>
    </Container>
  );
}
