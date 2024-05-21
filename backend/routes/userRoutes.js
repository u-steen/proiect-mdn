const express = require('express');
const router = express.Router();
const db = require('../config/db');

//cerere la http get /users
router.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

router.post('/', (req, res) => {
    const { username, mana, hp } = req.body;
    db.query('INSERT INTO users (username, mana, hp) VALUES (?, ?, ?)', [username, mana, hp], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

module.exports = router;
