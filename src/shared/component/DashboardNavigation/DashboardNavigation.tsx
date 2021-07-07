import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./DashboardNavigation.scss";
import { Flex, Spacer, Heading, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AdminRouters } from "../../../routers";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ContactsIcon from "@material-ui/icons/Contacts";
import FlightIcon from "@material-ui/icons/Flight";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import LinkIcon from "@material-ui/icons/Link";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import RadioButtonUncheckedOutlinedIcon from "@material-ui/icons/RadioButtonUncheckedOutlined";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";

const DashboardNavigation: React.FC = () => {
  const responsiveTitle = {
    base: "1em",
    sm: "0.5em",
    md: "0.6em",
    lg: "1em",
    "2xl": "1.4em",
  };

  const responsiveName = {
    base: "1em",
    sm: "0.5em",
    md: "0.6em",
    lg: "0.9em",
    "2xl": "1.2em",
  };

  const responsiveLabel = {
    base: "0.8em",
    sm: "0.4em",
    md: "0.5em",
    lg: "0.85em",
    "2xl": "1em",
  };

  const [sidebarShow, setSidebarShow] = useState(true);
  const [isSmallerThan450px] = useMediaQuery("(max-width: 28.125em)");

  const sidebarShown = () => {
    setSidebarShow(false);
    if (sidebarShow === false) {
      setSidebarShow(true);
    }
  };

  const closeSidebar = () => {
    setSidebarShow(false);
  };

  const sidebarDropdownActive = (event: any) => {
    try {
      if (
        event.target.parentNode
          .querySelector(".dropdown-items")
          .classList.contains("dropdown-items_open")
      ) {
        event.target.parentNode
          .querySelector(".dropdown-items")
          .classList.remove("dropdown-items_open");

        event.target.parentNode
          .querySelector(".dropdown-header")
          .classList.remove("sidebar-nav_active");
      } else {
        event.target.parentNode
          .querySelector(".dropdown-items")
          .classList.add("dropdown-items_open");

        event.target.parentNode
          .querySelector(".dropdown-header")
          .classList.add("sidebar-nav_active");
        // console.log(event.target);
      }
    } catch {
      // DELETE THIS
      console.log(`target null`);
    }
  };

  const sidebarDropdownActiveSvg = (event: any) => {
    try {
      if (event.target.localName === "svg") {
        if (
          event.target.parentNode.parentNode
            .querySelector(".dropdown-items")
            .classList.contains("dropdown-items_open")
        ) {
          event.target.parentNode.parentNode
            .querySelector(".dropdown-items")
            .classList.remove("dropdown-items_open");

          event.target.parentNode.parentNode
            .querySelector(".dropdown-header")
            .classList.remove("sidebar-nav_active");
        } else {
          event.target.parentNode.parentNode
            .querySelector(".dropdown-items")
            .classList.add("dropdown-items_open");

          event.target.parentNode.parentNode
            .querySelector(".dropdown-header")
            .classList.add("sidebar-nav_active");
          // console.log(event.target);
        }
      } else if (event.target.localName === "path") {
        if (
          event.target.parentNode.parentNode.parentNode
            .querySelector(".dropdown-items")
            .classList.contains("dropdown-items_open")
        ) {
          event.target.parentNode.parentNode.parentNode
            .querySelector(".dropdown-items")
            .classList.remove("dropdown-items_open");

          event.target.parentNode.parentNode.parentNode
            .querySelector(".dropdown-header")
            .classList.remove("sidebar-nav_active");
        } else {
          event.target.parentNode.parentNode.parentNode
            .querySelector(".dropdown-items")
            .classList.add("dropdown-items_open");

          event.target.parentNode.parentNode.parentNode
            .querySelector(".dropdown-header")
            .classList.add("sidebar-nav_active");
          // console.log(event.target);
        }
      }
    } catch {
      // DELETE THIS
      console.log(`target null`);
    }
  };

  return (
    <>
      <header
        className={`navbar ${
          isSmallerThan450px ? "close" : sidebarShow ? "open" : "close"
        }`}
      >
        <Flex align="center" className="navbar-flex-container">
          <button onClick={sidebarShown}>
            <MenuIcon className="navbar-menu-icon" />
          </button>

          <Flex className="navbar-menu">
            <Flex align="center" className="navbar-avatar">
              <div className="navbar-avatar-image">
                <AccountCircleIcon style={{ fontSize: 25 }} />
              </div>
              <Text
                fontSize={responsiveName}
                fontFamily="Rubik"
                fontWeight="500"
                ml={2}
              >
                Bukan Tiara Andini
              </Text>
            </Flex>

            <button className="navbar-logout-btn">
              <Text fontSize={responsiveName}>Keluar</Text>
              <ExitToAppIcon style={{ fontSize: 18 }} />
            </button>
          </Flex>
        </Flex>
      </header>
      <aside
        className={`sidebar-container ${
          isSmallerThan450px
            ? sidebarShow
              ? "open"
              : "close"
            : sidebarShow
            ? "open"
            : "close"
        }`}
      >
        <Flex className="sidebar-header" align="center" justify="center">
          <Text fontSize={responsiveTitle} fontFamily="Rubik" fontWeight="500">
            Dashboard Maxima 2021
          </Text>
          {isSmallerThan450px ? <Spacer /> : ""}
          <CloseRoundedIcon onClick={closeSidebar} />
        </Flex>
        <Flex className="sidebar-menu" direction="column">
          <div className="sidebar-avatar">
            <div className="sidebar-avatar_image">
              <AccountCircleIcon
                style={{
                  fontSize: 40,
                }}
              />
            </div>
            <Text fontSize={responsiveName} fontFamily="Rubik" fontWeight="500">
              Bukan Tiara Andini
            </Text>
            <Text fontSize={responsiveLabel}>Panitia</Text>
          </div>
          <Flex className="sidebar-nav_header">
            <Text fontSize={responsiveLabel}>MENU NAVIGASI</Text>
          </Flex>
          <Flex className="main-navigation" direction="column">
            <ul>
              <NavLink to="/dashboard" activeClassName="sidebar-nav_active">
                <AssessmentIcon />
                <Text fontSize={responsiveName}>Dashboard</Text>
              </NavLink>

              <NavLink
                to="/daftarMahasiswaBaru"
                activeClassName="sidebar-nav_active"
              >
                <ContactsIcon />
                <Text fontSize={responsiveName}>Daftar Mahasiswa Baru</Text>
              </NavLink>
              <li onClick={sidebarDropdownActive} className={`dropdown`}>
                <Flex className="dropdown-header">
                  <FlightIcon onClick={sidebarDropdownActiveSvg} />
                  <Text fontSize={responsiveName}>STATE</Text>
                  <ArrowBackIosRoundedIcon onClick={sidebarDropdownActiveSvg} />
                </Flex>
                <ul className="dropdown-items">
                  <li>
                    <NavLink
                      to="/admin/tambah-state"
                      activeClassName="dropdown-item_active"
                    >
                      <RadioButtonUncheckedOutlinedIcon
                        style={{ fontSize: 18 }}
                      />
                      <Text fontSize={responsiveLabel}>Tambah STATE</Text>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin/daftar-state"
                      activeClassName="dropdown-item_active"
                    >
                      <RadioButtonUncheckedOutlinedIcon
                        style={{ fontSize: 18 }}
                      />
                      <Text fontSize={responsiveLabel}>Daftar STATE</Text>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin/daftar-organisator"
                      activeClassName="dropdown-item_active"
                    >
                      <RadioButtonUncheckedOutlinedIcon
                        style={{ fontSize: 18 }}
                      />
                      <Text fontSize={responsiveLabel}>
                        Daftar Akun Organisator
                      </Text>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin/tambah-pic"
                      activeClassName="dropdown-item_active"
                    >
                      <RadioButtonUncheckedOutlinedIcon
                        style={{ fontSize: 18 }}
                      />
                      <Text fontSize={responsiveLabel}>
                        Tambah PIC Organisator
                      </Text>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin/daftar-pic"
                      activeClassName="dropdown-item_active"
                    >
                      <RadioButtonUncheckedOutlinedIcon
                        style={{ fontSize: 18 }}
                      />
                      <Text fontSize={responsiveLabel}>
                        Daftar PIC Organisator
                      </Text>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li onClick={sidebarDropdownActive} className={`dropdown`}>
                <Flex className="dropdown-header">
                  <HomeRoundedIcon onClick={sidebarDropdownActiveSvg} />
                  <Text fontSize={responsiveName}>HoME</Text>
                  <ArrowBackIosRoundedIcon onClick={sidebarDropdownActiveSvg} />
                </Flex>
                <ul className="dropdown-items">
                  <li>
                    <NavLink
                      to="/tambahDataHome"
                      activeClassName="dropdown-item_active"
                    >
                      <RadioButtonUncheckedOutlinedIcon
                        style={{ fontSize: 18 }}
                      />
                      <Text fontSize={responsiveLabel}>Tambah Data HoME</Text>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/tambahMediaHome"
                      activeClassName="dropdown-item_active"
                    >
                      <RadioButtonUncheckedOutlinedIcon
                        style={{ fontSize: 18 }}
                      />
                      <Text fontSize={responsiveLabel}>Tambah Media HoME</Text>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/daftarOrganisatorHome"
                      activeClassName="dropdown-item_active"
                    >
                      <RadioButtonUncheckedOutlinedIcon
                        style={{ fontSize: 18 }}
                      />
                      <Text fontSize={responsiveLabel}>
                        Daftar Organisasi HoME
                      </Text>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <NavLink to="/shortener" activeClassName="sidebar-nav_active">
                <LinkIcon />
                <Text fontSize={responsiveName}>Shortener</Text>
              </NavLink>
              <NavLink to="/tambahAkun" activeClassName="sidebar-nav_active">
                <PersonAddIcon />
                <Text fontSize={responsiveName}>Tambah Akun</Text>
              </NavLink>
            </ul>
          </Flex>
        </Flex>
      </aside>
      <Flex
        backgroundColor="#F4F4F4"
        alignItems="center"
        justifyContent="center"
        marginTop={{
          base: "30vh",
          sm: "20vh",
          md: "20vh",
          lg: "-3vh",
          xl: "-3vh",
        }}
        marginBottom={{
          base: "30vh",
          sm: "20vh",
          md: "20vh",
          lg: "0vh",
          xl: "0vh",
        }}
        paddingRight={0}
        paddingLeft={
          isSmallerThan450px
            ? sidebarShow
              ? "0"
              : "0"
            : sidebarShow
            ? "21vw"
            : "0px"
        }
      >
        <AdminRouters show={sidebarShow} />
      </Flex>
    </>
  );
};

export default DashboardNavigation;
