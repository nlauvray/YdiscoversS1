import "./Card.css";
import montre from "../../../../img/montre_base.png";
import { Outlet, Link } from "react-router-dom";

export const Card = (data) => {
  return (
    <>
      <Link className="card" to="/details" id={`${data.info.id}`}>
        <div className="triangle"></div>
        <img
          src={montre}
          /*{watch.info.img} */ className="montre"
          alt="montre"
        />
        <h3 className="name">{data.info.nom}</h3>
      </Link>
      <Outlet />
    </>
  );
};
