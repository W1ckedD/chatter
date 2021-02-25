import api from '../../api';

export const register = ({ username, password }) => async dispatch => {
  try {
    const res = await api.post('/api/auth/register', { username, password });
    const { user, token } = await res.data.data;
    localStorage.setItem('token', token);
    dispatch({ type: 'LOGIN', payload: { user, token } });
  } catch (err) {
    console.log(err);
  }
};

export const login = ({ username, password }) => async dispatch => {
  try {
    const res = await api.post('/api/auth/login', { username, password });
    const { user, token } = await res.data.data;
    localStorage.setItem('token', token);
    dispatch({ type: 'LOGIN', payload: { user, token } });
  } catch (err) {
    console.log(err);
  }
};
