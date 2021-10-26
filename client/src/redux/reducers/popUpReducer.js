const popUpReducer = (state = { isOpen: false, productId: null }, action) => {

    if (action.type === 'open') {
        return { isOpen: true, productId: action.data }
    } else if (action.type === 'close') {
        return { isOpen: false, productId: null };
    } else {
        return state;
    }

}

export default popUpReducer;