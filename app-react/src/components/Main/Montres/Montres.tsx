import { Card } from "./Card/Card";
import "./Montres.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const MontresPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/getWatches")
      .then((response) => setData(response.data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données:", error)
      );
  }, []);
  return (
    <main className="montresPage" id="montres">
      <h2 className="titleMontres">MONTRES</h2>
      <div className="cards">
        {data.length == 0 ? (
          <p className="">Aucune montres</p>
        ) : (
          data.map((watch) => <Card info={watch} />)
        )}
      </div>
    </main>
  );
};
