const app = require('./app');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: { origin: 'http://localhost:3040', methods: ['GET', 'POST'] },
});

const serverEvent = require('./utils/orderEvent');

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config/keys.env' });

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('database connected successfully');
  } catch (err) {
    console.log(err);
  }
})();

io.on('connection', socket => {
  socket.on('userRoomId', roomId => {
    socket.join(roomId);
  });

  socket.on('orderStatusChange', data => {
    io.to(data.userEmail).emit('orderChangedByAdmin', data.orderState);
    serverEvent.emit('OrderChange', {
      orderId: data.orderId,
      status: data.orderState,
    });
  });
});

const PORT = process.env.PORT || 3020;

server.listen(PORT, () => {
  console.log(`Sever started on PORT ${PORT}`);
});
