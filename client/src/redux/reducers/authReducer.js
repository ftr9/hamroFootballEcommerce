const authReducer = (
  initialState = { user: null, status: null, isAuthenticating: false },
  action
) => {
  switch (action.type) {
    case 'LOGGED_USER':
      return { user: action.body, status: 'logged', isAuthenticating: false };
    case 'NOT_LOGGED_USER':
      return { user: false, status: 'notlogged', isAuthenticating: false };
    case 'CHECK_AUTH':
      return { ...initialState, isAuthenticating: true };
    default:
      return initialState;
  }
};

export default authReducer;
