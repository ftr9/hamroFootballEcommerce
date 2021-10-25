
const authReducer = (initialState = { user: null, status: null }, action) => {

    switch (action.type) {

        case 'LOGGED_USER':
            return { user: action.body, status: 'logged' }
        case 'NOT_LOGGED_USER':
            return { user: false, status: 'notlogged' }
        default:
            return initialState;
    }

}

export default authReducer;