const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const connectDB = require('./db/db');
connectDB();

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*'
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const { register, login } = require('./controllers/auth');
app.post('/api/auth/register', register);
app.post('/api/auth/login', login)

const { requireUserSocket, requireUserHttp } = require('./middlewares/requireUser');


io.use(requireUserSocket);
io.on('connection', socket => {
  socket.on('connect_error', err => console.log(err.message));
  const { username } = socket.user;
  console.log(`Client connected: ${username}`);

});

server.listen(5000, () => console.log('server is running on port 5000'));
