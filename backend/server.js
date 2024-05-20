const express = require('express');
const app = express();
const port = 3000;

// Importarea rutelelor
const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');

// Utilizarea rutelelor în aplicație
app.use(express.json());
app.use('/users', userRoutes);
app.use('/games', gameRoutes);

// Pornirea serverului
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});