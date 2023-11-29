import logo from "./img/logo.png";
import "./Nav.css";
export const Address = () => {
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
