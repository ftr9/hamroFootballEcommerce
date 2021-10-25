import axios from 'axios';
export const AUTHENTICATION = () => {
    return async (disptach) => {

        const userInfo = await axios.get("/api/v1/hamrofootball/userInfo");
        if (userInfo.data !== false) {
            disptach({ type: 'LOGGED_USER', body: userInfo.data });
        } else {
            disptach({ type: 'NOT_LOGGED_USER', body: userInfo.data });
        }

    }
}