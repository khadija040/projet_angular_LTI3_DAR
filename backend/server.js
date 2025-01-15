const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path'); // Importer le module path
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors()); // Permettre les requêtes depuis Angular

// Chemin vers le fichier smartphones.json
const smartphonesFile = path.join(__dirname, 'smartphones.json');

// Vérifier si le fichier existe, sinon créer un fichier vide
if (!fs.existsSync(smartphonesFile)) {
  fs.writeFileSync(smartphonesFile, JSON.stringify([]));
}

// Route pour récupérer tous les smartphones
app.get('/smartphones', (req, res) => {
  fs.readFile(smartphonesFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier :', err);
      res.status(500).send('Erreur lors de la lecture des données');
      return;
    }

    try {
      const smartphones = JSON.parse(data);
      res.json(smartphones);
    } catch (parseErr) {
      console.error('Erreur lors du parsing des données :', parseErr);
      res.status(500).send('Erreur lors du parsing des données');
    }
  });
});

// Route pour ajouter un nouveau smartphone
app.post('/smartphones', (req, res) => {
  const smartphone = req.body;

  // Lire les données actuelles depuis le fichier
  fs.readFile(smartphonesFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier :', err);
      res.status(500).send('Erreur lors de la lecture des données');
      return;
    }

    let smartphones = [];
    try {
      smartphones = JSON.parse(data); // Convertir les données en tableau
    } catch (parseErr) {
      console.error('Erreur lors du parsing des données :', parseErr);
      res.status(500).send('Erreur lors du parsing des données');
      return;
    }

    // Ajouter le nouveau smartphone
    smartphones.push(smartphone);

    // Sauvegarder les nouvelles données dans le fichier
    fs.writeFile(smartphonesFile, JSON.stringify(smartphones, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Erreur lors de l\'écriture dans le fichier :', writeErr);
        res.status(500).send('Erreur lors de l\'écriture des données');
        return;
      }

      res.status(201).send({ message: 'Smartphone ajouté avec succès', smartphone });
    });
  });
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`API REST disponible sur http://localhost:${PORT}`);
});
