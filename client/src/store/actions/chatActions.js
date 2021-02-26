import api from '../../api';

export const getMessages = () => async dispatch => {
  try {
    const res = await api.get('/api/chat/messages');
    const { messages } = await res.data.data;
    dispatch({ type: 'GET_MESSAGES', payload:  messages  });
  } catch (err) {
    console.log(err);
  }
}

export const sendMessage = ({ socket, message }) => async dispatch => {
  try {
    socket.emit('send-message', { data: JSON.stringify(message) });
  } catch (err) {
    console.log(err);
  }
}

export const updateMessages = ({ message }) => dispatch => {
  dispatch({ type: 'SEND_MESSAGE', payload: message });
}
