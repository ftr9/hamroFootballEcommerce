import { io } from 'socket.io-client';
const socketReducer = (state = io(), action) => {
    return state;
}

export default socketReducer;