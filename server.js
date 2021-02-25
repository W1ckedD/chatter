const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const connectDB = require('./db/db');
connectDB();

const app = express();
const server = http.createServer(app);
const io = socketio(server);


const { register, login } = require('./controllers/auth');
app.post('/auth/register', register);
app.post('/auth/login', login)

const { requireUserSocket, requireUserHttp } = require('./middlewares/requireUser');

io.use(requireUserSocket);
io.on('connection', socket => {

});

server.listen(5000, () => console.log('server is running on port 5000'));
