const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');
const cardRoutes = require('./routes/cardRoutes');
const cardsRoutes = require('./routes/card');

app.use(bodyParser.json());
app.use(cors());
app.use('/api/users', userRoutes); 
app.use('/api/game', gameRoutes);
app.use('/api/cards', cardRoutes);
app.use('/api/card', cardsRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
