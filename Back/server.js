const express = require("express");
const sqlite3 = require("sqlite3");

const app = express();
const port = 3001;

const db = new sqlite3.Database("../BDD/BDD.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connexion à la base de données réussie");
});

app.use(cors()); // Autorisation des requêtes depuis n'importe quelle origine

/* ----- Routes Api ----- */
app.get("/api/getWatches", (req, res) => {
  db.all("SELECT * FROM montre", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur serveur");
    } else {
      res.json(rows);
    }
  });
});

app.get("/api/getWatches/:id", (req, res) => {
  db.get("SELECT * FROM montre WHERE id = ?", [req.params.id], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur serveur");
    } else {
      res.json(row);
    }
  });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(
    `Serveur Express en cours d'exécution sur http://localhost:${port}`
  );
});
