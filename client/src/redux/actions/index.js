import axios from 'axios';
export const AUTHENTICATION = () => {
    return async (disptach) => {

        const userInfo = await axios.get("/api/v1/hamrofootball/userInfo");
        if (userInfo.data !== false) {
            disptach({ type: 'LOGGED_USER', body: userInfo.data });
        } else {
            disptach({ type: 'NOT_LOGGED_USER' });
        }

    }
}

export const AUTHENTICATION__LOGOUT = () => {
    return async (dispatch) => {
        await axios.get("/auth/google/logout");
        dispatch({ type: 'NOT_LOGGED_USER' });
    }
}


export const CHANGE_SEARCH = (searchname) => {

    return async (dispatch) => {

        if (searchname === 'League') {
            dispatch({
                type: 'NO_INDIVIDUAL_SEARCH'
            })
        } else {


            const datas = await axios.get(`/api/v1/hamrofootball/list/${searchname}`);

            console.log(datas);

            if (datas.data.status === 'success') {

                dispatch({
                    type: 'Individual_Search',
                    data: {
                        category: searchname,
                        datas: datas.data.data
                    }
                })
            }


        }

    }

}