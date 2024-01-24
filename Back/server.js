const express = require("express");
const sqlite3 = require("sqlite3");

const app = express();
const port = 3001;

const db = new sqlite3.Database("../BDD/BDD.sql", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connexion à la base de données réussie");
});

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, // access-control-allow-credentials:true
  optionsSuccessStatus: 200, // Corrected property name
};
app.use(cors(corsOptions));

/* ----- Route Api ----- */
app.get("/api/getWatches", (req, res) => {
  db.all("SELECT * FROM objects", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur serveur");
    } else {
      res.json(rows);
    }
  });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(
    `Serveur Express en cours d'exécution sur http://localhost:${port}`
  );
});
