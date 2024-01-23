import montre from "../../img/montre_base.png";
import "./DetailsPage.css";

export const DetailsPage = () => {
  return (
    <main className="detailsPage">
      <img src={montre} className="montreImg" alt="montre" />
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
