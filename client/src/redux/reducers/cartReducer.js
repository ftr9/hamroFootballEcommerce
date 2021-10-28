const items = localStorage.getItem("addedToCart");
const cartReducer = (state, action) => {

    switch (action.type) {

        case 'change':
            const data = action.body
            return data;
        default:
            if (items) {
                return JSON.parse(localStorage.getItem("addedToCart"));
            } else {
                return {}
            }
    }

}

export default cartReducer;