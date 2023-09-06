const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const homeRouter = require('./routes/home');
const gameRouter = require('./routes/game');

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Root Route
app.use('/', homeRouter);

// Game Route
app.use('/game', gameRouter);

const rooms = { };

// room --> room.id === 38903kd2
// room --> room.players === [player1, player2]

io.on('connection', socket => {
    console.log('a user has connected');

    socket.on('disconnect', reason => {
        console.log(`a user has disconnected: ${reason}`);
    });
});

const PORT = 3030;

server.listen(PORT, () => console.log(` Server listening on port ${PORT}`));

module.exports = rooms;