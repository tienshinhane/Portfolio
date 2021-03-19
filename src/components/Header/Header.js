import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} className="Logo" alt="logo"></img>
      <nav className="Nav">
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
