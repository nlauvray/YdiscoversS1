import { Address } from "./Address/Address";
import { History } from "./History/History";
import "./InfosPage.css";
export const InfosPage = () => {
  return (
    <main className="infosPage" id="infos">
      <div className="backImg"></div>
      <div className="bannerInfos"></div>
      <div className="infos">
        <History />
        <Address />
      </div>
    </main>
  );
};
