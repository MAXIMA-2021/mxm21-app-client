import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./HomeNavbar.scss";

import { MxmLogo } from "../../../assets";
import { Image, Grid } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";

import MenuIcon from "@material-ui/icons/Menu";

const HomeNavbar = () => {
  const [isSmallerThan700px] = useMediaQuery("(max-width: 43.75em)");
  const [navbarSticks, setNavbarSticks] = useState(false);
  const [mobileMenuShow, setMobileMenuShow] = useState(false);

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
      <nav
        className={`nav-container ${navbarSticks ? "nav-sticky" : ""} ${
          mobileMenuShow ? "navbar-mobile" : ""
        }`}
      >
        <header>
          <div className="navbar-container">
            <ul className="navigation-list">
              <li className="navigation-btn-homepage-logo">
                <NavLink to="/" className="navigation-btn-homepage-mxm-logo">
                  <Image
                    src={MxmLogo}
                    alt="Logo MAXIMA 2021"
                    boxSize={isSmallerThan700px ? "30px" : "44px"}
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="btn-main-nav btn-styling-main-nav">
                  HoME
                </NavLink>
                <NavLink to="/" className="btn-main-nav btn-styling-main-nav">
                  STATE
                </NavLink>
                <NavLink
                  to="/FAQ"
                  className="btn-main-nav btn-styling-main-nav"
                >
                  FAQ
                </NavLink>
                <NavLink
                  to="/AboutUs"
                  className="btn-main-nav btn-styling-main-nav"
                >
                  About Us
                </NavLink>
              </li>
              <li className="btn-main-nav-auth-container">
                <NavLink
                  to="/daftar"
                  className="btn-main-nav-auth btn-styling-main-nav-auth-ghost"
                >
                  Daftar
                </NavLink>
                <NavLink
                  to="/masuk"
                  className="btn-main-nav-auth btn-styling-main-nav-auth-gradient"
                >
                  Masuk
                </NavLink>
              </li>
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
                        className="line line1"
                        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                        stroke-linecap="round"
                        style={{ pointerEvents: "none" }}
                      />
                      <path
                        className="line line2"
                        d="M 20,50 H 80"
                        stroke-linecap="round"
                        style={{ pointerEvents: "none" }}
                      />
                      <path
                        className="line line3"
                        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                        stroke-linecap="round"
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
      </nav>
      <div
        className={`mobile-nav-menu-container ${mobileMenuShow ? "open" : ""} ${
          navbarSticks ? "menu-sticky" : ""
        }`}
      >
        <Grid templateRows="repeat(4, 1fr) 1.3fr" className="mobile-menu-grid">
          <NavLink to="/" className="btn-main-nav btn-styling-main-nav">
            HoME
          </NavLink>
          <NavLink to="/" className="btn-main-nav btn-styling-main-nav">
            STATE
          </NavLink>
          <NavLink to="/FAQ" className="btn-main-nav btn-styling-main-nav">
            FAQ
          </NavLink>
          <NavLink to="/AboutUs" className="btn-main-nav btn-styling-main-nav">
            About Us
          </NavLink>
          <div className="btn-main-nav-auth-container-mobile">
            <NavLink
              to="/daftar"
              className="btn-main-nav-auth btn-styling-main-nav-auth-ghost"
            >
              Daftar
            </NavLink>
            <NavLink
              to="/masuk"
              className="btn-main-nav-auth btn-styling-main-nav-auth-gradient"
            >
              Masuk
            </NavLink>
          </div>
        </Grid>
      </div>
    </>
  );
};

export default HomeNavbar;
