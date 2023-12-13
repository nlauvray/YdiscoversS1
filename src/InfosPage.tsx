import montre from "./img/montre_base.png";
import { Address } from "./Address";
import { History } from "./History";
import "./InfosPage.css";
export const InfosPage = () => {
  return (
    <main className="infosPage">
      <div className="bannerInfos"></div>
      <div className="infos">
        <History />
        <Address />
      </div>
    </main>
  );
};
