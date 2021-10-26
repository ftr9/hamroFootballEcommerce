import { combineReducers } from "redux";

import authReducer from "./authReducer";
import footballReducer from "./footballsReducer";
import popUpReducer from "./popUpReducer";

const allReducers = combineReducers({
    userInfo: authReducer,
    footballs: footballReducer,
    detailPop: popUpReducer
})

export default allReducers;


