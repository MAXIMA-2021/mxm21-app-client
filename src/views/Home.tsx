import React from "react";
import {
  Container,
  Heading,
  Stack,
  Input,
  HStack,
  InputLeftAddon,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { createIcon } from "@chakra-ui/react";
import { MxmInput, MxmInputGroup } from "../shared/styled/input";

const CalendarIcon = createIcon({
  displayName: "CalendarIcon",
  viewBox: "0 0 18 20",
  d: "M16 20H2C0.89543 20 0 19.1046 0 18V4C0 2.89543 0.89543 2 2 2H4V0H6V2H12V0H14V2H16C17.1046 2 18 2.89543 18 4V18C18 19.1046 17.1046 20 16 20ZM2 8V18H16V8H2ZM2 4V6H16V4H2ZM14 16H12V14H14V16ZM10 16H8V14H10V16ZM6 16H4V14H6V16ZM14 12H12V10H14V12ZM10 12H8V10H10V12ZM6 12H4V10H6V12Z",
});

export default function Home() {
  return (
    <div>
      <Heading textAlign="center" size="xl">
        MAXIMA 2021
      </Heading>
      <HStack>
        <Container>
          <Heading textAlign="center" size="md">
            Squared Input
          </Heading>
          <Stack spacing={3}>
            <MxmInput placeholder="Nama Lengkap" />
            <MxmInputGroup addon="left">
              <InputLeftAddon children="000000" />
              <Input placeholder="NIM" />
            </MxmInputGroup>
            <MxmInputGroup addon="right">
              <Input placeholder="Masukkan email kamu" />
              <InputRightAddon children="@student.umn.ac.id" />
            </MxmInputGroup>
            <MxmInputGroup addon="icon">
              <Input placeholder="DD/MM/YYYY" />
              <InputRightElement children={<CalendarIcon />} />
            </MxmInputGroup>
          </Stack>
        </Container>
        <Container>
          <Heading textAlign="center" size="md">
            Rounded Input
          </Heading>
          <Stack alignSelf="center" spacing={3}>
            <MxmInput border="rounded" placeholder="Nama Lengkap" />
            <MxmInputGroup border="rounded" addon="left">
              <InputLeftAddon children="000000" />
              <Input placeholder="NIM" />
            </MxmInputGroup>
            <MxmInputGroup border="rounded" addon="right">
              <Input placeholder="Masukkan email kamu" />
              <InputRightAddon children="@student.umn.ac.id" />
            </MxmInputGroup>
            <MxmInputGroup border="rounded" addon="icon">
              <Input placeholder="DD/MM/YYYY" />
              <InputRightElement children={<CalendarIcon />} />
            </MxmInputGroup>
          </Stack>
        </Container>
      </HStack>
    </div>
  );
}
