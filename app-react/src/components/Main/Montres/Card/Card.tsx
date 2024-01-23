import "./Card.css";
import montre from "../../../../img/montre_base.png";
import { Outlet, Link } from "react-router-dom";

export const Card = () => {
  return (
    <>
      <Link className="card" to="/details">
        <div className="triangle"></div>
        <img src={montre} className="montre" alt="montre" />
        <h3 className="name">L'HEURLOGER</h3>
      </Link>
      <Outlet />
    </>
  );
};
