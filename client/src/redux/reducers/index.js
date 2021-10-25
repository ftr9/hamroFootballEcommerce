import { combineReducers } from "redux";

import authReducer from "./authReducer";
import footballReducer from "./footballsReducer";
const allReducers = combineReducers({
    userInfo: authReducer,
    footballs: footballReducer
})

export default allReducers;


