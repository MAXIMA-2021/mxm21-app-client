import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./DashboardNavigation.scss";
import { Flex, Spacer } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";

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

const DashboardNavigation: React.FC = () => {
  const [sidebarShow, setSidebarShow] = useState(true);
  const [isSmallerThan450px] = useMediaQuery("(max-width: 28.125em)");

  const sidebarShown = () => {
    setSidebarShow(false);
    // console.log({ sidebarShow });
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
        console.log(
          event.target.parentNode.querySelector(".dropdown").classList
        );
      }
    } catch {
      // DELETE THIS
      console.log(`target null`);
    }
  };

  const sidebarDropdownActiveSvg = (event: any) => {
    try {
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
        console.log(
          event.target.parentNode.querySelector(".dropdown").classList
        );
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
                <AccountCircleIcon style={{ fontSize: 32 }} />
              </div>
              <h4>Bukan Tiara Andini</h4>
            </Flex>

            <button className="navbar-logout-btn">
              <p>Keluar</p>
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
          <h2>Dashboard Maxima 2021</h2>
          {isSmallerThan450px ? <Spacer /> : ""}
          <CloseRoundedIcon onClick={closeSidebar} />
        </Flex>
        <Flex className="sidebar-menu" direction="column">
          <div className="sidebar-avatar">
            <div className="sidebar-avatar_image">
              <AccountCircleIcon style={{ fontSize: 50 }} />
            </div>
            <h4>Bukan Tiara Andini</h4>
            <h6>Panitia</h6>
          </div>
          <Flex className="sidebar-nav_header">
            <h3>Menu navigasi</h3>
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
                      <RadioButtonUncheckedOutlinedIcon
                        style={{ fontSize: 18 }}
                      />
                      Tambah STATE
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
                      Daftar STATE
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
                      Daftar Akun Organisator
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
                      Tambah PIC Organisator
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
                      Daftar PIC Organisator
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li onClick={sidebarDropdownActive} className={`dropdown`}>
                <Flex className="dropdown-header">
                  <HomeRoundedIcon />
                  HoME
                  <ArrowBackIosRoundedIcon />
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
                      Tambah Data HoME
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
                      Tambah Media HoME
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
                      Daftar Organisator HoME
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

      {/* <footer className="footer">
        <Flex></Flex>
      </footer> */}
    </>
  );
};

export default DashboardNavigation;
