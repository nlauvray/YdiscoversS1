import "./DetailsPage.css";

export const Details = (data) => {
  const { nom, description, categorie_prix, prix, site } = data.info;

  return (
    <div className="infosDetails">
      <h2 className="titleDetails">{nom}</h2>
      <p className="description">{description}</p>
      <p className="description">{categorie_prix}</p>
      <p className="description">{site}</p>
      <h3 className="price">Prix : {prix} euros</h3>
    </div>
  );
};
