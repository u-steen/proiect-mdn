const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Endpoint pentru a genera o carte conform probabilitatilor predefinite și a returna doar ID-ul acesteia
router.get('/', (req, res) => {
  // Definim o listă de probabilități pentru fiecare tip de carte
  const probabilities = [
    { name: 'gri', power: 1, chance: 40 },
    { name: 'verde', power: 2, chance: 30 },
    { name: 'albastra', power: 3, chance: 15 },
    { name: 'rosie', power: 4, chance: 10 },
    { name: 'legendara', power: 5, chance: 5 }
  ];

  // Generăm un număr aleatoriu între 1 și 100 pentru a determina tipul cărții în funcție de probabilități
  const randomNum = Math.ceil(Math.random() * 100);

  // Parcurgem lista de probabilități și determinăm tipul cărții în funcție de numărul generat aleatoriu
  let generatedCard;
  let cumulativeProbability = 0;
  for (const { name, power, chance } of probabilities) {
    cumulativeProbability += chance;
    if (randomNum <= cumulativeProbability) {
      generatedCard = { name, power };
      break;
    }
  }

  // Salvăm cartea în baza de date și returnăm doar ID-ul acesteia către frontend
  db.query('INSERT INTO cards (name, power) VALUES (?, ?)', [generatedCard.name, generatedCard.power], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: result.insertId });
  });
});

module.exports = router;
