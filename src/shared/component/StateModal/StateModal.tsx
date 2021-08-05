import React, { useState } from "react";
import "./StateModal.scss";
import {
  // Heading,
  // Center,
  // SimpleGrid,
  // Box,
  // Text,
  // Container,
  HStack,
  PinInput,
  PinInputField,
  Image,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  // ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormErrorIcon,
} from "@chakra-ui/react";
import { MxmButton } from "../../styled/buttons";
import { useForm } from "react-hook-form";
import { MxmFormErrorMessage } from "../../styled/input";

export const CancelState = (props: any) => {
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={props.isOpen}
      onClose={props.onClose}
      isCentered
      size={"lg"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody pb={6} pt={16}>
          <Flex
            flexDir="column"
            alignItems="center"
            className="modal-batalkan-body"
          >
            <div className="modal-image-container">
              <Image src={props.data.stateLogo} />
            </div>
            <h2>{props.data.name}</h2>
            <h4>{props.data.tanggal}</h4>
            <h4>Apakah Anda yakin ingin membatalkan STATE ini?</h4>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <MxmButton
            onClick={props.onClose}
            colorScheme="white-navy"
            variant="mobile"
          >
            Kembali
          </MxmButton>
          <MxmButton
            colorScheme="red-yellow"
            variant="mobile"
            onClick={() => props.handleCancel(props.data.stateID)}
          >
            Batalkan
          </MxmButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export const TokenState = (props: any) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const onSubmit = () => {
    if (input.length < 6) {
      setError("Isi token absensi kamu");
    } else {
      props.handleToken(props.data.stateID, input);
    }
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={props.isOpen}
      onClose={props.onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody pb={6} pt={16}>
          <Flex
            flexDir="column"
            alignItems="center"
            className="modal-batalkan-body"
          >
            <div className="modal-image-container">
              <Image src={props.data.stateLogo} />
            </div>
            <h2 style={{ marginBottom: "1rem" }}>Isi Kode Presensi</h2>
            <HStack>
              <FormControl isInvalid={error ? true : false}>
                <PinInput
                  type="alphanumeric"
                  onChange={(event) => setInput(event)}
                >
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
                <MxmFormErrorMessage fontSize="xs" mt={1}>
                  {error && (
                    <Flex flexDirection="row" alignItems="center">
                      <p>
                        <FormErrorIcon fontSize="xs" mt="-0.1em" />
                        {error}
                      </p>
                    </Flex>
                  )}
                </MxmFormErrorMessage>
              </FormControl>
            </HStack>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <MxmButton
            onClick={props.onClose}
            colorScheme="white-navy"
            variant="mobile"
          >
            Kembali
          </MxmButton>
          <MxmButton
            colorScheme="navy-cyan"
            variant="mobile"
            onClick={onSubmit}
          >
            Verifikasi
          </MxmButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export const PilihState = (props: any) => {
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={props.isOpen}
      onClose={props.onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody pb={4} pt={16}>
          <Flex
            flexDir="column"
            alignItems="center"
            className="modal-batalkan-body"
          >
            <div className="modal-image-container">
              <Image src="https://uscope.umn.ac.id/assets/images/photos/activities/obscura/logo.png" />
            </div>
            <h2>Obscura</h2>
            <h4>Kamis, 29 Juli 2021</h4>
            <h4>Apakah Anda yakin ingin mengambil STATE ini?</h4>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <MxmButton
            onClick={props.onClose}
            colorScheme="white-navy"
            variant="mobile"
          >
            Kembali
          </MxmButton>
          <MxmButton colorScheme="navy-cyan" variant="mobile">
            Ya, Ambil
          </MxmButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
