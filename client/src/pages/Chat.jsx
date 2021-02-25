import { connect } from 'react-redux';
import io from 'socket.io-client';

const Chat = ({ auth: { token } }) => {
  const socket = io('http://192.168.1.106:5000', {
    auth: {
      token
    },
  });
  return (
    <div className="container">
      <h1>Chat Page</h1>
      <p>{token}</p>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Chat);
