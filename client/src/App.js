import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { connect } from 'react-redux';

// Components
import Navbar from './components/Navbar';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';

function App({ auth: { isLoggedIn } }) {
  if (isLoggedIn) {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <h1>Index Page</h1>
          </Route>
          <Redirect to="/" />
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

export default connect(mapStateToProps, {})(App);
