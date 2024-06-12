const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
    // Selectăm o carte aleatorie din baza de date
    db.query('SELECT * FROM cards ORDER BY RAND() LIMIT 1', (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      const drawnCard = result[0]; // Extragem prima carte din rezultatul interogării
  
      // Verificăm dacă există o carte de tras și returnăm-o către frontend
      if (drawnCard) {
        // Actualizăm starea cărții în baza de date
        db.query('UPDATE cards SET user_id = ? WHERE id = ?', [/* id utilizatorului */, drawnCard.id], (updateErr) => {
          if (updateErr) {
            return res.status(500).json({ error: updateErr.message });
          }
          res.json(drawnCard); // Returnăm cartea către frontend
        });
      } else {
        res.status(404).json({ error: 'Nu există cărți disponibile.' });
      }
    });
  });
  
  module.exports = router;