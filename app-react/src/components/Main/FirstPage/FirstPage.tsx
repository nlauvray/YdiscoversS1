import montre from "../../../img/montre_base.png";
import { Nav } from "../../Nav/Nav";
import "./FirstPage.css";

export const FirstPage = () => {
  return (
    <main className="firstPage">
      <div className="separation"></div>
      <Nav />
      <div className="mainFirstPage">
        <img src={montre} className="montre" alt="montre" />
        <h1 className="title">L'HEURLOGER</h1>
      </div>
    </main>
  );
};
