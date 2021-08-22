import React, { useEffect } from "react";
import "./Beranda.scss";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import {
  timeline1,
  timeline2,
  timeline3,
  faqIllustration,
  dermaExpress,
  moonChicken,
  jacquelleBeauty,
} from "../../../assets/beranda";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { SplitText } from "./SplitText";
import { useState } from "react";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const slideVariant = {
  rest: { x: -300, opacity: 0 },
  enter: { x: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
  exit: { x: -300, opacity: 0, transition: { delay: 1, ...transition } },
};

const buttonSlideVariant = {
  rest: { x: 300, opacity: 0 },
  enter: { x: 0, opacity: 1, transition: { delay: 2, duration: 0.2 } },
  exit: { x: 300, opacity: 0, transition: { delay: 1, duration: 0.2 } },
};

const HeroContainer = () => {
  const [visible, setVisible] = useState(false);

  setTimeout(() => {
    setVisible(true);
  }, 1200);

  return (
    <Flex className="hero-container">
      <Flex className="hero-side-container">
        <Flex flexDir="column" className="hero-side-container-item">
          <motion.div
            className="hero-side-container-text"
            variants={slideVariant}
          >
            <h1>
              Selamat <br /> datang di <br />
              <strong>MAXIMA 2021</strong>
            </h1>
            <h3>
              <SplitText
                initial={{
                  y: "100%",
                  transition: { delay: 0.6, ...transition },
                }}
                animate={visible ? "visible" : { opacity: 0 }}
                variants={{
                  visible: (i: number) => ({
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: i * 0.1,
                    },
                  }),
                }}
                exit={{
                  y: "100%",
                  transition: { delay: 0.2, ...transition },
                }}
              >
                Kegiatan tahunan terbesar di UMN yang memperkenalkan
                organisasi-organisasi UMN kepada mahasiswa baru.
              </SplitText>
            </h3>
          </motion.div>
          <motion.button
            className="btn-linear-gradient"
            variants={buttonSlideVariant}
          >
            Coming Soon
          </motion.button>
        </Flex>
      </Flex>
      <Flex alignItems="center" className="hero-container-vid">
        <iframe
          title="Teaser MAXIMA 2021"
          src="https://www.youtube.com/embed/JGz46gSAlEo"
        ></iframe>
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

  const [onScroll, setOnScroll] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.12], [0, 1]);

  useEffect(() => {
    yRange.onChange((viewPort) => {
      if (viewPort >= 1) setOnScroll(true);
    });
  }, [yRange]);

  return (
    <motion.div
      exit={{ y: -200, opacity: 0, transition: { delay: 0.8, ...transition } }}
    >
      <Flex className="timeline-outer-container">
        <Flex className="timeline-inner-container">
          <h1>LINIMASA MAXIMA 2021</h1>
          <h3>
            Agar kamu tidak ketinggalan, catat tanggal-tanggal di bawah ini ya!
          </h3>
          <Flex className="timeline-content-container">
            <Flex className="timeline-content-item">
              {timelineMaxima.map((item, index) => (
                <motion.div
                  initial={{ y: 200, opacity: 0 }}
                  animate={
                    onScroll && {
                      y: 0,
                      opacity: 1,
                      transition: { delay: index * 0.3, ...transition },
                    }
                  }
                  exit={{
                    y: 200,
                    opacity: 0,
                    transition: { delay: index * 0.2, ...transition },
                  }}
                >
                  <Flex
                    className="card-timeline"
                    id={`timeline-card-${index}`}
                    key={index}
                    overflow="hidden"
                  >
                    <motion.img
                      src={item.image}
                      alt=""
                      whileHover={{
                        scale: 1.05,
                        transition: { ...transition },
                      }}
                    />
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
                </motion.div>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  );
};

const FaqSection = () => {
  const [isSmallerThan948px] = useMediaQuery("(max-width: 948px)");

  return (
    <motion.div
      exit={{ opacity: 0, transition: { delay: 0.8, ...transition } }}
    >
      <Flex className="faq-outer-container">
        <Flex className="faq-inner-container">
          <Flex className="faq-illustration">
            <motion.div
              className="faq-illustration-item"
              exit={
                isSmallerThan948px
                  ? { y: "50%", transition: { delay: 0.4, ...transition } }
                  : { x: "50%", transition: { delay: 0.4, ...transition } }
              }
            >
              <img
                src={faqIllustration}
                alt="placeholder ilustrasi"
                width={"85%"}
              />
            </motion.div>
          </Flex>
          <Flex className="faq-side-container">
            <motion.div
              exit={{
                x: 500,
                opacity: 0,
                transition: { delay: 0.2, ...transition },
              }}
            >
              <Flex className="faq-side-item">
                <h1>Masih bingung dengan teknis MAXIMA 2021?</h1>
                <h3>
                  Silakan kunjungi halaman FAQ atau klik tombol di bawah ini ya!
                </h3>
                <button>
                  <Link to="/faq">Kunjungi FAQ</Link>
                </button>
              </Flex>
            </motion.div>
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  );
};

const SponsorSection = () => {
  return (
    <motion.div
      exit={{
        y: "100%",
        opacity: 0,
        transition: { delay: 0.2, ...transition },
      }}
    >
    <Flex className="spsr-outer-container">
      <div className="spsr-inner-container">
        <div className="spsr-header">
          <h2>Disponsori oleh</h2>
        </div>
        <Flex className="spsr-logo-container">
          <div className="spsr-logo">
            <img src={dermaExpress} />
          </div>
          <div className="spsr-logo">
            <img src={moonChicken} />
          </div>
          <div className="spsr-logo">
            <img src={jacquelleBeauty} />
          </div>
        </Flex>
      </div>
    </Flex>
    </motion.div>

  );
};

const contaienrVariants = {
  rest: { y: 500, opacity: 0 },
  enter: { y: 0, opacity: 1, transition: { delay: 0.6, ...transition } },
};

const Beranda = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = "Beranda - MAXIMA 2021";
    location.state && Swal.fire(location?.state);
  }, []);

  return (
    <motion.div initial="rest" animate="enter" exit="exit">
      <div className="homepage">
        <HeroContainer />
        <motion.div variants={contaienrVariants}>
          <MaximaTimeline />
          <FaqSection />
          <SponsorSection />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Beranda;
