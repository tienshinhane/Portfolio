import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import Hamburger from "hamburger-react";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="container-fluid">
      <div className="Header">
        <Link
          smooth={true}
          activeClass="active"
          spy={true}
          to="home"
          offset={-70}
          href="#"
        >
          <img src={logo} className="Logo" alt="logo"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Hamburger color="whitesmoke" toggled={isOpen} toggle={setOpen} />
        </button>
        <nav className="collapse navbar-collapse" id="navbarSupportedContent">
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
    </div>
  );
};

export default Header;
