const initialState = { messages: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MESSAGES':
      return { ...state, messages: action.payload };
    case 'SEND_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
}
