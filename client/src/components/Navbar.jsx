import './navbar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/authActions';

const Navbar = ({ auth: { isLoggedIn, user: { username } }, logout }) => {
  if (isLoggedIn) {
    return (
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="navbar-brand" to="/">Chatter </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link btn btn-primary" onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
      );
  } else {
      return (
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="navbar-brand" to="/">Chatter</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
