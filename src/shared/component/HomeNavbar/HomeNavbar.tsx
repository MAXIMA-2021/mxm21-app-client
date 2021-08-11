import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./HomeNavbar.scss";

import { MxmLogo } from "../../../assets";
import { Image, Grid, Skeleton } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import jwtDecode from "jwt-decode";
import { GoogleLogoutBtn } from "../GoogleLogoutBtn";
import { Palette } from "../../../types/enums";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const navbarVariants = {
  exit: { y: "-50%", opacity: 0, transition: { delay: 0.2, ...transition } },
  rest: { y: "-50%", opacity: 0, transition: { delay: 0.2, ...transition } },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

const buttonVariants = {
  rest: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
  exit: { x: -100, opacity: 1, transition: { delay: 0.2, ...transition } },
};

const HomeNavbar = () => {
  const [isSmallerThan700px] = useMediaQuery("(max-width: 43.75em)");
  const [navbarSticks, setNavbarSticks] = useState(false);
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  let isMahasiswa = false;
  let isLoggedIn = false;

  const token: string | null = window.sessionStorage.getItem("token");
  let decoded: any = null;

  try {
    token !== null && (decoded = jwtDecode(token));
  } catch (error) {
    window.sessionStorage.clear();
    Swal.fire({
      icon: "error",
      title: "Token Invalid",
      confirmButtonText: "Kembali",
    });
  } finally {
    if (decoded !== null) {
      isLoggedIn = true;
      decoded.nim &&
        !decoded.division &&
        !decoded.stateID &&
        (isMahasiswa = true);
      console.log("rerendered");
    }
  }

  const navbarAnimation = (event: any) => {
    if (window.scrollY > 0) {
      setNavbarSticks(true);
    } else {
      setNavbarSticks(false);
    }
  };

  window.addEventListener("scroll", (event) => navbarAnimation(event));

  const mobileMenuShown = (event: any) => {
    if (mobileMenuShow === false) {
      setMobileMenuShow(true);
    } else {
      setMobileMenuShow(false);
    }
  };

  return (
    <>
      <motion.nav
        className={`nav-container ${navbarSticks ? "nav-sticky" : ""} ${
          mobileMenuShow ? "navbar-mobile" : ""
        }`}
        variants={navbarVariants}
        initial="rest"
        animate="enter"
        exit="exit"
      >
        <header>
          <div className="navbar-container">
            <ul className="navigation-list">
              <li className="navigation-btn-homepage-logo">
                <NavLink to="/" className="navigation-btn-homepage-mxm-logo">
                  <Skeleton
                    startColor={Palette.Cyan}
                    endColor={Palette.Navy}
                    isLoaded={!imageLoading}
                    borderRadius="50%"
                  >
                    <Image
                      src={MxmLogo}
                      alt="Logo MAXIMA 2021"
                      onLoad={() => setImageLoading(false)}
                      boxSize={isSmallerThan700px ? "30px" : "44px"}
                    />
                  </Skeleton>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/home"
                  className="btn-main-nav btn-styling-main-nav"
                >
                  HoME
                </NavLink>
                {isMahasiswa && (
                  <NavLink
                    to="/state"
                    className="btn-main-nav btn-styling-main-nav"
                  >
                    STATE
                  </NavLink>
                )}
                <NavLink
                  to="/faq"
                  className="btn-main-nav btn-styling-main-nav"
                >
                  FAQ
                </NavLink>
                <NavLink
                  to="/about-us"
                  className="btn-main-nav btn-styling-main-nav"
                >
                  About Us
                </NavLink>
              </li>
              <motion.li
                className="btn-main-nav-auth-container"
                variants={buttonVariants}
                initial="rest"
                animate="enter"
                exit="exit"
              >
                {isLoggedIn ? (
                  // <NavLink
                  //   to="/auth/keluar"
                  //   className="btn-main-nav-auth btn-styling-main-nav-auth-gradient"
                  // >
                  //   Keluar
                  // </NavLink>
                  <GoogleLogoutBtn />
                ) : (
                  <>
                    {/* <NavLink
                      to="/auth/daftar"
                      className="btn-main-nav-auth btn-styling-main-nav-auth-ghost"
                    >
                      Daftar
                    </NavLink> */}
                    <NavLink
                      to="/auth/google"
                      className="btn-main-nav-auth btn-styling-main-nav-auth-gradient"
                    >
                      Masuk
                    </NavLink>
                  </>
                )}
              </motion.li>

              {isSmallerThan700px ? (
                <li className="mobile-nav-menu-icon">
                  <button
                    className={`menu-action-btn ${
                      isSmallerThan700px ? (mobileMenuShow ? "opened" : "") : ""
                    }`}
                    onClick={mobileMenuShown}
                    aria-label="Main Menu"
                  >
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 100 100"
                      aria-expanded={mobileMenuShow ? "true" : "false"}
                    >
                      <path
                        className="line-menu line1"
                        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                        strokeLinecap="round"
                        style={{ pointerEvents: "none" }}
                      />
                      <path
                        className="line-menu line2"
                        d="M 20,50 H 80"
                        strokeLinecap="round"
                        style={{ pointerEvents: "none" }}
                      />
                      <path
                        className="line-menu line3"
                        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                        strokeLinecap="round"
                        style={{ pointerEvents: "none" }}
                      />
                    </svg>
                  </button>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </header>
      </motion.nav>
      <div
        className={`mobile-nav-menu-container ${mobileMenuShow ? "open" : ""} ${
          navbarSticks ? "menu-sticky" : ""
        }`}
      >
        <Grid
          templateRows={
            isMahasiswa ? "repeat(4,1fr) 1.3fr" : "repeat(3, 1fr) 1.3fr"
          }
          className="mobile-menu-grid"
        >
          <NavLink to="/" className="btn-main-nav btn-styling-main-nav">
            HoME
          </NavLink>
          {isMahasiswa && (
            <NavLink to="/state" className="btn-main-nav btn-styling-main-nav">
              STATE
            </NavLink>
          )}
          <NavLink to="/FAQ" className="btn-main-nav btn-styling-main-nav">
            FAQ
          </NavLink>
          <NavLink to="/AboutUs" className="btn-main-nav btn-styling-main-nav">
            About Us
          </NavLink>
          <div className="btn-main-nav-auth-container-mobile">
            {isLoggedIn ? (
              // <NavLink
              //   to="/auth/keluar"
              //   className="btn-main-nav-auth btn-styling-main-nav-auth-gradient"
              // >
              //   Keluar
              // </NavLink>
              <GoogleLogoutBtn />
            ) : (
              <>
                {/* <NavLink
                  to="/auth/daftar"
                  className="btn-main-nav-auth btn-styling-main-nav-auth-ghost"
                >
                  Daftar
                </NavLink> */}
                <NavLink
                  to="/auth/google"
                  className="btn-main-nav-auth btn-styling-main-nav-auth-gradient"
                >
                  Masuk
                </NavLink>
              </>
            )}
          </div>
        </Grid>
      </div>
    </>
  );
};

export default HomeNavbar;
