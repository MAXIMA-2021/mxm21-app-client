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

  const mobileMenuShown = () => {
    setMobileMenuShow(true);
    if (mobileMenuShow === true) {
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
                <NavLink
                  to="/home"
                  className="btn-main-nav btn-styling-main-nav"
                >
                  HoME
                </NavLink>
                <NavLink
                  to="/state"
                  className="btn-main-nav btn-styling-main-nav"
                >
                  STATE
                </NavLink>
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
                  <button onClick={mobileMenuShown}>
                    <MenuIcon />
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
