import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMessages, updateMessages } from '../store/actions/chatActions';
import io from 'socket.io-client';

// Components
import Message from '../components/Message';
import Input from '../components/Input';

const Chat = ({ auth: { token }, chat: { messages }, getMessages, updateMessages }) => {
  const socket = io('http://192.168.1.106:5000', {
    auth: {
      token
    },
  });

  useEffect(() => {
    getMessages();
    socket.on('message-sent', ({ data }) => {
      updateMessages({ message: JSON.parse(data) });
    });
  }, []);
  return (
    <div className="container">
      <div style={{ height: '80vh' }}>
        <div className="chat-container">
          {
            messages.length === 0 ?
            <h2>No Messages</h2> :
            messages.map(msg => <Message
              key={msg._id}
              sender={msg.sender}
              text={msg.text}
              time={msg.time}
            />)
          }
        </div>
        <Input socket={socket} />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  chat: state.chat,
});

export default connect(mapStateToProps, { getMessages, updateMessages })(Chat);
