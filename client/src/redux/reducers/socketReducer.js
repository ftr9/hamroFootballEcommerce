import { io } from 'socket.io-client';
const socketReducer = (state = io('http://localhost:3010'), action) => {
  return state;
};

export default socketReducer;
