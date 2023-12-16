import { Card } from "./Card";
import "./Montres.css";

export const MontresPage = () => {
  return (
    <main className="montresPage">
      <h2 className="titleMontres">MONTRES</h2>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};
