import React, {Component} from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: {
        username: '',
        content: '',
        sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
        roomId: ''

      }
    };
    this.messagesRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
    });
    console.log('messages', this.state.messages)
  }

  handleChange(event) {
    this.setState({activeRoom: event.target.value});
  }


  render() {
    return(
        <table>
          <tbody>
          { this.state.messages.map( (message) =>
              <tr key={message.key}>
                <td>{message.content}</td>
                <td>{message.username}</td>
                <td>{message.sentAt}</td>
                <td>{message.roomId}</td>
              </tr>
          )}
          </tbody>
        </table>

        );
  }
}

export default MessageList;
