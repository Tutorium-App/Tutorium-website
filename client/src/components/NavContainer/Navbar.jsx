import React, { useEffect, useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

import { Sidebar } from "react-pro-sidebar";
import Tooltip from "@mui/material/Tooltip";
import "../../container/styles/Nav.css";
import { NavLink } from "react-router-dom";
import { img } from "../constants/img";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const scrollPage = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", scrollPage);

    return () => {
      window.removeEventListener("scroll", scrollPage);
    };
  }, [isScrolled]);

  const scrollToSections = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className={isScrolled ? "scrolled header" : "header"}>
      <div className="logo-container">
        <span className="nav_logo">
          <a href="#">
            <img
              src={img.logo}
              className="logo"
              alt="Tutorium Logo"
              title="Tutorium Logo"
              width={"inherit"}
              height={"inherit"}
              loading="eager"
            />
          </a>
        </span>
      </div>
      <ul className="list-dsk desktop">
        <li>
          <NavLink style={{ color: "white" }} to="/">
            <span onClick={() => scrollToSections("home")}>Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            style={{ color: "white" }}
            onClick={() => scrollToSections("about")}
          >
            <span>About</span>
          </NavLink>
        </li>

        <li>
          {/* ------------services navigation------ */}
          <NavLink
            style={{ color: "white" }}
            onClick={() => scrollToSections("services")}
          >
            <span>Waitlist Features</span>
          </NavLink>
        </li>
        {/* ------------team navigation------ */}
      
        {/* ------------blog navigation---------- */}
      </ul>

      {/* enquire now btn */}
      <div className="contact-btnMain desktop">
        <button>
          {/* Will be link */}
          <a
            href="mailto:app.tutorium@gmail.com"
            onClick={() => setToggled(!toggled)}
            className="icon"
          >
            Contact Us
          </a>
        </button>
      </div>

      {/* -------------------------mobile------------------ */}
      <div className="app-navbar-menu mobile">
        <Tooltip
          title="menu"
          arrow
          style={{ zIndex: "9999999999", color: "white" }}
        >
          <button
            onClick={() => {
              setToggled(!toggled);
            }}
          >
            <HiOutlineMenu className="icon" />
          </button>
        </Tooltip>
        <Sidebar
          onBackdropClick={() => setToggled(false)}
          toggled={toggled}
          breakPoint="all"
          width="60%"
        >
          <ul className="list-mobile">
            <HiX onClick={() => setToggled(!toggled)} className="icon" />
            <li>
              <NavLink
                style={{ color: "white" }}
                to="/"
                onClick={() => scrollToSections("home")}
              >
                <span onClick={() => setToggled(!toggled)}>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink style={{ color: "white" }} to="/about">
                <span>About</span>
              </NavLink>
            </li>

            <li>
              {/* ------------services navigation------ */}
              <NavLink
                style={{ color: "white" }}
                to="/#services"
                onClick={() => scrollToSections("services")}
              >
                <span onClick={() => setToggled(!toggled)} className="icon">
                  Waitlist Features
                </span>
              </NavLink>
            </li>
            <li>
              {/* ------------team navigation------ */}
              {/*     <NavLink
                style={{ color: "white" }}
                to="/#team"
                onClick={() => scrollToSections("team")}
              >
                <span onClick={() => setToggled(!toggled)} className="icon">
                  Terms & Conditions
                </span>
              </NavLink> */}
            </li>
            {/* ------------contact navigation---------- */}
            <li>
              <a
                href="mailto:app.tutorium@gmail.com"
                onClick={() => setToggled(!toggled)}
                className="icon"
              >
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </Sidebar>
      </div>
    </header>
  );
};

export default Navbar;
