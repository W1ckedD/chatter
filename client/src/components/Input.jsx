import './input.css';
import { useState } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../store/actions/chatActions';


const Input = ({ socket, auth: { user: { username } }, sendMessage  }) => {
  const [text, setText] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const newMessage = { sender: username, text };
    sendMessage({ socket, message: newMessage });
    setText('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <textarea
          placeholder="Type a message ..."
          value={text}
          onChange={e => setText(e.target.value)}
        ></textarea>
        <button type="submit" className="btn btn-primary">Send</button>
      </div>
    </form>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { sendMessage })(Input);
