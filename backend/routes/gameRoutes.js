const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Creează un joc nou
router.post('/', (req, res) => {
  const { user1_id, user2_id } = req.body;
  db.query('INSERT INTO games (user1_id, user2_id) VALUES (?, ?)', [user1_id, user2_id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json({ id: results.insertId, user1_id, user2_id });
  });
});

// Obține toate jocurile
router.get('/', (req, res) => {
  db.query('SELECT * FROM games', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

module.exports = router;
