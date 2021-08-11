import React, { useEffect, useState } from "react";
import "./Beranda.scss";
import {
  Heading,
  Center,
  SimpleGrid,
  Box,
  Text,
  Container,
  Flex,
} from "@chakra-ui/react";
import Tilt from "react-tilt";
import {
  timeline1,
  timeline2,
  timeline3,
  faqIllustration,
} from "../../../assets/beranda";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const HeroContainer = () => {
  return (
    <Flex className="hero-container">
      <Flex className="hero-side-container">
        <Flex flexDir="column" className="hero-side-container-item">
          <h1>
            Selamat <br /> datang di <br />
            <strong>MAXIMA 2021</strong>
          </h1>
          <h3>
            Kegiatan tahunan terbesar di UMN yang memperkenalkan
            organisasi-organisasi UMN kepada mahasiswa baru.
          </h3>
          <button className="btn-linear-gradient">Daftarkan dirimu!</button>
        </Flex>
      </Flex>
      <Flex alignItems="center" className="hero-container-vid">
        <Tilt className="Tilt " options={{ max: 25 }}>
          <iframe src="https://www.youtube.com/embed/JGz46gSAlEo"></iframe>
        </Tilt>
      </Flex>
    </Flex>
  );
};

const MaximaTimeline = () => {
  const timelineMaxima = [
    {
      header: "HoME",
      image: timeline1,
      subheader: "Hall of Maxima Exhibition",
      startDate: "23 Agustus",
      endDate: "27 Agustus",
    },
    {
      header: "STATE",
      image: timeline2,
      subheader: "Student Activities Unit Explore",
      startDate: "6 September",
      endDate: "10 September",
    },
    {
      header: "Malam Puncak",
      image: timeline3,
      subheader: "STARRING: Nama guest star",
      startDate: "18 September",
      endDate: "",
    },
  ];

  return (
    <Flex className="timeline-outer-container">
      <Flex className="timeline-inner-container">
        <h1>LINIMASA MAXIMA 2021</h1>
        <h3>
          Agar kamu tidak ketinggalan, catat tanggal-tanggal di bawah ini ya!
        </h3>
        <Flex className="timeline-content-container">
          <Flex className="timeline-content-item">
            {timelineMaxima.map((item, index) => (
              <Flex
                className="card-timeline"
                id={`timeline-card-${index}`}
                key={index}
              >
                <img src={item.image} alt="" />
                <Flex className="blur-background-container">
                  <h4>{item.header}</h4>
                  <h6>{item.subheader}</h6>
                  <h6>
                    {item.endDate !== "" ? (
                      <>
                        <b>{item.startDate}</b> <em>s/d</em>{" "}
                        <b>{item.endDate}</b>
                      </>
                    ) : (
                      <b>{item.startDate}</b>
                    )}
                  </h6>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

const FaqSection = () => {
  return (
    <Flex className="faq-outer-container">
      <Flex className="faq-inner-container">
        <Flex className="faq-illustration">
          <div className="faq-illustration-item">
            <img
              src={faqIllustration}
              alt="placeholder ilustrasi"
              width={"85%"}
              // height={"366px"}
            />
          </div>
        </Flex>
        <Flex className="faq-side-container">
          <Flex className="faq-side-item">
            <h1>Masih bingung dengan teknis MAXIMA 2021?</h1>
            <h3>
              Silakan kunjungi halaman FAQ atau klik tombol di bawah ini ya!
            </h3>
            <button>Kunjungi FAQ</button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

const Beranda = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = "Beranda - MAXIMA 2021";
    location.state && Swal.fire(location?.state);
  }, []);

  return (
    <>
      <div className="homepage">
        <HeroContainer />
        <MaximaTimeline />
        <FaqSection />
      </div>
    </>
    // <Center>
    //   <SimpleGrid columns={2} spacing={10}>
    //     <Center>
    //       <Container>
    //         <Heading>Selamat datang di MAXIMA 2021!</Heading>
    //         <Text mt="1.5rem">
    //           Kegiatan tahunan terbesar di UMN yang memperkenalkan
    //           organisasi-organisasi UMN kepada mahasiswa baru.
    //         </Text>
    //       </Container>
    //     </Center>
    //     <Container>
    //       <Tilt className="Tilt" options={{ max: 25 }}>
    // <iframe
    //   width="486"
    //   height="262"
    //   src="https://www.youtube.com/embed/JGz46gSAlEo"
    // ></iframe>
    //       </Tilt>
    //     </Container>
    //     <Container>
    //       <Tilt className="Tilt" options={{ max: 25 }}>
    //         <Box bg="gray" width="470" height="262"></Box>
    //       </Tilt>
    //     </Container>
    //     <Container>
    //       <Tilt className="Tilt" options={{ max: 25 }}>
    //         <Box bg="gray" width="470" height="262">
    //           <Center height="100%">
    //             <div className="Tilt-inner">
    //               <Center>
    //                 <Heading color="white">MAXIMA 2021</Heading>
    //               </Center>
    //             </div>
    //           </Center>
    //         </Box>
    //       </Tilt>
    //     </Container>
    //   </SimpleGrid>
    // </Center>
  );
};

export default Beranda;
