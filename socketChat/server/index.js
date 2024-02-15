const express = require('express');
const { createServer } = require('node:http');

const app = express();
const server = createServer(app);

const io = require('socket.io')(server, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (message) => {
        console.log(`${socket.id.substr(0,2)} said: ${message}`);
        io.emit('message', `${socket.id.substr(0,2)} said: ${message}`);
    });
});

app.use(express.static('../app'));

app.get('/', (req, res) => {
    res.sendFile('../app/index.html');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});


