import { combineReducers } from "redux";

import authReducer from "./authReducer";
import footballReducer from "./footballsReducer";
import popUpReducer from "./popUpReducer";
import cartReducer from "./cartReducer";
import socketReducer from './socketReducer';

const allReducers = combineReducers({
    userInfo: authReducer,
    footballs: footballReducer,
    detailPop: popUpReducer,
    carts: cartReducer,
    socket: socketReducer
})

export default allReducers;


