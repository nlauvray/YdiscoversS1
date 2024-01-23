import montre from "../../img/montre_base.png";
import "./DetailsPage.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const DetailsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/getWatches/{id}")
      .then((response) => setData(response.data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données:", error)
      );
  }, []);
  return (
    <main className="detailsPage">
      <img src={montre} /*{data.img}*/ className="montreImg" alt="montre" />
      <div className="triangleDetails"></div>
      <div className="infosDetails">
        <h2 className="titleDetails">Marque - Modele</h2>
        <p className="description">La montre ....</p>
        <h3 className="price">PRICE</h3>
      </div>
    </main>
  );
};

export default DetailsPage;
