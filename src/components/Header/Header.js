import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} className="Logo" alt="logo"></img>
      <nav className="Nav">
        <a href="/">Home</a>
        <a href="/">About Me</a>
        <a href="/">Projects</a>
        <a href="/">Contact Me</a>
      </nav>
    </div>
  );
};

export default Header;
