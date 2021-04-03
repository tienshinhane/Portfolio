import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import Hamburger from "hamburger-react";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="Header">
      <img src={logo} className="Logo" alt="logo"></img>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <Hamburger color="whitesmoke" toggled={isOpen} toggle={setOpen} />
      </button>
      <nav className="Nav collapse navbar-collapse" id="navbarNav">
        <Link
          smooth={true}
          activeClass="active"
          spy={true}
          to="home"
          offset={-70}
          href="#"
        >
          Home
        </Link>
        <Link
          smooth={true}
          activeClass="active"
          spy={true}
          to="about"
          offset={-70}
          href="#"
        >
          About Me
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          to="projects"
          offset={-70}
          href="#"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          to="contact"
          offset={-70}
          href="#"
        >
          Contact Me
        </Link>
      </nav>
    </div>
  );
};

export default Header;
