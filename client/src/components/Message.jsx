import './message.css';
import { connect } from 'react-redux';
import moment from 'moment';

const Message = ({ sender, time, text, auth: { user: { username } } } ) => {
  const senderIsMe = sender === username;
  return (
    <div
      className="message"
      style={{
        backgroundColor: senderIsMe ? '#ff6e63' : '#eee',
        alignSelf: senderIsMe ? 'flex-end' : 'flex-start',
       }}
    >
      <div className="message-head">
        <span>{senderIsMe ? 'You' : sender}</span>
        <span>{moment(time).format('MMMM Do, h:mm:ss a')}</span>
      </div>
      <p style={{ color: senderIsMe ? 'white' : '#333' }}>
        {text}
      </p>
    </div>
  );
}


const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Message);
