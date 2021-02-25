import { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../store/actions/authActions';

import Card from '../components/Card';

const Register = ({ register }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    register({ username, password });
  }

  const handleChange = e => {
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'setPassword2':
          setPassword2(e.target.value);
          break;
    }
  }
  return (
    <div className="container">
      <h1>Register Page</h1>
      <div className="center">
        <Card>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Register</button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default connect(null, { register })(Register);
