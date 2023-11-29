import montre from "./img/montre_base.png";
import { Address } from "./Address";
import { History } from "./History";
import "./InfosPage.css";
export const InfosPage = () => {
  return (
    <main className="infosPage">
      <Address />
      <History />
    </main>
  );
};
