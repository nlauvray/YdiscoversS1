import "./Card.css";
import montre from "./img/montre_base.png";
export const Card = () => {
  return (
    <main className="card">
      <div className="triangle"></div>
      <img src={montre} className="montre" alt="montre" />
      <h3 className="name">L'HEURLOGER</h3>
    </main>
  );
};
