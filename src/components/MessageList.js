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

      },
      newMessage: ''
    };
    this.messagesRef = this.props.firebase.database().ref('messages');
    this.handleSend = this.handleSend.bind(this);
    this.createMessage = this.createMessage.bind(this);
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      console.log("Child Added");
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
    });
    console.log(this.state.messages)
  }
//'messages, removed from console.log on line 26
  handleChange(event) {
    this.setState({newMessage: event.target.value});
  }

  createMessage(messageName) {
    this.messagesRef.push({
      // name: messageName
      username: !this.props.user ? 'Guest' : this.props.user.displayName,
      content: messageName,
      sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
      roomId:this.props.activeRoom.key

    });
  }

  handleSend(event) {
    event.preventDefault();
    this.createMessage(this.state.newMessage);
    this.setState({newMessage: ''});
    console.log('sending message');
  }

  render() {
 const activeRoom = this.props.activeRoom;

 const messageList = (
  this.state.messages.map((message) => {
    if (message.roomId === activeRoom.key) {
      return <li key={message.key}>{message.content}</li>
    }
    return null;
  })
);

return(
  <section>
    <div>
    <ul>{messageList}
      {/* <li key={message.key}>{message.username}</li>
//added line above - not working though. */}
    </ul>

  </div>
  <section>
    <form className='message-create'>
      <label>New Message:
      <textarea placeholder="Type New Message Here" onChange= {this.handleChange.bind(this)}></textarea>
    </label>
    <button className="text" onClick={this.handleSend}>Send</button>
    </form>
  </section>
</section>
  );
}
}
//   render() {
//     const activeRoom = this.props.activeRoom;
//     //const message = this.state.message;
//       // if (message.roomId === activeRoom) {
//     return(
//       <section>
//         <p>{this.props.activeRoom}</p>
//
//         <table>
//           <tbody>
//           { this.state.messages.map( (message) => (
//             // const activeRoom = this.props.activeRoom;
//               if (message.roomId === activeRoom) {
//                 // return(
//               <tr key={message.key}>
//                 <td>{message.content}</td>
//                 <td>{message.username}</td>
//                 <td>{message.sentAt}</td>
//                 <td>{message.roomId}</td>
//               </tr>
//           }))};
//           </tbody>
//         </table>
//       </section>
//       )
//     );
//   }
// }

export default MessageList;
