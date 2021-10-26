const items = window.localStorage.getItem("addedToCart");
const cartReducer = (state, action) => {

    switch (action.type) {

        case 'change':
            const data = action.body
            return data;
        default:
            if (items) {
                return JSON.parse(items);
            } else {
                return {}
            }
    }

}

export default cartReducer;