import { combineReducers } from "redux";

import authReducer from "./authReducer";

const allReducers = combineReducers({
    userInfo: authReducer
})

export default allReducers;


