const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Obtinerea info jucatorilor
router.get('/players', (req, res) => {
  db.query('SELECT * FROM users WHERE id IN (1, 2)', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// inceperea unui joc nou
router.post('/startGame', (req, res) => {
  const { user1_id, user2_id } = req.body;
  db.query(
    'INSERT INTO games (user1_id, user2_id, start_time) VALUES (?, ?, CURRENT_TIMESTAMP)',
    [user1_id, user2_id],
    (err, result) => {
      if (err) throw err;
      res.json({ gameId: result.insertId });
    }
  );
});

// Terminarea jocului
router.post('/endGame', (req, res) => {
  const { gameId } = req.body;
  db.query(
    'UPDATE games SET end_time = CURRENT_TIMESTAMP WHERE id = ?',
    [gameId],
    (err, result) => {
      if (err) throw err;
      res.send('Game ended');
    }
  );
});

// Actualizarea manei unui juc
router.post('/updateMana', (req, res) => {
  const { userId, mana } = req.body;
  db.query('UPDATE users SET mana = ? WHERE id = ?', [mana, userId], (err, result) => {
    if (err) throw err;
    res.send('Mana updated');
  });
});

// info despre joc pentru pagina de final
router.get('/gameInfo', (req, res) => {
  const { gameId } = req.query;
  db.query('SELECT * FROM games WHERE id = ?', [gameId], (err, results) => {
    if (err) throw err;
    const game = results[0];
    const timePlayed = (new Date(game.end_time) - new Date(game.start_time)) / 1000; // în secunde
    res.json({
      num_of_cards_used: game.num_of_cards_used,
      total_dmg_dealt: game.total_dmg_dealt,
      total_mana_used: game.total_mana_used,
      time_played: timePlayed
    });
  });
});

module.exports = router;
