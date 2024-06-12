const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Endpoint pentru a genera o carte conform probabilitatilor predefinite și a returna doar ID-ul acesteia
router.get('/', (req, res) => {
  // Definim o listă de probabilități pentru fiecare tip de carte
  const probabilities = [
    { name: 'Lisa Simposon', health: 5, power: 1, chance: 40, tip: 'gri',image_url:'https://upload.wikimedia.org/wikipedia/ro/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png' },
    { name: 'Tony Soprano', health: 4, power: 2, chance: 30, tip: 'verde',image_url:'https://www.onlineathens.com/gcdn/authoring/2013/06/20/NABH/ghows-GA-7ee5c817-04cd-4269-8382-cbfcce00964a-6e6eac02.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp' },
    { name: 'Wednesday Addams', health: 3, power: 3, chance: 15, tip: 'albastru',image_url:'https://akns-images.eonline.com/eol_images/Entire_Site/2021117/rs_1200x1200-210217165236-1024-christina-ricci-wednesday-addams.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top' },
    { name: 'Joker', health: 2, power: 4, chance: 10, tip: 'rosu',image_url:'https://img.digitalag.ro/?u=https%3A%2F%2Fcms.digitalag.ro%2Fcms_websites%2Fcms_radiozu%2Flibrary%2Fimg%2F2018%2F01%2Fthe_Joker.jpg&w=786&h=600&c=1' },
    { name: 'Cersei Lanister', health: 5, power: 5, chance: 5, tip: 'legendara',image_url:'https://upload.wikimedia.org/wikipedia/en/2/22/Cersei_Lannister_in_Black_Dress_in_Season_5.jpg' }
  ];

  // Generăm un număr aleatoriu între 1 și 100 pentru a determina tipul cărții în funcție de probabilități
  const randomNum = Math.ceil(Math.random() * 100);

  // Parcurgem lista de probabilități și determinăm tipul cărții în funcție de numărul generat aleatoriu
  let generatedCard;
  let cumulativeProbability = 0;
  for (const { name,health, power, chance,tip,image_url} of probabilities) {
    cumulativeProbability += chance;
    if (randomNum <= cumulativeProbability) {
      generatedCard = { name,health, power,tip,image_url };
      break;
    }
  }

  // Salvăm cartea în baza de date și returnăm doar ID-ul acesteia către frontend
  db.query('INSERT INTO cards (name, health, power,tip,image_url) VALUES (?,?,?,?, ?)', [generatedCard.name,generatedCard.health, 
    generatedCard.power,generatedCard.tip,generatedCard.image_url], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: result.insertId });
  });
});

module.exports = router;