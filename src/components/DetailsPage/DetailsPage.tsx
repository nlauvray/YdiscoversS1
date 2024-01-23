import montre from "../../img/montre_base.png";
import "./DetailsPage.css";

export const DetailsPage = () => {
  return (
    <main className="detailsPage">
      <div className="mainFirstPage">
        <img src={montre} className="montre" alt="montre" />
      </div>
    </main>
  );
};

export default DetailsPage;
