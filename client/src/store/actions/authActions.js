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


export const logout = () => dispatch => {
  localStorage.removeItem('token');
  dispatch({ type: 'LOGOUT', payload: null });
}

export const checkIfAuthenticated = () => async dispatch => {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      const res = await api.get('/api/auth/get-user');
      const { user } = await res.data.data;
      dispatch({ type: 'LOGIN', payload: { user, token } });
    } else {
      dispatch({ type: 'LOGOUT', payload: null });
    }
  } catch (err) {
    console.log(err);
  }
}
