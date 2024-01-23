import logo from "../../img/logo.png";
import "./Nav.css";

export const Nav = () => {
  return (
    <nav className="nav">
      <a href="#montres" className="btnNav">
        Montres
      </a>
      <img src={logo} className="logo" alt="logo" />
      <a href="#infos" className="btnNav">
        Informations
      </a>
    </nav>
  );
};
