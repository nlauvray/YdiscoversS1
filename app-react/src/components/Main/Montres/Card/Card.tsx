import "./Card.css";
import montre from "../../../../img/montre_base.png";
import { Outlet, Link } from "react-router-dom";

export const Card = (/*watch*/) => {
  return (
    <>
      <Link className="card" to="/details" /*id={`${watch.info.id}`}*/>
        <div className="triangle"></div>
        <img
          src={montre}
          /*{watch.info.img} */ className="montre"
          alt="montre"
        />
        <h3 className="name">Nom </h3>
        {/* {watch.info.name} */}
      </Link>
      <Outlet />
    </>
  );
};
