const express = require('express');
const router = express.Router();
const db = require('../config/db');

// obtine toate cartile
router.get('/', (req, res) => {
  // obtine o carte aleatoare din baza de date
  db.query('SELECT * FROM cards ORDER BY RAND() LIMIT 1', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'No cards found' });
    }
    res.json(results[0]);
  });
});

module.exports = router;


