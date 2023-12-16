import logo from "./img/logoV1.png";
import "./Nav.css";
export const Nav = () => {
  return (
    <nav className="nav">
      <a href="" className="btnNav">
        Montres
      </a>
      <img src={logo} className="logo" alt="logo" />
      <a href="" className="btnNav">
        Informations
      </a>
    </nav>
  );
};
