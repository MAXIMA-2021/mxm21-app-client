import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./DashboardNavigation.scss";
import { Flex, Spacer, Heading, Text, Box } from "@chakra-ui/react";
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
  const [sidebarShow, setSidebarShow] = useState(true);
  const [isSmallerThan450px] = useMediaQuery("(max-width: 28.125em)");
  const [isLargerThan3000px] = useMediaQuery("(min-width: 3000px)");

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
    <div style={{ backgroundColor: "#f4f4f4" }}>
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
                <AccountCircleIcon />
              </div>
              <h4>Bukan Tiara Andini</h4>
            </Flex>

            <button className="navbar-logout-btn">
              <p>Keluar</p>
              <ExitToAppIcon />
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
          <h2>Dashboard Maxima 2021</h2>
          {isSmallerThan450px ? <Spacer /> : ""}
          <CloseRoundedIcon onClick={closeSidebar} />
        </Flex>
        <Flex className="sidebar-menu" direction="column">
          <div className="sidebar-avatar">
            <div className="sidebar-avatar_image">
              <AccountCircleIcon />
            </div>
            <h4>Bukan Tiara Andini</h4>
            <h6>Panitia</h6>
          </div>
          <Flex className="sidebar-nav_header">
            <h3>MENU NAVIGASI</h3>
          </Flex>
          <Flex className="main-navigation" direction="column">
            <ul>
              <NavLink to="/dashboard" activeClassName="sidebar-nav_active">
                <AssessmentIcon />
                Dashboard
              </NavLink>

              <NavLink
                to="/daftarMahasiswaBaru"
                activeClassName="sidebar-nav_active"
              >
                <ContactsIcon />
                Daftar Mahasiswa Baru
              </NavLink>
              <li onClick={sidebarDropdownActive} className={`dropdown`}>
                <Flex className="dropdown-header">
                  <FlightIcon onClick={sidebarDropdownActiveSvg} />
                  STATE
                  <ArrowBackIosRoundedIcon onClick={sidebarDropdownActiveSvg} />
                </Flex>
                <ul className="dropdown-items">
                  <li>
                    <NavLink
                      to="/admin/tambah-state"
                      activeClassName="dropdown-item_active"
                    >
                      <RadioButtonUncheckedOutlinedIcon />
                      Tambah STATE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin/daftar-state"
                      activeClassName="dropdown-item_active"
                    >
                      <RadioButtonUncheckedOutlinedIcon />
                      Daftar STATE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin/daftar-organisator"
                      activeClassName="dropdown-item_active"
                    >
                      <RadioButtonUncheckedOutlinedIcon />
                      Daftar Akun Organisator
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin/tambah-pic"
                      activeClassName="dropdown-item_active"
                    >
                      <RadioButtonUncheckedOutlinedIcon />
                      Tambah PIC Organisator
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin/daftar-pic"
                      activeClassName="dropdown-item_active"
                    >
                      <RadioButtonUncheckedOutlinedIcon />
                      Daftar PIC Organisator
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li onClick={sidebarDropdownActive} className={`dropdown`}>
                <Flex className="dropdown-header">
                  <HomeRoundedIcon onClick={sidebarDropdownActiveSvg} />
                  HoME
                  <ArrowBackIosRoundedIcon onClick={sidebarDropdownActiveSvg} />
                </Flex>
                <ul className="dropdown-items">
                  <li>
                    <NavLink
                      to="/tambahDataHome"
                      activeClassName="dropdown-item_active"
                    >
                      <RadioButtonUncheckedOutlinedIcon />
                      Tambah Data HoME
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/tambahMediaHome"
                      activeClassName="dropdown-item_active"
                    >
                      <RadioButtonUncheckedOutlinedIcon />
                      Tambah Media HoME
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/daftarOrganisatorHome"
                      activeClassName="dropdown-item_active"
                    >
                      <RadioButtonUncheckedOutlinedIcon />
                      Daftar Organisasi HoME
                    </NavLink>
                  </li>
                </ul>
              </li>
              <NavLink to="/shortener" activeClassName="sidebar-nav_active">
                <LinkIcon />
                Shortener
              </NavLink>
              <NavLink to="/tambahAkun" activeClassName="sidebar-nav_active">
                <PersonAddIcon />
                Tambah Akun
              </NavLink>
            </ul>
          </Flex>
        </Flex>
      </aside>
      <Flex
        // backgroundColor="red"
        alignItems="center"
        justifyContent="center"
        // marginTop={{
        //   base: "30vh",
        //   sm: "20vh",
        //   md: "20vh",
        //   lg: "-3vh",
        //   xl: "-3vh",
        // }}
        // marginBottom={{
        //   base: "30vh",
        //   sm: "20vh",
        //   md: "20vh",
        //   lg: "0vh",
        //   xl: "0vh",
        // }}
        paddingRight={0}
        paddingLeft={
          isLargerThan3000px
            ? sidebarShow
              ? "40rem"
              : "0px"
            : isSmallerThan450px
            ? sidebarShow
              ? "0px"
              : "0px"
            : sidebarShow
            ? "18rem"
            : "0px"
        }
      >
        <AdminRouters show={sidebarShow} />
      </Flex>
    </div>
  );
};

export default DashboardNavigation;
