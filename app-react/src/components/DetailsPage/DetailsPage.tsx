import montre from "../../img/montre_base.png";
import "./DetailsPage.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Details } from "./Details";

interface WatchData {
  id: number;
}

export const DetailsPage = () => {
  const [data, setData] = useState<WatchData[]>([]);

  const idCard = parseInt(window.location.pathname.split("/")[2]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/getWatches")
      .then((response) => setData(response.data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données:", error)
      );
  }, []);

  return (
    <main className="detailsPage">
      <img src={montre} className="montreImg" alt="montre" />
      <div className="triangleDetails"></div>
      <div className="infosDetails">
        {data.length == 0 ? (
          <p>Aucune infos</p>
        ) : (
          data
            .filter((info) => info.id === idCard)
            .map((info) => <Details key={info.id} info={info} />)
        )}
      </div>
    </main>
  );
};

export default DetailsPage;
