const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Obține toți utilizatorii
router.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

// Creează un utilizator nou
router.post('/', (req, res) => {
  const { username } = req.body;
  db.query('INSERT INTO users (username) VALUES (?)', [username], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json({ id: results.insertId, username });
  });
});

module.exports = router;
