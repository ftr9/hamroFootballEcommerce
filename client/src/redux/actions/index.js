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


export const OPEN_POPUP_DETAIL = (status, id) => {
    return { type: status, data: id }
}

//imageName, footballName, price, sizes


export const ADD_TO_CART = (id, detail) => {
    return (dispatch, getState) => {
        const store = { ...getState().carts };
        if (store[id]) {
            store[id].quantitys += 1;
            store[id].price += detail.price
        } else {
            store[id] = {};
            store[id].id = id;
            store[id].quantitys = 1;
            store[id].category = detail.category;
            store[id].price = detail.price;
            store[id].sizess = detail.sizes;
            store[id].name = detail.footballName
            store[id].imageName = detail.imageName
            store[id].selectedSize = 5;

        }

        localStorage.setItem("addedToCart", JSON.stringify(store));
        dispatch({ type: 'change', body: JSON.parse(localStorage.getItem("addedToCart")) })
    }
}

export const UPDATE_CART = (id, type, price) => {
    return (dispatch, getState) => {
        const store = { ...getState().carts };
        if (store[id]) {

            if (type === 'icr') {
                store[id].quantitys += 1;
                store[id].price += price;
            }
            if (type === 'dcr') {
                store[id].quantitys -= 1;
                store[id].price -= price;
            }

        }
        localStorage.setItem("addedToCart", JSON.stringify(store));
        dispatch({ type: 'change', body: JSON.parse(localStorage.getItem("addedToCart")) });
    }
}

export const UPDATE_CART_SIZE = (id, size) => {
    return (dispatch, getState) => {
        const store = { ...getState().carts };
        if (store[id]) {
            store[id].selectedSize = size;
        }
        localStorage.setItem("addedToCart", JSON.stringify(store));
        dispatch({ type: 'change', body: JSON.parse(localStorage.getItem("addedToCart")) });
    }
}

export const DELETE_CART = (id) => {
    return (dispatch, getState) => {
        const store = { ...getState().carts };
        delete store[id];
        localStorage.setItem("addedToCart", JSON.stringify(store));
        dispatch({ type: 'change', body: JSON.parse(localStorage.getItem("addedToCart")) })
    }
}

export const PLACE_ORDER_COD = (datas) => {
    return async (dispatch) => {
        datas.paymentType = 'cash on delivery';
        const confirmedOrder = await axios.post("/api/v1/hamrofootball/order", datas);
        if (confirmedOrder.data.status !== 'fail') {
            localStorage.removeItem("addedToCart");
            dispatch({ type: 'change', body: {} });
        }
    }
}

export const PLACE_ORDER_DIGITAl = (datas) => {
    return async (dispatch) => {
        datas.mainOrder.paymentType = 'payed digitally';
        const confirmedOrder = await axios.post("/api/v1/hamrofootball/stripe", datas);
        if (confirmedOrder.data.status !== 'fail') {
            localStorage.removeItem("addedToCart");
            dispatch({ type: 'change', body: {} });
        }
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