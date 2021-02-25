const initialState = { token: '', user: null, isLoggedIn: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isLoggedIn: true
      };
    default:
      return state;
  }
}
