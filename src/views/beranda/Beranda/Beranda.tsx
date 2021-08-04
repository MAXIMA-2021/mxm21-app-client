import React, { useEffect, useState } from "react";
import "./Beranda.scss";
import {
  Heading,
  Center,
  SimpleGrid,
  Box,
  Text,
  Container,
  HStack,
  PinInput,
  PinInputField,
  Image,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Tilt from "react-tilt";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { MxmButton } from "../../../shared/styled/buttons";

const Beranda = () => {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    document.title = "Beranda - MAXIMA 2021";
    // onOpen();
    location.state &&
      Swal.fire({
        title: location?.state?.message,
        icon: "error",
        confirmButtonText: "Coba lagi",
      });
  }, []);

  return (
    <Center>
      {/*       
      <SimpleGrid columns={2} spacing={10}>
        <Center>
          <Container>
            <Heading>Selamat datang di MAXIMA 2021!</Heading>
            <Text mt="1.5rem">
              Kegiatan tahunan terbesar di UMN yang memperkenalkan
              organisasi-organisasi UMN kepada mahasiswa baru.
            </Text>
          </Container>
        </Center>
        <Container>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <iframe
              width="486"
              height="262"
              src="https://www.youtube.com/embed/q94Pl_g-p2g"
            ></iframe>
          </Tilt>
        </Container>
        <Container>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <Box
              bg="gray"
              width="470"
              height="262"
              src="https://www.youtube.com/embed/q94Pl_g-p2g"
            ></Box>
          </Tilt>
        </Container>
        <Container>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <Box
              bg="gray"
              width="470"
              height="262"
              src="https://www.youtube.com/embed/q94Pl_g-p2g"
            >
              <Center height="100%">
                <div className="Tilt-inner">
                  <Center>
                    <Heading color="white">MAXIMA 2021</Heading>
                  </Center>
                </div>
              </Center>
            </Box>
          </Tilt>
        </Container>
      </SimpleGrid> */}

      {/* INI MODAL BUAT NGEBATALIN STATE */}
      <MxmButton onClick={onOpen}>Batal STATE</MxmButton>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
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
                <Image src="https://uscope.umn.ac.id/assets/images/photos/activities/obscura/logo.png" />
              </div>
              <h2>Obscura</h2>
              <h4>Kamis, 29 Juli 2021</h4>
              <h4>Apakah Anda yakin ingin membatalkan STATE ini?</h4>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <MxmButton
              onClick={onClose}
              colorScheme="white-navy"
              variant="mobile"
            >
              Kembali
            </MxmButton>
            <MxmButton colorScheme="red-yellow" variant="mobile">
              Batalkan
            </MxmButton>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* MODAL UNTUK JOIN ZOOM */}
      {/* <MxmButton onClick={onOpen}>Join Zoom</MxmButton>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
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
                <Image src="https://uscope.umn.ac.id/assets/images/photos/activities/obscura/logo.png" />
              </div>
              <h2 style={{ marginBottom: "1rem" }}>Isi Kode Presensi</h2>
              <HStack>
                <PinInput type="alphanumeric">
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <MxmButton
              onClick={onClose}
              colorScheme="white-navy"
              variant="mobile"
            >
              Kembali
            </MxmButton>
            <MxmButton colorScheme="navy-cyan" variant="mobile">
              Verifikasi
            </MxmButton>
          </ModalFooter>
        </ModalContent>
      </Modal> */}

      {/* MODAL SAAT PILIH STATE */}
      {/* <MxmButton onClick={onOpen}>Pilih STATE</MxmButton>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
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
              onClick={onClose}
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
      </Modal> */}
    </Center>
  );
};

export default Beranda;
