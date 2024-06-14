const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');
const cardRoutes = require('./routes/cardRoutes');
const cardsRoutes = require('./routes/card');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(bodyParser.json());

// Configurația pentru gestionarea conexiunilor WebSocket
io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    // Ascultă evenimentul 'message' de la client
    socket.on('message', (data) => {
        console.log('Message from client:', data);
        // Trimite mesajul înapoi către toți clienții conectați
        io.emit('message', data);
    });

    // Ascultă evenimentul de deconectare a clientului
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

// Rutele pentru API-uri
app.use('/api/users', userRoutes);
app.use('/api/game', gameRoutes);
app.use('/api/cards', cardRoutes);
app.use('/api/card', cardsRoutes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
