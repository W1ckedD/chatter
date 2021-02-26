import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { connect } from 'react-redux';
import { checkIfAuthenticated } from './store/actions/authActions';

// Components
import Navbar from './components/Navbar';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Chat from './pages/Chat';

function App({ auth: { isLoggedIn }, checkIfAuthenticated }) {
  useEffect(() => {
    checkIfAuthenticated();
  }, []);
  if (isLoggedIn) {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/chat">
            <Chat />
          </Route>
          <Redirect to="/chat" />
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Redirect to="/login" />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { checkIfAuthenticated })(App);
