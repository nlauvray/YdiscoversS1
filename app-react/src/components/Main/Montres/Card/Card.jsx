import "./Card.css";
import ImgDefault from "../../../../img/montre_base.png";
import { Outlet, Link } from "react-router-dom";

export const Card = (data) => {
  const { id, nom, images } = data.info;

  const defaultImg = ImgDefault;

  const isEvenIndex = id % 2;

  return (
    <>
      <Link className="card" to={`/details/${id}`} id={`${id}`}>
        <div className="triangle"></div>
        <img
          src={isEvenIndex ? `../../../../img/montres/${images}` : defaultImg}
          className="montre"
          alt="montre"
        />
        <h3 className="name">{nom}</h3>
      </Link>
      <Outlet />
    </>
  );
};
