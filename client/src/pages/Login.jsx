import { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../store/actions/authActions';

import Card from '../components/Card';

const Login = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    login({ username, password });
  }

  const handleChange = e => {
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
    }
  }
  return (
    <div className="container">
      <h1>Login Page</h1>
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
            <button type="submit" className="btn btn-primary btn-block">Login</button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default connect(null, { login })(Login);
